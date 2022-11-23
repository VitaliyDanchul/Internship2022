const httpStatus = require('http-status');
const bcrypt = require('bcrypt');

const UsersService = require('./service');
const TokenService = require('../Token/service');

const catchError = require('../../utils/catchError');
const AppError = require('../../utils/appError');
const {
    userValidator,
} = require('../../validators/user');
const UserDto = require('../../dtos/user');

const signin = catchError(async (req, res) => {
    if (userValidator.validate(req.body).error) {
        throw new AppError(httpStatus.BAD_REQUEST, userValidator.validate(req.body).error.details);
    }

    const { email } = req.body;

    const user = await UsersService.findOne({ email });

    const userDto = new UserDto(user);

    const accessToken = await TokenService.generateAccessToken({
        ...userDto,
    });

    return res.json({ accessToken, status: 'success' });
});

const create = catchError(async (req, res) => {
    if (userValidator.validate(req.body).error) {
        throw new AppError(httpStatus.BAD_REQUEST, userValidator.validate(req.body).error.details);
    }

    const { name, email, password } = req.body;

    const oldUser = await UsersService.findOne({ email });

    if (oldUser) {
        throw new AppError(httpStatus.CONFLICT);
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await UsersService.create({
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
    });

    return res.json({ data: user, status: 'success' });
});

const account = catchError(async (req, res) => {
    return res.json({ status: 'token valid' });
});

const findAll = catchError(async (req, res) => {
    const users = await UsersService.findAll();

    return res.json({ data: users, status: 'success' });
});

const findOne = catchError(async (req, res) => {
    const { id } = req.params;

    const user = await UsersService.findOne(id);

    return res.json({ data: user, status: 'success' });
});

const remove = catchError(async (req, res) => {
    const { id } = req.params;

    const user = await UsersService.remove(id);

    return res.json({ data: user, status: 'success' });
});

const update = catchError(async (req, res) => {
    const { id } = req.params;

    const user = await UsersService.update(id, req.body);

    return res.json({ data: user, status: 'success' });
});

module.exports = {
    signin,
    account,
    create,
    findAll,
    findOne,
    remove,
    update,
};
