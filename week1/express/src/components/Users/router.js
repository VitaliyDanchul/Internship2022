const { Router } = require('express');
const UsersComponent = require('./index');
const { validate } = require('../../middlewares/validate');
const { userValidator } = require('./validators/user');
const auth = require('../../middlewares/auth');

const router = Router();

router.post('/signin', validate(userValidator), UsersComponent.signin);
router.get('/account', auth, UsersComponent.account);

router.post('/', validate(userValidator), UsersComponent.create);
router.get('/', UsersComponent.findAll);
router.get('/:id', UsersComponent.findOne);
router.delete('/:id', UsersComponent.remove);
router.patch('/:id', UsersComponent.update);

module.exports = router;
