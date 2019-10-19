

module.exports = function(app) {
  let controllerFuntion = require('../../controllers/controller');

  // todoList Routes
  app.route('/registerAdmin')
    .post(controllerFuntion.registerAdmin);

  app.route('/loginAdmin')
    .post(controllerFuntion.loginAdmin);

  app.route('/registerUser')
    .post(controllerFuntion.registerUser);

  app.route('/loginUser')
    .post(controllerFuntion.loginUser);

  // app.route('/products/:productId')
  //   .get(productsCtrl.detail)
  //   .put(productsCtrl.update)
  //   .delete(productsCtrl.delete);
};