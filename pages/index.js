import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Head from "next/head";
import { useEffect, useState } from "react";
import Mobile from "../components/mobile";
import { useRouter } from "next/router";
import { getData } from "../api";
const Home = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [orgdata, setorgData] = useState([]);
  useEffect(() => {
    getData((err, result) => {
      if (err) throw err;
      else {
        setData(result);
        setorgData(result);
        setLoading(false);
      }
    });
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
        <meta property="og:image" content="https://i.ibb.co/PjbJFvK/logo.jpg" />
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
          {data.map((article) => (
            <Col md={8} sm={12} xs={24} key={article.id}>
              <Card item={article} />
            </Col>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
};
export default Home;
