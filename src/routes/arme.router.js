
'use strict';
module.exports = (app) => {
  const Listarm = require('../controller/arme.controller');  
  
  
  app.route('/arme')
    .get(Listarm.list_arms)
    .post(Listarm.cree_arms);


  app.route('/arme/categorie')
    .delete(Listarm.supp_arms);
};

