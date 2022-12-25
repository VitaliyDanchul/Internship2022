const jwt = require("jsonwebtoken");

async function authenticateToken(req, res, next) {
    const auth = req.headers.authorization;
    const token = auth && auth.split(" ")[1];

    if (token == null) return res.sendStatus(401);

    try {
        const user = await jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY);

        if (user == null) return res.sendStatus(403);

        req.params.id = user.id;

        return next();
    } catch (ex) {
        return res.send("Invalid token", 403);
    }
}

module.exports = authenticateToken;
