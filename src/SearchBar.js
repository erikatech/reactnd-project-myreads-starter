import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {term: ''};
	}

	render() {
		return (
		  <div className="search-books-bar">
			  <Link
				to="/"
				className="close-search">
				  Close
			  </Link>
			  <div className="search-books-input-wrapper">
				  <input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
					placeholder="Search by title or author"/>
			  </div>
		  </div>
		)
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;