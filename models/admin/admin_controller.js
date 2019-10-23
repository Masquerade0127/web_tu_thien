const util = require('util')
const mysql = require('mysql')
const db = require('../../models/api/db')
var numberID = 1




module.exports = {
/**
 * description
 *
 * @param {string} English – describe
 * @param {string} Vietnamese – describe
 * @param {string} urlIMp3 – describe

 * @return status is true if successs and fail if fail.
 */

 ctranslate: (req, res)=>{

 	var englishDescrible = req.body.english
 	var vietnameDescrible = req.body.vietname
 	var ulrMp3 = req.body.ulrMp3
 	var packgeID = req.body.packgeID
 	var idAdmin = req.body.idAdmin
 	var dayCreate = new Date()

 	question = {
 		"ID": 'QS_' + numberID.toString(),
 		"ID_package": packgeID,
 		"ID_admin": idAdmin,
 		"Content": englishDescrible,
 		"Url_mp3": ulrMp3,
 		"Created": dayCreate,
 		"Modified": dayCreate
 	}

 	asnwer = {
 		"ID": "AS_" + numberID.toString(),
 		"ID_question": 'QS_' + numberID.toString(),
 		"ID_admin": idAdmin,
 		"Content": vietnameDescrible,
 		"Created": dayCreate,
 		"Modified": dayCreate

 	}

 	numberID = numberID +1

 	// insert question to table QUESTION
	db.query("INSERT INTO QUESTION SET ?", question, function (error, result){
		if (error){
			console.log("11111", error)
			res.json({
				"status": "fail",
				"message": "there are some error with query"
			})
		}else{

				// insert asnwer to table ANSWER
			db.query("INSERT INTO ANSWER SET ?", asnwer, function (error, result){
				if (error){
					console.log('333333', error)
					res.json({
						"status": "fail",
						"message": "there are some error with query"
					})
				}else{
					res.json({
						"status": "true",
						"message": 'sucessfully'
					})
				}
			})

		}
	})





 }




}


