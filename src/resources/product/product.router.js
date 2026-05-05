const router = require('express').Router();
const ctrl = require('./product.controller');
const validate = require('./product.validator');

router.get('/', ctrl.getAll);
router.get('/:productsId', ctrl.getById);

router.post('/', validate.create, ctrl.create);
router.put('/:productsId', validate.update, ctrl.update);
router.delete('/:productsId', ctrl.remove);

module.exports = router;
