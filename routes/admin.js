var express = require('express');
var router = express.Router();
module.exports = function(app){

    const packageController = require("./Controllers/packageController");
    const loginController = require("./controllers/loginController");

    //login
    app.route('/login')
        .get(loginController.get)
        .post(loginController.post);
    // app.route('/')
    //     .get(loginController.show);
    //CD package
    app.route('/package')
        .get(packageController.get)
        .post(packageController.store);

    app.route('/package/:id')
        .delete(packageController.delete);//test postman

}