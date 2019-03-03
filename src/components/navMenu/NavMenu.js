import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
const NavMenu = () => (
	<div class={style.menu}>
		<nav>
			<Link href="/books" activeClassName={style.activeclass}>
				Books
			</Link>
			<Link href="/articles" activeClassName={style.activeclass}>
				Articles
			</Link>
		</nav>
	</div>
);
export default NavMenu;
