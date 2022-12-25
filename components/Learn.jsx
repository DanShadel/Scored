import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Learn = () => {
    return (
        <View style={styles.container}>
            <Text>sup</Text>
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D8D8D8',
        borderWidth: 2,
        width: 52,
        height: 52,
        borderRadius: 12,
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {

        alignItems: 'center',
        fontSize: 32
    },
    rangeLabel: {
        fontSize: 32,
    }

});

export default Learn;