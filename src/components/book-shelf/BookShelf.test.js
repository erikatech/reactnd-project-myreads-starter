import React from 'react';
import { shallow, mount } from 'enzyme';
import BookShelf from './BookShelf';

let shelf = null;

beforeAll(() => {
	shelf = {title: 'Currently Reading', shelf: "currentlyReading", books: [{id: 1, shelf: 'currentlyReading'}]};
});

describe('BookShelf testing', () => {

	it('should render without crashing', () => {
		expect(shallow(
		  <BookShelf
		    shelf={shelf}/>
		)).toMatchSnapshot();
	});


	it('should render the right amount of shelves', () => {
		const moveBook = jest.fn();
		const bookShelf = mount(
		  <BookShelf
			  shelf={shelf}
			  key={shelf.title}
			  moveBook={moveBook}
			/>
		);
		expect(bookShelf.find('li').length).toBe(1);
	});

	it('should call the method when changes the select', () => {
		const moveBook = jest.fn();
		const bookShelf = mount(
		  <BookShelf
			shelf={shelf}
			key={shelf.title}
			moveBook={moveBook}
		  />
		);
		bookShelf.find('select').simulate('change', {target: {value : 'read'}});
		expect(moveBook).toHaveBeenCalledTimes(1);
	});

	it('should have four options to classify books', () => {
		const bookShelf = mount(<BookShelf
		  shelf={shelf}
		  key={shelf.title}/>);
		expect(bookShelf.find('option').length).toBe(5);
	});

	it('should not have authors rendered', () => {
		const bookShelf = mount(<BookShelf
		  shelf={shelf}
		  key={shelf.title}/>);
		expect(bookShelf.find('book-authors').length).toBe(0);
	});
});