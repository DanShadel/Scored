import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleButton from './TitleButton';

const Index = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <TitleButton title="Notes" onPress={() => navigation.navigate('IndexList', { selection: 'notes' })} />
            <TitleButton title="Chords" onPress={() => navigation.navigate('IndexList', { selection: 'chords' })} />
            <TitleButton title="Scales" onPress={() => navigation.navigate('IndexList', { selection: 'scales' })} />
            <TitleButton title="Key Signatures" onPress={() => navigation.navigate('IndexList', { selection: 'keys' })} />

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