const { createTalker } = require('./createTalker');
const { validateAge } = require('./validateAge');
const { validateAuth } = require('./validateAuth');
const { validateName } = require('./validateName');
const { validateTalk } = require('./validateTalk');

module.exports = {
  createTalker,
  validateAge,
  validateAuth,
  validateName,
  validateTalk,
};
