const express = require('express');
const noteController = require('../../controllers/noteController');
const router = express.Router();

router.get('/', noteController.getAllNotes);

router.get('/:noteId', noteController.getNote);

router.post('/', noteController.createNote);

router.patch(
    '/:noteId',
    noteController.updateNote
);

router.delete(
    '/:noteId',
    noteController.deleteNote
);

module.exports = router;