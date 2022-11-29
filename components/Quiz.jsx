import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Question from './Question';

const Quiz = () => {
    return (


        <Question />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Quiz;