const service = require('./product.service');

const getAll = (req, res) => res.json(service.getAll());

const getById = (req, res) => {
  const item = service.getById(req.params.productsId);
  if (!item) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.json(item);
};

const create = (req, res) => {
  const item = service.create(req.body, req.query);
  if (!item) {
    return res.status(400).json({
      message: 'No order exists with the given orderId',
    });
  }
  return res.status(201).json(item);
};

const update = (req, res) => {
  const item = service.update(req.params.productsId, req.body);
  if (!item) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.json(item);
};

const remove = (req, res) => {
  const item = service.remove(req.params.productsId);
  if (!item) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.json(item);
};

module.exports = { getAll, getById, create, update, remove };
