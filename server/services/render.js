// this file will allow us to renderfiles using router

exports.homeRoutes = (req, res) => {
  res.render("index");
};

exports.add_note = (req, res) => {
  res.render("add_note");
};

exports.update_note = (req, res) => {
  res.render("update_note");
};
