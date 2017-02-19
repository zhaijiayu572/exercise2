var blog_model = require('../models/blog_model');
exports.show_detail = function (req,res,next) {
    var bid = req.query.bid;

    blog_model.update_blog(bid,function (result) {
            blog_model.get_detail(bid,function (result) {
                if(req.session.user){
                    console.log('aaaaaaaaaa');
                    res.render('viewPost_logined',{'user':req.session.user,'blog':result[0]});
                }else{
                    res.render('viewPost',{'blog':result[0]});
                }
            });
    });
};
exports.add_blog = function (req,res,next) {
    if(req.session.user){
        blog_model.get_catalog(function (rs) {
            res.render('newBlog',{'catalog':rs});
        });

    }else{
        res.redirect('/login');
    }
};
exports.do_add_blog = function (req,res,next) {
    var title = req.body.title;
    var content = req.body.content;
    var catalog = req.body.catalog;
    var uid = req.session.user.USER_ID;
    blog_model.add_blog(uid,title,content,catalog,function (rs) {
        if(rs.affectedRows){
            res.redirect('/add_blog');
        }
    })
};
