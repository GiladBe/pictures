import {ADD_IMAGE,EDIT_IMAGE} from '../actionTypes';

export const addImage = imageUrl => ({
    type: ADD_IMAGE,
    payload: {
        imageUrl,
    }
})

export const edditUser = id => ({
    type: EDIT_IMAGE,
    payload: {
        id:id
    }
})