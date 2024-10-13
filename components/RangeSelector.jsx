import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setRangeAction} from '../actions/staffActions';
import {getRange} from '../helpers/selectors';


const RangeSelector = () => {
	const dispatch = useDispatch();
	const range = useSelector(getRange);

	const setRangeWithLimit = (amount) => {
		if (range + amount >= 7) { // upper limit = 6
			dispatch(setRangeAction(range));
		} else if (range + amount <= 0) { // lower limit = 1
			dispatch(setRangeAction(range));
		} else {
			dispatch(setRangeAction(range + amount));
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<TouchableOpacity style={styles.button} onPress={() => setRangeWithLimit(-1)}>
					<Text style={styles.text}> - </Text>
				</TouchableOpacity>
				<Text style={styles.rangeLabel}>{range}</Text>
				<TouchableOpacity style={styles.button} onPress={() => setRangeWithLimit(1)}>
					<Text style={styles.text}> + </Text>
				</TouchableOpacity>
			</View >
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
	row: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	text: {

		alignItems: 'center',
		fontSize: 32
	},
	rangeLabel: {fontSize: 32,}

});

export default RangeSelector;