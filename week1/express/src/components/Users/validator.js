const Joi = require('joi');

exports.userValidator = Joi.object()
    .keys({
        firstName: Joi.string()
            .min(3)
            .max(50)
            .required(),
        lastName: Joi.string()
            .min(3)
            .max(50)
            .required(),
        email: Joi.string()
            .min(5)
            .max(255)
            .required()
            .email(),
        password: Joi.string()
            .min(3)
            .max(255)
            .required(),
    });
