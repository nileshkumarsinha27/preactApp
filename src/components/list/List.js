import { h } from 'preact';
const List = props => {
	const getListElems = elem => <li>{elem}</li>;
	return (
		<div>
			<ul>
				{props.resultList.map(elem =>
					elem.book_details.map(item => getListElems(item.title))
				)}
			</ul>
		</div>
	);
};
export default List;
