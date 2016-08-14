var models = require('../../../models');

models.sequelize.sync();

var BurgerBuyer = models.BurgerBuy;

function createBurger(){
    BurgerBuyer.create({
        burger_name: 'Hamburglar',
        devoured: false,
        date: '01/01/2001'
    }).then(function(success){});
};

function allBurgers(){
    BurgerBuyer.findAll({}).then(function(success){})
};

function updateBurgers(){
    BurgerBuyer.findAll({}).then(function(success){
        BurgerBuyer.set('devoured', true);
    });
};