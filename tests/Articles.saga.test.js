import assert from 'assert';
import { put } from 'redux-saga/effects';
import ACTIONS from '../src/api-config/actions.constants';
import getArticles from '../src/components/articles/Articles.saga';

const articleData = {
	copyright:
		'Copyright (c) 2019 The New York Times Company. All Rights Reserved.',
	last_updated: '2019-03-04T03:17:04-05:00',
	num_results: 1,
	results: [{ section: 'World', subsection: 'Asia Pacific' }],
	section: 'home',
	status: 'OK'
};

describe('getArticles saga', () => {
	const articleGenerator = getArticles();
	beforeEach(() => {
		articleGenerator.next();
	});
	assert.deepEqual(
		articleGenerator.next(articleData).value,
		put({
			type: ACTIONS.ARTICLES.GET_ARTICLES_LIST_SUCCESS,
			response: articleData
		}),
		'it calls GET_ARTICLES_LIST_SUCCESS'
	);
});
