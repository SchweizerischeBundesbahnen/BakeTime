const {createLogger, transports, format} = require('winston');
const morgan = require('morgan');

const httpLogger = createLogger({
    level: 'http',
    format: format.combine(
        format.timestamp(),
        format.json(),
        format.colorize({all: true}),
    ),
    transports: [new transports.Console()],
});

const defaultLogger = createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: format.combine(
        format.timestamp(),
        format.json(),
        format.colorize({all: true}),
    ),
    transports: [new transports.Console()],
});

const named = function (name) {
    return defaultLogger.child({name});
}

const morganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {
        stream: {
            // Configure Morgan to use our custom logger with the http severity
            write: (message) => httpLogger.http(message.trim()),
        },
    }
);

module.exports = {morganMiddleware, defaultLogger, named};
