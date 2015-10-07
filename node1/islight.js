var luminosityValueCalculator = require('./luminosity.js')   // I am exporting  function

var luminosityValue = luminosityValueCalculator (process.argv[2], process.argv[3], process.argv[4])


if (luminosityValue >= 155)
console.log('light')
else console.log('dark')