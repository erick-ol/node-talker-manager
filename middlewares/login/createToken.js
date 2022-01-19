const HTTP_OK_STATUS = 200;
const crypto = require('crypto');

const tokenGenerator = () => {
  const token = crypto.randomBytes(8).toString('hex');
  return token;
};

const createToken = async (req, res) => {
  res.status(HTTP_OK_STATUS).json({ token: tokenGenerator() });
};

module.exports = { createToken };
