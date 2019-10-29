module.exports = app => {
    const userController = require('../controllers/user.controller');

    // Retrieve all Customers
    app.get('/users', userController.findAll);
};
