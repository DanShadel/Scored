import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { scaleList, chromaticScaleAllVariations } from '../constants/musicConstants';
import { getTriad, getTriadWithRange } from '../helpers/helpers';
import HalfButton from './HalfButton';
import IndexItem from './IndexItem';
import { Note } from '../helpers/Note';

const generateRows = (selection, clef, range) => {
    let notes = [];
    let nextOctave = false;

    if (selection === 'notes') {
        return chromaticScaleAllVariations.map((note, index) => (<IndexItem key={index} label={note} notes={[new Note(note, range)]} clef={clef} beats={1} />))
    } else if (selection === 'chords') {
        return Object.keys(scaleList).map((key, index) => {
            notes = getTriadWithRange(scaleList[key], range).map((note) => (new Note(note.name, note.range)))
            return (<IndexItem key={index} label={key} clef={clef} notes={notes} beats={1} />)
        })
    } else if (selection === 'scales') {
        return Object.keys(scaleList).map((scale, index) => {
            console.log(scale)
            notes = scaleList[scale].map((note, noteInd) => {
                if (note[0] === 'C' && noteInd !== 0) {
                    nextOctave = true;
                }
                const noteRange = nextOctave ? range + 1 : range
                console.log(note, noteRange)
                return (new Note(note, noteRange))
            })

            return (<IndexItem key={index} label={scale} clef={clef} notes={notes} beats={4} />)
        })
    }
}

const IndexList = ({ route }) => {
    const { selection, clef } = route.params;
    const [range, setRange] = React.useState(4);

    React.useEffect(() => {
        setRange(clef === 'treble' ? 4 : 3);
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {generateRows(selection, clef, range)}
            </ScrollView>
            <Text style={styles.octave}> Octave:</Text>
            <View style={styles.rangeContainer}>
                <HalfButton title={'-'} onPress={() => setRange(range - 1)} />
                <Text style={styles.range}> {range} </Text>
                <HalfButton title={'+'} onPress={() => setRange(range + 1)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rangeContainer: {
        flex: .15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32,

    },
    scroll: {
        flex: 50,
        flexDirection: 'column',
    },
    range: {
        fontSize: 48,
        width: 64,
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
    },
    octave: {
        marginTop: 16,
        fontSize: 24,
    }
});

export default IndexList;
