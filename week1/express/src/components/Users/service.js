const User = require('./models/user');

const findAll = () => {
    return User.find();
};

const create = (user) => {
    return User.create(user);
};

const findById = (id) => {
    return User.findById(id);
};

const findOne = (payload) => {
    return User.findOne(payload);
};

const remove = (userId) => {
    return User.findByIdAndDelete(userId);
};

const update = (userId, user) => {
    return User.findByIdAndUpdate(userId, user);
};

module.exports = {
    findAll,
    remove,
    update,
    findById,
    findOne,
    create,
};
