angular.module('internApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider
		.otherwise('/');
	
	$stateProvider
		.state('initial', {
			url: '/',
			templateUrl: "../views/initial.html",
			controller: 'initialCtrl'
		})
		.state('landing', {
			url: '/landing',
			templateUrl: "../views/landing.html"
		})
		.state('friends', {
			url: '/friends',
			templateUrl: "../views/friends.html"
		})
	  .state('search', {
			url: '/search',
			templateUrl: "../views/search.html"
		})
	  .state('profile', {
			url: '/profile',
			templateUrl: "../views/profile.html"
		})
	  .state('update', {
			url: '/update',
			templateUrl: "../views/update.html"
		});
	  
	
})