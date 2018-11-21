'use strict';
module.exports = (sequelize, DataTypes) => {
  const TransactionType = sequelize.define('TransactionType', {
    name: DataTypes.STRING
  }, {});
  TransactionType.associate = function (models) {
    // associations can be defined here
    TransactionType.belongsTo(models.Transaction)
  };
  return TransactionType;
};