const { createToken } = require('./createToken');
const { validateEmail } = require('./validateEmail');
const { validatePasswd } = require('./validatePasswd');

module.exports = {
  createToken,
  validateEmail,
  validatePasswd,
};
