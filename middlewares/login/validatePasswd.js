// https://stackoverflow.com/questions/3166738/minimum-6-characters-regex-expression/3167082
const rePasswd = /^.{6,}$/;
const BAD_REQUEST_STATUS = 400;

const validatePasswd = async (req, res, next) => {
  const { password } = await req.body;

  if (!password) {
    return res.status(BAD_REQUEST_STATUS).json({ message: 'O campo "password" é obrigatório' });
  }
  if (!rePasswd.test(password)) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  next();
};

module.exports = { validatePasswd };
