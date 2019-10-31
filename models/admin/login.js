var db = require("../api/db");

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var login = {
    checkEmail:function(login){
        if(emailRegex.test([login.email]))
        {
            return true;//accept email
        }else{
            return false;//refuse email
        }
    },
    loginByEmail:function(login,callback){
        return db.query("select * from admin where email = ? and PASSWORD = ?",[login.email,login.password],callback);
    },
    loginByUsername:function(login,callback){
        return db.query("select * from admin where User_name = ? and PASSWORD = ?",[login.email,login.password],callback);
    },
    login:function(callback){
        return db.query("select * from admin",callback);
    }
}

module.exports = login;