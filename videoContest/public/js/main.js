//Setting an Angular module: myApp
angular.module ('myApp',[])

//Defining the Controller function: mainControllerFunc
var mainControllerFunc = function ($scope, $http) {
	$scope.greeting = 'hi there'
	$scope.videoList = []
	
	
	$http.get('/getlisting')
		.then(function(serverResponse){
				$scope.videoList = serverResponse.data
				console.log('Video List:',$scope.videoList)
			})

	$scope.newSubmission = function() {
		console.log('POST - new submission to send:', $scope.videoSubmission)
		$http.post('/newsubmission', $scope.videoSubmission)
			.then(function(serverResponse){
					console.log('POST THEN -reply from server:', serverResponse.data)
					$scope.videoList = serverResponse.data
					$scope.videoSubmission = {}
		})


	}//end of videoSubmission function

}// end of controller function

//Registering the controller: mainController
angular.module('myApp').controller('mainController',['$scope','$http',mainControllerFunc])
