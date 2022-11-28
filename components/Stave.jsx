import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NotoFontPack, ReactNativeSVGContext } from 'standalone-vexflow-context';
import Vex from 'vexflow';

const generateContext = (clef, width) => {
    const context = new ReactNativeSVGContext(NotoFontPack, {
        width: 300,
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

    // React.useEffect(() => {
    staveNotes = notes.map(note => {
        const { letter, mods } = note.getNoteMods();
        const staveNote = new Vex.Flow.StaveNote({
            keys: [note.name + '/' + note.range],
            duration: 'q',
            clef: 'treble'
        });

        if (mods) {
            console.log(staveNote.keys)
            console.log(mods)
            const accidental = new Vex.Flow.Accidental("#");
            console.log(accidental)
            staveNote.addModifier(accidental);
        }
        return staveNote;
    });


    console.log('staveNotes:')
    console.log(staveNotes[0].keys)

    const voice = new Vex.Flow.Voice({ num_beats: 1, beat_value: 4 });
    console.log(staveNotes)
    voice.addTickables(staveNotes);

    new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 300)

    voice.draw(context, stave)
    // }, [notes])


    return (
        <View >
            {context.render()}
        </View>
    );
};

export default Stave;
