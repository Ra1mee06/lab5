const orders = [];

const getAll = () => orders;
const getById = (id) => orders.find(o => o.id === id);

const create = (order) => {
  orders.push(order);
  return order;
};

const update = (id, data) => {
  const index = orders.findIndex(o => o.id === id);
  if (index === -1) return null;
  orders[index] = { ...orders[index], ...data };
  return orders[index];
};

const remove = (id) => {
  const index = orders.findIndex(o => o.id === id);
  if (index === -1) return null;
  return orders.splice(index, 1)[0];
};

module.exports = { getAll, getById, create, update, remove };