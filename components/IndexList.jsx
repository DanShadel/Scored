import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { chromaticScaleAllVariations } from '../constants/musicConstants';
import HalfButton from './HalfButton';
import IndexItem from './IndexItem';

const generateRows = (selection, clef, range) => {

    if (selection === 'notes') {
        return chromaticScaleAllVariations.slice().reverse().map((note, index) => (<IndexItem key={index} label={note} range={range} clef={clef} />))
    } else if (selection === 'chords') {

    } else if (selection === 'scales') {

    } else if (selection === 'keys') {
        // Key Signatures
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
                <HalfButton title={'+'} onPress={() => setRange(range + 1)} />
                <Text style={styles.range}> {range} </Text>
                <HalfButton title={'-'} onPress={() => setRange(range - 1)} />
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
