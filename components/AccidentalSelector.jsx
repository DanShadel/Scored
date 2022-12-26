import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Flat from '../assets/flat.svg';
import Sharp from '../assets/sharp.svg';
import Natural from '../assets/natural.svg';
import {getAccidental} from '../helpers/selectors';
import {setAccidenalAction} from '../actions/staveActions';

const AccidentalSelector = () => {
	const dispatch = useDispatch();
	const accidental = useSelector(getAccidental);

	return (
		<View style={styles.container}>
			<View style={styles.buttonRow}>
				<TouchableOpacity style={accidental === 'b' ? styles.buttonSelected : styles.button} onPress={() => dispatch(setAccidenalAction('b'))}>
					<Flat height={'32'}/>
				</TouchableOpacity>
				<TouchableOpacity style={accidental === '' ? styles.buttonSelected : styles.button} onPress={() => dispatch(setAccidenalAction(''))}>
					<Natural height={'28'}/>
				</TouchableOpacity>
				<TouchableOpacity style={accidental === '#' ? styles.buttonSelected : styles.button} onPress={() => dispatch(setAccidenalAction('#'))}>
					<Sharp height={'32'}/>
				</TouchableOpacity>
			</View>
		</View >
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '50%',
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#D8D8D8',
		borderWidth: 2,
		width: 52,
		height: 52,
		borderRadius: 12,
	},
	buttonRow: {
		flexDirection: 'row',
		width: '100%',
		height: '10%',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	text: {fontSize: 24},
	buttonSelected: {
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#A8A8A8',
		borderWidth: 2,
		width: 52,
		height: 52,
		borderRadius: 12,
		backgroundColor: 'rgba(155,155,155,.5)',
	}
});

export default AccidentalSelector;
