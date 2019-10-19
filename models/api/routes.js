

module.exports = function(app) {
  let controllerFuntion = require('../../controllers/controller');

  // todoList Routes
  app.route('/registers')
    .post(controllerFuntion.register);

  app.route('/logins')
    .post(controllerFuntion.login);

  // app.route('/products/:productId')
  //   .get(productsCtrl.detail)
  //   .put(productsCtrl.update)
  //   .delete(productsCtrl.delete);
};