import { takeEvery, all } from 'redux-saga/effects';
import ACTIONS from './api-config/actions.constants';
import getBooks from './components/books/Books.saga';

export default () => all([takeEvery(ACTIONS.BOOKS.GET_BOOK_LIST, getBooks)]);
