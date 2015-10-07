var darkerColor = require('./colorutil.js')

darkerColor.darken(process.argv[2], process.argv[3], process.argv[4])

console.log(darkerColor.r , darkerColor.g , darkerColor.b)