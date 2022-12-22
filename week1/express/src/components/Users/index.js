const UsersService = require("./service");
const { middleware } = require("../../untils/middleware");
const schemas = require("./schemas");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function findAll(req, res) {
    try {
        const users = await UsersService.findAll();

        return res.status(200).json({
            data: users,
        });
    } catch (error) {
        return res.status(422).json({
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

        const user = await UsersService.findOne({
            email,
        });

        if (user) {
            throw new Error("User with this email already exists");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const users = await UsersService.create(
            name,
            surname,
            email,
            hashedPassword
        );

        return res.status(201).json({
            data: users,
        });
    } catch (error) {
        return res.status(422).json({
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
        return res.status(422).json({
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
        return res.status(422).json({
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
        return res.status(422).json({
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

        const user = await UsersService.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            throw new Error("Invalid password");
        }

        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                surname: user.surname,
                email: user.email,
            },
            process.env.JWT_ACCESS_SECRET_KEY,
            {
                expiresIn: "1h",
            }
        );

        return res.status(200).json({
            token,
        });
    } catch (error) {
        return res.status(422).json({
            error: error.message,
            details: null,
        });
    }
}

function account(req, res) {
    try {
        const { user } = req;

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        return res.status(422).json({
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
    account,
};
