const UNAUTHORIZED_STATUS = 401;

const validateAuth = async (req, res, next) => {
  const { authorization } = await req.headers;

  if (!authorization) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== 16) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Token inválido' });
  }

  next();
};

module.exports = { validateAuth };
