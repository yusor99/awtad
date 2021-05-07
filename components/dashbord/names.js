import { deleteOneDataName } from "../../api";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
const Names = ({ item }) => {
  const idName = item.id;
  const handelDelete = () => {
    deleteOneDataName(idName, (err, result) => {
      if (err) throw err;
      else router.replace("/");
    });
  };
  return (
    <div className="blog-card-name">
      <h3>{item.Name}</h3>
      <span>{item.Position}</span>
      <div className="blog-card-name-footer">
        <Button type="primary" danger onClick={handelDelete}>
          <DeleteOutlined />
        </Button>
        <span>{item.Createat}</span>
      </div>
    </div>
  );
};

export default Names;
