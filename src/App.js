import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from "./BookShelf";

class BooksApp extends React.Component {
	state = {
		books: []
	};

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({books});
		})
	}

	moveBook = (e, book) => {
		console.log(e);
		console.log(book);

	}

	render() {
		const { books } = this.state;
		const sections = [
			{title: 'Currently Reading', shelf: "currentlyReading", books},
			{title: 'Want to Read', shelf: 'wantToRead', books},
			{title: 'Read', shelf: 'read', books}
		];

		return (
		  <div className="app">
			  <div className="list-books">
				  <div className="list-books-title">
					  <h1>MyReads</h1>
				  </div>
				  {sections.map(_ => (
					<BookShelf
					  key={_.title}
					  shelf={_.shelf}
					  title={_.title}
					  books={_.books}/>
				  ))}
			  </div>
			  <div className="open-search">
				  <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
			  </div>
		  </div>
		)
	}
}

export default BooksApp
