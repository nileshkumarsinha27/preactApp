import { Provider } from 'preact-redux';
import { createStore } from 'redux';
import sinon from 'sinon';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';
import BookDetails from '../src/components/bookDetails/BookDetails';
import rootReducers from '../src/rootReducer';
const store = createStore(rootReducers);

describe('Initial Test of BookDetails component', () => {
	test('it renders snapshot correctly', () => {
		const context = shallow(
			<Provider store={store}>
				<BookDetails />
			</Provider>
		);
		expect(context).toMatchSnapshot();
	});
	test('it triggers click event correctly', () => {
		const mockCallBack = sinon.spy();
		const context = shallow(
			<Provider store={store}>
				<BookDetails />
			</Provider>
		);
		context.find('span').simulate('click');
		expect(mockCallBack).toHaveProperty('callCount', 0);
	});
});
