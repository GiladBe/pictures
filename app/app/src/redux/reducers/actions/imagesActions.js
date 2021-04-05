import {ADD_IMAGE,DELETE_IMAGE} from '../actionTypes';

export const addImage = (imageUrl,id) => ({
    type: ADD_IMAGE,
    payload: {
        imageUrl,
        id: id + (new Date()).getTime(),
    }
})

export const deleteImage = id => ({
    type: DELETE_IMAGE,
    payload: {
        id:id
    }
})