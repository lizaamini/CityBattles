var express = require('express');
var router = express.Router();

var Parse = require('parse').Parse;

Parse.initialize("unitX88tQcs0FUtOy1ridPOKzNiGYlcvFDtCduHP", "HF0sGCMBC2KqzagEvw5dHfEVCt17CrHg9YbzQfll");


/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'Login' });
});

// exports.login = function(req, res){
//  res.render('login', {title: 'Log In'});
// };

module.exports = router;