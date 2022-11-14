const users = require('./Users');

function findAll() {
    return users;
}

function findById(userId) {
    return users.find(({ id }) => Number(userId) === id);
}

/**
 *  Leave create service method for future, when we will connect mongo,
 *  we will do manipulations here
 */
function create(user) {
    users.push(user);

    return users;
}

function update(userId, user) {
    return {
        ...users[userId],
        ...user,
    };
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
