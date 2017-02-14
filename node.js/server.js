var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    var realPath = __dirname+'/'+url.parse('test.text').pathname;
    var data = fs.readFileSync(realPath,'utf-8');
    res.end(data);
}).listen(3000);
