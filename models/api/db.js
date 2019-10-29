var mysql = require('mysql');

// Create a connection to the database
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'web_tu_thien'
});

// open the MySQL connection
db.connect(function (err) {
    if (err) throw err;
    console.log("Database is connected!");
});

module.exports = db;