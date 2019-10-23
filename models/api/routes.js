


module.exports = function(app) {
  let controllerFuntion = require('../../controllers/controller');
  let adminController = require('../admin/admin_controller')

  // todoList Routes
  app.route('/registers')
    .post(controllerFuntion.registerAdmin);

  app.route('/logins')
    .post(controllerFuntion.loginAdmin);

  app.route('/ctranslate')
    .post(adminController.ctranslate);

  // app.route('/products/:productId')
  //   .get(productsCtrl.detail)
  //   .put(productsCtrl.update)
  //   .delete(productsCtrl.delete);
};