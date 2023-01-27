const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    tableName: 'users',
  });

  return User;
};

module.exports = UserModel;
