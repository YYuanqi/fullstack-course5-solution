(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
	var toBuyList = this;
	toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
	toBuyList.moveBoughtItem = function (index) {
		ShoppingListCheckOffService.moveBoughtItem(index);
	}
}

AlreadyBoughtController.$inject= ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
	var boughtList = this;
	boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService (){
	var service = this;
	
	//list of to buy items, initialize with 5 items
	var toBuyItems = [
		{ 
			name: 'cookie',
			quantity: 10
		},
		{
			name: 'chips',
			quantity: 9
		},
		{
			name: 'juice',
			quantity: 8
		},
		{
			name: 'meat',
			quantity: 7
		},
		{
			name: 'egg',
			quantity: 6
		}
	];
	//list of bought items
	var boughtItems = [];
	
	service.getToBuyItems = function () {
		return toBuyItems;
	}
	
	service.getBoughtItems = function () {
		return boughtItems;
	}
	service.moveBoughtItem = function (itemIndex){
		var item = toBuyItems[itemIndex];
		toBuyItems.splice(itemIndex, 1);
		boughtItems.push(item);
	}	
}

})();
