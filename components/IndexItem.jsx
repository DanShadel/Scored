import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Staff from './Staff';

const IndexItem = ({ label, clef, notes, beats, keySignature }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{label}</Text>
			<View style={styles.staff}><Staff notes={notes} clef={clef} beats={beats} keySignature={keySignature} /></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('window').width,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 16,
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 20,
	},
	staff: { height: 100 }
});

export default IndexItem;
