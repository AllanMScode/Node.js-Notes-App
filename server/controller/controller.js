const Notedb = require("../model/model");

// create and save new note
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  //   new user
  const note = new Notedb({
    title: req.body.title,
    note: req.body.note,
    important: req.body.important,
    urgent: req.body.urgent,
  });

  //   save user in the database
  note
    .save(note)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while carrying out a create operation",
      });
    });
};

// retrieve & return all notes / retrieve & return a single note
exports.find = (req, res) => {};

// update a new identified user by user id
exports.update = (req, res) => {};

// delete a user with specified user id in the request
exports.delete = (req, res) => {};
