const fs = require('fs');
const _ = require('lodash');

var fetchNotes = () => {

    try {
        var notesString = fs.readFileSync('notes_data.json');
         return JSON.parse(notesString);
    } catch (e){
        return [];
    }

};

var saveNotes = (notes) => {
    fs.writeFileSync('notes_data.json',JSON.stringify(notes));
};


var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title );

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () =>{
    return fetchNotes();
};

var readNote = (title) =>{
    var singleNoteArray = fetchNotes().filter((note) => note.title === title);
    if (singleNoteArray !== undefined){
        return singleNoteArray[0];
    } else{
        return undefined;
    }

};

var removeNote = (title) =>{
    var originalNotes = fetchNotes();
    var notesWithoutNote = originalNotes.filter((note) => note.title !== title);
    saveNotes(notesWithoutNote);
    return originalNotes.length !== notesWithoutNote.length;
       
    
    
};

var logNote = (note) => {
    if(note === undefined){

       console.log('Note not found');

   } else{
        console.log('----');
        console.log('Title: ' + note.title);
        console.log('Body: ' +  note.body);
   }

};



module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
};

