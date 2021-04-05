import {combineReducers} from 'redux';
import usersReducer from './reducers/usersReducer';
import imagesReducer from './reducers/imagesReducer';
import commentsReducer from './reducers/commentsReducer';

export default combineReducers({usersReducer,imagesReducer,commentsReducer})