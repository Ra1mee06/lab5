const service = require('./client.service');

const getAll = (req, res) => res.json(service.getAll());

const getById = (req, res) => {
  const item = service.getById(req.params.clientId);
  if (!item) {
    return res.status(404).json({ message: 'Client not found' });
  }
  return res.json(item);
};

const create = (req, res) => res.status(201).json(service.create(req.body));

const update = (req, res) => {
  const item = service.update(req.params.clientId, req.body);
  if (!item) {
    return res.status(404).json({ message: 'Client not found' });
  }
  return res.json(item);
};

const remove = (req, res) => {
  const item = service.remove(req.params.clientId);
  if (!item) {
    return res.status(404).json({ message: 'Client not found' });
  }
  return res.json(item);
};

const getOrders = (req, res) => {
  const { clientId } = req.params;
  if (!service.getById(clientId)) {
    return res.status(404).json({ message: 'Client not found' });
  }
  return res.json(service.getOrders(clientId));
};

module.exports = { getAll, getById, create, update, remove, getOrders };
