const DB = require('./db.json');
const {saveToDatabase} = require('./utils');

const getAllNotes = () => {
    return DB.notes;
};

const createNewNote = (newNote) => {
    const isAdded = DB.notes.findIndex((note) => note.title === newNote.name) > -1;
    
    if(isAdded) {
        return;
    }
    DB.notes.push(newNote);
    saveToDatabase(DB);
    return newNote;
};
const getNote = (noteId) => {
    const note = DB.notes.find(
        (note) => note.id === noteId
    );
    if (!note) {
        return;
    }
    return note;
};
const updateNote = (noteId, changes) => {
    const indexForUpdate = DB.notes.findIndex(
        (note) => note.id === noteId
    );
    if (indexForUpdate === -1) {
        return;
    }
    const updatedNote = {
        ...DB.notes[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString('ru-RU', {
            timeZone: 'UTC',
        }),
    };
    DB.notes[indexForUpdate] = updatedNote;
    saveToDatabase(DB);
    return updatedNote;
};
const deleteNote = (noteId) => {
    const indexForDeletion = DB.notes.findIndex(
        (note) => note.id === noteId
    );
    if (indexForDeletion === -1) {
        return;
    }
    DB.notes.splice(indexForDeletion, 1);
    saveToDatabase(DB);
};
module.exports = { getAllNotes, createNewNote, getNote, updateNote, deleteNote};