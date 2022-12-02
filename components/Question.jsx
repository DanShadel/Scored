import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getRangeByClef, getTriad, pickOne } from '../helpers/helpers';
import { bassRange, chromaticScale, chromaticScaleAllVariations, CMaj, trebleRange } from '../constants/musicConstants';
import Stave from './Stave';
import { Note } from '../helpers/Note';
import TitleButton from './TitleButton';


const Question = ({ navigation, route }) => {

    const { clef } = route.params;
    const [notes, setNotes] = React.useState([]);
    const [displayAnswer, setDisplayAnswer] = React.useState(false)

    const generateNote = () => {
        setDisplayAnswer(false);
        console.log(clef)
        const range = getRangeByClef(clef);
        const note1 = new Note(pickOne(chromaticScaleAllVariations), pickOne(range))
        setNotes([note1])
    }

    const generateChord = (scale) => {
        const triad = getTriad(scale);
        const range = getRangeByClef(clef);
        const chord = triad.map(note => new Note(note, pickOne(range)))

        console.log(chord)
        setNotes(chord)
    }

    React.useEffect(() => {
        generateNote();
    }, [])

    return (
        <View style={styles.container}>
            {notes.length > 0 ? <View style={styles.stave}><Stave {...{ notes, clef }} /></View> : <></>}

            {displayAnswer ?
                <View style={styles.bottomContainer}>
                    <TitleButton title="New Note" onPress={() => generateNote()} />
                    <TitleButton title="New Chord" onPress={() => generateChord(CMaj)} />
                    <Text style={styles.answer}>{notes[0].name}</Text>
                </View>
                :
                <View style={styles.bottomContainer}>
                    <TitleButton title="Show Answer" onPress={() => setDisplayAnswer(true)} />
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    answer: {
        marginTop: 16,
        fontSize: 32,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    bottomContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    stave: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }

});

export default Question;