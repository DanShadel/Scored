import * as types from "../constants/actionTypes";

export const setClefAction = (clef) => {
    return {
        type: types.SET_CLEF,
        clef
    }
}

export const setRangeAction = (range) => {
    return {
        type: types.SET_RANGE,
        range
    }

}