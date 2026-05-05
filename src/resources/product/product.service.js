const Product = require('./product.model');
const repo = require('./product.memory.repository');
const orderRepo = require('../order/order.memory.repository');

const getAll = () => repo.getAll();
const getById = (id) => repo.getById(id);

const create = (body, query) => {
  const orderId = body.orderId ?? query.orderId;
  if (!orderId || !orderRepo.getById(orderId)) {
    return null;
  }
  const product = new Product({ ...body, orderId });
  return repo.create(product);
};

const update = (id, data) => repo.update(id, data);

const remove = (id) => repo.remove(id);

module.exports = { getAll, getById, create, update, remove };
