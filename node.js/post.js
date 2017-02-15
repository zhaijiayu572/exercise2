var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
http.createServer(function (req,res) {
    var path = url.parse(req.url).pathname;
    switch (path){
        case "/login":
            postlogin(res);
            break;
        case '/dologin':
            dologin(req,res);
            break;
        default:
            error(res);
            break;
    }
}).listen(3000);
function error(res) {
    res.writeHead(404,{"Content-Type":'text/plain'});
    res.end('页面未找到');
}
function postlogin(res) {
    res.writeHead(200,{"Content-Type":"text/html"});
    var realPath = __dirname+"/"+url.parse('login.ejs').pathname;
    var data = fs.readFileSync(realPath,'utf-8');
    res.end(data);
}
function dologin(req,res) {
    // req.setEncoding('utf8');
    var fullData = '';
    req.addListener('data',function (data) {
        fullData+=data;
    });
    req.addListener('end',function () {
        var objData = querystring.parse(fullData);
        res.writeHead(200,{"Content-Type":'text/plain'});
        res.end("用户名:"+objData.username+"密码:"+objData.pass);
    })
}