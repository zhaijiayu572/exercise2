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
}
