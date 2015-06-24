/* Services */

var whiskeyServices = angular.module('whiskeyServices', ['ngResource']);

whiskeyServices.factory('Whiskey', ['$resource',
  function($resource){
    return $resource('whiskeys/:whiskeyId.json', {}, {
      query: {method:'GET', params:{whiskeyId:'whiskeys'}, isArray:true}
    });
  }]);