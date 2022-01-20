const { createTalker } = require('./createTalker');
const { editTalker } = require('./editTalker');
const { getAllTalkers } = require('./getAllTalkers');
const { getTalkerById } = require('./getTalkerById');
const { validateAge } = require('./validateAge');
const { validateAuth } = require('./validateAuth');
const { validateName } = require('./validateName');
const { validateTalk } = require('./validateTalk');

module.exports = {
  createTalker,
  editTalker,
  getAllTalkers,
  getTalkerById,
  validateAge,
  validateAuth,
  validateName,
  validateTalk,
};
