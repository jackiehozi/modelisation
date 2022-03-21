'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const armeSchema = new Schema({
 categorie: {
    type: [{
      type: String,
      enum: ['blanche', 'magique','bouclier']
    }],
    required: 'Choisis ton arme',
    default: ['bouclier']
  }
});module.exports = mongoose.model('Arme', armeSchema);