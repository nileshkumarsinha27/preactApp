import { Provider } from 'preact-redux';
import { createStore } from 'redux';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';
import List from '../src/components/list/List';
import rootReducers from '../src/rootReducer';
const store = createStore(rootReducers);

describe('Initial Test of the List', () => {
	test('it renders snapshot correctly', () => {
		const context = shallow(
			<Provider store={store}>
				<List />
			</Provider>
		);
		expect(context).toMatchSnapshot();
	});
});
