const db = require("../models");

//crud methods for controller
module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then(dbModel => req.json(dbModel))
      .catch(error => res.status(422).json(error));
  },
  create: function (req, res) {
    db.Book.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(error => res.status(422).json(error));
  },
};
