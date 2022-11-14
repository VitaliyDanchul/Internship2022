const UsersService = require('./service');

async function findAllUsers(req, res) {
    try {
        const users = await UsersService.findAllUsers();

        return res.status(200).json({
            data: users,
            message: 'find all users'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function createUser(req, res) {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).send({
                message: 'bad request'
            });
        }

        const checkEmail = await UsersService.findUserByEmail(email);
        if (checkEmail) {
            return res.status(400).send({
                message: 'such user already created'
            });
        }

        const user = await UsersService.createUser(name, email);

        return res.status(201).json({
            data: user,
            message: 'user created'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function findUser(req, res) {
    try {
        const { id } = req.params;

        const user = await UsersService.findUser(+id);
        if (!user) {
            return res.status(404).send({
                message: 'user not found'
            });
        }

        return res.status(200).json({
            data: user,
            message: 'user finded'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.params;

        const user = await UsersService.findUser(+id);
        if (!user) {
            return res.status(404).send({
                message: 'user not found'
            });
        }

        await UsersService.deleteUser(user.id);

        return res.status(200).json({
            data: user,
            message: 'user deleted'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const user = await UsersService.findUser(+id);
        if (!user) {
            return res.status(404).send({
                message: 'user not found'
            });
        }

        const userUpdated = await UsersService.updateUser(+id, name, email);

        return res.status(200).json({
            data: userUpdated,
            message: 'user updated'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

module.exports = {
    updateUser,
    findAllUsers,
    createUser,
    deleteUser,
    updateUser,
    findUser,
};
