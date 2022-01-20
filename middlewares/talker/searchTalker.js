const HTTP_OK_STATUS = 200;
const { readTalkersFile } = require('../../utils');

const searchTalker = async (req, res) => {
  const { q } = await req.query;
  const talkers = await readTalkersFile();

  if (!q) return res.status(HTTP_OK_STATUS).json(talkers);

  const filteredNames = talkers.filter((t) => t.name.includes(q));

  if (!filteredNames) return res.status(HTTP_OK_STATUS).json([]);
  return res.status(HTTP_OK_STATUS).json(filteredNames);
};

module.exports = { searchTalker };
