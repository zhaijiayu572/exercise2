var mysql = require('mysql');
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'myblog'
});


exports.query = function (sql,arr,callback) {
    pool.getConnection(function(err, connection) {
        connection.query(sql,arr,function (error, results, fields) {
            connection.release();
            callback && callback(results);
        })
    });
};