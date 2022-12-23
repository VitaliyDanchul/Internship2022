const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    estimatedTime: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Task', TaskSchema);
