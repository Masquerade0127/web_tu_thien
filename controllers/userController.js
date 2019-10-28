const User = require('../models/user/userModel');
var conn = require('../models/api/db');

module.exports = {
    index: function(req, res, next) {
        User.get(conn, function(err, rows) {
            res.json(rows);
        })
    },


};