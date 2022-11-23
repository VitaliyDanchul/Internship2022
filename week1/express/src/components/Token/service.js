const jwt = require('jsonwebtoken');

const generateAccessToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, { expiresIn: '1800s' });
};

const validateAccessToken = (token) => {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY);
};

module.exports = {
    generateAccessToken,
    validateAccessToken,
};
