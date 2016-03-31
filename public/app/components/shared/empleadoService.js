'use strict';

module.exports = (function() {

   angular.module('EmpleadoService', [])
    .factory('Submit', [ '$http', function SubmitFactory ($http) {
      return {
        all: function() {
          return $http({method: 'GET', url: './modificacion/empleados'})
        },
        create: function(empleado) {
          return $http({method: 'POST', url: './alta', data: empleado});
        },
        delete: function(empleado) {
          return $http({method: 'PUT', url: './baja', data: empleado});
        },
        update: function(empleado) {
          return $http({method: 'PUT', url: './modificacion/update', data: empleado});
        }
      }
     } ])

})();
