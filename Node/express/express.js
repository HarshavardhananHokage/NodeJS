const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send("Hello World");
});

app.get('/signup', function(req, res) {
    res.send('This is a signup page');
});

app.listen(4001, function(data) {
    console.log("Server started listening at 4001");
})