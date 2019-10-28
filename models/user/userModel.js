module.exports = {
    get: function (conn, callback) {
        conn.query("SELECT * FROM user", callback)
    },

    getById: function (conn, id, callback) {
        conn.query("SELECT * FROM user WHERE ID = ${id}", callback);
    },


};
