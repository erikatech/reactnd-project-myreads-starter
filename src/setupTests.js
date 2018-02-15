require("jest-localstorage-mock");
import raf from './tempPolyfills'
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * https://github.com/facebookincubator/create-react-app/issues/3199
 */
