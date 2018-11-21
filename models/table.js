'use strict';
module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    name: DataTypes.STRING,
    covers: DataTypes.INTEGER
  }, {});
  Table.associate = function(models) {
    // associations can be defined here
  };
  return Table;
};