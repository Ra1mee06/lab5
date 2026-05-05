const create = (req, res, next) => {
  const b = req.body;
  if (!b || typeof b !== 'object') {
    return res.status(400).json({ message: 'Request body must be a JSON object' });
  }
  if (typeof b.fullName !== 'string' || !b.fullName.trim()) {
    return res.status(400).json({ message: 'fullName is required (non-empty string)' });
  }
  if (typeof b.address !== 'string' || !b.address.trim()) {
    return res.status(400).json({ message: 'address is required (non-empty string)' });
  }
  if (
    b.numberPhone != null &&
    b.numberPhone !== '' &&
    Number.isNaN(Number(b.numberPhone))
  ) {
    return res.status(400).json({ message: 'numberPhone must be a number' });
  }
  return next();
};

const update = (req, res, next) => {
  const b = req.body;
  if (!b || typeof b !== 'object' || Object.keys(b).length === 0) {
    return res.status(400).json({ message: 'Request body must be a non-empty JSON object' });
  }
  if (b.fullName != null && (typeof b.fullName !== 'string' || !b.fullName.trim())) {
    return res.status(400).json({ message: 'fullName must be a non-empty string when provided' });
  }
  if (b.address != null && (typeof b.address !== 'string' || !b.address.trim())) {
    return res.status(400).json({ message: 'address must be a non-empty string when provided' });
  }
  if (
    b.numberPhone != null &&
    b.numberPhone !== '' &&
    Number.isNaN(Number(b.numberPhone))
  ) {
    return res.status(400).json({ message: 'numberPhone must be a number' });
  }
  return next();
};

module.exports = { create, update };
