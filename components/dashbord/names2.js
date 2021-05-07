const Names = ({ item }) => {
  const idName = item.id;
  return (
    <div className="blog-card-name">
      <h3>{item.Name}</h3>
      <span>{item.Position}</span>
      <div className="blog-card-name-footer">
        <span>{item.Createat}</span>
      </div>
    </div>
  );
};

export default Names;
