const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

// leitura arquivo talker.json
const fs = require('fs').promises;

const getTalkers = async () => {
  const fileContent = await fs.readFile('./talker.json');
  const talkers = JSON.parse(fileContent);
  return talkers;
};

app.get('/talker', async (req, res) => {
  const talkers = await getTalkers();
  if (talkers.length === 0) res.status(HTTP_OK_STATUS).json([]);
  else res.status(HTTP_OK_STATUS).json(talkers);
});
