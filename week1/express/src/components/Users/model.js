const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true,
    },
    password: {
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

module.exports = mongoose.model('User', UserSchema);
