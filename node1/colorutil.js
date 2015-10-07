color = {};
color.r = 0
color.g = 0
color.b = 0


color.luminosity = function (r,g,b) {
	return 0.2126*r + 0.7152*g + 0.0722*b
}

color.darken = function (r,g,b) {
	color.r = Math.round(r*0.8 *10)/10
	color.g = Math.round(g*0.8 *10)/10
	color.b = Math.round(b*0.8 *10)/10
}

module.exports = color