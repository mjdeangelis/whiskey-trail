/* App Module */

(function() {
	var app = angular.module('store', [
		'ngRoute',
		'whiskeyControllers',
		'whiskeyServices'
		//'whiskeyFilters'//,
	]);

	app.config(['$routeProvider',
  		function($routeProvider) {
    		$routeProvider.
      		 	when('/whiskeys', {
        			templateUrl: 'views/whiskey-list.html',
        			controller: 'WhiskeyListCtrl'
      			}).
      			when('/whiskeys/:whiskeyId', {
        			templateUrl: 'views/whiskey-detail.html',
        			controller: 'WhiskeyDetailCtrl'
      			}).
      			when('index.html#browse' , {
      				templateUrl: 'index.html'	
      			}).
      			otherwise({
        			redirectTo: '/whiskeys'
      			});
  	}]);

	// app.controller('StoreController', function() {
	// 	this.bottles = whiskeys;
	// });

	app.directive('whiskeyTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'whiskey-title.html'
		};
	});

	// var whiskeys = [
	// 	{
	// 		name: 'Buffalo Trace',
	// 		distillery: 'Buffalo Trace Distillery',
	// 		"type": 'Bourbon',
	// 		region: 'American',
	// 		price: '25',
	// 		priceLevel: '$$',
	// 		age: '',
	// 		abv: '',
	// 		proof: '90',
	// 		appearance: 'Deep amber color',
	// 		nose: 'Elegant aromas of buttery caramel, toasted nuts, and brown spices',
	// 		palate: 'Rich and complex, with hints of vanilla, toffee and candied fruit.',
	// 		finish: 'Smooth finish',
	// 		description: 'Damn good whiskey - Ron Swanson',
	// 		images: [
 //      			"img/buffalo-trace.png"
 //    		]
	// 	},
	// 	{
	// 		name: 'Jack Daniel\'s No. 7 Whiskey',
	// 		distillery: 'Jack Daniel\'s',
	// 		"type": 'Blended',
	// 		region: 'American',
	// 		price: '22',
	// 		priceLevel: '$',
	// 		age: '4',
	// 		abv: '40',
	// 		proof: '80',
	// 		appearance: 'Amber color.',
	// 		nose: 'Jumbled charred nut and burnt sugar aromas have a muddy edge.',
	// 		palate: 'A soft, thin entry to an off-dry medium body with caramel corn and white pepper notes.',
	// 		finish: ' Finishes with a hot, burning ember, dirt, tin foil, and caramel water fade.',
	// 		description: 'The Jack Daniel Distillery – the oldest registered distillery in the U.S. – is where it all happens. It’s where Mr. Jack first crafted the recipe for Old No. 7. It’s where the pure, iron-free cave spring water flows. And it’s where every drop of Jack Daniel’s Tennessee Sippin’ Whiskey is still made today.',
	// 		images: [
 //      			"img/jack-daniels.png"
 //    		]
	// 	},
	// 	{
	// 		name: 'Maker\'s Mark Bourbon',
	// 		distillery: 'Beam-Suntory',
	// 		"type": 'Bourbon',
	// 		region: 'American',
	// 		price: '30',
	// 		priceLevel: '$$',
	// 		age: '6',
	// 		abv: '45',
	// 		proof: '90',
	// 		appearance: '',
	// 		nose: '',
	// 		palate: 'Red winter wheat is the flavoring grain of Maker\'s Mark®. It allows the Bourbon to sit on the forward pallet of the tongue.',
	// 		finish: '',
	// 		description: 'Just as the three Rs (reading, writing and arithmetic) are the foundations of a basic skills-orientated education, the 4 Ws (water, wheat, wood and wax) make up the basic elements that make Maker\'s Mark® Maker\'s Mark.',
	// 		images: [
 //      			"img/makers-mark.png"
 //    		]
	// 	},
	// 	{
	// 		name: 'Eagle Rare',
	// 		distillery: 'Eagle Rare',
	// 		"type": 'Bourbon',
	// 		region: 'American',
	// 		price: '30',
	// 		priceLevel: '$$',
	// 		age: '10',
	// 		abv: '45',
	// 		proof: '90',
	// 		appearance: 'Deep Burnished Gold',
	// 		nose: 'Complex aromas of toffee, hints of orange peel, herbs, honey, leather and oak',
	// 		palate: 'Bold, dry, oaky flavors with notes of candied almonds and very rich cocoa',
	// 		finish: 'Dry and lingering',
	// 		description: 'Eagle Rare Single Barrel Bourbon Whiskey is masterfully crafted and carefully aged for no less than ten years, each barrel is discriminately selected. The rareness of this great breed of Bourbon is evident in its complex aroma, as well as the smooth and lingering taste. Each bottle of Eagle Rare offers consistent flavors, but with a seemingly individual personality from each unique barrel. Eagle Rare is a Bourbon that lives up to its name with its lofty, distinctive taste experience.',
	// 		images: [
 //      			"img/eagle-rare.png"
 //    		]
	// 	},
	// 	{
	// 		name: 'Woodford Reserve Distiller\'s Select Bourbon',
	// 		distillery: 'Woodford Reserve Distillery',
	// 		"type": 'Bourbon',
	// 		region: 'American',
	// 		price: '37',
	// 		priceLevel: '$$$$',
	// 		age: '6',
	// 		abv: '43.2',
	// 		proof: '86.4',
	// 		appearance: '',
	// 		nose: 'Aromas of freshly waxed wood, saddle soap, suede, tapioca',
	// 		palate: 'A round, supple, dry-yet-fruity medium-full body and a long, dried fruit, roasted nut, grainy pastry dough, mint leaf, cola, sassafras, peppery spice',
	// 		finish: 'Mineral ore accented finish',
	// 		description: 'Woodford Reserve isn\'t manufactured, it\'s hand crafted in small batches. This artisinal process allows us to craft it at all five sources of Bourbon flavor giving it its distinct taste and crisp, clean finish. Learn more about how we craft differently at all five sources of flavor.',
	// 		images: [
 //      			"img/woodford-reserve.jpg"
 //    		]
	// 	},
	// 	{
	// 		name: 'Four Roses',
	// 		distillery: 'Four Roses Distillery',
	// 		"type": 'Bourbon',
	// 		region: 'American',
	// 		price: '39',
	// 		priceLevel: '$$$',
	// 		age: '10',
	// 		abv: '50',
	// 		proof: '100',
	// 		appearance: 'Deep amber',
	// 		nose: 'Fruity, spicy, floral, cocoa, maple syrup, moderately woody.',
	// 		palate: 'Hints of ripe plum & cherries, robust, fullbody, mellow',
	// 		finish: 'Long finish',
	// 		description: 'Damn good whiskey - Ron Swanson',
	// 		images: [
 //      			"img/four-roses.png"
 //    		]
	// 	}


	// 	]

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