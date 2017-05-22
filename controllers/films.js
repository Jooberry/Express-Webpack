//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = new express.Router();

filmRouter.get('/', function(req, res) {
  res.json(films);
});

filmRouter.get('/:id', function(req, res) {
  var film = films[ req.params.id ];
  res.json({film: film});
});


filmRouter.post('/', function(req, res) {
  films.push(req.body);
  res.json(films);
});

filmRouter.post('/:id/reviews', function(req, res) {
  var updatedReviews = req.body.reviews;
  films[ req.params.id ].addReview = updatedReviews;
  res.json(films);
});


filmRouter.put('/:id', function(req, res) {
  var updatedFilm = req.body;
  films[ req.params.id ] = updatedFilm;
  res.json(films);
});


filmRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1);
  res.json(films);
});

module.exports = filmRouter;