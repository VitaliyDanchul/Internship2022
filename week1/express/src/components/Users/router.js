const { Router } = require('express');
const UsersComponent = require('./index');
const schemas = require('./schemas'); 
const middleware = require('./middleware'); 

const router = Router();

router.get('/', UsersComponent.findAll);
router.get('/:id', UsersComponent.findById);
router.delete('/:id', UsersComponent.deleteById)
router.post('/create', middleware(schemas.userPOST), UsersComponent.create);
router.put('/update', middleware(schemas.userPUT), UsersComponent.update);

router.post('/signin', middleware(schemas.userPOST), UsersComponent.signin);
router.get('/account', UsersComponent.account);

module.exports = router;
