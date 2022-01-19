const BAD_REQUEST_STATUS = 400;

const validateAge = async (req, res, next) => {
  const { age } = await req.body;

  if (!age) return res.status(BAD_REQUEST_STATUS).json({ message: 'O campo "age" é obrigatório' });
  if (age < 18) {
    return res.status(BAD_REQUEST_STATUS).json({
      message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};

module.exports = { validateAge };
