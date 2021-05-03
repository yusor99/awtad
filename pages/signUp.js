import { Card, Input, Row, Col, Button, message, Divider } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
//import { register } from "../api";

const SignUp = (props) => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const submitRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handlSubmit = () => {
    setIsLoading(true);
    register({ email, password, name }, (err, result) => {
      if (err) throw err;
      if (!result.status) {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
        });
        setIsLoading(false);
      } else {
        localStorage.setItem("blog_token", result.token);
        localStorage.setItem("blog_user", JSON.stringify(result.user));
        router.replace("/dashbord/home");
        setIsLoading(false);
      }
    });
  };

  return (
    <div className=" signup-page">
      <Card title=" Sign Up" bordered={true}>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              ref={inputRef}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  inputRef2.current.focus();
                }
              }}
              suffix={<UserOutlined />}
            />
          </Col>
          <Col span={24}>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              ref={inputRef2}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  inputRef3.current.focus();
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
              ref={inputRef3}
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
              Sign Up
            </Button>
          </Col>
          <Divider />
          <span>
            Already have an account? <Link href="/login"> Login</Link>
          </span>
        </Row>
      </Card>
    </div>
  );
};

export default SignUp;
