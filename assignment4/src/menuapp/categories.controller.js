(function () {
	'use strict';

	angular.module('data')
	.controller('CategoriesController', CategoriesController);
	
	
	CategoriesController.$inject = ['MenuDataService', 'categories'];
	function CategoriesController(MenuDateService, categories) {
	  var list = this;
	  list.categories = categories;
	  console.log(categories)
	}

})();
