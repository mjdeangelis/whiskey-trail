'use strict';

/*Directives*/

var whiskeyDirectives = angular.module('whiskeyDirectives', []);

whiskeyDirectives.directive('whiskeyTitle', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/whiskey-title.html'
	};
});
whiskeyDirectives.directive('whiskeyDesc', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/whiskey-desc.html'
	};
});
whiskeyDirectives.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});