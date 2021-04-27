import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";
import Link from "next/link";
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
        <Header />
        <Mobile />
        <section className="home-cover">
          <img src="https://i.ibb.co/b6KRv9p/cover.jpg" alt="cover" />
        </section>
        <div className="container about">
          <div className="heading-about">
            <h1>مجلة أوتاد للعلوم الإنسانية</h1>
            <h2> مجلة علمية محكمة </h2>
            <h3>تصدر عن الإتحاد الدولي للمبدعين في العراق </h3>
          </div>

          <div className="books-list">
            <div className="blog-item">
              <div className="img">
                <img
                  src="https://i.ibb.co/nMXyMyv/1-page-0001.jpg
https://i.ibb.co/7S7z1z6/1-page-0001.jpg
https://i.ibb.co/x2W21sb/3-1-page-0001.jpg"
                />
              </div>
              <div className="card-footer">
                <h4>موافقة دار الكتب</h4>
                <Link href="https://i.ibb.co/nMXyMyv/1-page-0001.jpg">
                  <a>شاهد الصورة</a>
                </Link>
              </div>
            </div>

            <div className="blog-item">
              <div className="img">
                <img
                  src="
https://i.ibb.co/7S7z1z6/1-page-0001.jpg
https://i.ibb.co/x2W21sb/3-1-page-0001.jpg"
                />
              </div>
              <h4>استحداث مجلة علمية</h4>

              <div className="card-footer">
                <Link href="https://i.ibb.co/7S7z1z6/1-page-0001.jpg">
                  <a>شاهد الصورة</a>
                </Link>
              </div>
            </div>
            <div className="blog-item">
              <div className="img">
                <img
                  src="
https://i.ibb.co/x2W21sb/3-1-page-0001.jpg"
                />
              </div>
              <h4>المصادقة على تشكيل هيأة التحرير</h4>

              <div className="card-footer">
                <Link href="https://i.ibb.co/x2W21sb/3-1-page-0001.jpg">
                  <a>شاهد الصورة</a>
                </Link>
              </div>
            </div>
            <div className="blog-item">
              <div className="img">
                <img
                  src="
                  https://i.ibb.co/xSLPKPT/Whats-App-Image-2021-04-22-at-10-52-13-PM-1.jpg"
                />
              </div>
              <h4>الامر الاداري</h4>

              <div className="card-footer">
                <Link href="https://i.ibb.co/xSLPKPT/Whats-App-Image-2021-04-22-at-10-52-13-PM-1.jpg">
                  <a>شاهد الصورة</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Pdf;
