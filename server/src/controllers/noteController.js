const noteService = require('../services/noteService');

const getAllNotes = (req, res) => {
    const allNotes = noteService.getAllNotes();
    res.send({ status: 'OK', data: allNotes });
};

const getNote = (req, res) => {    
    const {
        params: { noteId },
    } = req;
    if (!noteId) {
        return;
    }
    const note = noteService.getNote(noteId);
    res.send({ status: 'OK', data: note });
};

const createNote = (req, res) => {
    const {body} = req;
    if (!body.title || !body.content) {
        res.status(400).send({
            status: 'FAILED',
            data: {
                error:
                    "One of the following keys is missing or is empty in request body: 'title', content'",
            },
        });
        return;
    }
    const newNote = {
        title: body.title,
        content: body.content,
    };
    const createdNote = noteService.createNote(newNote);
    res.status(201).send({
        status: 'OK',
        data: createdNote
    });
};

const updateNote = (req, res) => {
    const {
        body,
        params: { noteId },
    } = req;
    if (!noteId) {
        return;
    }
    const updatedNote = noteService.updateNote(
        noteId,
        body
    );
    res.send({ status: 'OK', data: updatedNote });
};

const deleteNote = (req, res) => {
    const {
        params: { noteId },
    } = req;
    if (!noteId) {
        return;
    }

    noteService.deleteNote(noteId);
    res.status(204).send({ status: 'OK' });
};

module.exports = {
    getAllNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote,
};