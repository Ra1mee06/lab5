const router = require('express').Router();
const ctrl = require('./order.controller');
const validate = require('./order.validator');

router.get('/', ctrl.getAll);
router.get('/:orderId/products', ctrl.getProducts);
router.get('/:orderId', ctrl.getById);

router.post('/', validate.create, ctrl.create);
router.put('/:orderId', validate.update, ctrl.update);
router.delete('/:orderId', ctrl.remove);

module.exports = router;
