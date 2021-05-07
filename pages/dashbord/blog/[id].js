import { AuthContainer, PureHeader } from "../../../components/dashbord/main";
import { Input, Button, Card } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { addData } from "../../../api";
const Create = () => {
  const [Title, setTitle] = useState("");
  const [PdfUrl, setFile] = useState("");
  const [Description, setDescription] = useState("");
  const [ImgUrl, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
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
            <input
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <label className="lable">حمل صورة المجلة </label>
            <input
              title="choose Image"
              type="file"
              accept="image/*"
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
