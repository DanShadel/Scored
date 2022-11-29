import { bassRange, trebleRange } from "../constants/musicConstants";

export const pickOne = (input) => {
    return input[Math.floor(Math.random() * input.length)];
}

export const getNoteMods = (note) => {
    return ({ name: note.charAt(0), mods: note.charAt(1) })
}

getRangeByClef = (clef) => {
    if (clef === 'treble') {
        return trebleRange;
    } else if (clef = 'bass') {
        return bassRange;
    } else {
        return 'INVALID CLEF NAME'
    }
}