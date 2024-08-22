const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const bakersRouter = require('./routes/bakers');
const pasteriesRouter = require('./routes/pastries');
const aboutRouter = require('./routes/about');
const {morganMiddleware, named} = require('./logger');
const logger = named('app');

const app = express();
const port = 8080

app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/bakers', bakersRouter);
app.use('/pastries', pasteriesRouter);
app.use('/about', aboutRouter);

app.listen(port, () => {
    logger.info(`BakeTime listening on port ${port}`)
})
