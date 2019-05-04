(function () {
'use strict';

angular.module('data')
.component('categoryItems', {
  templateUrl: 'src/menuapp/templates/categoryitems.template.html',
  bindings: {
    items: '<'
  }
});

})();
