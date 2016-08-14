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

var BurgerBuyer = require('./config/orm.js')['exportAll'];

app.get('/', function(req,res){
    BurgerBuyer.selectAll(function(success){
	res.render('index', {BurgerBuys: success});
		});
	});

app.post('/create', function(req,res){
    BurgerBuyer.insertOne(req.body.burger_name, function(success){
		res.redirect('/');
	});
});

app.put('/update', function(req,res){
        BurgerBuyer.updateOne(req.body.id, function(success){
		    res.redirect('/');
	});
});

app.listen(PORT, function(){
    console.log("Listening on port", PORT);
});

