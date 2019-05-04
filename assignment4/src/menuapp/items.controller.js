(function () {
	'use strict';

	angular.module('data')
	.controller('ItemsController', ItemsController);
	
	
	ItemsController.$inject = ['MenuDataService', 'items' ,'$stateParams'];
	function ItemsController(MenuDateService, items, $stateParams) {
	  var list = this;
	  list.items = items;
	  list.$stateParams = $stateParams;
	  console.log(items)
	}

})();
