import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleButton from './TitleButton';

const Index = ({ navigation, route }) => {
    const { clef } = route.params
    return (
        <View style={styles.container}>
            <TitleButton title="Notes" onPress={() => navigation.navigate('IndexList', { selection: 'notes', clef })} />
            <TitleButton title="Chords" onPress={() => navigation.navigate('IndexList', { selection: 'chords', clef })} />
            <TitleButton title="Scales" onPress={() => navigation.navigate('IndexList', { selection: 'scales', clef })} />
            <TitleButton title="Key Signatures" onPress={() => navigation.navigate('IndexList', { selection: 'keys', clef })} />

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

export default Index;