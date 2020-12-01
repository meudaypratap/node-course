const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add note to list',
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
    builder: {
        title: {
            describe: "Title of the note",
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: "Body of the note",
            demandOption: true,
            type: 'string'
        }
    }

})

yargs.command({
    command: 'remove',
    describe: 'Remove note from list',
    handler(argv) {
        notes.removeNote(argv.title)
    },
    builder: {
        title: {
            describe: 'Enter the title of note that need to be removed',
            demandOption: true,
            type: 'string'
        }
    }

})
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler() {
        notes.getNotes();
    }

})
yargs.command({
    command: 'read',
    describe: 'Read note from list',
    handler(argv) {
        notes.readNote(argv.title)
    },
    builder: {
        title: {
            describe: 'Enter the title of note you want to see',
            demandOption: true,
            type: 'string'
        }
    }

})

yargs.parse();