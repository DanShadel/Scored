import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NotoFontPack, ReactNativeSVGContext } from 'standalone-vexflow-context';
import Vex from 'vexflow';
import { getNoteMods } from '../helpers/helpers';

const generateContext = (clef, width) => {
    const context = new ReactNativeSVGContext(NotoFontPack, {
        width,
        height: 300,
    });
    const stave = new Vex.Flow.Stave(0, 0, width);
    stave.setContext(context);
    stave.setClef(clef);
    stave.draw();
    return [context, stave];
}


const drawOneBeat = (clef, notes) => {
    const width = 100;
    const [context, stave] = generateContext(clef, width);
    console.log(notes.map(note => note.name + '/' + note.range))
    const tick = [new Vex.Flow.StaveNote({
        keys: notes.map(note => note.name + '/' + note.range),
        duration: 'q',
        clef: clef
    })];

    notes.forEach((note, index) => {
        const { mods } = note.getNoteMods();
        if (mods) {
            tick[0].addAccidental(index, new Vex.Flow.Accidental(mods));
        }
    })

    console.log(tick)
    const voice = new Vex.Flow.Voice({ num_beats: 1, beat_value: 4 });
    voice.addTickables(tick);
    new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 300)
    voice.draw(context, stave)

    return { context, stave };
}

const Stave = ({ clef, notes }) => {

    const { context, stave } = drawOneBeat(clef, notes);


    return (
        <View >
            {context.render()}
        </View>
    );
};

export default Stave;
