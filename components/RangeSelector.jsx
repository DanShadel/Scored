import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setClefAction, setRangeAction } from '../actions/staveActions';
import BassClef from "../assets/bassClef.svg";
import TrebleClef from "../assets/trebleClef.svg";
import { getClef, getRange } from '../constants/selectors';



// <View style={styles.rangeContainer}>
{/* <HalfButton title={'-'} onPress={() => setRangeWithLimit(-1)} />
<Text style={styles.range}> {range} </Text>
<HalfButton title={'+'} onPress={() => setRangeWithLimit(1)} />
</View> */}



const RangeSelector = () => {
    const dispatch = useDispatch()
    const range = useSelector(getRange);
    console.log(range)

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => setRangeAction}>
                    <Text style={styles.text}> - </Text>
                </TouchableOpacity>
                <Text style={styles.rangeLabel}>{range}</Text>
                <TouchableOpacity style={styles.button} onPress={() => setRangeWithLimits(range, -1)}>
                    <Text style={styles.text}> + </Text>
                </TouchableOpacity>
            </View >
        </View >
    );
};

const setRangeWithLimits = (range, amount) => {
    //TODO: this

}

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
    row: {
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        fontSize: 32
    },
    rangeLabel: {
        fontSize: 32,
    }

});

export default RangeSelector;