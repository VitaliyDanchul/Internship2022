const TaskService = require("./service");
const jwt = require("jsonwebtoken");

const create = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY);
        req.body.createdBy = decoded.name + " " + decoded.surname;
        req.body.assignee = decoded.id;

        const task = await TaskService.create(req.body);
        return res.status(201).send(task);
    } catch (ex) {
        res.status(422).json({
            error: ex.message,
            details: null,
        });
    }
};

const update = async (req, res) => {
    try {
        const { estimatedTime } = req.body;

        if (!estimatedTime) {
            throw new Error("'estimatedTime' is required");
        }

        const task = await TaskService.update({
            id: req.params.id,
            estimatedTime,
        });
        return res.status(201).send(task);
    } catch (ex) {
        res.status(422).json({
            error: ex.message,
            details: null,
        });
    }
};

const findAll = async (req, res) => {
    try {
        const tasks = await TaskService.findAll(req);
        return res.status(200).send(tasks);
    } catch (ex) {
        res.status(422).json({
            error: ex.message,
            details: null,
        });
    }
};

module.exports = {
    create,
    update,
    findAll,
};
