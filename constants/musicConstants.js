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

export const tempos = {
	Grave: 20,
	Largo: 40,
	Adagio: 55,
	Andante: 72,
	Moderato: 86,
	Allegro: 109,
	Vivace: 140,
	Presto: 168,
	Prestissimo: 200,
}

export const getNameByTempo = (tempo) => {
	let label = 'Grave';
	Object.keys(tempos).forEach((tempoMarking) => {
		if (tempo >= tempos[tempoMarking]) {
			label = tempoMarking
		}
	})
	return label;
}