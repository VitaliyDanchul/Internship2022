const express = require("express");

const taskRouter = express.Router();

const {
    getAllTasks,
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
} = require('./taskController');
const auth = require('../../middlewares/auth');

taskRouter.post('/', auth, createTask);
taskRouter.get('/all', getAllTasks);
taskRouter.get('/', getTasks);
taskRouter.get('/:id', getTask);
taskRouter.delete('/:id', deleteTask);
taskRouter.patch('/:id', updateTask);

module.exports = taskRouter;
