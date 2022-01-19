// leitura arquivo talker.json
const fs = require('fs').promises;

const readTalkersFile = async () => {
  const fileContent = await fs.readFile('./talker.json', 'utf-8');
  const talkers = JSON.parse(fileContent);
  return talkers;
};

module.exports = { readTalkersFile };
