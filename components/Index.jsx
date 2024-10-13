import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleButton from './TitleButton';

const Index = ({ navigation, route }) => {
	return (
		<>
			<View style={styles.spacing} />
			<View style={styles.container}>
				<TitleButton title="Notes" onPress={() => navigation.navigate('IndexList', { selection: 'notes' })} />
				<TitleButton title="Chords" onPress={() => navigation.navigate('IndexList', { selection: 'chords' })} />
				<TitleButton title="Scales" onPress={() => navigation.navigate('IndexList', { selection: 'scales' })} />
				<TitleButton title="Key Signatures" onPress={() => navigation.navigate('IndexList', { selection: 'keys' })} />
			</View>
			<View style={styles.spacing} />
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},
	spacing: {
		flex: 1
	}
});

export default Index;