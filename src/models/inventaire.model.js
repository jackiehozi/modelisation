'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InvSchema = new Schema({
 categorie: {
    type: [{
      type: String,
      enum: ['médicament', 'pomme magique','surprise']
    }],
    required: 'Reprenez des forces',
    default: ['pomme magique']
  }
});module.exports = mongoose.model('Inventaire', InvSchema);