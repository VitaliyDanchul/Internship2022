const { Router } = require('express');
const UsersComponent = require('./index');
const schemas = require('./schemas'); 
const { middleware, authMiddleware } = require('../../untils/middleware');

const router = Router();

router.get('/', UsersComponent.findAll);
router.get('/:id', UsersComponent.findById);
router.delete('/:id', UsersComponent.deleteById)
router.post('/create', middleware(schemas.userPOST), UsersComponent.create);
router.put('/update', middleware(schemas.userPUT), UsersComponent.update);

router.post('/sign-in', middleware(schemas.userlogin), UsersComponent.signin);
router.post('/account', authMiddleware, UsersComponent.account);

module.exports = router;
