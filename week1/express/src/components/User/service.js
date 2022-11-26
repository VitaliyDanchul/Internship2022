const users = require('./Users');

function findAll() {
    return users;
}

function findById(userId) {
    return users.find(({ id }) => userId === id);
}

function create(user) {
    users.push(user);

    return user;
}

function update(id, user) {
    const userIndex = users.findIndex(((currentUser) => currentUser.id === id));

    users[userIndex] = { ...user };

    return user;
}

function deleteById(userId) {
    return users.splice(users.findIndex(({ id }) => Number(userId) === id), 1);
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    deleteById,
};
