import { Avatar, Popover, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Link from "next/link";
/**   <Link href="/">
              <li>كتب الموافقة</li>
            </Link> */
export const PureHeader = () => {
  const router = useRouter();
  //const name = JSON.parse(localStorage.getItem("blog_user"));

  return (
    <header className="header-d">
      <div className="container">
        <div className="content">
          <ul>
            <Link href="/dashbord/home">
              <li>المجلات</li>
            </Link>
            <Link href="/dashbord/names/CreateNames">
              <li>اسرة المجلة</li>
            </Link>
          </ul>
          <div className="user-account">
            <h3></h3>
            <Popover
              content={
                <div>
                  <Button
                    type="link"
                    onClick={() => {
                      localStorage.removeItem("blog_token");
                      localStorage.removeItem("blog_user");
                      router.replace("/login");
                    }}
                  >
                    Sign Out
                  </Button>
                </div>
              }
            >
              <Avatar
                style={{ backgroundColor: "#f4a524" }}
                icon={<UserOutlined />}
              />
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
};
