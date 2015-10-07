// Problem set 4

//addNumbers

var addNumbers = function (string) {
	var characterArray = string.split('')
	var numberSpaceArray = []
	var numberArray = []
	numberSpaceArray = characterArray.filter(function(character){
		return !isNaN(character)
	})
	console.log(numberSpaceArray)
	console.log(numberSpaceArray.length)

	numberArray = numberSpaceArray.join('').split(' ').map(function(charnumber){
		return Number(charnumber)
	})
	var sum = numberArray.reduce(function(addition, num){
		return (addition + num)
	},0)
	console.log('sum:', sum)

}

addNumbers('88Hello 3World!')
addNumbers('55Hello')
addNumbers('5Hello 5')


//