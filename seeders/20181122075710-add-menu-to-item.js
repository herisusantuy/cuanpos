'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Items', [{
      name: 'Basi Bakso Teriyaki',
      price: 26500,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Nasi Bakso Saos Mentega',
      price: 27000,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Nasi Bakso Blackpapper',
      price: 30000,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Bakso Urat Besar',
      price: 18000,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Bakso Telor Bebek',
      price: 25000,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Bakso Super Keju',
      price: 28000,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Nasi Goreng',
      price: 20000,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Nasi Goreng',
      price: 20000,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Juz Campur Sari',
      price: 18000,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Es Teh Manis',
      price: 10000,
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Es Jeruk',
      price: 15000,
      createdAt: new Date,
      updatedAt: new Date
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Items', null, {})
  }
};
