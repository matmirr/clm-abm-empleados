'use strict';

module.exports = (function() {

   var Empleado = require('../../model/empleado');

   angular.module('BajaController', ['EmpleadoService'])
    .controller('BajaCtrl', ['$scope', 'Submit', function($scope, $location, Submit) {

      $scope.empleado = new Empleado();

      $scope.submit = function(empleado) {
        Submit.delete(empleado)
        .success(function(data, status) {
          empleado.delEmployee(data.empleado);
          $scope.empleado = new Empleado();
        });
      }
    } ]);

})();
