const users = [
    {
        id: 1,
        name: 'John',
        surname: 'Doe',
    },
];

function findAll() {
    return users;
}

/**
 *  Leave create service method for future, when we will connect mongo,
 *  we will do manipulations here
 */
function create(req) {
    const { name, surname } = req;
    const id = users.length + 1;

    if (!name || !surname) {
        throw new Error('Name and surname are required');
    }

    users.push({
        id,
        name,
        surname,
    });

    return users;
}

function findById(req) {
    const { id } = req;

    if (!id) {
        throw new Error('Id is required');
    }

    return users.find((user) => user.id === id);
}

function update(req) {
    const { id, name, surname } = req;

    if (!id) {
        throw new Error('Id is required');
    }

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

function deleteById(req) {
    const { id } = req;

    if (!id) {
        throw new Error('Id is required');
    }

    const user = users.find((user) => user.id === id);

    if (!user) {
        throw new Error('User not found');
    }

    users.splice(users.indexOf(user), 1);

    return users;
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    deleteById,
};
