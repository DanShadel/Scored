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
        // code here will place accidentals in wrong spots occasionally
        // see https://github.com/0xfe/vexflow/issues/104

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

const drawScale = (clef, notes) => {
    // notes = [Note(name, range), Note(name,range)....]
    const width = 250;
    const [context, stave] = generateContext(clef, width);

    const ticks = notes.map((note) => {
        return (new Vex.Flow.StaveNote({
            keys: [note.name + '/' + note.range],
            duration: '8',
            clef: clef
        }))
    })

    notes.forEach((note, index) => {
        const { mods } = note.getNoteMods();
        if (mods) {
            ticks[index].addAccidental(0, new Vex.Flow.Accidental(mods));
        }
    })

    const beams = [new Vex.Flow.Beam(ticks)]

    const voice = new Vex.Flow.Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(ticks);
    new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 200)
    voice.draw(context, stave)

    beams.forEach((b) => {
        b.setContext(context).draw();
    });

    return { context, stave };
}

const Stave = ({ clef, notes, beats }) => {
    let context, stave;
    switch (beats) {
        case 1:
            ({ context, stave } = drawOneBeat(clef, notes));
            break;
        case 4:
            ({ context, stave } = drawScale(clef, notes));
            break;
    }


    return (
        <View >
            {context.render()}
        </View>
    );
};

export default Stave;
