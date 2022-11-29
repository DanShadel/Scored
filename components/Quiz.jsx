import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Question from './Question';
import TitleButton from './TitleButton';

const Quiz = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Select a clef to practice </Text>
            <TitleButton title="Treble" onPress={() => navigation.navigate('Question', { clef: 'treble' })} />
            <TitleButton title="Bass" onPress={() => navigation.navigate('Question', { clef: 'bass' })} />
        </View>
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