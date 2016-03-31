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
      response.sendFile('/home/matias/workspace/clm-abm-empleados/public/app/components/baja/bajaView.html');
    })
    .put(parseUrlencoded, parseJSON, function(request, response) {
      emplCtrl.delEmpleado(request, response)
    });

  return router;

})
