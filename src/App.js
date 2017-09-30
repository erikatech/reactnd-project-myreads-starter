import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import BookShelf from "./BookShelf";
import BookSearch from "./BookSearch";

/**
 * Represents the main page with all the shelves
 */
class BooksApp extends Component {
	// initializes the books
	state = {
		books: []
	};

	componentDidMount() {
		// send a request to BooksAPI the get my current books
		BooksAPI.getAll().then((books) => {
			// updates the current state
			this.setState({books});
		})
	}

	/**
	 * Moves a book to a specific shelf
	 * @param book
	 * @param shelf
	 */
	moveBook = (book, shelf) => {
		// if the user selects the current book shelf, it doesn't need to perform the update
		if (book.shelf !== shelf) {
			BooksAPI.update(book, shelf).then(() => {
				this.arrangeBooks(book, shelf);
			});
		}
	};

	/**
	 * Organize a book according to its shelf after the updating process
	 * @param book
	 * @param shelf
	 */
	arrangeBooks = (book, shelf) => {
		// checking if the book exists in the current state
		const index = this.state.books.findIndex(currentBook => currentBook.id === book.id);
		let books = this.state.books;

		if (index > 0) { // if the book exists
			// maps through the current state books to modify its shelf according to user
			// modification (passed as parameter)
			books.filter(_ => _.id === book.id)[0].shelf = shelf;

		} else { // if it doesn't exists yet
			// sets the book shelf
			book.shelf = shelf;

			// add to current books
			books.push(book);
		}

		// finally update the state
		this.setState({books});
	};

	render() {
		// creates a constant that represents the books of current state
		const {books} = this.state;
		// creates the three shelves
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
						  to="/search">
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
