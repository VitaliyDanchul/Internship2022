const { Router } = require('express');
const TaskComponent = require('./index');
const schemas = require('./schemas');
const { middleware } = require('../../untils/middleware');
const router = Router();

router.post('/', middleware(schemas.taskCreate), TaskComponent.create);
router.patch('/:id', TaskComponent.update);
router.get('/', TaskComponent.findAll);
router.get('/all', TaskComponent.findAll);

module.exports = router;
