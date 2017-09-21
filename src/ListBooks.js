import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  //state & function

  render () {
    const {books} = this.props
    // console.log(currentlyReading,'currentlyReading')
    let currentlyReading = books.filter(
      (book)=> book.shelf === "currentlyReading"
    )
    let wantToRead = books.filter ( (book)=> book.shelf === "wantToRead")
    let read = books.filter ( (book)=> book.shelf === "read")
    console.log(currentlyReading,wantToRead,read)
    //query matching
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf listBooksArr = {currentlyReading} bookshelfTitle = {'Currently Reading'}/>
            <Bookshelf listBooksArr = {wantToRead} bookshelfTitle = {'Want to Read'}/>
            <Bookshelf listBooksArr = {read} bookshelfTitle = {'Read'}/>
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListBooks
