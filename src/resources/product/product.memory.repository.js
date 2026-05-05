const products = [];

const getAll = () => products;
const getById = (id) => products.find(p => p.id === id);

const create = (product) => {
  products.push(product);
  return product;
};

const update = (id, data) => {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...data };
  return products[index];
};

const remove = (id) => {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  return products.splice(index, 1)[0];
};

module.exports = { getAll, getById, create, update, remove };