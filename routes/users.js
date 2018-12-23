var express = require('express');
var router = express.Router();
var db = require('../dbconnection');

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    db.query('SELECT * FROM employees', (err, rows) => {
        if (err) throw err;

        res.json(rows);
    });
});

router.get('/new', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    db.query('SELECT * FROM employees WHERE id=2', (err, rows) => {
        if (err) throw err;

        res.json(rows);
    });
});

module.exports = router;