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

// app.post('/create', function(req,res){
// 	thisConnection.insertOne('burgers', req.body.burger_name, function(data){
// 		res.redirect('/');
// 	});
// });

// app.put('/update', function(req,res){
// 	thisConnection.updateOne('burgers', req.body.id, function(data){
// 		res.redirect('/');
// 	});
// });

app.listen(PORT, function(){
    console.log("Listening on port", PORT);
});

