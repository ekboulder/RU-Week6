
// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('seville.html', {root : './public'})
});

app.post('/formsubmit', function(req, res) {
	res.redirect('/' + req.body.locations + '.html')

})

app.get('/next', function(req,res){   
	var locations = ["Seville","Canary Islands","Cape Verde","Strait of Magellan","Guam","Philippines"]
	locations.forEach(function(element, index,array ){
		if (element === req.query.location){
			req.query.nextLocation = array[index+1] || array[0]
			res.send(req.query)
		}

	})
	// if (req.query.location === 'seville')
	// 	res.send({ 'location': 'Seville', 'nextLocation': 'Canary Islands'})
	// else res.send(req.query.location)
	// res.send(req.query.location)
})

app.get('/:undisclosedLocation', function(req,res){   //to handle parametric locations
	res.send('Magellan was never here')
})

app.use(function(req, res){								//to handle all requests (posts, puts, deletes, gets) that have not been routed so far
	res.send('I assure you Magellan was never here')
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})