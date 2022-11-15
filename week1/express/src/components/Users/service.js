let users = [];

function findAllUsers() {
    return users;
}

function createUser(name, email) {
    return users.push({
        id: users.length + 1,
        name,
        email,
    });
}

function findUserByEmail(email) {
    return users.find((user) => user.email === email);
}

function findUser(userId) {
    return users.find((user) => user.id === userId);
}

function deleteUser(userId) {
    users = users.filter((user) => user.id !== userId);
}

function updateUser(id, name, email) {
    return users.forEach((user) => {
        if (user.id === id) {
            user.name = name || user.name;
            user.email = email || user.email;
        }
    });
}

module.exports = {
    findAllUsers,
    findUserByEmail,
    deleteUser,
    updateUser,
    findUser,
    createUser,
};
