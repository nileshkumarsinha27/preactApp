import { h } from 'preact';
import Router from 'preact-router';
import Layout from './layout/Layout';
import Books from './books/Books';
import Articles from './articles/Articles';
const App = props => (
	<div id="app">
		<Router>
			<Layout path="/" />
			<Layout path="/books">
				<Books />
			</Layout>
			<Layout path="/articles">
				<Articles />
			</Layout>
		</Router>
	</div>
);
export default App;
