(function () {
	'use strict';
	
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/')
	.directive('foundItems', FoundItemsDirective)
	
	
	function FoundItemsDirective() {
	  var ddo = {
	    templateUrl: 'foundItems.html',
	    scope: {
	      items: '<',
	      onRemove: '&'
	    },
	    controller:FoundItemsDirectiveController,
	    controllerAs: 'menu',
	    bindToController: true
	  };
	
	  return ddo;
	}

	function FoundItemsDirectiveController(){
		var menu = this;
	}
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController (MenuSearchService) {
		var menu = this;
		menu.input = '';
		
		menu.removeItem = function (itemIndex) {
			MenuSearchService.removeItem(itemIndex);
		}
		
		menu.getMatchedMenuItems = function (searchTerm) {
			menu.found = [];
			var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
			promise.then(function (response) {
				if (response.length !== 0){
		 			menu.found = response;
		 			menu.warning = '';
				}
				else {
					menu.warning = 'Nothing matched!';
				}
			})
			.catch(function (error) {
			console.log("Something went terribly wrong.");
			});
		};
	}
	
	MenuSearchService.$inject = ['$http', 'ApiBasePath'];
	function MenuSearchService($http, ApiBasePath) {
		var foundItems = [];
		var service = this;
		service.getMatchedMenuItems = function (searchTerm) {
			return $http({
				method: "GET",
				url: (ApiBasePath + "menu_items.json")
			}).then(function (response){
				foundItems = response.data.menu_items.filter(findItems);
				// console.log(foundItems);
				return foundItems;
			});

			function findItems (value) {
				var regrex = new RegExp(searchTerm, 'i');
				// console.log(searchTerm);
				return value.description.match(regrex) != null;
			}
		}
		
		service.removeItem = function (itemIndex) {
			// console.log(itemIndex)
			foundItems.splice(itemIndex, 1);
		}
	}
	
})();
