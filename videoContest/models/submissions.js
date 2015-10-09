var submissionsList = []

var Video = function (videoSubmission) {
	this.name = videoSubmission.name
	this.url = videoSubmission.url
	this.title = videoSubmission.title
	this.description = videoSubmission.description

	submissionsList.push(this)
}

module.exports = {
	Video : Video,
	submissionsList : submissionsList,
}