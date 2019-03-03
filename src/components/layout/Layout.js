import { h } from 'preact';
import Header from '../header/Header';
import NavMenu from '../navMenu/NavMenu';
import style from './style';
const Layout = props => (
	<article class={style.layout}>
		<Header />
		<section>
			<NavMenu />
			{props.children}
		</section>
	</article>
);
export default Layout;
