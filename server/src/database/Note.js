const DB = require('./db.json');

const getAllNotes = () => {
    return DB.notes;
};

module.exports = { getAllNotes };