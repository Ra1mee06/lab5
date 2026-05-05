const router = require('express').Router();
const ctrl = require('./client.controller');
const validate = require('./client.validator');

router.get('/', ctrl.getAll);
router.get('/:clientId/order', ctrl.getOrders);
router.get('/:clientId', ctrl.getById);

router.post('/', validate.create, ctrl.create);
router.put('/:clientId', validate.update, ctrl.update);
router.delete('/:clientId', ctrl.remove);

module.exports = router;
