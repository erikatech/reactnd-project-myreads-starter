import React from 'react';

/**
 * Components that represents a shelf which a book can be moved to
 * @param title
 * @param shelf the way the API understands a shelf
 * @param books to books to be rendered inside each shelf
 * @param moveBook a method that is called to move a book from a shelf to another
 * @returns {XML}
 * @constructor
 */
const BookShelf = ({title, shelf, books, moveBook}) => {
	// as this component is used for both Main and Search pages, I created a method to distinguish the both usages
	// if the shelf passed is equals to 'All', it means the components is being used inside BookSearch page,
	// else we need to filter the books according to the shelf passed as props
	const currentBooks = shelf === 'All' ? books : books.filter(_ => _.shelf === shelf);

	// the select options
	const options = [
		{value: "moveTo", label: "Move to..."},
		{value: "currentlyReading", label: "Currently Reading"},
		{value: "wantToRead", label: "Want to Read"},
		{value: "read", label: "Read"},
		{value: "none", label: "None"}
	];

	return (
	  <div className="list-books-content">
		  <div className="bookshelf">
			  <h2 className="bookshelf-title">{title}</h2>
			  <div className="bookshelf-books">
				  <ol className="books-grid">
					  {currentBooks && currentBooks.map(book => (
						<li key={book.id}>
							<div className="book">
								<div className="book-top">
									{console.log(book)}
									<div className="book-cover" style={{
										width: 128,
										height: 193,
										backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})`
									}}></div>
									<div className="book-shelf-changer">
										<select onChange={(e) => moveBook(book, e.target.value)}
										        value={book.shelf}>
											{options.map(option => (
											  <option className={option.value === book.shelf ? 'selected-book' : ''}
											          disabled={option.value === 'moveTo'}
											          key={option.label}
											          value={option.value}>{option.label}</option>
											))}
										</select>
									</div>
								</div>
								<div className="book-title">{book.title}</div>
								{book.authors && book.authors.map(author => (
								  <div key={author} className="book-authors">{author}</div>
								))}
							</div>
						</li>
					  ))}
				  </ol>
			  </div>
		  </div>
	  </div>
	)
};
export default BookShelf