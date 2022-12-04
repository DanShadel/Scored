import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Stave from './Stave';

const IndexItem = ({ label, clef, notes }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
            <View style={styles.stave}><Stave notes={notes} clef={clef} beats={1} /></View>
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