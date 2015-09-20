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