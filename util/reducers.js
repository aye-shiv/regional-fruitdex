import { GET_FRUITS } from "./actions";
import { combineReducers } from 'redux';

const initialState = {
    fruits: []
}

function dexReducer(state = initialState, action){
    switch (action.type){
        case GET_FRUITS:
            return {...state, fruits: action.payload};
        default:
            return state;
    }
}
export default dexReducer;