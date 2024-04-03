const Note = require('../database/Note');
const getAllNotes = () => {
    const allNotes = Note.getAllNotes();
    return allNotes;
};

const getNote = () => {
    return;
};

const createNote = () => {
    return;
};

const updateNote = () => {
    return;
};

const deleteNote = () => {
    return;
};

module.exports = {
    getAllNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote,
};