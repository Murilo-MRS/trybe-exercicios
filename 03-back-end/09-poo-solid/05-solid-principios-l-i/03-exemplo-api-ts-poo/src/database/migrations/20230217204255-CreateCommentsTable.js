'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      postId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'posts',
          key: 'id'
        },
        field: 'post_id'
      }
    });
  },

  async down (queryInterface, _) {
    await queryInterface.dropTable('comments');
  }
};
