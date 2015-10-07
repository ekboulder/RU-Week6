var _ = require('underscore')
var request = require('request')

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
		  
		  	var colorArray = []
			var colorName = process.argv[2]
			var myColor = []



		  if (!error && response.statusCode == 200){
		  	colorArray = JSON.parse(body)

		  	//this works
		  	myColor = colorArray.filter(function(element){
						return element.name.toLowerCase() == colorName.toLowerCase()
					})
		  	console.log('the output:', myColor[0].rgb)
		  	console.log(myColor[0].rgb.r, myColor[0].rgb.g, myColor[0].rgb.b)
  	
  			//this also works:
  			console.log( _.find(colorArray, function(color) {
		  		return color.name.toLowerCase() == colorName.toLowerCase()
		  	}).rgb)


  }

})
