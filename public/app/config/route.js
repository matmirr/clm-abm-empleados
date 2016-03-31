'use strict';

module.exports = (function() {

   angular.module('RouteConfig', ['ModificacionGetterController', 'ModificacionSetterController'])
    .config([ '$routeProvider', function($routeProvider) {
      /* En este caso el request es al root, recordando que express lo interpreta como /abm */
      $routeProvider.when('/', {
        templateUrl: './modificacion',  /*En definitiva /abm/modificacion */
        controller: 'ModificacionGtrCtrl'
      })
      .when('/update', {
        templateUrl: './modificacion/update',
        controller: 'ModificacionStrCtrl'
      })

    }] );

})();
