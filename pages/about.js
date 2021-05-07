import Header from "./../components/header";
import { useEffect, useState } from "react";
import Footer from "./../components/footer";
import Head from "next/head";
import Mobile from "./../components/mobile";
import { Row, Col } from "antd";
import Names2 from "./../components/dashbord/names2";
import { getDataName } from "../api";
const About = () => {
  const [dataName, setDataName] = useState([]);
  useEffect(() => {
    getDataName((err, result) => {
      if (err) throw err;
      else {
        setDataName(result.data);
      }
    });
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
        <Mobile />
        <section className="home-cover">
          <img src="https://i.ibb.co/W3c3L0F/cover.jpg" alt="logo" />
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
            <section className="container blog-list">
              {dataName.map((name) => (
                <Col md={8} sm={12} xs={24} key={name.id}>
                  <Names2 item={name} />
                </Col>
              ))}
            </section>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};
export default About;
