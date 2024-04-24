var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(users);
  });
  
  /* GET user by ID */
  router.get('/:id', function(req, res, next) {
    var userId = parseInt(req.params.id);
    var user = users.find(function(user) {
      return user.id === userId;
    });
    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User not found");
    }
  });

  var users = [
    "François Vessaz",
    "Joe Scheidegger",
    "Michael Moor",
    "Stefan Aebischer",
    "Lukas Schlüchter",
    "Georgios Antoniadis",
    "Marco Ghilardelli",
    "Hoang Tran",
    "Henrik Karppinen",
    "Loris Sorace",
    "Jeanne Fleury",
    "Thomas Bomatter",
    "Dominik Mosberger",
    "Alona Korset",
    "Ulrich Raab",
    "Kirill Ivanov",
    "Pauline Windey",
    "Simon Meer",
    "Leandro Bastos",
    "Adriana De São José Martins",
    "Nicolas Vidoni",
    "Stefan Zeller",
    "Yoonjoo Lee",
    "Ralf Winkelmann",
    "Jose 'Kike' Valerio",
    "Vera Fischer",
    "Dmytriy Pelts",
    "Linus Ackermann",
    "David Lienberger",
    "Oliver Werlen",
    "Damir Ebibi",
    "Noé Schär",
    "Tristan Fanelli",
    "Ladina Kundert",
    "Nathanaël Bourgeois"
];

module.exports = router;