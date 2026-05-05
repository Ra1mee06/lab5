const { randomUUID } = require('crypto');

class Product {
  constructor(data = {}) {
    this.id = data.id ?? randomUUID();
    this.orderId = data.orderId;
    this.name = data.name ?? '';
    this.price = data.price != null ? Number(data.price) : 0;
    this.ageOfIssue =
      data.ageOfIssue != null ? parseInt(String(data.ageOfIssue), 10) : 0;
    this.lifeTime =
      data.lifeTime != null ? parseInt(String(data.lifeTime), 10) : 0;
  }
}

module.exports = Product;
