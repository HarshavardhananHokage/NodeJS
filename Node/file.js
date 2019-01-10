const http = require('http');
const fs = require('fs');

let server = http.createServer();

server.on('request', function(req, res) {
    fs.appendFile('sample.txt', "lorem ipsum ", function(err) {
        if(err) {
            throw err;
        }
        console.log("Written data");
        res.end();
    })
});

server.listen(4002, () => {
    console.log("Server started in port 4002");
})