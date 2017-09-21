import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Bookshelf extends Component {
  static propTypes = {
    listBooksArr: PropTypes.array.isRequired,
    bookshelfTitle: PropTypes.string.isRequired
  }
  //state & function

  render () {
    const {listBooksArr,bookshelfTitle} = this.props

    return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {bookshelfTitle}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {listBooksArr.map( ele => (
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ele.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{ele.title}</div>
              {ele.authors.map( (author) => (
                <div className="book-authors">{author}</div>
              ) )}
            </div>
          </li>
        ))}
        </ol>
      </div>
    </div>
    )
  }
}

export default Bookshelf
