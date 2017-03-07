const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  //res.sendFile('/public/stylesheets/style.css');
  //  res.sendFile('/Users/allison/Immersive/twitter-js/public/stylesheets/style.css');
  	res.render( 'index', { tweets: tweets } );
});

// router.get('/stylesheets/style.css', function (req, res) {
//   //let tweets = tweetBank.list();
  	
//     res.sendFile(styleSheet);
//   //	res.render( 'index', { tweets: tweets } );
// });




module.exports = router;