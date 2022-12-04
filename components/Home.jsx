import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleButton from './TitleButton';

const Home = ({ navigation }) => {
    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Scored</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TitleButton title={"Learn"} onPress={() => { navigation.navigate('Learn') }} disabled={true} />
                <TitleButton title={"Quiz"} onPress={() => { navigation.navigate('QuestionClefSelection') }} />
                <TitleButton title={"Metronome"} onPress={() => { navigation.navigate('Metronome') }} disabled={true} />
                <TitleButton title={"Tuner"} onPress={() => { navigation.navigate('Tuner') }} disabled={true} />
                <TitleButton title={"Index"} onPress={() => { navigation.navigate('IndexClefSelection') }} />
            </View>
        </>
    );
};

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
        flex: 4,
        alignItems: 'center',
    }
});

export default Home;