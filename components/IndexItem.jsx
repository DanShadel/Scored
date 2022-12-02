import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Note } from '../helpers/Note';
import Stave from './Stave';
import { Dimensions } from 'react-native';

const IndexItem = ({ label, range, clef }) => {

    console.log(clef)
    const notes = [new Note(label, range)];
    console.log(notes)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
            <View style={styles.stave}><Stave {...{ notes, clef }} /></View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 16,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    stave: {
        height: 100
    }

});

export default IndexItem;
