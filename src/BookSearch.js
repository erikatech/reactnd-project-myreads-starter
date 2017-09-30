import React, {Component} from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';
import SearchBar from './SearchBar';

class BookSearch extends Component {

	state = {
		books: []
	};

	bookSearch = (term) => {
		BooksAPI.search(term, 20).then((result) => {
			if(result.error){
				this.setState({books: []});
			} else {
				this.props.currentBooks.forEach(currentBook => {
					result
					  .filter(book => book.id === currentBook.id)
					  .map(_ => _.shelf = currentBook.shelf);
				});
				this.setState({books: result});
			}
		})

	};

	render() {
		return (
		  <div className="search-books">
			  <SearchBar onSearchTermChange={term => this.bookSearch(term)} />
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
}
export default BookSearch;