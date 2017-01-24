'use strict';

module.exports = (function() {

   var Empleado = require('../../model/empleado');

   angular.module('AltaController', ['EmpleadoService'])
    .controller('AltaCtrl', ['$scope', 'Submit', function($scope, Submit) {

      $scope.empleado = new Empleado();

      $scope.submit = function(empleado) {
        Submit.create(empleado)
        .then(function(data, status) {
          empleado.addEmployee(data.empleado);
          $scope.empleado = new Empleado();
        });
      }
    } ]);

})();
