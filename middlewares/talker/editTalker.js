const HTTP_OK_STATUS = 200;
const { updateTalkersFile } = require('../../utils');
const { readTalkersFile } = require('../../utils/readTalkersFile');

const editTalker = async (req, res) => {
  const { id } = await req.params;
  const { name, age, talk } = await req.body;

  const talkers = await readTalkersFile();
  const talkerIndex = talkers.findIndex((t) => t.id === parseInt(id, 0));
  
  const changedTalker = { id: parseInt(id, 0), name, age, talk };
  talkers[talkerIndex] = changedTalker;

  updateTalkersFile(talkers);

  return res.status(HTTP_OK_STATUS).json(changedTalker);
};

module.exports = { editTalker };
