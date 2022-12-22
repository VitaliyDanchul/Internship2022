const User = require('./model');

function findAll() {
    return User.find();
}

/**
 *  Leave create service method for future, when we will connect mongo,
 *  we will do manipulations here
 */

function findOne(query) {
    return User.findOne(query);
}

function create(name, surname, email, password) {
    return User.create({
        name,
        surname,
        email,
        password,
    });
}

function findById(id) {
    return User.findById(id);
}

function update(id, name, surname) {
    const user = users.find((user) => user.id === id);

    if (!user) {
        throw new Error('User not found');
    }

    if (name) {
        user.name = name;
    }

    if (surname) {
        user.surname = surname;
    }

    return user;
}

function deleteById(id) {
    const user = users.find((user) => user.id == id);

    if (!user) {
        throw new Error('User not found');
    }

    users.splice(users.indexOf(user), 1);

    return users;
}

function signin(email, password) {
    const user = users.find((user) => user.email === email);

    if (!user) {
        throw new Error('User not found');
    }

    if (user.password !== password) {
        throw new Error('Wrong password');
    }

    return user;
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    deleteById,
    findOne,
};
