'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ennSchema = new Schema({
 categorie: {
    type: [{
      type: String,
      enum: ['Monstre', 'Orque','Tueur']
    }],
    required: 'Vous etes au niveau 1 votre ennemi est le tueur',
    default: ['Tueur']
  }
});module.exports = mongoose.model('Ennemis', ennSchema);