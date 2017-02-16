var db = require('./connect');
exports.checkUser = function (username,pass,callback) {
      var sql = "select * from t_users where ACCOUNT = ? and PASSWORD = ?";
      var arr = [username,pass];
      db.query(sql,arr,callback);
};
exports.getUerBlog = function (uid,callback) {
    var sql = "select * from t_blogs,t_blog_catalogs where t_blogs.CATALOG_ID = t_blog_catalogs.CATALOG_ID and WRITER = ?";
    var arr = [uid];
    db.query(sql,arr,callback)
};