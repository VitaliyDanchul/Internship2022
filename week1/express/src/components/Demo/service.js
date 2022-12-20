const DemoModel = require('./model');

function findAll() {
    return [];
}

/**
 *  Leave create service method for future, when we will connect mongo,
 *  we will do manipulations here
 */
async function create(data) {
    await DemoModel.create({
        property: 'hello',
    });

    return {
        message: 'Created',
    };
}

module.exports = {
    create,
    findAll,
};
