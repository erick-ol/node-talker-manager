const { createTalker } = require('./createTalker');
const { deleteTalker } = require('./deleteTalker');
const { editTalker } = require('./editTalker');
const { getAllTalkers } = require('./getAllTalkers');
const { getTalkerById } = require('./getTalkerById');
const { searchTalker } = require('./searchTalker');
const { validateAge } = require('./validateAge');
const { validateAuth } = require('./validateAuth');
const { validateName } = require('./validateName');
const { validateTalk } = require('./validateTalk');

module.exports = {
  createTalker,
  deleteTalker,
  editTalker,
  getAllTalkers,
  getTalkerById,
  searchTalker,
  validateAge,
  validateAuth,
  validateName,
  validateTalk,
};
