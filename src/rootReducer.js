import { combineReducers } from 'redux';
import books from './components/books/Books.reducer';

const rootReducer = combineReducers({ books });
export default rootReducer;
