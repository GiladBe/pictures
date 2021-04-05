import {combineReducers} from 'redux';
import usersReducer from './employees/employeesReducer';
import imagesReducer from './employees/employeesReducer';
import commentsReducer from './employees/employeesReducer';

export default combineReducers({employeesReducer})