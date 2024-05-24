const AppBaker = require('../models/appbaker');
const Pastery = require('../models/pastery');

// TODO: Replace static with DB or other data source

exports.pasteries = [
    new Pastery(1, 'BakeTime')
]

exports.appBakers = [
    new AppBaker(1,'François Vessaz', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(2,'Joe Scheidegger', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(3,'Michael Moor', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(4,'Stefan Aebischer', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(5,'Lukas Schlüchter', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(6,'Georgios Antoniadis', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(7,'Marco Ghilardelli', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(8,'Hoang Tran', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(9,'Henrik Karppinen', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(10,'Loris Sorace', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(11,'Jeanne Fleury', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(12,'Thomas Bomatter', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(13,'Dominik Mosberger', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(14,'Alona Korset', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(15,'Ulrich Raab', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(16,'Kirill Ivanov', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(17,'Pauline Windey', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(18,'Simon Meer', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(19,'Leandro Bastos', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(20,'Adriana De São José Martins', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(21,'Nicolas Vidoni', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(22,'Stefan Zeller', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(23,'Yoonjoo Lee', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(24,'Ralf Winkelmann', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(25,'Valerio Oropeza Jose Enrique', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(26,'Vera Fischer', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(27,'Dmytriy Pelts', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(28,'Linus Ackermann', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(29,'David Lienberger', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(30,'Oliver Werlen', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(31,'Damir Ebibi', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(32,'Noé Schär', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(33,'Tristan Fanelli', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(34,'Ladina Kundert', 0.8, ['Node.js'], [exports.pasteries[0]]),
    new AppBaker(35,'Nathanaël Bourgeois', 0.8, ['Node.js'], [exports.pasteries[0]]),
];