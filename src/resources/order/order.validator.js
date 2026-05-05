const create = (req, res, next) => {
  const clientId = req.body?.clientId ?? req.query?.clientId;
  if (clientId == null || String(clientId).trim() === '') {
    return res.status(400).json({
      message: 'clientId is required (JSON body or query string)',
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
