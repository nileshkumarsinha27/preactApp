import { h } from 'preact';
import BookDetails from '../bookDetails/BookDetails';
import ArticleDetails from '../articleDetails/ArticleDetails';
import style from './style.css';
const List = props => {
	const getListElems = (elem, index) => (
		<li key={index}>
			{props.fromArticles ? (
				<ArticleDetails data={elem} index={index} />
			) : (
				<BookDetails data={elem} index={index} />
			)}
		</li>
	);
	return (
		<div class={style.listcontainer}>
			<ul>
				{props.resultList.map((elem, index) => getListElems(elem, index))}
			</ul>
		</div>
	);
};
export default List;
