import React from 'react';
import { View } from 'react-native';
import { NotoFontPack, ReactNativeSVGContext } from 'standalone-vexflow-context';
import { note, Note } from 'tonal';
import Vex from 'vexflow';

const generateContext = (clef, width) => {
	const context = new ReactNativeSVGContext(NotoFontPack, {
		width,
		height: 300,
	});
	const staff = new Vex.Flow.Stave(0, 0, width);
	staff.setContext(context);
	staff.setClef(clef);
	staff.draw();
	return [context, staff];
};

const drawOneBeat = (clef, notes) => {
	const width = 100;
	const [context, staff] = generateContext(clef, width);

	let nextOctave = false;
	const tick = [new Vex.Flow.StaveNote({
		keys: notes.map((note, index) => {
			if (note.name[0] === 'C' && index !== 0) {
				nextOctave = true;
			}

			const range = nextOctave ? note.range + 1 : note.range;
			return note.name + '/' + range;
		}),
		duration: 'q',
		clef: clef
	})];

	notes.forEach((note, index) => {
		// code here will place accidentals in wrong spots occasionally
		// see https://github.com/0xfe/vexflow/issues/104

		const { mods } = note.getNoteMods();
		if (mods) {
			tick[0].addAccidental(index, new Vex.Flow.Accidental(mods));
		}
	});

	const voice = new Vex.Flow.Voice({
		num_beats: 1,
		beat_value: 4
	});
	voice.addTickables(tick);
	new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 300);
	voice.draw(context, staff);

	return {
		context,
		staff
	};
};

const drawScale = (clef, notes, keySignature) => {
	// notes = [Note(name, range), Note(name,range)....]
	const width = 250;
	const [context, staff] = generateContext(clef, width);

	const ticks = notes.map((note) => {
		return (new Vex.Flow.StaveNote({
			keys: [note.name + '/' + note.range],
			duration: '8',
			clef: clef
		}));
	});

	notes.forEach((note, index) => {
		const { mods } = note.getNoteMods();
		if (mods) {
			ticks[index].addAccidental(0, new Vex.Flow.Accidental(mods));
		}
	});

	const beams = [new Vex.Flow.Beam(ticks)];

	const voice = new Vex.Flow.Voice({
		num_beats: 4,
		beat_value: 4
	});
	voice.addTickables(ticks);
	new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 200);
	voice.draw(context, staff);

	beams.forEach((b) => {
		b.setContext(context).draw();
	});

	return {
		context,
		staff
	};
};

const drawKeySignature = (clef, keySignature) => {
	const width = 100;
	const [context, staff] = generateContext(clef, width);

	staff.setKeySignature(keySignature);
	staff.draw();


	return {
		context,
		staff
	};
};

const Staff = ({ clef, notes, beats, keySignature }) => {
	let context, staff;
	switch (beats) {
		case 0:
			({ context, staff } = drawKeySignature(clef, keySignature));
			break;
		case 1:
			({ context, staff } = drawOneBeat(clef, notes));
			break;
		case 4:
			({ context, staff } = drawScale(clef, notes, keySignature));
			break;
	}


	return (
		<View >
			{context.render()}
		</View>
	);
};

export default Staff;
