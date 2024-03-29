const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {

  const employee = await Employee.findOne({
      where: { id },
      // include: [{ model: Address, as: 'addresses', // caso nao queira q apareca a coluna de nuber usamos exclude
      // attributes: { exclude: ['number'] }, // caso nao queira q apareca a coluna de nuber usamos exclude
    // }],
  });

  return employee;
}

module.exports = { getAll, getById };