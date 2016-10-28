angular.module('internApp').controller('profileCtrl', function($scope, mainService, $stateParams){
	
	$scope.user = mainService.getUser();
	
	$scope.getProfile = function(id){
		mainService.getProfile(id).then(function(res){
			$scope.searchedProfile = res;
			for (var i = 0; i < $scope.searchedProfile.name.length; i++){
				if ($scope.searchedProfile.name.charAt(i) === " "){
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
	
	
  $scope.addFriend = mainService.addFriend;
	
	
	
	
	
	
	
	
	
	
	
	
	
})