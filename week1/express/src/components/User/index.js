const Joi = require('joi');
const jwt = require('jsonwebtoken');
const UserService = require('./service');

const userSchema = Joi.object().keys({
    id: Joi.string().required(),
    name: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(8).required(),
    email: Joi.string().max(256).required().email(),
});

async function findAll(req, res) {
    try {
        const allUsers = await UserService.findAll();

        return res.status(200).json({
            allUsers,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function findById(req, res) {
    try {
        const user = await UserService.findById(req.params.id);

        if (!user) throw new Error('Such user does not exist.');

        return res.status(200).json({
            user,
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message,
            details: null,
        });
    }
}

async function create(req, res) {
    try {
        const receivedUser = userSchema.validate(req.body);

        const { value, error } = receivedUser;
        const valid = error == null;

        if (!valid) {
            throw new Error('Invalid Data!');
        }

        const user = await UserService.create(value);

        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function update(req, res) {
    try {
        const receivedUser = userSchema.validate(req.body);

        const { value, error } = receivedUser;
        const valid = error == null;

        if (!valid) {
            throw new Error('Invalid Data!');
        }

        const user = await UserService.update(req.params.id, value);

        return res.status(200).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function deleteById(req, res) {
    try {
        const user = await UserService.delete(req.param.id);

        return res.status(200).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

function signIn(req, res) {
    try {
        const testUser = {
            id: 'test',
            password: '1',
            name: 'Test Test',
            email: 'test@gmail.com',
        };

        console.log(`user ${req.body.name} with id ${req.body.id} is trying to login...`);

        if (req.body.password === testUser.password) {
            const token = jwt.sign({
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
            }, 'SUPER_SECRET_TOKEN');

            return res.status(201).json({
                token,
            });
        }

        return res.status(400).json({
            message: 'Invalid Password!!!',
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

function account(req, res) {
    return res.status(200).json({
        data: [],
    });
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById,
    account,
    signIn,
};
