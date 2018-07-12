var express = require('express');
var router = express.Router();
const {Hotel} = require('../db/models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hotel', { title: 'Express' });
});

module.exports = router;
