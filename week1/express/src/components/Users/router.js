const { Router } = require('express');
const UsersComponent = require('./index');

const router = Router();

router.get('/getAll', UsersComponent.findAll);
router.get('/findById', UsersComponent.findById);
router.post('/create', UsersComponent.create);
router.delete('/deleteById', UsersComponent.deleteById);
router.post('/update', UsersComponent.update);

module.exports = router;
