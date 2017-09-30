import React from 'react';

const BookShelf = ({ title, shelf, books, moveBook }) => {
	const currentBooks = shelf === 'All' ? books : books.filter(_ => _.shelf === shelf);
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
								    <div className="book-cover" style={{
									    width: 128,
									    height: 193,
									    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
								    }}></div>
								    <div className="book-shelf-changer">
									    <select onChange={(e) => moveBook(e.target.value, book)} value={book.shelf} >
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