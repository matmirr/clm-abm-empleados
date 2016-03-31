'use strict';

module.exports = (function() {

   var Empleado = require('../../model/empleado');

   angular.module('AltaController', ['EmpleadoService'])
    .controller('AltaCtrl', ['$scope', 'Submit', function($scope, $location, Submit) {

      $scope.empleado = new Empleado();

      $scope.submit = function(empleado) {
        Submit.create(empleado)
        .success(function(data, status) {
          empleado.addEmployee(data.empleado);
          $scope.empleado = new Empleado();
        });
      }
    } ]);

})();
