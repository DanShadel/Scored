import * as types from '../constants/actionTypes';
const INITIAL_STATE = {
	clef: 'treble',
	range: 4,
	accidental: '',
	tempo: 60,
};

const staffReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SET_CLEF:
			return {
				...state,
				clef: action.clef
			};
		case types.SET_RANGE:
			return {
				...state,
				range: action.range
			};
		case types.SET_ACCIDENTAL:
			return {
				...state,
				accidental: action.accidental
			};
		case types.SET_TEMPO:
			return {
				...state,
				tempo: action.tempo
			}
		default:
			return state;
	}
};

export default staffReducer;