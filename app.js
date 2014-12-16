// wrapping the whole thing with a function is a good practice
(function(){
	var store = angular.module('Store', []); // This will be our Angular base
	// static
	productsList = [
					{ name: "Nexus 4", price: 300},
					{ name: "Nexus 5", price: 350},	
					{ name: "Nexus 6", price: 640},	
					{ name: "Plus one", price: 350},
					{ name: "Xperia Z3", price: 550},
				];
					
		
	store.controller('storeController', function() {
		this.products = productsList;
	});	
})();
	
