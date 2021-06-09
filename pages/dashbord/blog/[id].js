import { AuthContainer, PureHeader } from "../../../components/dashbord/main";
import { Input, Button, Card, message, Upload } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";
import { addData } from "../../../api";

const Create = () => {
  const [Title, setTitle] = useState("");
  const [PdfUrl, setFile] = useState();
  const [Description, setDescription] = useState("");
  const [ImgUrl, setImage] = useState();
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
        console.log("result = " + result);
        console.log("error = " + err);

        if (err) throw err;
        if (result.message == "The given data was invalid.") {
          message.error(result.message);
          setLoading(false);
        } else {
          setLoading(false);
          router.replace("./pages/dashbord/home");
        }
      }
    );
  };
  return (
    <AuthContainer>
      <div className="create-page dir">
        <PureHeader />

        <main className="container">
          <div className="dash-card">
            <Card
              style={{ marginTop: 20 }}
              title={
                <Button
                  loading={loading}
                  type="primary"
                  onClick={handleNew}
                  disabled={
                    Title && ImgUrl && Description && PdfUrl ? false : true
                  }
                >
                  حفظ المجلة
                </Button>
              }
            >
              <input
                className="input-title"
                placeholder="عنوان المجلة ..."
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input.TextArea
                rows={4}
                style={{ marginTop: 20 }}
                placeholder=" وصف المجلة .... "
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label className="lable">حمل المجلة </label>
              <input
                type="file"
                name=""
                id="pdf"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label className="lable">حمل صورة المجلة </label>
              <input
                type="file"
                name=""
                id="img"
                placeholder="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Card>
          </div>
        </main>
      </div>
    </AuthContainer>
  );
};

export default Create;
