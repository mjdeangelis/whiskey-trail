'use strict';

/* Controllers */

var whiskeyControllers = angular.module('whiskeyControllers', []);

// whiskeyControllers.controller('WhiskeyListCtrl', ['$scope', '$http', function($scope, $http) {
// 		$http.get('whiskeys/whiskeys.json').success(function(data) {
// 			$scope.whiskeys = data;
// 		});

// 		$scope.orderProp = 'age';
// }]);

// whiskeyControllers.controller('WhiskeyDetailCtrl', ['$scope', '$routeParams', '$http',
//   function($scope, $routeParams, $http) {
//   	$http.get('whiskeys/' + $routeParams.whiskeyId + '.json').success(function(data) {
//       $scope.whiskey = data;
//     });
//   }]);

whiskeyControllers.controller('WhiskeyListCtrl', ['$scope', 'Whiskey', 
	function($scope, Whiskey) {
		$scope.whiskeys = Whiskey.query();
		$scope.orderProp = 'age';
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