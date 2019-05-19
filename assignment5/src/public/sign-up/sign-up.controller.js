(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'RegisterService'];

function SignUpController(MenuService, RegisterService) {
  var reg = this;
  var promise;

  reg.submit = function () {
    reg.completed = true;
    reg.message = '';
    reg.checkShortName(reg.user.shortname);
  };
  
  reg.checkShortName = function (shortName) {
	var promise = MenuService.checkShortName(shortName);
		promise.then(function (response) {
			if (response.length !== 0){
				reg.saveInfo(reg.user, response);
	 			reg.message = 'Your information has been saved.';
	 			
	 			console.log(RegisterService.getInfo());
			}
			else {
				reg.message = 'This will be never reached';
			}
		})
		.catch(function (error) {
			reg.message = 'No such menu number exists';
		});
	};
	
	reg.saveInfo = function (userInfo, response) {
		RegisterService.saveInfo(userInfo, response);
	}
}

})();
