import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Scale } from 'tonal';
import { allScales, majorScales, minorScales } from '../constants/musicConstants';
import { getTriadWithRange } from '../helpers/helpers';
import { Note } from '../helpers/Note';
import { getAccidental, getClef, getRange } from '../helpers/selectors';
import IndexItem from './IndexItem';
import StaffControls from './StaffControls';

const generateRows = (selection, clef, range, accidental) => {
	let notes = [];
	let nextOctave = false;

	if (selection === 'notes') {
		notes = Scale.get('C major').notes;
		return notes.map((note, index) => (<IndexItem key={index} label={note + accidental} notes={[new Note(note + accidental, range)]} clef={clef} beats={1} />));
	} else if (selection === 'chords') {
		return allScales.map((scaleName, index) => {

			notes = getTriadWithRange(Scale.get(scaleName).notes, range).map((note) => (new Note(note.name, note.range)));
			return (<IndexItem key={index} label={scaleName} clef={clef} notes={notes} beats={1} />);
		});
	} else if (selection === 'scales') {
		// For now, only display major scales
		// Rendering all scales is takes to long to load and impacts performance
		// Eventually, split this into another selection

		// 1. Major
		// 2. Minor
		// 3. Pentatonic
		// 4. Dorian
		// 5. Phrygian
		// etc..

		return majorScales.map((scaleName, index) => {
			const notesInScale = Scale.get(scaleName).notes;
			notes = notesInScale.map((note, noteInd) => {

				if (note[0] === 'C' && noteInd > 0) {
					nextOctave = true;
				}

				const noteRange = nextOctave ? range + 1 : range;
				return (new Note(note, noteRange));
			});

			nextOctave = false;
			notes.push(new Note(notesInScale[0], range + 1));

			return (<IndexItem key={index} label={scaleName} clef={clef} notes={notes} beats={4} />);
		});
	} else if (selection === 'keys') {

		return majorScales.map((scaleName, index) => {
			const notesInScale = Scale.get(scaleName).notes;
			return (<IndexItem key={index} label={scaleName} clef={clef} notes={[]} beats={0} keySignature={notesInScale[0]} />);
		});
	}
};

const IndexList = ({ route }) => {
	const { selection } = route.params;
	const range = useSelector(getRange);
	const clef = useSelector(getClef);
	const accidental = useSelector(getAccidental);
	return (
		<View style={styles.container}>
			<ScrollView style={styles.scroll}>
				{generateRows(selection, clef, range, accidental)}
			</ScrollView>
			<View style={styles.controls}>
				<StaffControls showAccidentals={selection === 'notes'} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	scroll: {
		flex: 1,
		flexDirection: 'column',
	},
	controls: { flex: .25, justifyContent: 'center', alignItems: 'center', marginBottom: 32 }
});

export default IndexList;
