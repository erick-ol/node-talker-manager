const HTTP_OK_STATUS = 200;
const NOT_FOUND_STATUS = 404;
const { readTalkersFile } = require('../../utils/readTalkersFile');

const getTalkerById = async (req, res) => {
  const talkers = await readTalkersFile();
  const { id } = req.params;
  const talker = talkers.find((t) => t.id === parseInt(id, 0));
  if (!talker) {
    res.status(NOT_FOUND_STATUS).json({ message: 'Pessoa palestrante não encontrada' });
  } else res.status(HTTP_OK_STATUS).json(talker);
};

module.exports = { getTalkerById };
