// src/config/config.js

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
    database: 'books_development',
  },
  test: {
    ...config,
    database: 'books_test',
    logging: false,
  },
  production: {
    ...config,
    database: 'books_production',
  },
};