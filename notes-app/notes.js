const fs = require('fs');
const chalk = require('chalk')

const getNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => { console.log(note.title) })
}
const addNote = (title, body) => {
    const notes = loadNotes();
    debugger
    const duplicateNotes = notes.filter(note =>
        note.title === title
    )
    if (duplicateNotes.length > 0) {
        console.log(chalk.red('Note already exists with same title'))
    } else {
        notes.push({ title: title, body: body });
        saveNotes(notes);
        console.log(chalk.green("Note added successfully"));
    }

}

const removeNote = (title, body) => {
    const notes = loadNotes();
    const otherNotes = notes.filter(note => note.title !== title)
    if (otherNotes.length === notes.length) {
        console.log(chalk.red('Note not found for the given title'))
    } else {
        saveNotes(otherNotes);
        console.log(chalk.green('Note removed successfully'))
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title)
    if (note === undefined) {
        console.log(chalk.red('Note not found for the given title'))
    } else {
        console.log(note)
    }
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync("notes.json").toString())
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}