'use strict';
module.exports = function(sequelize, DataTypes) {
  var BurgerBuy = sequelize.define('BurgerBuy', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return BurgerBuy;
};