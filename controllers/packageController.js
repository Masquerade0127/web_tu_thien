const util = require("util");

const mysql = require("mysql");

// const db = require('../db');
const package = require("../model/admin/packages");//model table package

module.exports = {

    //get data
    get:(req,res) =>{
        package.getAllPackage(function (err,rows) {
            if(err) throw err;
            res.json(rows);
        });
    },

    //insert data - thêm dữ liệu đầu vào theo dạng mảng
    store:(req,res) =>{
        console.log(req.body);
        package.addPackage(req.body,function(err,rows){
            if(err) throw err;
            res.json({message:"Insert success!"});
        });       
    },

    //delete data by id
    delete:(req,res) => {
        package.deletePackage(req.params.id,function(err,rows){
            if(err) throw err;
            res.redirect('/package');
            // res.json(rows);
            // res.json({message: 'Delete success!'+req.params.id})
            // if(!err){
            //     res.json(err);
            //     console.log(err);
            // } else{
            //   res.json({message: 'Delete success!'+req.params.id});
            // }
        });
    },
};