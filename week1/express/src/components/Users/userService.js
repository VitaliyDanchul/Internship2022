const User = require('./userModel');

const findAll = () => User.find();

const create = (user) => {
    const newUser = new User({
        ...user,
    });

    newUser.save((err) => {
        if (err) throw err;
    });
};

const findById = (id) => User.findById(id);

const findOne = (payload) => User.findOne(payload);

const remove = (userId) => User.findByIdAndDelete(userId);

const update = (userId, user) => User.findByIdAndUpdate(userId, user);

module.exports = {
    findAll,
    remove,
    update,
    findById,
    findOne,
    create,
};
