const express = require("express");

const userRouter = express.Router();

const { validate } = require('../../middlewares/validate');
const { userValidator } = require('./userValidator');
const auth = require('../../middlewares/auth');

const {
    getUsers,
    createUser,
    getUser,
    updateUser,
    signinUser,
    accountUser,
    deleteUser,
} = require('./userController.js');

userRouter.post('/signin', validate(userValidator), signinUser);
userRouter.get('/account', auth, accountUser);

userRouter.post('/', validate(userValidator), createUser);
userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.delete('/:id', deleteUser);
userRouter.patch('/:id', updateUser);

module.exports = userRouter;
