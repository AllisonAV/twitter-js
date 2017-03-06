const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send('<h1>Welcome to our server!!<\/h1>');
})


var server = app.listen(3000, () => {
	console.log('in app.listen');
});