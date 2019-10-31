var db = require("../api/db");

var package = {
    getAllPackage:function(callback){
    	return db.query("select * from package",callback);
    },

    addPackage:function(package,callback){
    	return db.query("Insert into package (NAME,Created,Modified) values (?,?,?)",[package.name,package.created,package.modified],callback);
    },
    deletePackage:function(id,callback){
    	return db.query("delete from package where ID = ?",[id],callback);
    },
}

module.exports = package;