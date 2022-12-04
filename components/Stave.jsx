import React from 'react';
import { View } from 'react-native';
import { NotoFontPack, ReactNativeSVGContext } from 'standalone-vexflow-context';
import Vex from 'vexflow';

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

    let nextOctave = false;
    const tick = [new Vex.Flow.StaveNote({
        keys: notes.map((note, index) => {
            if (note.name[0] === 'C' && index !== 0) {
                nextOctave = true;
            }

            const range = nextOctave ? note.range + 1 : note.range
            return note.name + '/' + range
        }),
        duration: 'q',
        clef: clef
    })];

    notes.forEach((note, index) => {
        const { mods } = note.getNoteMods();
        if (mods) {
            tick[0].addAccidental(index, new Vex.Flow.Accidental(mods));
        }
    })

    const voice = new Vex.Flow.Voice({ num_beats: 1, beat_value: 4 });
    voice.addTickables(tick);
    new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 300)
    voice.draw(context, stave)

    return { context, stave };
}

const drawFourBeats = (clef, notes) => {

}

const Stave = ({ clef, notes, beats }) => {
    let context, stave;
    switch (beats) {
        case 1:
            ({ context, stave } = drawOneBeat(clef, notes));
            break;
        case 4:
            // ({ context, stave } = drawFourBeats());
            break;
    }

    return (
        <View >
            {context.render()}
        </View>
    );
};

export default Stave;
