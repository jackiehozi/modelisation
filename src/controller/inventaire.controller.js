'use strict';
const mongoose = require('mongoose'),
  Inventaire = mongoose.model('Inventaire');exports.list_thing = (req, res) => {
  Inventaire.find({}, (err, thing) => {
    if (err)
      res.send(err);
    res.json(thing);
  });
};
exports.cree_thing = (req, res) => {
  let new_thing = new Inventaire(req.body);
  new_thing.save((err, thing) => {
    if (err)
      res.send(err);
    res.json(thing);
  });
};

exports.use_thing = (req, res) => {
  Inventaire.remove({
    _id: req.params.thingId
  }, (err, thing) => {
    if (err)
      res.send(err);
    res.json({ message: 'Vous avez utilisé un élement de votre inventaire' });
  });
};