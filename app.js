const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const app = express();
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

app.use(function (req, res, next) {
	console.log(Object.keys(req).sort());
	console.log('Request Type:', req.method, 'Request URL: ', req.originalUrl);

	next();
});

app.use(volleyball);

// var locals = {
// 	title: 'This is the title',
// 	people: [
// 		{name: 'Gandalf'},
// 		{name: 'Frodo'},
// 		{name: 'Hermione'}
// 	]
// };

// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.get('/views', function(req, res) {
	res.render( 'index', {title: 'Hall of Fame', people: people} );
});

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
