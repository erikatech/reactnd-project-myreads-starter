import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Debounce } from 'react-throttle';

/**
 * Component used to control the search terms
 */
class SearchBar extends Component {

	state = {
		term: ''
	};

	render() {
		return (
		  <div className="search-books-bar">
			  <Link
				to="/"
				className="close-search">
				  Close
			  </Link>
			  <div className="search-books-input-wrapper">
				  <Debounce time="200" handler="onChange">
					  <input onChange={event => this.onInputChange(event.target.value)} />
				  </Debounce>
			  </div>
		  </div>
		)
	}

	/**
	 * Handler to deal with the input onChange callback
	 * @param term the user input
	 */
	onInputChange(term) {
		// updates the current state
		this.setState({term});
		if(term.trim().length){ // check if user input is empty
			// call the outside method passing the user input
			this.props.onSearchTermChange(term.trim());
		}
	}
}

export default SearchBar;