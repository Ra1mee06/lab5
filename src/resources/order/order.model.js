const { randomUUID } = require('crypto');

class Order {
  constructor(data = {}) {
    this.id = data.id ?? randomUUID();
    this.orderNumber =
      data.orderNumber != null ? parseInt(String(data.orderNumber), 10) : 0;
    this.numbers =
      data.numbers != null ? parseInt(String(data.numbers), 10) : 0;
    this.clientId = data.clientId;
  }
}

module.exports = Order;
