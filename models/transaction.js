'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    transactionDate: DataTypes.DATE,
    TableId: DataTypes.INTEGER,
    covers: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    TransactionTypeId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    ppn: DataTypes.INTEGER,
    service: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
      hooks: {
        afterCreate(transaction, options) {
          return sequelize.models.Table.findOne({
            where: {
              id: transaction.TableId
            }
          })
            .then(table => {
              table.status = 1
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
  Transaction.prototype.totalPPN = function () {
    return this.qty * this.price * 0.1

  }
  Transaction.prototype.totalService = function () {
    return this.qty * this.price * 0.11
  }
  Transaction.prototype.totalSales = function () {
    return (this.qty * this.price) + totalPPN() + totalService()
  }
  return Transaction;
};