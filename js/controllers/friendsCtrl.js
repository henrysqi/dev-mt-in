angular.module('internApp').controller('friendsCtrl', function($scope, mainService){
	
	$scope.user = mainService.getUser();
	
	$scope.friends = mainService.getFriends();
	
	console.log($scope.friends);
	
	
	
	
	
	
	
})