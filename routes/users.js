var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0/test002");
mongoose.model('users', {name: String});

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  mongoose.model('users').find(function(err, users){ 
    res.send(users);
  });
  

});

module.exports = router;
