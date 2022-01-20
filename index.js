const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// middlewares and utils requires
const {
  createTalker,
  deleteTalker,
  editTalker,
  getAllTalkers,
  validateAge,
  validateAuth,
  validateName,
  validateTalk,
  getTalkerById,
} = require('./middlewares/talker');
const { createToken, validateEmail, validatePasswd } = require('./middlewares/login');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

// endpoints get
app.get('/talker', getAllTalkers);

app.get('/talker/:id', getTalkerById);

// endpoints post
app.post('/login', validateEmail, validatePasswd, createToken);

app.post('/talker', validateAuth, validateName, validateAge, validateTalk, createTalker);

// endpoint put
app.put('/talker/:id', validateAuth, validateName, validateAge, validateTalk, editTalker);

// endpoint delete
app.delete('/talker/:id', validateAuth, deleteTalker);
