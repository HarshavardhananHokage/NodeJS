const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/html');
    // fs.readFile('./index.html', (err, content) => {
    //     if(err) {
    //         throw err;
    //     }
    //     res.end(content);
    // });
    res.setHeader('Content-Type', 'application/pdf');
    fs.readFile('demo.pdf', (err, content) => {
        if(err) {
            throw err;
        }
        res.end(content);
    })
});

server.listen(4001, () => {
    console.log("Started listening on port 4001");
});