import Header from "./../components/header";
import { useEffect } from "react";
import Footer from "./../components/footer";
import Head from "next/head";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const About = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
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
      <Header />
        <Mobile/>
        <section className="home-cover">
          <img src="https://i.ibb.co/b6KRv9p/cover.jpg" alt="cover" />
        </section>
        <div className="container about">
          <section className="heading-about">
            <h1>مجلة أوتاد للعلوم الإنسانية</h1>
            <h2> مجلة علمية محكمة </h2>
            <h3>تصدر عن الإتحاد الدولي للمبدعين في العراق </h3>
          </section>
        </div>
        <section className=" container goals">
          <h1>اهداف المجلة : </h1>
          <p>
            <ul>
              <li>
                نشر البحوث المبتكرة التي يقدمها الباحثون في المجالات العلمية
                المتعلقة بالعلوم الإنسانية.
              </li>
              <li>
                نشر البحوث المبتكرة التي يقدمها الباحثون في المجالات العلمية
                المتعلقة بالعلوم الإنسانية.
              </li>
              <li>
                نشر البحوث المبتكرة التي يقدمها الباحثون في المجالات العلمية
                المتعلقة بالعلوم الإنسانية.
              </li>
              <li>
                نشر البحوث المبتكرة التي يقدمها الباحثون في المجالات العلمية
                المتعلقة بالعلوم الإنسانية.
              </li>
              <li>
                الإسهام في إثراء البحث العلمي والمناهج العلمية و التزام
                معاييرها.
              </li>
              <li>
                الإسهام في نشر المعرفة في مجال الآداب والعلوم الإنسانية وتعميمها
                في الوطن العربي خدمةً للمجتمع العربي وتقدّمه.
              </li>
              <li>
                التبادل بينها وبين المجلّات المحكّمة في الوطن العربي ؛ حرصاً على
                التواصل العلمي وتبادل الخبرات العلمية.
              </li>
              <li>
                تطمح المجلة إلى نشر أعداد خاصّة أو ملفات خاصّة تتعلق بموضوعات
                مهمة محدّدة.
              </li>
              <li>
                استقبال اقتراحات الباحثين والعلماء حول كل ّما يسهم في تقدّم
                البحث العلمي وفي تطوير المجلّة التي هي مجلّتهم.
              </li>
            </ul>
          </p>
        </section>
        <p className="dots">. . .</p>
        <section className="  container names">
          <h1>اسرة المجلة</h1>
          <div className="sec-names">
            <ul>
              {props.names.map((item) => (
                <li key={item.id} name={item}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.cypress.io/todos");
  const names = await res.json();
  return {
    props: {
      names,
    },
  };
}
export default About;
