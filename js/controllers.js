'use strict';

/* Controllers */

var whiskeyControllers = angular.module('whiskeyControllers', []);

whiskeyControllers.controller('WhiskeyListCtrl', ['$scope', 'Whiskey','smoothScroll', function($scope, Whiskey, smoothScroll) {
		$scope.whiskeys = Whiskey.query();
		$scope.orderProp = 'age';

		$scope.scrollWhiskey = function() {
			var element = document.getElementById('whiskeyList');
			smoothScroll(element);
		} 
}]);
	

whiskeyControllers.controller('WhiskeyDetailCtrl', ['$scope', '$routeParams', 'Whiskey',
  function($scope, $routeParams, Whiskey) {
  	$scope.whiskey = Whiskey.get({whiskeyId: $routeParams.whiskeyId}, function(whiskey) {
  		$scope.mainImageUrl = whiskey.images[0];
    });
	
	$scope.setImage = function(imageUrl) {
		$scope.mainImageUrl = imageUrl;
	} 
}]);

whiskeyControllers.controller('LoginCtrl', function($scope, loginService) {
	$scope.msgtxt = '';
	$scope.login = function(user) {
		loginService.login(user, $scope); //call login Service
	}

});

whiskeyControllers.controller('HomeCtrl', function($scope, loginService) {
	$scope.txt="We're HOME, BOY";
	$scope.logout = function() {
		loginService.logout();
	}
});