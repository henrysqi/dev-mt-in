angular.module('internApp').controller('updateCtrl', function($scope, mainService){
	
	
	$scope.saveChanges = mainService.saveChanges;
	
	$scope.user = mainService.getUser();
	
	
	
})