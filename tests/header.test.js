import { Provider } from 'preact-redux';
import { createStore } from 'redux';
import Header from '../src/components/header/Header';
import rootReducers from '../src/rootReducer';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';
const store = createStore(rootReducers);

describe('Initial Test of the Header', () => {
	test('Header renders correctly', () => {
		const context = shallow(<Header />);
		expect(context.find('h1').text()).toBe('My Collection');
	});
	test('it renders snapshot correctly', () => {
		const context = shallow(
			<Provider store={store}>
				<Header />
			</Provider>
		);
		expect(context).toMatchSnapshot();
	});
});
