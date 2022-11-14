const { Router } = require('express');
const UsersComponent = require('./index');

const router = Router();

router.get('/', UsersComponent.findAllUsers);

router.get('/:id', UsersComponent.findUser);

router.delete('/:id', UsersComponent.deleteUser);

router.patch('/:id', UsersComponent.updateUser);

router.post('/', UsersComponent.createUser);

module.exports = router;
