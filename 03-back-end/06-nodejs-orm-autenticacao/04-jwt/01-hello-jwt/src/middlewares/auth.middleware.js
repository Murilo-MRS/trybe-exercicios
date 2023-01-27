const { authenticateToken } = require('../utils/JWT');

const authenticateMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  const user = await authenticateToken(token);
  if (!user) {
    const error = new Error('jwt malformed');
    error.status = 401;
    throw error;
  }
  res.locals.user = user;
  next();
};

module.exports = authenticateMiddleware;