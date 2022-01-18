const crypto = require('crypto');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// https://stackoverflow.com/questions/3166738/minimum-6-characters-regex-expression/3167082
const rePasswd = /^.{6,}$/;

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
  const fileContent = await fs.readFile('./talker.json', 'utf-8');
  const talkers = JSON.parse(fileContent);
  return talkers;
};

// endpoints get
app.get('/talker', async (req, res) => {
  const talkers = await getTalkers();
  if (talkers.length === 0) res.status(HTTP_OK_STATUS).json([]);
  else res.status(HTTP_OK_STATUS).json(talkers);
});

app.get('/talker/:id', async (req, res) => {
  const talkers = await getTalkers();
  const { id } = req.params;
  const talker = talkers.find((t) => t.id === parseInt(id, 0));
  if (!talker) res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  else res.status(HTTP_OK_STATUS).json(talker);
});

// endpoints post
const tokenGenerator = () => {
  const token = crypto.randomBytes(8).toString('hex');
  return token;
};

const validateLogin = (email, password) => {
  if (!email) return { status: 400, json: { message: 'O campo "email" é obrigatório' } };
  if (!reEmail.test(email)) {
    return { status: 400, json: { message: 'O "email" deve ter o formato "email@email.com"' } };
  }
  if (!password) return { status: 400, json: { message: 'O campo "password" é obrigatório' } };
  if (!rePasswd.test(password)) {
    return { status: 400, json: { message: 'O "password" deve ter pelo menos 6 caracteres' } };
  }
  return { status: 200, json: { token: tokenGenerator() } };
};

app.post('/login', async (req, res) => { 
  const { email, password } = req.body;
  const validated = validateLogin(email, password);
  res.status(validated.status).json(validated.json);
});
