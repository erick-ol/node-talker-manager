// https://www.aspsnippets.com/questions/953125/Regular-Expression-for-Date-ddmmyyyy-and-dd-mm-yyyy-format-in-ASPNet/
const reDate = /(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}$/;
const reRange = /^[1-5]$/;

const talkCondition = (
  (talk) => !talk || !talk.watchedAt || !talk.rate || talk.watchedAt === '' || talk.rate === ''
);

const validateTalk = async (req, res, next) => {
  const { talk } = await req.body;

  if (talkCondition(talk)) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  if (!reDate.test(talk.watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  if (!reRange.test(talk.rate)) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  next();
};

module.exports = { validateTalk };
