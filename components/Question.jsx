import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getRandomChord, getRangeByClef, getTriad, pickOne } from '../helpers/helpers';
import { bassRange, chromaticScale, chromaticScaleAllVariations, CMaj, trebleRange, scaleList } from '../constants/musicConstants';
import Stave from './Stave';
import { Note } from '../helpers/Note';
import TitleButton from './TitleButton';
import { useSelector } from 'react-redux';
import { getClef } from '../helpers/selectors';
import StaveControls from './StaveControls';


const Question = ({ navigation }) => {

    const clef = useSelector(getClef);
    const [notes, setNotes] = React.useState([]);
    const [displayAnswer, setDisplayAnswer] = React.useState(false);
    const [answer, setAnswer] = React.useState('');

    const generateNote = () => {
        setDisplayAnswer(false);
        const range = getRangeByClef(clef);
        const note1 = new Note(pickOne(chromaticScaleAllVariations), pickOne(range))
        setNotes([note1])
        setAnswer(note1.name)
    }

    const generateChord = ({ name, scale }) => {
        setDisplayAnswer(false);
        const triad = getTriad(scale);
        const range = getRangeByClef(clef);
        const position = pickOne(range); //make all notes the same range
        const chord = triad.map(note => new Note(note, position))

        console.log(chord)
        setNotes(chord)
        setAnswer(name)
    }

    React.useEffect(() => {
        generateNote();
    }, [])


    return (
        <View style={styles.container}>
            {notes.length > 0 ? <View style={styles.stave}><Stave notes={notes} clef={clef} beats={1} /></View> : <></>}

            {displayAnswer ?
                <View style={styles.bottomContainer}>
                    <TitleButton title="New Note" onPress={() => generateNote()} />
                    <TitleButton title="New Chord" onPress={() => generateChord(getRandomChord())} />
                    <Text style={styles.answer}>{answer}</Text>
                </View>
                :
                <View style={styles.bottomContainer}>
                    <TitleButton title="Show Answer" onPress={() => setDisplayAnswer(true)} />
                </View>
            }
            <View style={styles.controls}>
                <StaveControls />
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    answer: {
        marginTop: 64,
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
    },
    controls: {
        flex: .5,
    }

});

export default Question;