import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getNameByTempo } from '../constants/musicConstants';
import { Slider } from '@miblanchard/react-native-slider';
import { useDispatch, useSelector } from 'react-redux';
import { getTempo } from '../helpers/selectors';
import { setTempoAction } from '../actions/staffActions';

const Metronome = () => {
    const dispatch = useDispatch();
    const tempo = useSelector(getTempo);
    return (
        <View style={styles.container}>
            <View style={styles.wordContainer}>
                <Text style={styles.word}>{getNameByTempo(tempo)}</Text>
                <Text style={styles.tempo}>{tempo}</Text>
            </View>
            <View style={styles.sliderContainer}>
                <Slider
                    maximumValue={240}
                    minimumValue={20}
                    step={1}
                    value={tempo}
                    onValueChange={value => dispatch(setTempoAction(value))}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wordContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    word: {
        fontSize: 32,
    },
    tempo: {
        marginTop: 64,
        fontSize: 64,
    },

    sliderContainer: {
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '80%',
        flex: 3
    }
});

export default Metronome;

/*
export const tempos = {
    Grave: 20,
    Largo: 40,
    Adagio: 55,
    Andante: 72,
    Moderato: 86,
    Allegro: 109,
    Vivace: 140,
    Presto: 168,
    Prestissimo: 200,
}*/