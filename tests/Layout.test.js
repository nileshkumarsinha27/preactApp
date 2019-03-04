import Layout from '../src/components/layout/Layout';
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy';

describe('Initial Test of the Header', () => {
	test('it renders snapshot correctly', () => {
		const context = shallow(<Layout />);
		expect(context).toMatchSnapshot();
	});
});
