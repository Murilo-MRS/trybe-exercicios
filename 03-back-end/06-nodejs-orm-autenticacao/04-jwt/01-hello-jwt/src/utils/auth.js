const jwt = require('jsonwebtoken');

const { TOKEN_SECRET } = process.env;

const generateToken = (payload) =>
  jwt.sign(payload, TOKEN_SECRET, {
    expiresIn: '60m',
    algorithm: 'HS256',
  });

const authenticateToken = async (token) => {
  if (!token) {
    const error = new Error('Token not found');
    error.status = 401;
    throw error;
  }

  try {
    const verificationResponse = await jwt.verify(token, TOKEN_SECRET);
    return verificationResponse;
  } catch (err) {
    const error = new Error(err.message);
    error.status = 401;
    throw error;
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};
