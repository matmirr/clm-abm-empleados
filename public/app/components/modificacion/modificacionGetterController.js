'use strict';

module.exports = (function() {

   angular.module('ModificacionGetterController', ['EmpleadoService'])
    .controller('ModificacionGtrCtrl', ['$scope', '$location', '$rootScope', 'Submit',
                                         function($scope, $location, $rootScope, Submit) {

      $scope.updateEmployee = function(empleado) {
        $rootScope.empleado = empleado;
        /* concats 'edit' to root url */
        $location.url('update');
      };

      $scope.getEmpleados = function() {
        Submit.all()
         .then(function(empleados) {
           $scope.empleados = empleados.data;
         })
      };

      $scope.getEmpleados();

  } ]);

})();
