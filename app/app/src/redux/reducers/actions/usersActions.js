import {ADD_USER,EDIT_USER} from '../actionTypes';

export const addUser = userName => ({
    type: ADD_USER,
    payload: {
        userName,
        id:'id' + (new Date()).getTime(),
       
    }
})

export const edditUser = id => ({
    type: EDIT_USER,
    payload: {

        id:id
    }
})
