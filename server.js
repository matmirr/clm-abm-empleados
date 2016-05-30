'use strict';

/* Imports */
var express    = require('express');
var fs         = require('fs');

/* Custom Imports */
var Log                = require('./app/models/logger');             /* This is the class Log */
var consts             = require('./config/params');                 /* Configuration params */
var mongodb            = require('./app/models/mongodb')             /* mongodb connection */
var EmpleadoController = require('./app/controllers/empleado')       /* controller for CRUD operations */
var altaRouter         = require('./app/routes/altaRouter');         /* Route file for ./alta */
var bajaRouter         = require('./app/routes/bajaRouter');         /* Route file for ./baja*/
var modificacionRouter = require('./app/routes/modificacionRouter'); /* Route file for ./modificacion */

/* Global variables */
var app      = express();
var logger   = new Log(process.argv[2], consts.LOG_PATH, fs.createWriteStream(consts.LOG_PATH)); //instance of log
var emplCtrl = new EmpleadoController(logger); //instance of the controller

/* Load middlewares */
app.use(logger.requestDuration(logger));
app.use('/abm', express.static('public'));
app.use('/abm/alta', altaRouter(emplCtrl));
app.use('/abm/baja', bajaRouter(emplCtrl));
app.use('/abm/modificacion', modificacionRouter(emplCtrl));

/* Start mongodb connection */
mongodb(consts.DATABASE_URL, consts.DATA_GEN, logger);

/* Start server listener */
app.listen(consts.PORT, function(){
    logger.writeLog(`Listening on port ${consts.PORT}`);
})
