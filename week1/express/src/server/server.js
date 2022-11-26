const express = require('express');
const morgan = require('morgan');

const middleware = require('../config/middleware');
const router = require('../config/router');

const app = express();

app.use(morgan('tiny'));

middleware.init(app);

router.init(app);

app.set('port', process.env.PORT || 3000);

module.exports = app;
