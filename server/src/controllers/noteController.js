const noteService = require('../services/noteService');

const getAllNotes = (req, res) => {
    const allNotes = noteService.getAllNotes();
    res.send({ status: 'OK', data: allNotes });
};

const getNote = (req, res) => {
    const note = noteService.getNote();
    res.send('Get an existing note');
};

const createNote = (req, res) => {
    const createdNote = noteService.createNote();
    res.send('Create a new note');
};

const updateNote = (req, res) => {
    const updatedNote = noteService.updateNote();
    res.send('Update an existing note');
};

const deleteNote = (req, res) => {
    noteServiceService.deleteNote();
    res.send('Delete an existing note');
};

module.exports = {
    getAllNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote,
};