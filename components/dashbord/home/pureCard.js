import Link from "next/link";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
export const PureCard = ({ item }) => {
  const handelDelete = () => {
    deleteOneData(item.id, (err, result) => {
      if (err) throw err;
      else router.replace("/");
    });
  };
  return (
    <div className="blog-card">
      <img src={item.ImgUrl} />
      <h3>{item.Title}</h3>
      <small>{item.Description}</small>
      <div className="blog-card-footer">
        <Link href={`/blog/${item.PdfUrl}`}>
          <a>View</a>
        </Link>
        <span>{item.Createat}</span>
        <Button type="primary" danger onClick={handelDelete}>
          <DeleteOutlined />
        </Button>
      </div>
    </div>
  );
};
