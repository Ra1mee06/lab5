const Client = require('./client.model');
const clientRepo = require('./client.memory.repository');
const orderService = require('../order/order.service');

const getAll = () => clientRepo.getAll();
const getById = (id) => clientRepo.getById(id);

const create = (data) => {
  const client = new Client(data);
  return clientRepo.create(client);
};

const update = (id, data) => clientRepo.update(id, data);

const remove = (id) => {
  orderService.getAll()
    .filter((o) => o.clientId === id)
    .forEach((o) => orderService.remove(o.id));

  return clientRepo.remove(id);
};

const getOrders = (clientId) =>
  orderService.getAll().filter((o) => o.clientId === clientId);

module.exports = { getAll, getById, create, update, remove, getOrders };
