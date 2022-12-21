const Joi = require("joi");

const middleware = (schema, property) => {
    return (req, res, next) => {
        if (!Joi.isSchema(schema)) {
            res.status(422).json({
                error: "Is not a schema",
                details: null,
            });
        }

        const { error } = Joi.validate(req.body, schema);
        const valid = error == null;

        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map((i) => i.message).join(",");

            res.status(422).json({
                error: details.message,
                details: message,
            });
        }
    };
};

module.exports = middleware;
