function findAll() {
    return [];
}

/**
 *  Leave create service method for future, when we will connect mongo,
 *  we will do manipulations here
 */
function create() {
    return {
        message: 'Created',
    };
}

module.exports = {
    create,
    findAll,
};
