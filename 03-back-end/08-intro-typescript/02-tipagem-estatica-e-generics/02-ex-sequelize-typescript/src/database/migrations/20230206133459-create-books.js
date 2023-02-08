'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(55),
        allowNull: false,
      },
      authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'author_id',
        references: {
          model: 'authors',
          key: 'id',
        },
      },
      genreId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'genre_id',
        references: {
          model: 'genres',
          key: 'id',
        },
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
    return await queryInterface.dropTable('books');
  }
};
