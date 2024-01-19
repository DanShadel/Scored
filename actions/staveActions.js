import * as types from '../constants/actionTypes';

export const setClefAction = (clef) => {
	return {
		type: types.SET_CLEF,
		clef
	};
};

export const setRangeAction = (range) => {
	return {
		type: types.SET_RANGE,
		range
	};

};

export const setAccidenalAction = (accidental) => {
	return {
		type: types.SET_ACCIDENTAL,
		accidental
};

export const setTempoAction = (tempo) => {
	return {
		type: types.SET_TEMPO,
		tempo
	};
};