const loginService  = require('../services/login.service'); 

const login = async (req, res) => {
  const login = await loginService.loginAuthetication(req.body);
  res.status(200).send(login);
};

module.exports = {
  login,
};