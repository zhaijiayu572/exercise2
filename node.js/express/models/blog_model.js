var db =require('./connect');
exports.get_detail = function (bid,callback) {
    var sql = "select * from t_blogs,t_users where t_blogs.WRITER = t_users.USER_ID and BLOG_ID = ?";
    var arr = [bid];
    db.query(sql,arr,callback);
};
exports.update_blog = function(bid,callback){
    var sql = "update t_blogs set CLICK_RATE = CLICK_RATE + 1 where BLOG_ID = ?";
    var arr = [bid];
    db.query(sql,arr,callback);
};
