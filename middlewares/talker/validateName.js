const BAD_REQUEST_STATUS = 400;
const reName = /^.{3,}$/;

const validateName = async (req, res, next) => {
  const { name } = await req.body;

  if (!name) {
    return res.status(BAD_REQUEST_STATUS).json({ message: 'O campo "name" é obrigatório' });
  }
  if (!reName.test(name)) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

module.exports = { validateName };
