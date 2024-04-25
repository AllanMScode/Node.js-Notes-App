const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
    unique: true,
  },
  important: String,
  urgent: String,
});

const NoteDB = mongoose.model("notedb", schema);

module.exports = NoteDB;
