import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Head from "next/head";

import { useEffect } from "react";
import Mobile from "../components/mobile";

const Home = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <>
      <Head>
        <title>مجلة اوتاد</title>
        <meta property="og:title" content="مجلة اوتاد" />
        <meta
          property="og:description"
          content="مجلة أوتاد للعلوم الإنسانية مجلة علمية محكمة تصدر عن الإتحاد الدولي للمبدعين في العراق  "
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/logo.jpeg" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.fontstatic.com/f=thuluth-decorated"
        />
      </Head>

      <main>
        <Header />
        <Mobile />
        <section className="home-cover">
          <img src="https://i.ibb.co/W3c3L0F/cover.jpg" alt="logo" />
        </section>
        <section className="container blog-list">
          {props.posts.map((item) => (
            <Card key={item.id} article={item} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://awtadjournal.com/public/api/Journalnumber");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default Home;
