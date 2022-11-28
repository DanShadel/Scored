export class Note {

    constructor(name, range) {
        this.name = name;
        this.range = range;
    }

    getNoteMods = () => {
        return ({ letter: this.name.charAt(0), mods: this.name.charAt(1) })
    }
}