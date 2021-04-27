import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="container navbar-desktop">
        <div className="content">
          <ul>
            <Link href="/">
              <li>الرئيسية</li>
            </Link>
            <Link href="/about">
              <li>عن المجلة</li>
            </Link>
            <Link href="/pdf">
              <li>كتب الموافقة</li>
            </Link>
            <Link href="/login">
              <li>تسجيل الدخول </li>
            </Link>
          </ul>

          <div className="logo-section">
            <Link href="/">
              <span className="logo-name">اوتاد</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
