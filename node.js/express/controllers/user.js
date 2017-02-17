var user_model = require('../models/user_model');
exports.index = function (req,res,next) {
    console.log(req.session);
    if(req.session.user){
        var uid = req.session.user.USER_ID;
        user_model.getUerBlog(uid,function (result) {
            res.render('index_logined',{'user':req.session.user,'blogs':result});
        });

    }else{
        res.render('index');
    }
};
exports.login = function (req,res,next) {
    res.render('login');
};
exports.do_login = function (req,res,next) {
    var username = req.body.email;
    var pass = req.body.pwd;
    user_model.checkUser(username,pass,function (result) {
        if(result.length!=0){
            req.session.user = result[0];
            res.redirect('/');
        }else{
            res.redirect('/login');
        }

    })
};
exports.exit = function (req,res,next) {
    req.session.user = '';
    console.log(req.path);
    // res.redirect(req.path);
};
