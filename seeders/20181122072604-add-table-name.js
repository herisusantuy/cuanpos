'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tables', [{
      name: 'Table 01',
      covers: 6,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Table 01',
      covers: 6,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Table 02',
      covers: 6,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Table 03',
      covers: 6,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Table 04',
      covers: 6,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Table 05',
      covers: 6,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Table 06',
      covers: 6,
      createdAt: new Date,
      updatedAt: new Date
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tables', null, {})
  }
};
