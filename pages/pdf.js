import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";

const Pdf = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.fontstatic.com/f=thuluth-decorated"
        />
      </Head>
      <main>
        <section className="home-cover">
          <img src="https://i.ibb.co/b6KRv9p/cover.jpg" alt="cover" />
        </section>
        <Header />
        <div className="container about">
          <section className="heading-about">
            <h1>مجلة أوتاد للعلوم الإنسانية</h1>
            <h2> مجلة علمية محكمة </h2>
            <h3>تصدر عن الإتحاد الدولي للمبدعين في العراق </h3>
          </section>
          <section>
            <iframe
              src="demo_iframe.htm"
              name="iframe_a"
              title="Iframe Example"
            ></iframe>
            <p>
              <a href="https://www.w3schools.com" target="iframe_a">
                W3Schools.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Pdf;
