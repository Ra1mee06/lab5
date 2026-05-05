const service = require('./order.service');

const getAll = (req, res) => res.json(service.getAll());

const getById = (req, res) => {
  const item = service.getById(req.params.orderId);
  if (!item) {
    return res.status(404).json({ message: 'Order not found' });
  }
  return res.json(item);
};

const create = (req, res) => {
  const item = service.create(req.body, req.query);
  if (!item) {
    return res.status(400).json({
      message: 'No client exists with the given clientId',
    });
  }
  return res.status(201).json(item);
};

const update = (req, res) => {
  const item = service.update(req.params.orderId, req.body);
  if (!item) {
    return res.status(404).json({ message: 'Order not found' });
  }
  return res.json(item);
};

const remove = (req, res) => {
  const item = service.remove(req.params.orderId);
  if (!item) {
    return res.status(404).json({ message: 'Order not found' });
  }
  return res.json(item);
};

const getProducts = (req, res) => {
  const { orderId } = req.params;
  if (!service.getById(orderId)) {
    return res.status(404).json({ message: 'Order not found' });
  }
  return res.json(service.getProducts(orderId));
};

module.exports = { getAll, getById, create, update, remove, getProducts };
