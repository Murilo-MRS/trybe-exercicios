require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...config,
    database: 'hello_jwt',
  }
};