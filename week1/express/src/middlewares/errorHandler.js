const httpStatus = require('http-status');

const AppError = require('../utils/appError');

const errorConverter = (err, req, res, next) => {
    let error = err;

    if (error instanceof AppError) {
        const { statusCode } = error;
        const message = error.message || httpStatus[statusCode];

        error = new AppError(statusCode, message);
    }
    next(error);
};

const errorException = (err, req, res, next) => {
    const { statusCode, message } = err;

    if (err instanceof AppError) {
        return res.status(statusCode).json({
            statusCode,
            message,
        });
    }

    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        message: httpStatus[httpStatus.INTERNAL_SERVER_ERROR],
    });

    return next();
};

module.exports = {
    errorConverter,
    errorException,
};
