import { PureHeader } from "../../../components/dashbord/main";
import { Input, Button, Card, message, Form, Upload } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { addData, getOneData } from "../../../api";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
const Create = () => {
  const [Title, setTitle] = useState("");
  const [PdfUrl, setFile] = useState("");
  const [Description, setDescription] = useState("");
  const [ImgUrl, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const handleNew = () => {
    setLoading(true);
    addData(
      {
        Title,
        Description,
        ImgUrl,
        PdfUrl,
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
  return (
    <div className="create-page">
      <PureHeader />

      <main className="container">
        <div className="search-box">
          <Button
            loading={loading}
            type="primary"
            onClick={handleNew}
            disabled={Title && ImgUrl && Description && PdfUrl ? false : true}
          >
            Save
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
              label="Upload image "
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra=""
              onChange={(e) => setFile(normFile)}
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload file</Button>
              </Upload>
            </Form.Item>
            <Form.Item label="upload file">
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
                onChange={(e) => setFile(normFile)}
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
