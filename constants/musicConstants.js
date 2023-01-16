import { Scale } from 'tonal';

export const clefs = ['treble', 'bass'];

// Note Ranges on each clef (kinda)
export const trebleRange = [4, 5];
export const bassRange = [2, 3,];

export const majorScales = [
	'C major',
	'G major',
	'D major',
	'A major',
	'E major',
	'B major',
	'F major',
	'Bb major',
	'Eb major',
	'Ab major',
	'Db major',
	'Gb major',
];

export const minorScales = [
	'C minor',
	'G minor',
	'D minor',
	'A minor',
	'E minor',
	'B minor',
	'F minor',
	'Bb minor',
	'Eb minor',
	'Ab minor',
	'Db minor',
	'Gb minor',
];

export const allScales = majorScales.concat(minorScales)