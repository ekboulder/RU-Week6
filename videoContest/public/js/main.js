//Setting an Angular module: myApp
angular.module ('myApp',['ngMaterial'])

//Defining the Controller function: mainControllerFunc
var mainControllerFunc = function ($scope, $http, $sce) {
	
	//important to allow ng-src="{{trustSrc(video.url)}}" 
	$scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }		

	$scope.greeting = 'hi there'
	$scope.videoList = []
	$scope.formVisible = true
	$scope.contestVisible = false

	$http.get('/getlisting')
		.then(function(serverResponse){
				$scope.videoList = serverResponse.data
				console.log('Video List at loading:',$scope.videoList)
			
				if ($scope.videoList.length == 8)
					$scope.formVisible = false
	}) //end of get getListing

	$scope.newSubmission = function() {
		console.log('POST - new submission to send:', $scope.videoSubmission)
		
		
			$http.post('/newsubmission', $scope.videoSubmission)
				.then(function(serverResponse){
						console.log('POST THEN -reply from server:', serverResponse.data)
						$scope.videoList = serverResponse.data
						$scope.videoSubmission = {}
						
						if ($scope.videoList.length == 8)
							$scope.formVisible = false

			}) // end of post newsubmission
	}//end of newSubmission function

	
	
	$scope.startContest = function () {
		
		$scope.contestVisible = true
		$scope.contestArray = []

		for (var i=0; i<=3; i++) {
			var tempPairArray = []
			// console.log('video object:',$scope.videoList[2*i])
			tempPairArray.push($scope.videoList[2*i])
			tempPairArray.push($scope.videoList[2*i+1])

			$scope.contestArray.push(tempPairArray)

			// console.log('contest Array:', $scope.contestArray)
		}

		console.log('Contest Array out:', $scope.contestArray)
	}//end of startContest Function	



	$scope.vote = function (pairIndex,videoIndex) {
		console.log('VOTE:', pairIndex, videoIndex )

		var targetIndex = (2*pairIndex)+videoIndex
		// $scope.contestArray[pairIndex][videoIndex].voteCount++
		$scope.videoList[targetIndex].voteCount++


	}// end of vote

	$scope.computeResults = function () {

		$http.post('/votesubmission', $scope.videoList)
				.then(function(serverResponse){
						console.log('POST THEN -reply from server:', serverResponse.data)
						// $scope.videoList = serverResponse.data

		}) // end of post newsubmission
	}

}// end of controller function

//Registering the controller: mainController
angular.module('myApp').controller('mainController',['$scope','$http', '$sce',mainControllerFunc])
