const express = require("express");
const morgan = require("morgan");

const middleware = require("../config/middleware");
const router = require("../config/router");

const app = express();

morgan.token("host", function (req, res) {
    return req.hostname;
});

morgan.token("param", function (req, res, param) {
    return req.params[param];
});

app.use(
    morgan(
        "':method :host :status :param[id] :res[content-length] - :response-time ms"
    )
);

middleware.init(app);

router.init(app);

app.set("port", process.env.PORT || 3000);

module.exports = app;
