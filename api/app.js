const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const appbakersRouter = require('./routes/appbakers');
const pasteriesRouter = require('./routes/pastries');
const {morganMiddleware, named} = require('./logger');
const logger = named('app');

const app = express();
const port = 8080

app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/appbakers', appbakersRouter);
app.use('/pastries', pasteriesRouter);

app.listen(port, () => {
    logger.info(`BakeTime listening on port ${port}`)
})
