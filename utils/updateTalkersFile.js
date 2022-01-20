const fs = require('fs').promises;

const updateTalkersFile = async (talkers) => {
  await fs.writeFile('./talker.json', JSON.stringify(talkers));
};

module.exports = { updateTalkersFile };
