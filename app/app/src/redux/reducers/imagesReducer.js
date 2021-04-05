import { findAllInRenderedTree } from 'react-dom/test-utils';
import { ADD_IMAGE } from '../actionTypes';
import { EDIT_IMAGE } from '../actionTypes';

const initialState = { images: [] }

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGE: {
            console.log(ADD_IMAGE)
            return { ...state, images: [...state.images, action.payload] }
        }
        case DELETE_IMAGE: {
            console.log(DELETE_IMAGE)
             
             console.log(state.images)
                 
            return { ...state, images: [...state.images] }
        }

        default: {
            return state
        }
    }
}

export default imagesReducer