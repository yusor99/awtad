import { deleteOneDataName } from "../../api";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const Names = ({ item }) => {
  const router = useRouter();
  const idName = item.id;
  let namee = item.Name;
  let positionn = item.position;
  const handelDelete = () => {
    deleteOneDataName(
      idName,
      {
        namee,
        positionn,
      },
      (err, result) => {
        if (err) throw err;
        if (!result.error) {
          router.reload();
          setLoading(false);
          router.replace("/dashbord/names/CreateNames");
        } else {
          console.log("result.mess  " + result.message);
          console.log("result.errors  " + result.errors);
          message.error(result.message);
          setLoading(false);
        }
      }
    );
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
