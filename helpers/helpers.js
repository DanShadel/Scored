import { bassRange, chordList, trebleRange } from "../constants/musicConstants";

export const pickOne = (input) => {
    return input[Math.floor(Math.random() * input.length)];
}

export const getRandomChord = () => {
    const chords = Object.keys(chordList);
    const name = pickOne(chords);

    console.log(chordList[name]);
    return { name: name, scale: chordList[name] }
}

export const getNoteMods = (note) => {
    return ({ name: note.charAt(0), mods: note.charAt(1) })
}

export const getRangeByClef = (clef) => {
    if (clef === 'treble') {
        return trebleRange;
    } else if (clef = 'bass') {
        return bassRange;
    } else {
        return 'INVALID CLEF NAME'
    }
}

export const getTriad = (scale) => { return [scale[0], scale[2], scale[4]] }



