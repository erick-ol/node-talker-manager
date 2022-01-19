const HTTP_OK_STATUS = 200;
const { readTalkersFile } = require('../../utils/readTalkersFile');

const getAllTalkers = async (req, res) => {
  const talkers = await readTalkersFile();
  if (talkers.length === 0) res.status(HTTP_OK_STATUS).json([]);
  else res.status(HTTP_OK_STATUS).json(talkers);
};

module.exports = { getAllTalkers };
