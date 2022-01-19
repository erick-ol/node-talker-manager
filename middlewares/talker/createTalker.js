const fs = require('fs').promises;
const { readTalkersFile } = require('../../utils/readTalkersFile');

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

  await fs.writeFile('./talker.json', JSON.stringify(talkers));

  return res.status(201).json(newTalker);
};

module.exports = { createTalker };
