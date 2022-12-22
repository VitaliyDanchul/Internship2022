const Joi = require('joi') 

const schemas = {
    userPOST: Joi.object().keys({
        name: Joi.string().required(),
        surname: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(8).max(16).pattern(new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$'))
    }),
    userPUT: Joi.object().keys({
        id: Joi.number().integer().min(0).required(),
        name: Joi.string(),
        surname: Joi.string(),
        email: Joi.string().email(),
    }),
    userlogin: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required().min(8).max(16).pattern(new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$'))
    })
}

module.exports = schemas;