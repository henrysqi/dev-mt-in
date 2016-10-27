angular.module('internApp').controller('searchCtrl', function($scope, mainService){
	
	$scope.getPeople = function(name){
		mainService.getPeople(name).then(function(res){
			if (res.length > 6){
				var peopleArray = [];
				for (var i = 0; i < 6; i++){
					peopleArray.push(res[i]);
				}
				$scope.people = peopleArray;
			} else {
				$scope.people = res;
			}
		})
	}

	
	
	
	
	
})