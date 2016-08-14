'use strict';
module.exports = function(sequelize, DataTypes) {
  var BurgerBuy = sequelize.define('BurgerBuy', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // BurgerBuy.hasMany(models.burger_name);
        // associations can be defined here
      }
    }
  });
  return BurgerBuy;
};