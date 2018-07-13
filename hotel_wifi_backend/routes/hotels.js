var express = require('express');
var router = express.Router();
const {Hotel} = require('../db/models')

router.get('/', function(req, res, next) {
  res.render('hotel', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log("made it!")
  Hotel.create({
    name:req.body.name,
    downloadSpeed: req.body.gameWin,
    uploadSpeed: req.body.numOfSpins,
    latency: req.body.goal,
    usernameInput: "test"})
  .then(hotel => {
    res.send(hotel)
  })
  .catch(next)
});

module.exports = router;
