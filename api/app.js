const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const appbakersRouter = require('./routes/appbakers');
const pasteriesRouter = require('./routes/pastries');

const app = express();
const port = 8080

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/appbakers', appbakersRouter);
app.use('/pastries', pasteriesRouter);

app.listen(port, () => {
    console.log(`BakeTime listening on port ${port}`)
})
