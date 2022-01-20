const NO_CONTENT_STATUS = 204;
const { readTalkersFile, updateTalkersFile } = require('../../utils');

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const talkers = await readTalkersFile();
  const talkerIndex = talkers.findIndex((t) => t.id === parseInt(id, 0));

  talkers.splice(talkerIndex, 1);

  updateTalkersFile(talkers);

  res.status(NO_CONTENT_STATUS).end();
};

module.exports = { deleteTalker };
