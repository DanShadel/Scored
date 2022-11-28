import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Learn = () => {
    return (
        <View style={styles.container}>
            <Text>Learn</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Learn;