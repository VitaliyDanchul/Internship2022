const mongoose = require('mongoose');

/*

    Task Schema

    assignee - userId (MongoId),
    title - Title of tasks
    description - Small description of task
    estimatedTime - Time to complete the task
    createdBy - Who creates Task (e.g Project Manager, QA, Teach Lead)

*/

const TaskSchema = new mongoose.Schema({
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    estimatedTime: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Task', TaskSchema);