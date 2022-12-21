const UsersService = require("./service");
const Joi = require("joi");
//import middleware
const middleware = require("./middleware");
//import schemas
const schemas = require("./schemas");


async function findAll(req, res) {
    try {
        const users = await UsersService.findAll();

        return res.status(200).json({
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function create(req, res) {
    try {
        const valid = middleware(schemas.userPOST, req.body);

        if (valid.error) {
            throw new Error(valid.error);
        }

        const { name, surname, email, password } = req.body;

        const users = await UsersService.create(name, surname, email, password);

        return res.status(201).json({
            data: users,
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
        const { id } = req.params;

        if (!id && typeof id !== "number") {
            throw new Error("Id is required and should be a number");
        }

        const user = await UsersService.findById(id);

        return res.status(200).json({
            data: user,
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
        const valid = middleware(schemas.userPUT, req.body);

        if (valid.error) {
            throw new Error(valid.error);
        }

        const { id, name, surname } = req.body;

        if (!id && typeof id !== "number") {
            throw new Error("Id is required and should be a number");
        }

        const user = await UsersService.update(id, name, surname);

        return res.status(200).json({
            data: user,
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
        const { id } = req.params;

        if (!id && typeof id !== "number") {
            throw new Error("Id is required and should be a number");
        }

        const users = await UsersService.deleteById(id);

        return res.status(200).json({
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function signin(req, res) {
    try {
        const valid = middleware(schemas.userlogin, req.body);

        if (valid.error) {
            throw new Error(valid.error);
        }

        const { email, password } = req.body;

        const user = await UsersService.signin(email, password);

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

module.exports = {
    findAll,
    create,
    findById,
    update,
    deleteById,
    signin,
};
