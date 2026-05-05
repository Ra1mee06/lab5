const clients = [];

const getAll = () => clients;

const getById = (id) => clients.find(c => c.id === id);

const create = (client) => {
  clients.push(client);
  return client;
};

const update = (id, data) => {
  const index = clients.findIndex(c => c.id === id);
  if (index === -1) return null;
  clients[index] = { ...clients[index], ...data };
  return clients[index];
};

const remove = (id) => {
  const index = clients.findIndex(c => c.id === id);
  if (index === -1) return null;
  return clients.splice(index, 1)[0];
};

module.exports = { getAll, getById, create, update, remove };