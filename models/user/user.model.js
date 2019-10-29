const sql = require('../api/db');

// Constructor
const User = function (user) {
    this.User_name = user.User_name;
    this.Password = user.Password;
    this.Email = user.Email;
};

User.getAll = result => {
    sql.query("SELECT * FROM user", (err, res) => {
        if (err) {
            console.log("ERROR: ", err);
            result(null, err);
            return;
        }
        console.log("Users: ", res);
        result(null, res);
    });
};

module.exports = User;