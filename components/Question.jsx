import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { pickOne } from '../helpers/helpers';
import { chromaticScale, trebleRange } from '../constants/musicConstants';
import Stave from './Stave';
import { Note } from '../helpers/Note';
import TitleButton from './TitleButton';


const Question = () => {
    const [notes, setNotes] = React.useState([]);
    const [clef, setClef] = React.useState('treble');

    const generateNote = () => {
        const note1 = new Note(pickOne(chromaticScale), pickOne(trebleRange))
        setNotes([note1])
    }

    React.useEffect(() => {
        generateNote();
    }, [])

    return (
        <View style={styles.container}>
            {notes.length > 0 ? <Stave {...{ notes, clef }} /> : <></>}

            <Text>Here's where the question will go</Text>
            <TitleButton title="new note" onPress={() => generateNote()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Question;