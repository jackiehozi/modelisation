
'use strict';
module.exports = (app) => {
  const Listperso = require('../controller/personnage.controller');  
  
  
  app.route('/personnage')
    .get(Listperso.list_users)
    .post(Listperso.cree_user);


  app.route('/personnage/:personnageId')
    .get(Listperso.voir_user)
    .put(Listperso.update_user)
    .delete(Listperso.supp_user);
};

