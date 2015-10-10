var submissions = require('../models/submissions')


var getListing = function (req, res) {
	console.log('req query:', req.query)
	res.send(submissions.submissionsList)

}

var submissionRouting = function (req, res){
	console.log('req body:', req.body)
	new submissions.Video(req.body)
	res.send(submissions.submissionsList)

}

var setVote = function (req,res) {
	console.log('set Vote:',req.body)
	submissions.submissionsList[req.body.id].voteCount++
	res.send(submissions.submissionsList)
		

}

module.exports = {
	getListing			: getListing,
	submissionRouting 	: submissionRouting,
	setVote				: setVote,
	
}