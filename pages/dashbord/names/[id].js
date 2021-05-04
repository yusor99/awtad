import { PureHeader } from "../../../components/dashbord/main";
import { Input, Button, Card, message, Popover, Form, Upload } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
//import ReactQuill from "react-quill";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { addData, getOneData, deleteOneData } from "../../../api";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
const normFile = (e) => {
  console.log("Upload event:", e);
  return e && e.fileList[0];
};
const CreateNames = () => {
  const [Name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleNew = () => {
    setLoading(true);
    addData(
      {
        Name,
        position,
      },
      (err, result) => {
        {
          router.push("/dashbord/home");
        }
      }
    );
  };

  const handelDelete = () => {
    deleteOneData(router.query.id, (err, result) => {
      if (err) throw err;
      else router.replace("/");
    });
  };

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
          <Button type="primary" danger onClick={handelDelete}>
            <DeleteOutlined />
          </Button>
        </div>

        <Form>
          <Form.Item label="Name">
            <Input
              placeholder="Enter Your Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="position">
            <Input
              placeholder="Enter Your Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </Form.Item>
        </Form>
      </main>
    </div>
  );
};

export default CreateNames;
