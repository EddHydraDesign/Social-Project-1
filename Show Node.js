var http = require('http');
var dt = require('./takeuserinputmodule');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('Test');
}).listen(8080);

console.log('Test 1');
console.log('Test 2');
console.log('Test 3');

