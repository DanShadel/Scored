import * as types from "../constants/actionTypes";


const INITIAL_STATE = { clef: 'treble', range: 4 };

const staveReducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case types.SET_CLEF:
            return { ...state, clef: action.clef }
        case types.SET_RANGE:
            return { ...state, range: action.range }
        default:
            return state;
    }
}

export default staveReducer;