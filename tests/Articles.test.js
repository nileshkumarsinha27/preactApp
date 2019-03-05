import { Provider } from 'preact-redux';
import { createStore } from 'redux';
import Articles from '../src/components/articles/Articles';
import rootReducers from '../src/rootReducer';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';
const store = createStore(rootReducers);

describe('Initial Test of Articles Component', () => {
	test('it renders snapshot correctly', () => {
		const context = shallow(
			<Provider store={store}>
				<Articles />
			</Provider>
		);
		expect(context).toMatchSnapshot();
	});
});
