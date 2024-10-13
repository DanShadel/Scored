import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

const TitleButton = ({ title, onPress, disabled }) => {
	return (
		<View style={styles.shadowContainer}>
			<TouchableOpacity style={disabled ? styles.containerDisabled : styles.container} onPress={disabled ? () => console.log('sike lol ' + title) : onPress}>
				<Text style={disabled ? styles.textDisabled : styles.text}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({

	shadowContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '80%',
		height: 64,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 16,
		shadowColor: "#000000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: .5,
		elevation: 2,
	},

	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		borderWidth: 1,

		backgroundColor: colors.paperWhite,
	},

	text: { fontSize: 24 },

	containerDisabled: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		borderWidth: 0,
		borderColor: colors.paperWhite,

		backgroundColor: 'rgba(155,155,155,.5)',

	},

	textDisabled: {
		fontSize: 24,
		color: 'rgba(30,30,30,.5)',
	}

});

export default TitleButton;