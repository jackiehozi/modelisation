
'use strict';
module.exports = (app) => {
  const Listinv = require('../controller/inventaire.controller');  
  
  
  app.route('/inventaire')
    .get(Listinv.list_inv);
    


  app.route('/inventaire')
    .delete(Listinv.supp_inv);
};

