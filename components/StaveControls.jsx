import React from 'react';
import { StyleSheet, View } from 'react-native';
import ClefSelector from './ClefSelector';
import RangeSelector from './RangeSelector';

const StaveControls = () => {
    return (
        <View style={styles.container}>
            <RangeSelector />
            <ClefSelector />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: .5,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',

    },
});

export default StaveControls;
