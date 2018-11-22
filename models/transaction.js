'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    transactionDate: DataTypes.DATE,
    TableId: DataTypes.INTEGER,
    covers: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    TransactionTypeId: DataTypes.INTEGER
  }, {
      hooks: {
        afterCreate(transacton, options) {
          return sequelize.models.Table.findOne({
            where: {
              id: transacton.TableId
            }
          })
            .then(table => {
              table.status = 0
              table.updatedAt = new Date
              return table.save()
            })
        }
      }
    });
  Transaction.associate = function (models) {
    // associations can be defined here
    Transaction.belongsTo(models.Item)
    Transaction.belongsTo(models.Table)
    Transaction.belongsTo(models.User)
    // Transaction.belongsTo(models.TransactionType)
  };
  return Transaction;
};