import { PureHeader } from "../../../components/dashbord/main";
import { Input, Button, message, Popover, Form, Upload } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { addDataName, getDataName } from "../../../api";
import { Col } from "antd";
const CreateNames = () => {
  const [Name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const router = useRouter();
  const handleNew = () => {
    setLoading(true);
    addDataName(
      {
        Name,
        position,
      },
      (err, result) => {
        {
          router.push("/dashbord/names/CreateNames");
        }
      }
    );
  };
  useEffect(() => {
    getDataName((err, result) => {
      if (err) throw err;
      else {
        setData(result);
      }
    });
  }, []);
  return (
    <div className="create-page">
      <PureHeader />

      <main className="container">
        <div className="search-box">
          <Button
            loading={loading}
            type="primary"
            onClick={handleNew}
            disabled={Name && position ? false : true}
          >
            Save
          </Button>
        </div>

        <Form style={{ padding: 10, margin: 10 }}>
          <Form.Item label="Name">
            <Input
              style={{ maxWidth: 300 }}
              placeholder="Enter Your Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="position">
            <Input
              style={{ maxWidth: 300 }}
              placeholder="Enter Your Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </Form.Item>
        </Form>
        <section className="container blog-list">
          {data.map((name) => (
            <Col md={8} sm={12} xs={24} key={name.id}>
              <Name item={name} />
            </Col>
          ))}
        </section>
      </main>
    </div>
  );
};

export default CreateNames;
