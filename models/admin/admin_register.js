const util = require('util')
const mysql = require('mysql')
const db = require('../../models/api/db')
var numberID = 6



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

		try {

			db.query("INSERT INTO ADMIN SET ?", users, function (error, result){
			if (error){
				console.log(error)
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
		}

		catch(err){

			console.log(err)
		}

	}
}