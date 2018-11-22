'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.addColumn('Transactions', 'price', { type: Sequelize.INTEGER, defaultValue: 0 }),
      queryInterface.addColumn('Transactions', 'ppn', { type: Sequelize.INTEGER, defaultValue: 0 }),
      queryInterface.addColumn('Transactions', 'service', { type: Sequelize.INTEGER, defaultValue: 0 }),
      queryInterface.addColumn('Transactions', 'total', { type: Sequelize.INTEGER, defaultValue: 0 })
    ]

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.removeColumn('Transactions', 'price', {}),
      queryInterface.removeColumn('Transactions', 'ppn', {}),
      queryInterface.removeColumn('Transactions', 'service', {}),
      queryInterface.removeColumn('Transactions', 'total', {})
    ]
  }

};
