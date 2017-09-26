import React from 'react';

const BookShelf = ({ title = '', shelf = '', books = [], moveBook }) => {
	const currentBooks = books.filter(_ => _.shelf === shelf);

	return (
	  <div className="list-books-content">
		  <div className="bookshelf">
			  <h2 className="bookshelf-title">{title}</h2>
			  <div className="bookshelf-books">
				  <ol className="books-grid">
					  {currentBooks.map(book => (
					    <li key={book.id}>
						    <div className="book">
							    <div className="book-top">
								    <div className="book-cover" style={{
									    width: 128,
									    height: 193,
									    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
								    }}></div>
								    <div className="book-shelf-changer">
									    <select onChange={(e) => moveBook(e, book)} >
										    <option value="none" disabled>Move to...</option>
										    <option value="currentlyReading">Currently Reading</option>
										    <option value="wantToRead">Want to Read</option>
										    <option value="read">Read</option>
										    <option value="none">None</option>
									    </select>
								    </div>
							    </div>
							    <div className="book-title">{book.title}</div>
							    {book.authors.map(author => (
								    <div className="book-authors">{author}</div>
							    ))}

						    </div>
					    </li>
					  ))}
				  </ol>
			  </div>

		  </div>
	  </div>
	)
}
export default BookShelf