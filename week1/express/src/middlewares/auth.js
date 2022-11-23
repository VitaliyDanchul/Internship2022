const httpStatus = require('http-status');
const catchError = require('../utils/catchError');
const AppError = require('../utils/appError');
const TokenService = require('../components/Token/service');

module.exports = catchError((req, res, next) => {
    try {
        const autorizationHeader = req.headers.authorization;

        if (!autorizationHeader) {
            return AppError(httpStatus.UNAUTHORIZED);
        }

        const accessToken = autorizationHeader.split(' ')[1];

        if (!accessToken) {
            return AppError(httpStatus.UNAUTHORIZED);
        }

        const userData = TokenService.validateAccessToken(accessToken);

        if (!userData) {
            return AppError(httpStatus.UNAUTHORIZED);
        }

        req.user = userData;
        next();
    } catch (error) {
        return next(error);
    }
});
