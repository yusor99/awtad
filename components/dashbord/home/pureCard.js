import Link from "next/link";

export const PureCard = ({ item }) => {
  return (
    <div className="blog-card">
      <img src={item.ImgUrl} />
      <h3>{item.Title}</h3>
      <small>{item.Description}</small>
      <div className="blog-card-footer">
        <Link href={`/blog/${item.id}`}>
          <a>View</a>
        </Link>
        <span>{item.Createat}</span>
      </div>
    </div>
  );
};
