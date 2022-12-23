const httpStatus = require('http-status');
const UserService = require('./userService');
const TokenService = require('../Token/tokenService');

const catchError = require('../../utils/catchError');
const AppError = require('../../utils/appError');
const {
    userValidator,
} = require('./userValidator');
const UserDto = require('./userDto');

const signinUser = catchError(async (req, res) => {
    if (userValidator.validate(req.body).error) {
        throw new AppError(
            httpStatus.BAD_REQUEST,
            userValidator.validate(req.body).error.details.message,
        );
    }

    const { email } = req.body;

    const user = await UserService.findOne({ email });

    const userDto = new UserDto(user);

    const accessToken = await TokenService.generateAccessToken({
        ...userDto,
    });

    return res.json({ accessToken, status: 'success' });
});

const createUser = catchError(async (req, res) => {
    if (userValidator.validate(req.body).error) {
        throw new AppError(
            httpStatus.BAD_REQUEST,
            userValidator.validate(req.body).error.details.message,
        );
    }

    const {
        firstName,
        lastName,
        email,
        password,
    } = req.body;

    const oldUser = await UserService.findOne({ email });

    if (oldUser) {
        throw new AppError(httpStatus.CONFLICT);
    }

    const user = await UserService.create({
        firstName,
        lastName,
        email: email.toLowerCase(),
        hashed_password: password,
    });

    return res.json({ data: user, status: 'success' });
});

const accountUser = catchError(async (req, res) => {
    return res.json({ status: 'token valid' });
});

const getUsers = catchError(async (req, res) => {
    const users = await UserService.findAll();

    return res.json({ data: users, status: 'success' });
});

const getUser = catchError(async (req, res) => {
    const { id } = req.params;

    const user = await UserService.findById(id);

    return res.json({ data: user, status: 'success' });
});

const deleteUser = catchError(async (req, res) => {
    const { id } = req.params;

    const user = await UserService.remove(id);

    return res.json({ data: user, status: 'success' });
});

const updateUser = catchError(async (req, res) => {
    const { id } = req.params;

    const user = await UserService.update(id, req.body);

    return res.json({ data: user, status: 'success' });
});

module.exports = {
    signinUser,
    accountUser,
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
};
