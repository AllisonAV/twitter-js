const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
  // res.set( { showForm: true } );
  let tweets = tweetBank.list()
  res.render( 'index', { tweets: tweets, showForm: true} );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {'name': name} );
  res.render( 'index', {tweets: tweets });
});

router.get('/tweets/:id', function(req, res) {
  var id = req.params.id;
  var tweets = tweetBank.find( {'id': Number(id)} );
  console.log(tweets);
  res.render( 'index', {tweets: tweets });
});





module.exports = router;
