(function () {
	'use strict';
	
	angular.module('LunchCheck', [])
	.controller('CheckLunchController', CheckLunchContoller);
	
	CheckLunchContoller.$inject = ['$scope'];
	function CheckLunchContoller($scope) {
		
		$scope.checkOrder = function() {
			if($scope.order == undefined || $scope.order.trim() == ''){
				$scope.answer = 'Please enter data first' ;
			}
			else{
				var number = checkItemsNumber($scope.order);
		  	$scope.answer = giveAnwser(number);
			}
		};
	};

		function checkItemsNumber(order) {
			var number = order.split(',').length
			return number
		};
		
		function giveAnwser(number) {
			if(number > 3)
				return 'Too much!';
			else
				return 'Enjoy!';
		};
})();
