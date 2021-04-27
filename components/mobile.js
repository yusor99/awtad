import React, { useState } from "react";
import { AlignLeftOutlined, AlignRightOutlined } from "@ant-design/icons";
import Link from "next/link";
const Mobile = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState(false);
  const toggle = () => {
    setCollapsed(!isCollapsed);
    setActive(!active);
  };
  return (
    <>
      <div className="container">
        <div className="mobile-nav content">
          <ul className={`active${active}`}>
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
          <div className="trigger-div">
            {React.createElement(
              isCollapsed ? AlignRightOutlined : AlignLeftOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
            <div className="logo-section">
              <Link href="/">
                <span className="logo-name">اوتاد</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mobile;
