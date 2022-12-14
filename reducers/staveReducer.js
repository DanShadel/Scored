import * as types from "../constants/actionTypes";


const INITIAL_STATE = [];

const staveReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_CLEF:
            return { ...state, clef: action.clef }
        default:
            return state;
    }
}

export default staveReducer;