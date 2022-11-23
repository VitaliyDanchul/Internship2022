const httpStatus = require('http-status');

const AppError = require('../utils/appError');

exports.validate = (schema) => (req, res, next) => {
    const {
        error,
    } = schema.validate(req.body);

    if (error) {
        return new AppError(httpStatus.UNPROCESSABLE_ENTITY, error.details[0].message);
    }

    return next();
};
