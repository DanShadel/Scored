import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Scale } from 'tonal';

const Test = () => {

    console.log(Scale.get('B chromatic'))
    return (
        <View style={styles.container}>
            <Text>Test</Text>
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

export default Test;
