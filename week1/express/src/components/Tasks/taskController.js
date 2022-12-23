const TaskService = require('./taskService');

const catchError = require('../../utils/catchError');
const AppError = require('../../utils/appError');
const httpStatus = require('http-status');

const createTask = catchError(async (req, res) => {
    const task = await TaskService.create(req.body);

    return res.json({ data: task, status: 'success' });
});

const getAllTasks = catchError(async (req, res) => {
    const tasks = await TaskService.findAllTasks();

    return res.json(tasks);
});

const getTasks = catchError(async (req, res) => {
    const { page = 0, limit = 5 } = req.query;

    const { tasks, totalTasks } = await TaskService.findAll(page, limit);

    return res.json({
        tasks,
        totalTasks,
        status: 'success',
    });
});

const getTask = catchError(async (req, res) => {
    const { id } = req.params;

    const task = await TaskService.findById(id);

    return res.json({ task, status: 'success' });
});

const deleteTask = catchError(async (req, res) => {
    const { id } = req.params;

    const task = await TaskService.remove(id);

    return res.json({ task, status: 'success' });
});

const updateTask = catchError(async (req, res) => {
    const { id } = req.params;

    const { estimatedTime } = req.body;

    if (!estimatedTime) {
        throw new AppError(httpStatus.BAD_REQUEST, 'estimatedTime is required');
    }

    const task = await TaskService.update(id, estimatedTime);

    return res.status(201).json({ task, status: 'success' });
});

module.exports = {
    createTask,
    getTasks,
    getAllTasks,
    getTask,
    deleteTask,
    updateTask,
};
