'use strict';
module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    name: DataTypes.STRING,
    covers: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {});
  Table.associate = function (models) {
    // associations can be defined here
    Table.belongsToMany(models.Item, { through: models.Order })
  };
  return Table;
};