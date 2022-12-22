const Joi = require("joi");

const schemas = {
    taskCreate: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        estimatedTime: Joi.number().required(),
    }),
    taskUpdate: Joi.object({
        id: Joi.string().required(),
        estimatedTime: Joi.number().required(),
    }),
};

module.exports = schemas;
