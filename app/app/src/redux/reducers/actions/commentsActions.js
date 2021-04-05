import {ADD_COMMENT,EDIT_COMMENT} from '../actionTypes';

export const addComment = comment => ({
    type: ADD_COMMENT,
    payload: {
        comment,
        id:'id' + (new Date()).getTime(),
    }
})

export const edditComment = (id,comment) => ({
    type: EDIT_COMMENT,
    payload: {
        id:id,
        comment:comment
    }
})