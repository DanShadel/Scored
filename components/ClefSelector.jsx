import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setClefAction } from '../actions/staveActions';
import BassClef from "../assets/bassClef.svg";
import TrebleClef from "../assets/trebleClef.svg";
import { getClef } from '../helpers/selectors';

const ClefSelector = () => {
    const dispatch = useDispatch()
    const clef = useSelector(getClef);
    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={clef === 'bass' ? styles.buttonSelected : styles.button} onPress={() => dispatch(setClefAction('bass'))}>
                    <BassClef width={"28"} height={"28"} />
                </TouchableOpacity>
                <TouchableOpacity style={clef === 'treble' ? styles.buttonSelected : styles.button} onPress={() => dispatch(setClefAction('treble'))}>
                    <TrebleClef width={"32"} height={"48"} />
                </TouchableOpacity>
            </View>
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
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
    buttonRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        fontSize: 24
    },
    buttonSelected: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#A8A8A8',
        borderWidth: 2,
        width: 52,
        height: 52,
        borderRadius: 12,
        backgroundColor: 'rgba(155,155,155,.5)',
    }
});

export default ClefSelector;
