import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const HalfButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D8D8D8',
        borderWidth: 2,
        marginTop: 16,
        width: '20%',
        height: 64,
        borderRadius: 24,
    },
    text: {
        fontSize: 24
    },

});

export default HalfButton;
