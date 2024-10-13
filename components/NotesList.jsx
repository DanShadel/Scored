
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Scale } from 'tonal';
import IndexItem from './IndexItem';
import { getAccidental, getRange, getClef } from '../helpers/selectors';
import { useSelector } from 'react-redux';
import { Note } from '../helpers/Note';
import StaffControls
    from './StaffControls';
const NotesList = () => {
    const notes = Scale.get('C major').notes
    console.log('---------')
    console.log(notes)

    const range = useSelector(getRange);
    const clef = useSelector(getClef);
    const accidental = useSelector(getAccidental);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <IndexItem label={'C' + accidental} notes={[new Note('C' + accidental, range)]} clef={clef} beats={1} />
                <IndexItem label={'D' + accidental} notes={[new Note('D' + accidental, range)]} clef={clef} beats={1} />
            </View>
            <View style={styles.row}>
                <IndexItem label={'E' + accidental} notes={[new Note('E' + accidental, range)]} clef={clef} beats={1} />
                <IndexItem label={'F' + accidental} notes={[new Note('F' + accidental, range)]} clef={clef} beats={1} />
            </View>
            <View style={styles.row}>
                <IndexItem label={'G' + accidental} notes={[new Note('G' + accidental, range)]} clef={clef} beats={1} />
                <IndexItem label={'A' + accidental} notes={[new Note('A' + accidental, range)]} clef={clef} beats={1} />
            </View>
            <View style={styles.row}>
                <IndexItem label={'B' + accidental} notes={[new Note('B' + accidental, range)]} clef={clef} beats={1} />
                {/* <IndexItem label={'C' + accidental} notes={[new Note('D' + accidental, range + 1)]} clef={clef} beats={1} /> */}
            </View>
            <View style={styles.controls}>
                <StaffControls showAccidentals={true} />
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: Dimensions.get('window').width,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    controls: { flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 64 }
});

export default NotesList;