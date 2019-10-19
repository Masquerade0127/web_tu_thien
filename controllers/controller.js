
const util = require('util')
const mysql = require('mysql')
const db = require('../models/api/db')
var crypto = require('crypto');
var express=require("express");


module.exports = {
<<<<<<< HEAD
	register: (req, res)=>{
=======
	registerAdmin: (req, res)=>{
>>>>>>> e4fc4def2e08dbd51ed2aafed7acccf058e3be9f
		var today = new Date()
		console.log(req.body.name)
		console.log(req.body.password)
		var hash = crypto.createHash('sha256').update(req.body.password).digest('hex');
		console.log(hash)

		var users = {
			"name": req.body.name,
			"email": req.body.email,
			"password": hash,
			"created_at": today,
			"updated_at": today
		}

<<<<<<< HEAD
		db.query('INSERT INTO users SET ?',users, function(error, result, fields){
=======
		db.query('INSERT INTO admin SET ?',users, function(error, result, fields){
>>>>>>> e4fc4def2e08dbd51ed2aafed7acccf058e3be9f
			if (error){
				res.json({
					status: fail,
					message: 'there are some error with query'
				})
			}

			else{
				res.json({
					status: true,
					data: result,
					message:'user registered sucessfully'
				})
			}
		})
	},

<<<<<<< HEAD
	login: (req, res)=>{
		var email = req.body.email
		db.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
=======
	loginAdmin: (req, res)=>{
		var email = req.body.email
		db.query('SELECT * FROM admin WHERE email = ?',[email], function (error, results, fields) {
>>>>>>> e4fc4def2e08dbd51ed2aafed7acccf058e3be9f
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
  			hash_password = crypto.createHash('sha256').update(req.body.password).digest('hex');
  			console.log(hash_password)
            if(hash_password==results[0].password){
                res.json({
                    status:true,
                    message:'successfully authenticated'
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
<<<<<<< HEAD
}





=======
},

	registerUser: (req, res)=>{
		var today = new Date()
		console.log(req.body.name)
		console.log(req.body.password)
		var hash = crypto.createHash('sha256').update(req.body.password).digest('hex');
		console.log(hash)

		var users = {
			"name": req.body.name,
			"password": hash,
			"created_at": today,
			"updated_at": today
		}

		db.query('INSERT INTO users SET ?',users, function(error, result, fields){
			if (error){
				res.json({
					status: fail,
					message: 'there are some error with query'
				})
			}

			else{
				res.json({
					status: true,
					data: result,
					message:'user registered sucessfully'
				})
			}
		})
	},


	loginUser: (req, res)=>{
		var name = req.body.name
		db.query('SELECT * FROM users WHERE name= ?',[name], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
  			hash_password = crypto.createHash('sha256').update(req.body.password).digest('hex');
  			console.log(hash_password)
            if(hash_password==results[0].password){
                res.json({
                    status:true,
                    message:'successfully authenticated'
                })
            }else{
                res.json({
                  status:false,
                  message:"Name and password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Name does not exits"
          });
        }
      }
    });
}	
>>>>>>> e4fc4def2e08dbd51ed2aafed7acccf058e3be9f





}