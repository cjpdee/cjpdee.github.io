var basePath = __dirname;
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(async function(req, res) {
    const file = await fs.promises.readFile(__dirname + '/index.html', 'utf8')
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(file);
}).listen(9999);
