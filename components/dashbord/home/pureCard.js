import Link from "next/link";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { deleteOneData } from "../../../api";

import { useRouter } from "next/router";
export const PureCard = ({ item }) => {
  const router = useRouter();
  let T = item.Title,
    D = item.Description,
    I = item.ImgUrl,
    P = item.PdfUrl;
  const handelDelete = () => {
    deleteOneData(item.id, { T, D, I, P }, (err, result) => {
      if (err) throw err;
      if (!result.error) {
        setLoading(false);
        router.replace("/dashbord/home");
      } else {
        console.log("result.errors  " + result.errors);
        message.error("result.message  " + result.message);
        setLoading(false);
      }
    });
  };
  return (
    <div className="blog-card">
      <img src={item.ImgUrl} />
      <h3>{item.Title}</h3>
      <small>{item.Description}</small>
      <div className="blog-card-footer">
        <Link href={`${item.PdfUrl}`}>
          <a>View pdf file</a>
        </Link>
        <span>{item.Createat}</span>
        <Button type="primary" danger onClick={handelDelete}>
          <DeleteOutlined />
        </Button>
      </div>
    </div>
  );
};
