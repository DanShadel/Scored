import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { pickOne } from '../helpers/helpers';
import { bassRange, chromaticScale, trebleRange } from '../constants/musicConstants';
import Stave from './Stave';
import { Note } from '../helpers/Note';
import TitleButton from './TitleButton';


const Question = () => {
    const [notes, setNotes] = React.useState([]);
    const [clef, setClef] = React.useState('bass');
    const [displayAnswer, setDisplayAnswer] = React.useState(false)

    const generateNote = () => {
        setDisplayAnswer(false);

        const note1 = new Note(pickOne(chromaticScale), pickOne(bassRange))
        setNotes([note1])
    }

    React.useEffect(() => {
        generateNote();
    }, [])

    return (
        <View style={styles.container}>
            {notes.length > 0 ? <Stave {...{ notes, clef }} /> : <></>}

            {displayAnswer ?
                <>
                    <TitleButton title="New Question" onPress={() => generateNote()} />
                    <Text style={styles.answer}>{notes[0].name}</Text>
                </>
                : <TitleButton title="Show Answer" onPress={() => setDisplayAnswer(true)} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    answer: {
        marginTop: 16,
        fontSize: 32,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    }
});

export default Question;