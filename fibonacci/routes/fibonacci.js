const express = require('express');
const router = express.Router();

const math = require('../math');

router.get('/', function(req, res, next) {

    if(req.query.fibonum) {
        res.render('fibonacci', {
            title: 'Calculate Fibonacci Number',
            fibonum: req.query.fibonum,
            fiboval: math.fibonacci(req.query.fibonum)
        });
    } else {
        res.render('fibonacci', {
            title: 'Calculate Fibonacci Number',
            fiboval: undefined
        }); 
    }
});

module.exports = router;