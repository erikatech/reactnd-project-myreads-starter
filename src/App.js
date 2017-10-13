import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import BookShelf from "./components/book-shelf/BookShelf";
import BookSearch from "./components/book-search/BookSearch";

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
				book.shelf = shelf;
				this.setState({books: this.state.books.filter((b) => b.id !== book.id).concat(book)});
			});
		}
	};

	render() {
		// creates a constant that represents the books of current state
		const {books} = this.state;
		// creates the three shelves. we will map through it to render the BookShelf
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
						<h1>@erikateh MyReads</h1>
					</div>
					{shelves.map(shelf => (
					  <BookShelf
					    shelf={shelf}
					    key={shelf.title}
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
