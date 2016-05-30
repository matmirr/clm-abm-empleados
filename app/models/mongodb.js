'use strict';

module.exports = (function(url, dataGen, logger) {

  var mongoose = require('mongoose');
  var fs         = require('fs');
  var db = mongoose.connection;

  mongoose.connect(url, function(err, res) {
    if(err) {
      logger.writeLog('Connection to the database refused ' + err);
    } else {
      logger.writeLog('Succesfuly connected to the database');

        if(dataGen){
          logger.writeLog('Creating dataset:');

          //Levanto mi dataset, que es un archivo JSON como si fuera un módulo
          let jsonArrayObj = require("../../config/dataset.json");

          //Recorro el dataset y agrego cada objeto JSON a la DB
          jsonArrayObj.forEach((jsonObj,index) => {
            db.collection('empleados').save(jsonObj, function(err, records) {
              if (err) throw err;
              logger.writeLog(`Record N° ${index + 1} added`);
            });
          });
        }
      }
    });

  db.on('error', function() {
    logger.writeLog('ERROR: Connection terminated');
  });

});
