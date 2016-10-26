angular.module('internApp').controller('initialCtrl', function($scope, mainService){
	
	$scope.saveChanges = mainService.saveChanges;
	
})