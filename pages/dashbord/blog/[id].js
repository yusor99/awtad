import { AuthContainer, PureHeader } from "../../../components/dashbord/main";
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
    console.log("Upload event:", e.fileList);
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
        else {
          router.push("/dashbord/home");
        }
      }
    );
  };
  return (
    <AuthContainer>
      <div className="create-page">
        <PureHeader />

        <main className="container">
          <div className="search-box">
            <Button
              loading={loading}
              type="primary"
              onClick={handleNew}
              disabled={Title && ImgUrl && Description && PdfUrl ? true : false}
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
            <input
              value={PdfUrl}
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <input
              name="choose Image"
              type="file"
              accept="image/*"
              value={ImgUrl}
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </Card>
        </main>
      </div>
    </AuthContainer>
  );
};

export default Create;
