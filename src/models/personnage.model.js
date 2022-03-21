'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const persoSchema = new Schema({
  nom: {
    type: String,
    required: 'Entrer le nom du personnage'
  },
  stat: {
    type: Number,
    required: 100
  },
  sexe: {
    type: [{
      type: String,
      enum: ['homme', 'femme']
    }],
    default: ['femme']
  }
});module.exports = mongoose.model('Personnage', persoSchema);