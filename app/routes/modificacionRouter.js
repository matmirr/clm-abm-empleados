'use strict';

module.exports = (function(emplCtrl) {

  var express            = require('express');
  var router             = express.Router();
  var bodyParser         = require('body-parser');

  // parse application/x-www-form-urlencoded middleware
  var parseUrlencoded = bodyParser.urlencoded({ extended: false });
  // parse application/json middleware
  var parseJSON       = bodyParser.json();

  router.route('/')
    .get(function(request, response) {
      response.sendFile('/home/matias/workspace/clm-abm-empleados/public/app/components/modificacion/modificacionViewGetter.html');
    }),

  router.route('/update')
    .get(function(request, response) {
      response.sendFile('/home/matias/workspace/clm-abm-empleados/public/app/components/modificacion/modificacionViewSetter.html');
  })
    .put(parseUrlencoded, parseJSON, function(request, response) {
      emplCtrl.updateEmpleado(request, response);
    })

  router.route('/empleados')
    .get(parseUrlencoded, parseJSON, function(request, response) {
      emplCtrl.getEmpleados(request, response);
    })

  return router;

})
