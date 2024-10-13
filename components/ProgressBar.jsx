//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constants/colors';


const ProgressBar = () => {


    // TODO: hook bar up to if you get questions right
    const numCorrect = 10;
    const goal = 10;
    return (
        <View style={styles.container}>
            <View style={{ ...styles.fill, backgroundColor: getColor(numCorrect, goal), width: getWidth(numCorrect, goal) }}></View>
        </View >
    );
};

const getColor = (numCorrect, goal) => {
    const percentage = numCorrect / goal;


    if (percentage < .40) {
        return '#DC3545';
    } else if (percentage < .55) {
        return '#D5873D';
    } else if (percentage < .70) {
        return '#F2D261';
    } else if (percentage < .85) {
        return '#9BAA4B';
    } else if (percentage < 1) {
        return '#6FA053';
    }
    else {
        return 'green'
    }
}

const getWidth = (numCorrect, goal) => {
    const fullWidth = Dimensions.get('window').width * .8;

    const percentage = numCorrect / goal;
    return fullWidth * percentage;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderColor: colors.light,
        borderWidth: 1,
        borderRadius: 16,
        width: Dimensions.get('window').width * .8,

    },
    fill: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderRadius: 16,
    }
});

export default ProgressBar;
