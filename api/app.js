var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var appbakersRouter = require('./routes/appbakers');
var pastryRouter = require('./routes/pastry');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/appbakers', appbakersRouter);
app.use('/pastry', pastryRouter);

module.exports = app;
