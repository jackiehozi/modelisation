'use strict';
const mongoose = require('mongoose'),
  User = mongoose.model('Personnage');exports.list_users = (req, res) => {
  User.find({}, (err, personnage) => {
    if (err)
      res.send(err);
    res.json(personnage);
  });
};
exports.cree_user = (req, res) => {
  let new_personnage = new User(req.body);
  new_personnage.save((err, personnage) => {
    if (err)
      res.send(err);
    res.json(personnage);
  });
};
exports.voir_user = (req, res) => {
  User.findById(req.params.personnageId, (err, personnage) => {
    if (err)
      res.send(err);
    res.json(personnage);
  });
};
exports.update_user = (req, res) => {
User.findOneAndUpdate({_id: req.params.personnageId}, req.body, {new: true}, (err, task) => {
    if (err)
      res.send(err);
    res.json(personnage);
  });
};
exports.supp_user = (req, res) => {
  User.remove({
    _id: req.params.personnageId
  }, (err, personnage) => {
    if (err)
      res.send(err);
    res.json({ message: 'Vous avez supprimé ce personnage' });
  });
};