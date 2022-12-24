const swaggerUi = require('swagger-ui-express');

const swaggerConfig = require('../../swagger.json');

module.exports = {
    init(app) {
        app.use('/swagger-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
    },
};
