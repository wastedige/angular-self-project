// Using NPM to create a local web server https://www.npmjs.com/package/local-web-server

// wrapping the whole thing with a function is a good practice
(function(){
	// This will be our Angular base
	var store = angular.module('Store', ['ngRoute']); // ngRoute module enables routing
	
	store.config(['$routeProvider',
	  function($routeProvider) {
		$routeProvider.
		  when('/', {
			templateUrl: 'main.html',
			controller: 'storeController',
			controllerAs: 'store'			
		  }).
		  when('/:phoneId', {
			templateUrl: 'phone-detail.html',
			controller: 'storeController'
		  }).
		  otherwise({
			redirectTo: 'main.html'
		  });
	}]);
	
	// service
	store.factory('reviewSrv', function() {
		// static
		productsList = [
				{ name: "Nexus 4", price: 300, reviews: [], img: "product-img/n4.jpg"},
				{ name: "Nexus 5", price: 350, reviews: [{name: "Jane", content:"Too big. Yes I'm a girl. Ha Ha."}] },	
				{ name: "Nexus 6", price: 640, reviews: []},	
				{ name: "Plus one", price: 350, reviews: [], img: "product-img/oneplus.jpg"},
				{ name: "Xperia Z3", price: 550, reviews: [{name: "Dan", content: "Nice and classy."}] },
			];
			
		return {
			productsList: productsList
		}
						
	});
						
		
	store.controller('storeController', ['reviewSrv', function(reviewSrv) {
		this.products = reviewSrv.productsList;
	}]);	
	
	store.controller('reviewController', function() {
		this.newReview = []; // will use ng-model to bind this to the textarea window
		this.addReview = function(product){		
			if (this.newReview.name.trim() !== "" && this.newReview.content.trim() !== "") 
				product.reviews.push(this.newReview);
			this.newReview = []; // makes review input area blank again
		};
	});
	
	store.controller('itemSelector', function() {
		this.activeItem = 1;
		this.setItem = function(item) {
			this.activeItem = item;
		};
		this.isSet = function(item) {
			return (item === this.activeItem);
		};
		this.itemIndex = function(item) {
			return (this.activeItem);
		};
	});
})();
	
