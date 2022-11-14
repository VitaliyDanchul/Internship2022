const UserService = require('./service');

async function findAll(req, res) {
    try {
        const user = await UserService.findAll();

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
        const user = await UserService.create(req.body);

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
        const user = await UserService.update(req.param.id, req.body);

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

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById,
};
