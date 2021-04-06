import {ADD_IMAGE,DELETE_IMAGE} from '../actionTypes';

export const addImage = (imageUrl,userName) => ({
    type: ADD_IMAGE,
    payload: {
        userName,
        id:  (new Date()).getTime(),
        imageUrl,
    }
})

export const deleteImage = id => ({
    type: DELETE_IMAGE,
    payload: {
        id:id
    }
})