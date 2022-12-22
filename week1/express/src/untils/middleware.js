const Joi = require("joi");
const jwt = require("jsonwebtoken");

const middleware = (schema, property) => {
    return (req, res, next) => {
        try {
            if (!Joi.isSchema(schema)) {
                res.status(422).json({
                    error: "Is not a schema",
                    details: null,
                });
            }

            let valid = false;
            let errorMsg = null;

            if (property) {
                const { error } = schema.validate(property);
                valid = error == null;
                errorMsg = error;
            } else {
                const { error } = schema.validate(req.body);
                valid = error == null;
                errorMsg = error;
            }

            if (valid) {
                next();
            } else {
                const { details } = errorMsg;
                const message = details.map((i) => i.message).join(",");

                res.status(422).json({
                    error: details.message,
                    details: message,
                });
            }
        } catch (ex) {
            console.log(ex);
            res.status(422).json({
                error: "Invalid request",
                details: null,
            });
        }
    };
};

const authMiddleware = (req, res, next) => {
    const authorization =
        req.headers["x-access-token"] || req.headers["authorization"];

    const token = authorization.startsWith("Bearer ")
        ? authorization.slice(7, authorization.length)
        : authorization;

    if (!token) {
        return res.status(401).json({
            error: "Access denied. No token provided.",
            details: null,
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY);

        req.user = decoded;
        next();
    } catch (ex) {
        console.log(ex);
        res.status(400).json({
            error: "Invalid token.",
            details: null,
        });
    }
};

module.exports = {
    middleware,
    authMiddleware,
};
