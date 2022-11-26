const { Router } = require('express');
const jwt = require('jsonwebtoken');

const UserComponent = require('./index');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, 'SUPER_SECRET_TOKEN', (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;

            return next();
        });
    } else {
        res.sendStatus(401);
    }
};

const router = Router();

router.get('/', UserComponent.findAll);

router.post('/', UserComponent.create);

router.get('/sign-in', UserComponent.signIn);

router.get('/account', authenticateJWT, UserComponent.account);

router.get('/:id', UserComponent.findById);

router.put('/:id', UserComponent.update);

router.delete('/', UserComponent.deleteById);

module.exports = router;
