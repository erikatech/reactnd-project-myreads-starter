import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from "./BookShelf";
import BookSearch from "./BookSearch";

class BooksApp extends Component {
	state = {
		books: []
	};

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({books});
		})
	}

	moveBook = (shelf, book) => {
		if (shelf !== book.shelf) {
			BooksAPI.update(book, shelf).then(() => {
				this.arrangeBooks(book, shelf);
			});
		}
	};

	arrangeBooks = (book, shelf) => {
		const index = this.state.books.findIndex(currentBook => currentBook.id === book.id);
		let books = this.state.books;
		if (index > 0) {
			books = this.state.books
			  .map(_ => {
				  if (_.id === book.id) {
					  _.shelf = shelf;
				  }
				  return _;
			  });
		} else {
			book.shelf = shelf;
			books.push(book);
		}
		this.setState({books});
	};

	render() {
		const {books} = this.state;
		const shelves = [
			{title: 'Currently Reading', shelf: "currentlyReading", books},
			{title: 'Want to Read', shelf: 'wantToRead', books},
			{title: 'Read', shelf: 'read', books}
		];

		return (
		  <div className="app">
			  <Route exact path="/" render={() => (
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					{shelves.map(_ => (
					  <BookShelf
						key={_.title}
						shelf={_.shelf}
						title={_.title}
						books={_.books}
						moveBook={this.moveBook}
					  />
					))}
					<div className="open-search">
						<Link
						  to="/search"
						  className="add-contact">
							Add a book
						</Link>
					</div>
				</div>
			  )}/>


			  <Route exact path="/search" render={() => (
				<BookSearch
				  moveBook={this.moveBook}
				  currentBooks={this.state.books}/>
			  )}/>
		  </div>
		)
	}
}

export default BooksApp
