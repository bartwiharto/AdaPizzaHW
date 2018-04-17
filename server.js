//Ada's pizza

// add all apps in the dependencies: body-parser, ejs, express, morgan

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const ejs = require('ejs');
const path = require('path');
const pizzas = require('./pizza.js');

//get the middleware for express, morgan, and bodyParser
var app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

/* set the view engine */
app.set('views', 'public');
app.set('view engine', 'ejs');

app.get('/pizzas', (request, response) => {

	let myData = {
		myPizzaList: pizzas,
	}

	response.render('./pizza-index', myData);
});


//{pizza: pizza} = {key: value} key is the one that is used in pizza-single.ejs
app.get('/pizzas/:id', (request, response) => {
	let pizza = pizzas[request.params.id - 1];
	response.render('./pizza-single', {pizza: pizza});
});


// app.get('/pizzas/:id', (request, response) => {
// 	//id is a string that comes from the URL, hopefully it's a number.
// 	let id = request.params.id;

// 	//find the object that has an id that matches the id in the url
// 	//this is minus 1 because it's looking for the index# not the id#
// 	let pizza = pizzas[id - 1];

// 	response.send(pizza);
// });

// app.get('/pizzas/:id/flavor', (request, response) => {
// 	//id is a string that comes from the URL, hopefully it's a number.
// 	let id = request.params.id;

// 	//find the object that has an id that matches the id in the url
// 	//this is minus 1 because it's looking for the index# not the id#
// 	let pizza = pizzas[id - 1];

// 	response.send(pizza.flavor);
// });


// app.get("/pizzas"), function(req, res){
// 	res.render('', "/"), {pizzas:pizzas}
// }

//check if express runs

// app.get('/', (req,res) => {
// 	res.send("Hello World");
// });

app.get('*', (req, res) => {
    res.status(404).sendFile('/404.html', {root: '404'});
});

app.listen(3000, () => 
	console.log("Listening on port 3000"));


























