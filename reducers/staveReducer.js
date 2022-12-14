import * as types from "../constants/actionTypes";


const INITIAL_STATE = { clef: 'treble', range: 4 };

const staveReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_CLEF:
            return { ...state, clef: action.clef }
        case types.SET_RANGE:
            return { ...state, clef: action.clef }
        default:
            return state;
    }
}

export default staveReducer;