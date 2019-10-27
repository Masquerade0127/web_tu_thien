


module.exports = function(app) {
  let adminRegister = require('../admin/admin_register')
  let adminLogin = require('../admin/admin_login')
  console.log(adminLogin)

  let adminCtransalte = require('../admin/admin_cstranslate')


  // todoList Routes
  app.route('/registers')
    .post(adminRegister.registerAdmin);

  app.route('/logins')
    .post(adminLogin.loginAdmin);

  app.route('/ctranslate')
    .post(adminCtransalte.ctranslate);



  // app.route('/products/:productId')
  //   .get(productsCtrl.detail)
  //   .put(productsCtrl.update)
  //   .delete(productsCtrl.delete);
};