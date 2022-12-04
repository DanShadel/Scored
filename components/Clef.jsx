
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TitleButton from './TitleButton';

const Clef = ({ navigation, route }) => {
    const { path } = route.params;

    return (
        <View style={styles.container}>
            <Text> Select a clef </Text>
            <TitleButton title="Treble" onPress={() => navigation.navigate(path, { clef: 'treble' })} />
            <TitleButton title="Bass" onPress={() => navigation.navigate(path, { clef: 'bass' })} />
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

export default Clef;
