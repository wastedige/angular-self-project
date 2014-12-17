// wrapping the whole thing with a function is a good practice
(function(){
	var store = angular.module('Store', []); // This will be our Angular base
	// static
	productsList = [
					{ name: "Nexus 4", price: 300, img: "product-img/n4.jpg"},
					{ name: "Nexus 5", price: 350, review: "Too big. Yes I'm a girl. Ha Ha."},	
					{ name: "Nexus 6", price: 640},	
					{ name: "Plus one", price: 350, img: "product-img/oneplus.jpg"},
					{ name: "Xperia Z3", price: 550, review: "Nice and classy."},
				];
					
		
	store.controller('storeController', function() {
		this.products = productsList;
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
	
