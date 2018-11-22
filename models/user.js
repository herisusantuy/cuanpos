'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          args: true,
          msg: `Please input letter only!`
        },
        isUnique(value) {
          return User.findOne({
            where: {
              name: value
            }
          })
            .then(user => {
              if (user) {
                throw new Error(`Your name has been registered in our database!`)

              }
            })
            .catch(err => {
              throw err
            })
        }
      }
    },
    password: {
      type: DataTypes.INTEGER,
      validate: {
        len: {
          args: [1, 6],
          msg: `Length password between 1 and 4`
        },
        isNumberic: {
          args: true,
          msg: `Please input number only!`
        }
      }
    },
    salt: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Transaction)
  };
  return User;
};