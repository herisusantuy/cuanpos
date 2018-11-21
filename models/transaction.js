'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    transactionDate: DataTypes.DATE,
    TableId: DataTypes.INTEGER,
    covers: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
  };
  return Transaction;
};