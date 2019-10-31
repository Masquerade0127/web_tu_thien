const login = require("../model/admin/login");

module.exports = {
    get:(req,res)=>{
        res.render("login");
    }
    ,
    post:(req,res) =>{
        if(login.checkEmail(req.body))
        {
            console.log(req.body+"đăng nhập bằng email");
            // res.redirect("/package");
            login.loginByEmail(req.body,function(err,results,fields){
                if(err) throw err;
                if(results.length > 0){
                    res.redirect('/package');
                }else{
                    res.send('Incorrect Username and/or Password!');
                }
            });
        }
        else{
            console.log("không phải là email - đăng nhập bằng username");
            login.loginByUsername(req.body,function(err,results,fields){
                if(err) throw err;
                if(results.length > 0){
                    res.redirect('/package');
                }else{
                    res.send('Incorrect Username and/or Password!');
                }
            });
        }
    },
    show:(req,res) =>{
        login.login(function(err,rows){
            if(err) throw err;
            res.json(rows);
        })
    }
}