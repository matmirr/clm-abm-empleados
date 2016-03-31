'use strict';

module.exports = (function(url, logger) {

  var mongoose = require('mongoose');
  var db = mongoose.connection;

  mongoose.connect(url, function(err, res) {
    if(err) {
      logger.writeLog('Connection to the database refused ' + err);
    } else {
      logger.writeLog('Succesfuly connected to the database');
    }
  });

  db.on('error', function() {
    logger.writeLog('ERROR: Connection terminated');
  });

});
