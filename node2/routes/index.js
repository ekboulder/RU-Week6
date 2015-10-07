var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  
  
  //1- the Sync Way
  // var fileContents = fs.readFileSync('data.txt')
  // res.header('Content-Type', 'text/html')
  // res.send(fileContents)

  //2- the Async way
  fs.readFile('data.txt', function(err, data) {
  	var fileContents = data
  	res.header('content-type', 'text/html')
  	res.send(fileContents)
  })



});

module.exports = router;
