import { Provider } from 'preact-redux';
import { createStore } from 'redux';
import Books from '../src/components/books/Books';
import rootReducers from '../src/rootReducer';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';
const store = createStore(rootReducers);

describe('Initial Test of Books Component', () => {
	test('it renders snapshot correctly', () => {
		const context = shallow(
			<Provider store={store}>
				<Books />
			</Provider>
		);
		expect(context).toMatchSnapshot();
	});
});
