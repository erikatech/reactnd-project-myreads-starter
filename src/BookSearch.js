import React, {Component} from 'react';
import BookShelf from './BookShelf';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
class BookSearch extends Component {

	constructor(props) {
		super(props);
		this.state = {
			books: [],
			term: ''
		}
	}

	search = (term) => {
		this.setState({term});
		BooksAPI.search(term, 20)
		  .then((books) => this.setState({books}));
	};

	render() {
		return (
		  <div className="search-books">
			  <div className="search-books-bar">
				  <Link
					to="/"
					className="close-search">
					  Close
				  </Link>
				  <div className="search-books-input-wrapper">
					  <input type="text"
					         value={this.state.term}
					         onChange={(e) => this.search(e.target.value)}
					         placeholder="Search by title or author"/>
				  </div>
			  </div>
			  <div className="search-books-results">
				  <ol className="books-grid">
					  <BookShelf
					    shelf='All'
					    books={this.state.books}
					    moveBook={this.props.moveBook}
					  />
				  </ol>
			  </div>
		  </div>
		)
	}

};
export default BookSearch;