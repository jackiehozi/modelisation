"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Personnage = function Personnage(id, nom, sexe) {
  _classCallCheck(this, Personnage);

  this.id = id;
  this.nom = nom;
  this.sexe = sexe;
};

var person1 = new Personnage();