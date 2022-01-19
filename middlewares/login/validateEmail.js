// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BAD_REQUEST_STATUS = 400;

const validateEmail = async (req, res, next) => {
  const { email } = await req.body;

  if (!email) {
    return res.status(BAD_REQUEST_STATUS).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!reEmail.test(email)) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: 'O "email" deve ter o formato "email@email.com"' });
  }

  next();
};

module.exports = { validateEmail };
