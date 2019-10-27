const util = require('util')
const mysql = require('mysql')
const db = require('../../models/api/db')
var numberID = 1



module.exports = {

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

		try {

			db.query('SELECT * FROM ADMIN WHERE Email = ? AND Password = ?',[email,password], function (error, results, fields) {
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

		catch(err){
			console.log(err)
		}




}

}