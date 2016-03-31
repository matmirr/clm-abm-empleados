'use strict'

module.exports = (function() {

  angular.module('Alta', ['AltaController'])
    .directive('altaDirective', function() {
      return {
        restrict: 'E',
        templateUrl: './alta',
        scope: {},
        controller: 'AltaCtrl',
      }
    });

})();
