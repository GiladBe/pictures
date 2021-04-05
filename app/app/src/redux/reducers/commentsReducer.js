import { findAllInRenderedTree } from 'react-dom/test-utils';
import { ADD_COMMENT } from '../actionTypes';
import { EDIT_COMMENT } from '../actionTypes';

const initialState = { comments: [] }

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            console.log(ADD_COMMENT)
            return { ...state, comments: [...state.comments, action.payload] }
        }
        case EDIT_COMMENT: {
            console.log(EDIT_COMMENT)
             
             console.log(state.comments)
                 
            return { ...state, comments: [...state.comments] }
        }

        default: {
            return state
        }
    }
}

export default commentsReducer