const UserModel = require("../models/user.model");

const loginAuthetication = async ({ username, password }) => {
  if (!username || !password) {
    const error = new Error('Campos faltantes');
    error.status = 401;
    throw error;
  }

  const user = await UserModel.findOne({
    attributes: ['id', 'name', 'username'],
    where: { username, password },
  });

  if (!user) {
    const error = new Error('Usuário ou senha incorretos');
    error.status = 401;
    throw error;
  }

  const token = generateToken(user.dataValues);

  return { token };
};

module.exports = {
  loginAuthetication,
};