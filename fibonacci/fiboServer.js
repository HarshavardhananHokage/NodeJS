const express = require('express');
const axios = require('axios');

const math = require('./math');

const app = express();

app.get('/fibonacci/:n', function(req, res, next) {
    console.log("Hello" + req.params.n);
    let val = math.fibonacciLoop(req.params.n);
    if(isNaN(val)) {
        res.send({error: 'A non number value returned', val: val});
    } else {
        res.send({ n: req.params.n, result: val })
    }
});

app.listen(process.env.SERVERPORT);