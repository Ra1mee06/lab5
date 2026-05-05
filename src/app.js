const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Express REST service (интернет-магазин)',
    endpoints: ['/client', '/order', '/products'],
  });
});

app.use('/client', require('./resources/client/client.router'));
app.use('/order', require('./resources/order/order.router'));
app.use('/products', require('./resources/product/product.router'));

module.exports = app;