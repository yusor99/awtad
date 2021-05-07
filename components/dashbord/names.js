import { deleteOneDataName } from "../../api";
const Name = ({ item }) => {
  const idName = item.id;
  const handelDelete = () => {
    deleteOneDataName(idName, (err, result) => {
      if (err) throw err;
      else router.replace("/");
    });
  };
  return (
    <div className="blog-card">
      <h3>{item.Name}</h3>
      <small>{item.Position}</small>
      <div className="blog-card-footer">
        <Button type="primary" danger onClick={handelDelete}>
          <DeleteOutlined />
        </Button>
        <span>{item.Createat}</span>
      </div>
    </div>
  );
};

export default Name;
