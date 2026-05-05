const { randomUUID } = require('crypto');

class Client {
  constructor(data = {}) {
    this.id = data.id ?? randomUUID();
    this.fullName = data.fullName ?? '';
    this.address = data.address ?? '';
    this.numberPhone = data.numberPhone != null ? Number(data.numberPhone) : 0;
    this.bonusCard = Boolean(data.bonusCard);
  }
}

module.exports = Client;
