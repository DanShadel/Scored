import { allScales, bassRange, scaleList, trebleRange } from '../constants/musicConstants';
import { Scale } from 'tonal';

export const pickOne = (input) => {
	return input[Math.floor(Math.random() * input.length)];
};

export const getRandomChord = () => {
	const name = pickOne(allScales);
	return {
		name: name,
		scale: Scale.get(name).notes
	};
};

export const getNoteMods = (note) => {
	return ({
		name: note.charAt(0),
		mods: note.charAt(1)
	});
};

export const getRangeByClef = (clef) => {
	if (clef === 'treble') {
		return trebleRange;
	} else if (clef === 'bass') {
		return bassRange;
	} else {
		return 'INVALID CLEF NAME';
	}
};

export const getTriad = (scale) => { return [scale[0], scale[2], scale[4]]; };

export const getTriadWithRange = (scale, range) => {
	return [
		{
			name: scale[0],
			range: range
		},
		{
			name: scale[2],
			range: range
		},
		{
			name: scale[4],
			range: range
		}
	];
};

export const handleChordRange = (root, note, range) => {

	if (note >= 'C' && note > root && root < 'C') {
		return range + 1;
	}
	else if (note >= 'C' && note > root) {
		return range;

	} else if (note > root && root < 'C') {
		return range + 1;
	}

	return range;
};