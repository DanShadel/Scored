import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NotoFontPack, ReactNativeSVGContext } from 'standalone-vexflow-context';
import Vex from 'vexflow';

const generateContext = (clef, width) => {
    const context = new ReactNativeSVGContext(NotoFontPack, {
        width: 100,
        height: 300,
    });
    const stave = new Vex.Flow.Stave(0, 0, width);
    stave.setContext(context);
    stave.setClef(clef);
    stave.draw();
    return [context, stave];
}

const Stave = ({ clef, notes }) => {
    const width = 300;
    const [context, stave] = generateContext(clef, width);

    let staveNotes = []
    staveNotes = notes.map(note => {
        const { letter, mods } = note.getNoteMods();
        let staveNote
        if (mods) { // no work :(
            staveNote = new Vex.Flow.StaveNote({
                keys: [note.name + '/' + note.range],
                duration: 'q',
                clef: clef
            }).addAccidental(0, new Vex.Flow.Accidental(mods))

            console.log(mods)
        } else {
            staveNote = new Vex.Flow.StaveNote({
                keys: [note.name + '/' + note.range],
                duration: 'q',
                clef: clef
            });
        }

        return staveNote;
    });

    const voice = new Vex.Flow.Voice({ num_beats: 1, beat_value: 4 });
    voice.addTickables(staveNotes);
    new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 300)
    voice.draw(context, stave)
    context.scale(2, 2)

    return (
        <View >
            {context.render()}
        </View>
    );
};

export default Stave;
