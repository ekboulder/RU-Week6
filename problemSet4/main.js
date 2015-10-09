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
	return sum

}

addNumbers('88Hello 3World!')
addNumbers('55Hello')
addNumbers('5Hello 5')


//longestWord

var longestWord = function (string) {
	var words = string.split(' ')
	console.log('words array:' , words)
	
	var noPunctuationWords = []
	words.forEach(function(word){
		// console.log('the word', word, 'has a last character of:', word.charAt(word.length-1), 'which has a charCode of:', word.charCodeAt(word.length-1) )
		// console.log(word.charAt(word.length-1).toLowerCase())
		if (word.charAt(word.length-1).toLowerCase().charCodeAt(0) <= 97 || word.charAt(word.length-1).toLowerCase().charCodeAt(0) >=122) {
				
				// console.log('hello')
				noPunctuationWords.push(word.split('').splice(0,word.length-1).join(''))
			
		} else noPunctuationWords.push(word)
	})

	var longestW = '' 	
	noPunctuationWords.forEach(function(word, index){
		console.log(noPunctuationWords[(index+1)%(noPunctuationWords.length)])
		if (word.length >= noPunctuationWords[(index+1)%(noPunctuationWords.length)].length)
			longestW = word
	// console.log(longestW)
	})
	console.log('Longest:',longestW)

}

longestWord('refactorU is an amazing program. Great for developpers and entrepreneurs!')


// averageStringNumbers

var averageStringNumbers = function(string) {
	var numbersTotal = addNumbers(string)

	var letterTotal = 0
	string.split('').forEach(function(character) {
		if (character.toLowerCase().charCodeAt(0) >= 97 && character.toLowerCase().charCodeAt(0)  <=122)
			letterTotal += 1
	})
	var average = Math.round(numbersTotal/letterTotal)
	console.log('the average is:' , average)

}

averageStringNumbers('Hello6 9World 2, Nic8e D7ay!')
averageStringNumbers('hello44444 world')
