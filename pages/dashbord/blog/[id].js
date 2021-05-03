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
const Create = () => {
  const [Title, setTitle] = useState("");
  const [PdfUrl, setFile] = useState("");
  const [Description, setDescription] = useState("");
  const [ImgUrl, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  /**  useEffect(() => {
    if (router && router.query) {
      getOneData(router.query.id, (err, result) => {
        {
          setFile(result.article.file);
          setDate(result.article.date);
          setTitle(result.article.title);
          setImage(result.article.image);
          setDescription(result.article.description);
        }
      });
    }
  }, [router]); */

  var ReactQuill;
  if (typeof window !== "undefined") {
    //ReactQuill = require("react-quill");
  }

  const handleNew = () => {
    setLoading(true);
    addData(
      {
        Title,
        Description,
        ImgUrl,
        PdfUrl,
        // athor: Number(JSON.parse(localStorage.getItem("blog_user")).id),
      },
      (err, result) => {
        if (err) throw err;
        if (!result.status) {
          Object.keys(result.errMsg).forEach((key) => {
            message.error(result.errMsg[key]);
          });
          setLoading(false);
        } else {
          router.push("/");
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
          <Popover content={<img src={ImgUrl && ImgUrl} />}>
            <Input
              style={{ width: 300 }}
              placeholder="https://example/image.png"
              value={ImgUrl}
              onChange={(e) => setImage(e.target.value)}
            />
          </Popover>

          <Button
            loading={loading}
            type="primary"
            onClick={handleNew}
            disabled={Title && ImgUrl && Description && PdfUrl ? false : true}
          >
            Save
          </Button>
          <Button type="primary" danger onClick={handelDelete}>
            <DeleteOutlined />
          </Button>
        </div>
        <Input.TextArea
          rows={4}
          style={{ marginTop: 20 }}
          placeholder="Short Description . . ."
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Card
          style={{ marginTop: 20 }}
          title={
            <input
              className="input-title"
              placeholder="Write Blog title . . ."
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          }
        >
          <Form>
            <Form.Item
              name="upload"
              label="Upload image"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              multiple={false}
              value={ImgUrl}
              onChange={setImage(normFile)}
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload image</Button>
              </Upload>
            </Form.Item>
            <Form.Item label="Dragger" style={{ maxWidth: 500 }}>
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                value={PdfUrl}
                noStyle
                onChange={setFile(normFile)}
                multiple={false}
              >
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </Form>
        </Card>
      </main>
    </div>
  );
};

export default Create;
