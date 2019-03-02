import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
const NavMenu = () => (
	<div class={style.menu}>
		<nav>
			<Link href="/books">Books</Link>
			<Link href="/articles">Articles</Link>
		</nav>
	</div>
);
export default NavMenu;
