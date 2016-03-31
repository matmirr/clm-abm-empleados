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
         .success(function(data) {
           $scope.empleados = data;
         })
      };

      $scope.getEmpleados();

  } ]);

})();
