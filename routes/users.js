var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  mongoose.model('users').find(function(err, users){ 
    res.send(users);
  });
  

});

module.exports = router;
