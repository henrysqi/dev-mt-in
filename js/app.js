angular.module('internApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider
		.otherwise('/');
	
	$stateProvider
		.state('initial', {
			url: '/',
			templateUrl: "views/initial.html",
			controller: 'initialCtrl'
		})
		.state('landing', {
			url: '/landing',
			templateUrl: "views/landing.html",
			controller: 'landingCtrl',
			
		})
		.state('friends', {
			url: '/friends',
			templateUrl: "views/friends.html",
			controller: 'friendsCtrl'
		})
	  .state('search', {
			url: '/search',
			templateUrl: "views/search.html",
			controller: 'searchCtrl'
		})
	  .state('profile', {
			url: '/profile/:id',
			templateUrl: "views/profile.html",
			controller: 'profileCtrl'
		})
	  .state('update', {
			url: '/update',
			templateUrl: "views/update.html",
			controller: 'updateCtrl'
		});
	  
	
})