var express = require('express');
var router = new express.Router();

var filmRouter = require('./films.js');

router.use('/films', filmRouter);

router.get('/', function(req, res) {
  res.json({data: 'Films!'});
});

module.exports = router;