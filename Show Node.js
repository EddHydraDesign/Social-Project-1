var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Test');
}).listen(8080);


console.log('Test 1');
console.log('Test 2');