var r = process.argv[2]
var g = process.argv[3]
var b = process.argv[4]

var luminosity = 0.2126*r + 0.7152*g + 0.0722*b
console.log('luminosity = ' + luminosity)


// from this point on, we are addressing part II. and actually the below is enough.
var luminosityFunction = function (r,g,b) {
	return 0.2126*r + 0.7152*g + 0.0722*b
}

module.exports = luminosityFunction     //I am exporting a function