import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';
const AnswerButton = ({ answerChoice, showAnswer, correct, onPress }) => {

    const getAnswerChoiceButton = () => {
        return (<TouchableOpacity onPress={onPress} style={styles.defaultButton} >
            <Text style={styles.answerText}> {answerChoice}</Text>
        </TouchableOpacity >)
    };
    const getAnsweredButton = () => {
        return (<TouchableOpacity style={correct ? styles.correctButton : styles.incorrectButton}>
            <Text style={styles.answerText}> {answerChoice}</Text>

        </TouchableOpacity>)
    };

    return (
        <View style={styles.shadowContainer}>
            {!showAnswer ? getAnswerChoiceButton() : getAnsweredButton()}
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

    defaultButton: {
        flex: 1,
        width: 128,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: colors.paperWhite,
    },

    correctButton: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: colors.greenComplete
    },
    incorrectButton: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: colors.redFail
    },

    answerText: {
        fontSize: 32,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontFamily: 'Darwin'
    },
});

export default AnswerButton;
