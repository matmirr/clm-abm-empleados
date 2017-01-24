'use strict';

module.exports = (function() {

  var Empleado = require('../../model/empleado');

   angular.module('ModificacionSetterController', ['EmpleadoService'])
    .controller('ModificacionStrCtrl', ['$scope', '$location', '$rootScope', 'Submit',
                                         function($scope, $location, $rootScope, Submit) {

      /* Agrego al scope de este controller el empleado de la vista anterior */
      $scope.empleado = $rootScope.empleado;
      /* Actualizo la fecha de nacimiento con el formato correspondiente */
      $scope.empleado.fnac = new Date($rootScope.empleado.fnac);
      /* Lo mismo para el estado ya que solo se puede mostrar si es un string */
      $scope.empleado.eStatus = $rootScope.empleado.eStatus.toString();

      $scope.modify = function(empleado) {
        Submit.update(empleado)
        .then(function(data, status) {
          /* A diferencia de la alta, aca el empleado pierde los métodos, necesito
            entonces crearme un nuevo empleado para poder utilizar los suyos */
          let e = new Empleado();
          e.fname = data.empleado.fname;
          e.lname = data.empleado.lname
          e.modEmployee(e);
          $scope.empleado = new Empleado();
          $rootScope.empleado = $scope.empleado;
          $location.url('');
        });
      }

    } ]);

})();
