const express = require('express');
const volleyball = require('volleyball');
const app = express();

app.use(function (req, res, next) {
	console.log(Object.keys(req).sort());
	console.log('Request Type:', req.method, 'Request URL: ', req.originalUrl);

	next();
});

app.use(volleyball);

app.use('/special',function(req, res, next) {
	console.log('You reached the special area', req.originalUrl);
	next();
});

app.get('/', function(req, res){
	res.send('<h1>Welcome to our server!!<\/h1>');
});

app.get('/news', function(req, res) {
	res.send('<h1>News Headlines<\/h1>');
});

var server = app.listen(3000, () => {
	console.log('in app.listen');
});