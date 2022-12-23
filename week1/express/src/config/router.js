const express = require('express');
const http = require('http');

// ROUTERS
const DemoRouter = require('../components/Demo/router');
const UserRouter = require('../components/Users/userRouter');
const TaskRouter = require('../components/Tasks/taskRouter');

module.exports = {
    init(app) {
        const router = express.Router();

        app.use('/v1/demo', DemoRouter);

        app.use('/v1/user', UserRouter);

        app.use('/v1/task', TaskRouter);

        app.use((req, res) => {
            res.status(404).send(http.STATUS_CODES[404]);
        });

        app.use(router);
    },
};
