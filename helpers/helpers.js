export const pickOne = (input) => {
    return input[Math.floor(Math.random() * input.length)];
}

export const getNoteMods = (note) => {
    return ({ name: note.charAt(0), mods: note.charAt(1) })
}