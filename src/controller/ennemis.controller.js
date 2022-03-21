'use strict';
const mongoose = require('mongoose'),
  Ennemis = mongoose.model('Ennemis');exports.list_ems = (req, res) => {
  Ennemis.find({}, (err, ems) => {
    if (err)
      res.send(err);
    res.json(ems);
  });
};
exports.cree_arms = (req, res) => {
  let new_enm = new Ennemis(req.body);
  new_enm.save((err, ems) => {
    if (err)
      res.send(err);
    res.json(ems);
  });
};

exports.supp_ems = (req, res) => {
  Ennemis.remove({
    _id: req.params.emsId
  }, (err, ems) => {
    if (err)
      res.send(err);
    res.json({ message: 'Vous avez réussi a le tuer félicitations' });
  });
};