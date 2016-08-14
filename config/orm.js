var BurgerBuyer = require('../models').BurgerBuy;
BurgerBuyer.sync();

var burgerBuy = {
    selectAll: function(cb){
        BurgerBuyer.findAll({}).then(function(success){
                cb(success);
                })
    },
    insertOne: function(name, cb){
        BurgerBuyer.create({
            burger_name: name,
            devoured: false
        }).then(function(success){
            cb(success);
        })
    },
    updateOne: function(id, cb){
        BurgerBuyer.findAll({
            where: {
                id: id
            }
        }).then(function(success){
            success[0].set('devoured', true);
            success[0].save();
            cb(success);
            })
    }
};

module.exports['exportAll'] = burgerBuy;