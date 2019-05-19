(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myInfo'];
function MyInfoController(myInfo) {
  var inf = this;
  inf.showMessage = true;

  if (Object.keys(myInfo).length) {
  	inf.info = myInfo;
  	inf.showMessage = false;
  }
  else inf.info = null;
  
  console.log(inf.showMessage);
  
}

})();
