
'use strict';
module.exports = (app) => {
  const Listenn = require('../controller/ennemis.controller');  
  
  
  app.route('/ennemis')
    .get(Listenn.list_enn)
    .post(Listenn.cree_enn);


  app.route('/ennemis/nom')
    .delete(Listenn.supp_enn);
};

