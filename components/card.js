import Link from "next/link";

const Card = ({ item }) => {
  return (
    <div className="blog-item">
      <div className="img">
        <img src={item.ImgUrl} />
      </div>
      <h4>{item.Title}</h4>
      <div className="des"> {item.Description}</div>
      <div className="card-footer">
        <Link href={`${item.PdfUrl}`}>
          <a>Download article</a>
        </Link>
        <span>{item.Createat}</span>
      </div>
    </div>
  );
};

export default Card;
