'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    ItemId: DataTypes.INTEGER,
    TableId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.Item)
    Order.belongsTo(models.Table)
  };
  return Order;
};