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
            notes = scaleList[scale].map((note, noteInd) => {
                if (note[0] === 'C' && noteInd !== 0) {
                    nextOctave = true;
                }
                const noteRange = nextOctave ? range + 1 : range
                return (new Note(note, noteRange))
            })

            return (<IndexItem key={index} label={scale} clef={clef} notes={notes} beats={4} />)
        })
    } else if (selection === 'keys') {
        return Object.keys(scaleList).map((scale, index) => {
            return (<IndexItem key={index} label={scale} clef={clef} notes={[]} beats={0} keySignature={scaleList[scale][0]} />)
        })
    }
}

const IndexList = ({ route }) => {
    const { selection, clef } = route.params;
    const [range, setRange] = React.useState(4);

    React.useEffect(() => {
        setRange(clef === 'treble' ? 4 : 3);
    }, [])

    const setRangeWithLimit = (amount) => {
        if (clef === 'treble') {
            if (range + amount >= 7) {
                setRange(range)
            } else if (range + amount <= 2) { // lower limit
                setRange(range);
            } else {
                setRange(range + amount)
            }
        } else if (clef === 'bass') {
            if (range + amount >= 5) {
                setRange(range)
            } else if (range + amount <= 0) { // lower limit
                setRange(range);
            } else {
                setRange(range + amount)
            }
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {generateRows(selection, clef, range)}
            </ScrollView>

            {selection !== 'keys' ?
                (<>
                    <Text style={styles.octave}> Octave:</Text>
                    <View style={styles.rangeContainer}>
                        <HalfButton title={'-'} onPress={() => setRangeWithLimit(-1)} />
                        <Text style={styles.range}> {range} </Text>
                        <HalfButton title={'+'} onPress={() => setRangeWithLimit(1)} />
                    </View>
                </>)
                : <></>
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
