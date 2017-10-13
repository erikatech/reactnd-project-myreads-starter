import React, {Component} from 'react';
import BookShelf from '../book-shelf/BookShelf';
import * as BooksAPI from '../../BooksAPI';
import SearchBar from '../seach-bar/SearchBar';

/**
 * Component that represents the search page
 * It receive as props the currentBooks that are defined in App.js
 *  so we can know which searched books are already added to some shelf
 * It also receive as props the moveBook method, which will be passed to BookShelf component
 */
class BookSearch extends Component {

	// initializes the book list
	state = {
		books: []
	};

	/**
	 * Search a book according to the user input
	 * @param term the user input value
	 */
	bookSearch = (term) => {
		BooksAPI.search(term, 20).then((result) => {
			// if the result return error, it means it didn't find any book
			if(result.error){
				// so the book state will be set to an empty array
				this.setState({books: []});
			} else {
				// this API method doesn't return a book with a shelf,
				// so wee need to check if some book inside result
				// is already added to a shelf.
				// when we find it, we set the shelf to the book inside result.
				this.props.currentBooks.forEach(currentBook => {
					result
					  .filter(book => book.id === currentBook.id)
					  .map(_ => _.shelf = currentBook.shelf);
				});

				// updates the current state
				this.setState({books: result});
			}
		})
	};





	render() {
		const shelf = {
			books: this.state.books,
			shelf: 'All'
		};
		return (
		  <div className="search-books">
			  <SearchBar onSearchTermChange={term => this.bookSearch(term)} />
			  <div className="search-books-results">
				  <ol className="books-grid">
					  <BookShelf
						shelf={shelf}
						moveBook={this.props.moveBook}
					  />
				  </ol>
			  </div>
		  </div>
		)
	}
}
export default BookSearch;