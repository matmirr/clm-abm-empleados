'use strict'

module.exports = (function() {

  angular.module('Baja', ['BajaController'])
    .directive('bajaDirective', function() {
      return {
        restrict: 'E',
        templateUrl: './baja',
        scope: {},
        controller: 'BajaCtrl',
      }
    });

})();
