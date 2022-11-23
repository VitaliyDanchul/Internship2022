require('dotenv').config();
require('../config/database').connect();
const express = require('express');
const morgan = require('morgan');

const middleware = require('../config/middleware');
const router = require('../config/router');
const {
    errorConverter,
    errorException,
} = require('../middlewares/errorHandler');

const app = express();

morgan.token('host', (req) => req.hostname);

app.use(morgan(':method :host :status :res[content-length] - :response-time ms'));

middleware.init(app);

router.init(app);

app.use(errorConverter);
app.use(errorException);

app.set('port', process.env.PORT || 3000);

module.exports = app;
