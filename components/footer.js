const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="info">
            <ul>
              <li className="h1"> مجلة فصلية ( انسانية - علمية )</li>
              <li className="h2"> تنشر البحوث ( الكتروني - ورقي )</li>
              <li className="h3">
                رقم الايداع في دار الكتب والوثائق في بغداد ( 2486 )
              </li>
            </ul>
          </div>
          <div className="contact">
            <ul>
              <li>
                <img src="https://i.ibb.co/56G51TY/gmail.png" />
                <span>البريد : awtatjournal@gmail.com</span>
              </li>
              <li>
                <img src="https://i.ibb.co/vJk1dNK/whatsapp.jpg" />
                <span> رقم المجلة : 07705868922</span>
              </li>
              <li>
                <img src="https://i.ibb.co/McG3XPg/map.png" />
                <span>
                  العنوان : جمهورية العراق - بغداد - كرادة داخل - مدخل ساحة
                  كهرمانة
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
