import {Component} from 'react'
import {FiSearch} from 'react-icons/fi'

import BookItem from '../BookItem'
import './index.css'

const allBooks = [
  {
    id: 1,
    title: 'The war Hangers',
    author: 'Tejaswini',
    genre: 'Freedom',
    rating: 4.5,
    imgUrl:
      'https://cdn.pastemagazine.com/www/articles/assets_c/2016/12/SECRET_OF_A_HEART_NOTE_LEE-thumb-275x416-538022.jpg',
  },
  {
    id: 1,
    title: 'Help the Tigers',
    author: 'Suresh',
    genre: 'Freedom',
    rating: 4.5,
    imgUrl:
      'https://cdn.pastemagazine.com/www/articles/assets_c/2016/12/SECRET_OF_A_HEART_NOTE_LEE-thumb-275x416-538022.jpg',
  },
  {
    id: 1,
    title: 'save women',
    author: 'Tejaswini',
    genre: 'Freedom',
    rating: 4.5,
    imgUrl:
      'https://cdn.pastemagazine.com/www/articles/assets_c/2016/12/SECRET_OF_A_HEART_NOTE_LEE-thumb-275x416-538022.jpg',
  },
]

class BooksList extends Component {
  constructor(props) {
    super(props)
    this.state = {booksList: allBooks, userInput: ''}
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {booksList, userInput} = this.state
    const filteredBooks = booksList.filter(eachBook => {
      const input = userInput.toLowerCase()
      const title = eachBook.title.toLowerCase()
      const author = eachBook.author.toLowerCase()
      if (title.includes(input)) {
        return true
      }
      if (author.includes(input)) {
        return true
      }
      return false
    })
    return (
      <div className="bg">
        <nav className="header-bg">
          <h1 className="brand-logo">Nxt Books</h1>
          <form>
            <div className="search-bg">
              <input
                onChange={this.onChangeUserInput}
                placeholder="search by title/author name"
                className="search-bar"
                type="search"
              />
              <button className="search-icon" type="submit">
                <FiSearch />
              </button>
            </div>
          </form>
        </nav>
        <div className="list-bg">
          <ul>
            {filteredBooks.map(eachBook => (
              <BookItem id={eachBook.id} bookDetails={eachBook} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BooksList
