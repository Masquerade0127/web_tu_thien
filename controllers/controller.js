
const util = require('util')
const mysql = require('mysql')
const db = require('../models/api/db')
var crypto = require('crypto');
var express=require("express");
var  numberID = 3;

module.exports = {
/**
 * description
 *
 * @param {string}name is the name of admin.
 * @param {string}email is the email of admin.
 * @param {string}password is the password of admin.

 * @return status is true if successs and fail if fail.
 */
 	registerAdmin: (req, res)=>{
		// hash password 
		// var hash = crypto.createHash('sha256').update(req.body.password).digest('hex');

		var users = {
			"ID": "AD_0" + numberID.toString(),
			"User_name": req.body.name,
			"Email": req.body.email,
			"Password": req.body.password
		}
		numberID = numberID +1
		console.log(numberID)

		db.query("INSERT INTO ADMIN SET ?", users, function (error, result){
			if (error){
				res.json({
					"status": "fail",
					"message": "there are some error with query"
				})
			}else{
				res.json({
					"status": "true",
					"message": 'user registered sucessfully'
				})
			}
		})

	},

/**
 * description
 *
 * @param {string}email is the email of admin.
 * @param {string}password is the password of admin.

 * @return status is true if successs and fail if fail.
 */
	loginAdmin: (req, res)=>{
		var email = req.body.email
		var password = req.body.password
		db.query('SELECT * FROM ADMIN WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
            if(password==results[0].Password){
                res.json({
                    "status": "true",
                    "message" :'successfully authenticated'
                })
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}




}