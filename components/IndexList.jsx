import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { chromaticScaleAllVariations } from '../constants/musicConstants';
import IndexItem from './IndexItem';

const generateRows = (selection, clef) => {
    const range = clef === 'treble' ? 4 : 3;
    if (selection === 'notes') {
        return chromaticScaleAllVariations.map((note, index) => (<IndexItem key={index} label={note} range={range} clef={clef} />))
    } else if (selection === 'chords') {

    } else if (selection === 'scales') {

    }
}

const IndexList = ({ route }) => {
    const { selection, clef } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView>
                {generateRows(selection, clef)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default IndexList;
