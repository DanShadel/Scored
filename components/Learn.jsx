import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ClefSelector from './ClefSelector';
import RangeSelector from './RangeSelector';

const Learn = () => {
    return (
        <View style={styles.container}>
            <RangeSelector />
            <ClefSelector />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    },
});

export default Learn;