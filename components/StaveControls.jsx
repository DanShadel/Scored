import React from 'react';
import { StyleSheet, View } from 'react-native';
import AccidentalSelector from './AccidentalSelector';
import ClefSelector from './ClefSelector';
import RangeSelector from './RangeSelector';

const StaveControls = ({showAccidentals}) => {
    return (
        <View style={showAccidentals ? styles.containerAccidental : styles.container}>
            {showAccidentals && 
                <View style={styles.accidentals}>
                    <AccidentalSelector/>
                </View>} 
            <View style={styles.row}> 
                <RangeSelector />
                <ClefSelector />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerAccidental: {
        flex: .5,
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        justifyContent:'flex-start',
    },
    container: {
        flex: .5,
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    accidentals: {
        justifyContent:'flex-start',
        marginBottom: 4,
      
    },
});

export default StaveControls;
