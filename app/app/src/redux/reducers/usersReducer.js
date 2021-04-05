import { findAllInRenderedTree } from 'react-dom/test-utils';
import { ADD_USER } from '../actionTypes';
import { EDIT_USER } from '../actionTypes';

const initialState = { users: [] }

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            console.log(ADD_USER)
            return { ...state, users: [...state.users, action.payload] }
        }
        case EDIT_USER: {
            console.log(EDIT_USER)
             
             console.log(state.users)
                 
            return { ...state, users: [...state.users] }
        }

        default: {
            return state
        }
    }
}

export default usersReducer