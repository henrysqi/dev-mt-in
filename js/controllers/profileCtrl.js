angular.module('internApp').controller('profileCtrl', function($scope, mainService, $stateParams){
	
	$scope.getProfile = function(id){
		mainService.getProfile(id).then(function(res){
			$scope.searchedProfile = res;
			console.log($scope.searchedProfile)
			for (var i = 0; i < $scope.searchedProfile.name.length; i++){
				console.log("for loop ran");
				if ($scope.searchedProfile.charAt(i) === " "){
					$scope.searchedProfile.first = $scope.searchedProfile.name.slice(0,i);
					$scope.searchedProfile.last = $scope.searchedProfile.name.slice(i+1);
				}
			}
			if ($scope.searchedProfile.first === undefined){
				$scope.searchedProfile.first = name;
			}
		})
	}
	
	$scope.getProfile($stateParams.id);
	
	
})