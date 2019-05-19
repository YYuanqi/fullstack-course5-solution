(function () {
"use strict";

angular.module('common')
.service('RegisterService', RegisterService);

RegisterService.$inject = [];
function RegisterService($http, ApiPath) {
  var service = this;
  var info = {};

  service.saveInfo = function (userInfo, menuItem) {
    info.user = userInfo;
    info.menuItem = menuItem;
  };


  service.getInfo = function (category) {
		return info;
	}
}
})();
