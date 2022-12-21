const users = [
    {
        id: 1,
        name: 'John',
        surname: 'Doe',
        email: 'asd@gmail.com',
        password: '12345678',
    },
];

function findAll() {
    return users;
}

/**
 *  Leave create service method for future, when we will connect mongo,
 *  we will do manipulations here
 */
function create(name, surname, email, password) {
    let id = users.length + 1;

    if (users.find((user) => user.id === id)) {
        const maxId = Math.max(...users.map((user) => user.id));

        id = maxId + 1;
    }

    users.push({
        id,
        name,
        surname,
        email,
        password
    });

    return users;
}

function findById(id) {
    return users.find((user) => user.id == id);
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
};
