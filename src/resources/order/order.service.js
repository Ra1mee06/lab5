const Order = require('./order.model');
const orderRepo = require('./order.memory.repository');
const productRepo = require('../product/product.memory.repository');
const clientRepo = require('../client/client.memory.repository');

const getAll = () => orderRepo.getAll();
const getById = (id) => orderRepo.getById(id);

const create = (body, query) => {
  const clientId = body.clientId ?? query.clientId;
  if (!clientId || !clientRepo.getById(clientId)) {
    return null;
  }
  const order = new Order({ ...body, clientId });
  return orderRepo.create(order);
};

const update = (id, data) => orderRepo.update(id, data);

const remove = (id) => {
  productRepo
    .getAll()
    .filter((p) => p.orderId === id)
    .forEach((p) => productRepo.remove(p.id));

  return orderRepo.remove(id);
};

const getProducts = (orderId) =>
  productRepo.getAll().filter((p) => p.orderId === orderId);

module.exports = { getAll, getById, create, update, remove, getProducts };
