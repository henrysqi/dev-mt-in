angular.module('internApp').service('mainService', function($http, $state){
	
	var user = {};
	
	this.saveChanges = function(name, tagline, image, bio){
		if (name, tagline, image, bio){
			user.name = name;
			user.tagline = tagline;
			user.image = image;
			user.bio = bio;
			
			for (var i = 0; i < name.length; i++){
				if (name.charAt(i) === " "){
					console.log("for loop ran");
					user.first = name.slice(0,i);
					user.last = name.slice(i+1);
				}
			}
			if (user.first === undefined){
				user.first = name;
			}
			
			$state.go("landing");
			
			
		}
		
		console.log(user)
		
	}
	
	this.getUser = function(){
		return user;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})