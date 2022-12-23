const Task = require('./taskModel');

const findAll = async (page, limit) => {
    const tasks = await Task.find()
        .skip(page * limit)
        .limit(limit);

    const totalTasks = (await Task.find()).length;

    return {
        tasks,
        totalTasks,
    };
};

const findAllTasks = () => Task.find();

const create = (task) => Task.create(task);

const findById = (id) => Task.findById(id);

const findOne = (payload) => Task.findOne(payload);

const remove = (userId) => Task.findByIdAndDelete(userId);

const update = (id, rest) => Task.findByIdAndUpdate(id, rest, { new: true });

module.exports = {
    findAll,
    findAllTasks,
    remove,
    update,
    findById,
    findOne,
    create,
};
