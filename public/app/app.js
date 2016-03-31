'use stict';

(function(){

  /* FRAMEWORKS AND LIBRARIES IMPORTS */
  var bootstrap       = require('bootstrap');
  var angular         = require('angular');
  var angularRoute    = require('angular-route');

  /* ANGULAR MODULE'S IMPORTS */

  /* SHARED */
  var empleadoService = require('./components/shared/empleadoService');

  /* ALTA */
  var altaController  = require('./components/alta/altaController');
  var altaDirective   = require('./components/alta/altaDirective');

  /* BAJA */
  var bajaController = require('./components/baja/bajaController');
  var bajaDirective  = require('./components/baja/bajaDirective');

  /* MODIFICACIÓN */
  var modificacionGetterController = require('./components/modificacion/modificacionGetterController');
  var modificacionSetterController = require('./components/modificacion/modificacionSetterController')

  /* ******* */
  /* MAIN */
  var config     = require('./config/route');
  var controller = require('./controller/main');

  var app = angular.module('ABM', [ 'ngRoute', 'RouteConfig', 'MainController', 'Alta', 'Baja'] );


})();
