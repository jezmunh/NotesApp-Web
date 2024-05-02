const { v4: uuid } = require('uuid');
const Note = require('../database/Note');


const getAllNotes = () => {
    const allNotes = Note.getAllNotes();
    return allNotes;
};

const getNote = (noteId) => {
    const note = Note.getNote(noteId);
    return note;
};

const createNote = (newNote) => {
    const noteToInsert = {
        ...newNote,
        id: uuid(),
        createdAt: new Date().toLocaleString('ru-RU', {
            timeZone: 'UTC',
        }),
        updatedAt: new Date().toLocaleString('ru-RU', {
            timeZone: 'UTC',
        }),
    };
    const createdNote = Note.createNewNote(noteToInsert);
    return createdNote;
};

const updateNote = (noteId, changes) => {
    const updatedNote = Note.updateNote(
        noteId,
        changes
    );
    return updatedNote;
};

const deleteNote = (noteId) => {
    Note.deleteNote(noteId);
    
};

module.exports = {
    getAllNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote,
};