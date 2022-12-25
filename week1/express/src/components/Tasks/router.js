const { Router } = require('express');
const TaskComponent = require('./index');
const schemas = require('./schemas');
const { middleware } = require('../../untils/middleware');
const authToken = require('../../untils/tokenValidate');
const router = Router();

router.post('/', middleware(schemas.taskCreate), TaskComponent.create);
router.patch('/:id', authToken, TaskComponent.update);
router.get('/', authToken, TaskComponent.findAll);
router.get('/all', authToken, TaskComponent.findAll);

module.exports = router;
