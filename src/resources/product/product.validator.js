const create = (req, res, next) => {
  const orderId = req.body?.orderId ?? req.query?.orderId;
  if (orderId == null || String(orderId).trim() === '') {
    return res.status(400).json({
      message: 'orderId is required (JSON body or query string)',
    });
  }
  return next();
};

const update = (req, res, next) => {
  const b = req.body;
  if (!b || typeof b !== 'object' || Object.keys(b).length === 0) {
    return res.status(400).json({ message: 'Request body must be a non-empty JSON object' });
  }
  return next();
};

module.exports = { create, update };
