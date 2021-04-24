import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <ul>
            <Link href="/pdf">
              <li>كتب الموافقة</li>
            </Link>
            <Link href="/about">
              <li>عن المجلة</li>
            </Link>
            <Link href="/">
              <li>الرئيسية</li>
            </Link>
          </ul>

          <div className="logo-section">
            <span className="logo-name">اوتاد</span>
            <Link href="/">
              <img
                src="https://i.ibb.co/PjbJFvK/logo.jpg"
                alt="logo"
                className="logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
