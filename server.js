var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
var PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('public/assets'));

var BurgerBuyer = require('./models').BurgerBuy;
BurgerBuyer.sync();

app.get('/', function(req,res){
    BurgerBuyer.findAll({}).then(function(success){
			res.render('index', {BurgerBuys: success});
		});
	});

app.post('/create', function(req,res){
    BurgerBuyer.create({
        burger_name: req.body.burger_name,
        devoured: false
    }).then(function(success){
		res.redirect('/');
	});
});

app.put('/update', function(req,res){
        BurgerBuyer.findAll({}).then(function(success){
        console.log(success);
        success[0].set('devoured', true);
        success[0].save();
		res.redirect('/');
	});
});

app.listen(PORT, function(){
    console.log("Listening on port", PORT);
});

