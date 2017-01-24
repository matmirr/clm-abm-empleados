'use strict';

module.exports = (function() {

   var Empleado = require('../../model/empleado');

   angular.module('BajaController', ['EmpleadoService'])
    .controller('BajaCtrl', ['$scope', 'Submit', function($scope, Submit) {

      $scope.empleado = new Empleado();

      $scope.submit = function(empleado) {
        Submit.delete(empleado)
        .then(function(data, status) {
          empleado.delEmployee(data.empleado);
          $scope.empleado = new Empleado();
        });
      }
    } ]);

})();
