import Link from "next/link";

const Card = ({ article }) => {
  return (
    <div className="blog-item">
      <div className="img">
        <img src={article.ImgUrl} />
      </div>
      <h4>{article.Title}</h4>
      <div className="des"> {article.Description}</div>
      <div className="card-footer">
        <Link href={`${article.PdfUrl}`}>
          <a>Download article</a>
        </Link>
        <span>{article.Createat}</span>
      </div>
    </div>
  );
};

export default Card;
