const { Router } = require('express');
const UserComponent = require('./index');

const router = Router();

router.get('/', UserComponent.findAll);

router.get('/:id', UserComponent.findById);

router.post('/', UserComponent.create);

router.put('/:id', UserComponent.update);

router.delete('/', UserComponent.deleteById);

module.exports = router;
