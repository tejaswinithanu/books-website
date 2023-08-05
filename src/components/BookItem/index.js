import './index.css'

const BookItem = props => {
  const {bookDetails} = props
  const {imgUrl, title, author, genre, rating} = bookDetails
  return (
    <li className="list-item">
      <img className="img" src={imgUrl} alt={title} />
      <div className="info-bg">
        <h1 className="title">{title}</h1>
        <p className="author">by {author}</p>
        <p className="small-text">genre: {genre}</p>
        <p className="small-text">avg rating {rating}</p>
      </div>
    </li>
  )
}

export default BookItem
