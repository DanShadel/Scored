import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TitleButton = ({title, onPress, disabled}) => {
	return (
		<TouchableOpacity style={disabled ? styles.containerDisabled : styles.container} onPress={disabled ? () => console.log('sike lol ' + title) : onPress}>
			<Text style={disabled ? styles.textDisabled : styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#D8D8D8',
		borderWidth: 2,
		marginTop: 16,
		width: '80%',
		height: 64,
		borderRadius: 24,
	},

	text: {fontSize: 24},

	containerDisabled: {
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#D8D8D8',
		borderWidth: 2,
		marginTop: 16,
		width: '80%',
		height: 64,
		backgroundColor: 'rgba(155,155,155,.5)',
		borderRadius: 24,
	},

	textDisabled: {
		fontSize: 24,
		color: 'rgba(30,30,30,.5)',
	}

});

export default TitleButton;