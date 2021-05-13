import { Card, Input, Row, Col, Button, message, Divider } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { login } from "../api";
const Login = (props) => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef2 = useRef();
  const inputRef = useRef();
  const submitRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handlSubmit = () => {
    setIsLoading(true);
    login({ email, password }, (err, result) => {
      if (err) {
        setIsLoading(false);
        message.error("your email or password is not correct" + err);
        throw err;
      } else {
        localStorage.setItem("blog_token", result.token);
        localStorage.setItem("blog_user", JSON.stringify(result.info));
        router.replace("/dashbord/home");
        setIsLoading(false);
      }
    });
  };
  return (
    <div className=" login-page">
      <Card title="Login" bordered={true}>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              ref={inputRef}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  inputRef2.current.focus();
                }
              }}
              suffix={<MailOutlined />}
            />
          </Col>
          <Col span={24}>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              ref={inputRef2}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  submitRef.current.focus();
                }
              }}
            />
          </Col>
          <Divider />

          <Col span={24}>
            <Button
              loading={isLoading}
              onClick={handlSubmit}
              type="primary"
              block
              ref={submitRef}
            >
              Login
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Login;
