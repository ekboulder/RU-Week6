var submissionsList = []

var Video = function (videoSubmission) {
	this.name 			= videoSubmission.name
	this.url 			= videoSubmission.url
	this.title 			= videoSubmission.title
	this.description 	= videoSubmission.description
	this.voteCount 		= 0
	submissionsList.push(this)
}

for (var i=0; i<=6; i++){ //only one more video to fill
	new Video({ 
				name: 'Participant '+i,
				url: 'https://www.youtube.com/embed/fee9UG2A0YQ',
				title: 'title '+i,
				description: 'whatever',
			})
}

module.exports = {
	Video : Video,
	submissionsList : submissionsList,
}


