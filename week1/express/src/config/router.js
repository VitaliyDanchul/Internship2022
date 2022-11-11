const express = require('express');
const http = require('http');

// ROUTERS
const DemoRouter = require('../components/Demo/router');

module.exports = {
    init(app) {
        const router = express.Router();

        app.use('/v1/demo', DemoRouter);

        app.use((req, res) => {
            res.status(404).send(http.STATUS_CODES[404]);
        });

        app.use(router);
    },
};
