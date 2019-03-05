import sagaHelper from 'redux-saga-testing';
import { put } from 'redux-saga/effects';
import ACTIONS from '../src/api-config/actions.constants';

import getBooks from '../src/components/books/Books.saga';

describe('getBooks saga testing', () => {
	const it = sagaHelper(getBooks());
	it('should then trigger an action', result => {
		if (result.type === 'GET_BOOK_LIST_SUCCESS') {
			expect(result).toEqual(
				put({
					type: ACTIONS.BOOKS.GET_BOOK_LIST_SUCCESS,
					result
				})
			);
		}
		else {
			expect(result).toEqual(
				put({
					type: ACTIONS.BOOKS.GET_BOOK_LIST_FAIL,
					result
				})
			);
		}
	});
});
