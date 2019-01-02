const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
})

server.listen(5000, '127.0.0.1');

console.log('Server started listening at http://127.0.0.1:5000');