'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts',{
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      content:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          keys: 'id',
        }
      },
      published:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      updated:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      }
    }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
