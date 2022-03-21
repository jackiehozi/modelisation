'use strict';
const mongoose = require('mongoose'),
  Arme = mongoose.model('Arme');exports.list_arms = (req, res) => {
  Arme.find({}, (err, arms) => {
    if (err)
      res.send(err);
    res.json(arms);
  });
};
exports.cree_arms = (req, res) => {
  let new_arm = new Arme(req.body);
  new_arm.save((err, armes) => {
    if (err)
      res.send(err);
    res.json(armes);
  });
};

exports.supp_arms = (req, res) => {
  Arme.remove({
    _id: req.params.armsId
  }, (err, arms) => {
    if (err)
      res.send(err);
    res.json({ message: 'Vous avez supprimé cet arme' });
  });
};