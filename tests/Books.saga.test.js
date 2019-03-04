import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import { put, call } from 'redux-saga/effects';
import getBooks from '../src/components/books/Books.saga';
import API from '../src/api-config/api.config.js';
import ACTIONS from '../src/api-config/actions.constants';
import CONSTANTS from '../src/constants.js';
import { getData } from '../src/utils/axios.js';
const books = {
	num_results: 1,
	results: [1]
};
const url = `${API.bookApi}?api-key=${CONSTANTS.API_KEY}&list=${decodeURI(
	'hardcover-fiction'
)}`;

it('fetches the books', () =>
	expectSaga(getBooks, url)
		.call(getData, url)
		.put({
			type: ACTIONS.BOOKS.GET_BOOK_LIST_SUCCESS,
			response: { books }
		})
		.dispatch({ type: ACTIONS.BOOKS.GET_BOOK_LIST })
		.run());
