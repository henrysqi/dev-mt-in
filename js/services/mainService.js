angular.module('internApp').service('mainService', function($http, $q, $state){
	
	// Setting and Updating user info
	var user = {};
	
	this.saveChanges = function(name, tagline, image, bio){
		if (name, tagline, image, bio){
			user.name = name;
			user.tagline = tagline;
			user.image = image;
			user.bio = bio;
			for (var i = 0; i < name.length; i++){
				if (name.charAt(i) === " "){
					user.first = name.slice(0,i);
					user.last = name.slice(i+1);
				}
			}
			if (user.first === undefined){
				user.first = name;
			}
			$state.go("landing");		
		}
	}
	
	this.getUser = function(){
		return user;
	}
	
	/////////////////////////////////////////////////////////////////////////
	
	//get list of people after search
	
	this.getPeople = function(name){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://connections.devmounta.in/api/profiles?name=' + name
		}).then(function(res){
			deferred.resolve(res.data);
		})
		return deferred.promise;
	} 
	
	///////////////////////////////////////////////////////////////////////////
	
	//get profile by id
	
	this.getProfile = function(id){
	  var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://connections.devmounta.in/api/profiles/' + id
		}).then(function(res){
			deferred.resolve(res.data);
		})
		return deferred.promise;
	}
	
	///////////////////////////////////////////////////////////////////////////
	
	//Add friend
	var friends = [];
	
	this.addFriend = function(obj){
		friends.push(obj);
	}
	
	this.getFriends = function(){
		return friends;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})