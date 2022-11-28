//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleButton from './TitleButton';

// create a component
const Home = ({ navigation }) => {
    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Scored</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TitleButton title={"Learn"} onPress={() => { navigation.navigate('Learn') }} disabled={true} />
                <TitleButton title={"Quiz"} onPress={() => { navigation.navigate('Quiz') }} />
                <TitleButton title={"Metronome"} onPress={() => { navigation.navigate('Metronome') }} disabled={true} />
                <TitleButton title={"Tuner"} onPress={() => { navigation.navigate('Tuner') }} disabled={true} />
                <TitleButton title={"Index"} onPress={() => { navigation.navigate('Index') }} disabled={true} />
            </View>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    titleContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
    },

    titleText: {
        fontSize: 64,
        color: 'black',
    },

    buttonContainer: {
        flex: 3,
        alignItems: 'center',
    }
});

//make this component available to the app
export default Home;
