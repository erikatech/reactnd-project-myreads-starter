import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookSearch from './BookSearch';

Enzyme.configure({ adapter: new Adapter() });

describe('BookSearch testing', () => {

	it('should render without crashing', () => {
		expect(shallow(<BookSearch/>)).toMatchSnapshot();
	})
});





