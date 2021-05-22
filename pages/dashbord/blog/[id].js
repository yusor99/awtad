import { AuthContainer, PureHeader } from "../../../components/dashbord/main";
import { Input, Button, Card, message, Upload } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { addData } from "../../../api";
import { UploadOutlined } from "@ant-design/icons";

const Create = () => {
  const [Title, setTitle] = useState("");
  const [PdfUrl, setFile] = useState("");
  const [Description, setDescription] = useState("");
  const [ImgUrl, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpload = ({ fileList }) => {
    if (fileList[0]) {
      setImage(fileList[0].originFileObj);
    }
  };
  const handleUploadf = ({ fileList }) => {
    if (fileList[0]) {
      setFile(fileList[0].originFileObj.name);
    }
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
        if (!result.message) {
          router.push("/dashbord/home");
        } else {
          console.log(result.errors);

          message.error(result.message);
          setLoading(false);
        }
      }
    );
  };
  return (
    <AuthContainer>
      <div className="create-page dir">
        <PureHeader />

        <main className="container">
          <div className="search-box">
            <Button
              loading={loading}
              type="primary"
              onClick={handleNew}
              disabled={Title && ImgUrl && Description && PdfUrl ? false : true}
            >
              حفظ المجلة
            </Button>
          </div>
          <Input.TextArea
            rows={4}
            style={{ marginTop: 20 }}
            placeholder=" وصف المجلة .... "
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Card
            style={{ marginTop: 20 }}
            title={
              <input
                className="input-title"
                placeholder="عنوان المجلة ..."
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
              />
            }
          >
            <label className="lable">حمل المجلة </label>
            <Upload onChange={handleUploadf} maxCount={1}>
              <Button icon={<UploadOutlined />} className="input" type="dashed">
                Upload pdf file
              </Button>
            </Upload>
            <label className="lable">حمل صورة المجلة </label>
            <Upload onChange={handleUpload} listType="picture" maxCount={1}>
              <Button icon={<UploadOutlined />} className="input" type="dashed">
                Upload image
              </Button>
            </Upload>
          </Card>
        </main>
      </div>
    </AuthContainer>
  );
};

export default Create;
