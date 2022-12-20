const { Schema } = require('mongoose');
const connection = require('../../config/mongoConnection');

const DemoSchema = new Schema({
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    name: {
        type: 'string',
        required: true,
    },
}, {
    versionKey: false,
});

module.exports = connection.model('Demo', DemoSchema);
