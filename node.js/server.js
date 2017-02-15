var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    console.log(req);
    res.end(data);
}).listen(3000);
