// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();



//controller and models
var serverController = require('./controllers/serverController.js')

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  // res.send('Video Contest')
  res.sendFile('/html/home.html', {root : './public'})
});

app.post('/newsubmission', serverController.submissionRouting)
app.get('/getlisting', serverController.getListing)

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})