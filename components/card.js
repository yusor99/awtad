import Link from 'next/link'

const Card = ({article}) =>{
    return (
        <div className="blog-item">
        <div className="img">
          <img src={article.image} />
        </div>
        <h4>{article.title}</h4>
    
        <div className="card-footer">
         <Link href={`article/${article.id}`}><a>Download article</a></Link>
  
        </div>
      </div>
    )
}

export default Card;