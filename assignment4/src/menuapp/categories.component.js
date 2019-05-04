(function () {
'use strict';

angular.module('data')
.component('allCategories', {
  templateUrl: 'src/menuapp/templates/allcategories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
