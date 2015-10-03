/* Services */

var whiskeyServices = angular.module('whiskeyServices', ['ngResource']);

whiskeyServices.factory('Whiskey', ['$resource',
  function($resource){
    return $resource('whiskeys/:whiskeyId.json', {}, {
      query: {method:'GET', params:{whiskeyId:'whiskeys'}, isArray:true}
    });
  }]);

whiskeyServices.factory('loginService', function($http, $location, sessionService) {
	return {
		login:function(data, scope) {
			var $promise = $http.post('data/user.php', data); //send data to user.php
			$promise.then(function(msg) {
				var uid = msg.data;
				if(uid) {
					//scope.msgtxt = "Correct login!";
					sessionService.set('uid', uid);
					$location.path('/home');
				}
				else {
					scope.msgtxt = "That username and password combination didn't match. Please try again.";
					$location.path('/login');
				}
			});
		},
		logout:function() {
			sessionService.destroy('uid');
			$location.path('/login');
		},
		isLogged:function() {
			var $checkSessionServer = $http.post('data/check_session.php');
			return $checkSessionServer;
			/*
			if (sessionService.get('user')) return true;
			*/
		}

	}
});

whiskeyServices.factory('sessionService', ['$http', function($http) {
	return {
		set:function(key, value) {
			return sessionStorage.setItem(key,value);
		},
		get:function(key) {
			return sessionStorage.getItem(key);
		},
		destroy:function(key) {
			$http.post('data/destroy_session.php');
			return sessionStorage.removeItem(key);
		}
	}
}]);

whiskeyServices.factory('userService', ['$http', function($http) {
	return {
		set:function(key, value) {
			return sessionStorage.setItem(key,value);
		},
		get:function(key) {
			return sessionStorage.getItem(key);
		},
		destroy:function(key) {
			$http.post('data/destroy_session.php');
			return sessionStorage.removeItem(key);
		}
	}
}]);