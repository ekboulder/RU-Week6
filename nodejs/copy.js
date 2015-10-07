var fileToRead = './' + process.argv[2]
var fileToWrite = process.argv[3]

var fs = require('fs')
var myCopy = fs.readFileSync(fileToRead, 'utf-8')
fs.writeFileSync(fileToWrite, myCopy)
console.log(myCopy)

