/* App Module */

(function() {
	var app = angular.module('store', [
		'ngRoute',
		'smoothScroll',
		'whiskeyControllers',
		'whiskeyServices',
		'whiskeyDirectives',
		'whiskeyAnimations'
	]);

	app.config(['$routeProvider',
  		function($routeProvider) {
    		$routeProvider.
    			when('/login' , {
      				templateUrl: 'views/login.html',
      				controller: 'LoginCtrl'
      			}).
      			when('/home' , {
      				templateUrl: 'views/home.html',
      				controller: 'HomeCtrl'	
      			}).
      		 	when('/whiskeys', {
        			templateUrl: 'views/whiskey-list.html',
        			controller: 'WhiskeyListCtrl'
      			}).
      			when('/whiskeys/:whiskeyId', {
        			templateUrl: 'views/whiskey-detail.html',
        			controller: 'WhiskeyDetailCtrl'
      			}).
      			otherwise({
        			redirectTo: '/login'
      			});
  	}]);

  	app.run(function($rootScope, $location, loginService) {
  		var routespermission=['/home']; //route that requires login
  		$rootScope.$on('$routeChangeStart', function() {
  			if (routespermission.indexOf($location.path()) !=-1 )
  			{
  				var connected = loginService.isLogged();
  				connected.then(function(msg) {
  					if (!msg.data) $location.path('/login');  					
  				});
  			}
  		});
  	});

	function chunk(arr, size) {
		var newArr = [];
		for (var i=0; i<arr.length; i+=size) {
	    newArr.push(arr.slice(i, i+size));
		}
	  return newArr;
	}

	// $scope.changeClass = function(){
 //        if ($scope.class === "red")
 //            $scope.class = "blue";
 //         else
 //            $scope.class = "red";
 //    };


	$scope.chunkedData = chunk(data, 3);





})();