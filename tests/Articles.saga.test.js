import sagaHelper from 'redux-saga-testing';
import { put } from 'redux-saga/effects';
import ACTIONS from '../src/api-config/actions.constants';

import getArticles from '../src/components/articles/Articles.saga';

describe('getArticles saga testing', () => {
	const it = sagaHelper(getArticles());
	it('should then trigger an action', result => {
		if (result.type === 'GET_ARTICLES_LIST_SUCCESS') {
			expect(result).toEqual(
				put({
					type: ACTIONS.ARTICLES.GET_ARTICLES_LIST_SUCCESS,
					response: result
				})
			);
		}
		else {
			expect(result).toEqual(
				put({
					type: ACTIONS.ARTICLES.GET_ARTICLES_LIST_FAIL,
					response: result
				})
			);
		}
	});
});
