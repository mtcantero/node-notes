const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions = {
    describe: 'Title for the note',
    demand: true,
    alias: 't'

};

const bodyOptions = {
    describe: 'Body for the note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note',{
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note',{
        title:titleOptions
        
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

if (command === 'add'){
    var note = notes.addNote(argv.title,argv.body);
    notes.logNote(note);


} else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log('Printing ...' + allNotes.length + 'note(s).');
    allNotes.forEach((note) => notes.logNote(note));

} else if(command === 'read'){
   var note =  notes.readNote(argv.title);
   notes.logNote(note);

} else if(command === 'remove'){
    var result = notes.removeNote(argv.title);
    
    console.log('--------------------------');
    console.log(result ? 'Note removed' : 'Note not found');
    

} else{
    console.log('Command not recognized');

}


