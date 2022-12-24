const express = require('express');

const middleware = require('../config/middleware');
const router = require('../config/router');
const swagger = require('../config/swagger');

const app = express();

middleware.init(app);

swagger.init(app);

router.init(app);

app.set('port', process.env.PORT || 3000);

module.exports = app;
