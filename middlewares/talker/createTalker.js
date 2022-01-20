const CREATED_STATUS = 201;
const { readTalkersFile, updateTalkersFile } = require('../../utils');

const createTalker = async (req, res) => {
  const { name, age, talk } = await req.body;
  const talkers = await readTalkersFile();

  const id = talkers[talkers.length - 1].id + 1;

  const newTalker = {
    id,
    name,
    age,
    talk,
  };

  talkers.push(newTalker);

  updateTalkersFile(talkers);

  return res.status(CREATED_STATUS).json(newTalker);
};

module.exports = { createTalker };
