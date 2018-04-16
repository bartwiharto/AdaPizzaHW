//Ada's pizza

// add all apps in the dependencies: body-parser, ejs, express, morgan

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const ejs = require('ejs');
const path = require('path');
const pizza = require('./pizza.js');

//get the middleware for express, morgan, and bodyParser
var app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

/* set the view engine */
app.set('views', './views');
app.set('view engine', 'ejs');


//check if express runs

// app.get('/', (req,res) => {
// 	res.send("Hello World");
// });

app.get('*', (req, res) => {
    res.status(404).sendFile('/404.html', {root: '404'});
})

app.listen(3000, () => 
	console.log("Listening on port 3000"));