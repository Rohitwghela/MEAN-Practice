var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //res.send('index page');
    res.render('index.html');
});

module.exports = router;