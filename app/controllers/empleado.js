'use strict';

class EmpleadoController {

  constructor(logger){
    this.Empleado = require('../models/empleado');
    this.logger   = logger;
  };

/* POST - Insert a new Empleado in the DB */
  addEmpleado(req, res) {

    var empleado = new this.Empleado({
      rol:         req.body.rol,
      fname :      req.body.fname,
      lname:       req.body.lname,
      email :      req.body.email,
      gender:      req.body.gender,
      idType:      req.body.idType,
      idNumber:    req.body.idNumber,
      fnac:        req.body.fnac,
      civilStatus: req.body.civilStatus,
      eStatus:     req.body.eStatus
    });

    var log = this.logger;

  empleado.save(function(err) {
      if(!err) {
      log.writeLog(`El empleado ${empleado.fname} ${empleado.lname} ha sido dado de alta satisfactoriamente!`);
        return res.send({ status: 201, empleado:empleado });
      } else {
        log.writeLog(err);
        if(err.name == 'ValidationError') {
          res.statusCode = 400;
          res.send({ error: 'Validation error' });
        } else {
          res.statusCode = 500;
          res.send({ error: 'Server error' });
        }
        log.writeLog('Internal error(%d): %s',res.statusCode,err.message);
      }
    });

  };

  //PUT - Logically devares an existing employee
    delEmpleado(req, res) {

      var log = this.logger;

      return this.Empleado.find({'idType': req.body.idType, 'idNumber': req.body.idNumber}, function(err, empleados) {
        if(!empleados) {
          res.statusCode = 404;
          return res.send({ error: 'Not found' });
        }

        /* Como la combinación tipo de documento y número de documento es única, la query solo devolverá un valor */
        var empleado = empleados.shift();
        /* Actualizo el valor para la baja lógica */
        empleado.eStatus = 0;

        return empleado.save(function(err) {
          if(!err) {
            log.writeLog(`El empleado ${empleado.fname} ${empleado.lname} ha sido dado de baja satisfactoriamente!`);
            return res.send({ status: 'OK', empleado:empleado });
          } else {
            if(err.name == 'ValidationError') {
              res.statusCode = 400;
              res.send({ error: 'Validation error' });
            } else {
              res.statusCode = 500;
              res.send({ error: 'Server error' });
            }

           log.wirteLog('Internal error(%d): %s',res.statusCode,err.message);
          }

        });
      });
    }

    //PUT - Updates an existing employee
      updateEmpleado(req, res) {

        var log = this.logger;
        var emp = req.body

        return this.Empleado.find({'_id': req.body._id}, function(err, empleados) {
          if(!empleados) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
          }

          var empleado = empleados.shift();

          empleado.rol         = emp.rol;
          empleado.fname       = emp.fname;
          empleado.lname       = emp.lname
          empleado.email       = emp.email;
          empleado.gender      = emp.gender;
          empleado.idType      = emp.idType;
          empleado.idNumber    = emp.idNumber;
          empleado.fnac        = emp.fnac;
          empleado.civilStatus = emp.civilStatus;
          empleado.eStatus     = emp.eStatus;

          return empleado.save(function(err) {
            if(!err) {
              log.writeLog(`El empleado ${empleado.fname} ${empleado.lname} ha sido actualizado satisfactoriamente!`);
              return res.send({ status: 'OK', empleado:empleado });
            } else {
              if(err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
              } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
              }

             log.wirteLog('Internal error(%d): %s',res.statusCode,err.message);
            }
          });
        });
      }

  //GET - Get all employees
    getEmpleados(req, res) {

      var log = this.logger;

      /* Moongose 4 New Syntax, new is always better :) */

      return this.Empleado.find({}).
                    sort({ lname: 1, fname: 1 }).
                    exec(function(err, empleados) {
                      if(!err) {
                        log.writeLog('Los empleados fueron extraídos correctamente')
                        return res.send(empleados);
                      } else {
                        res.statusCode = 500;
                        log.writeLog('Internal error(%d): %s',res.statusCode,err.message);
                        return res.send({ error: 'Server error' });
                      }
                    });

      /* Moongose old Syntax */

      // return this.Empleado.find(function(err, empleados) {
      //   if(!err) {
      //      log.writeLog('Los empleados fueron extraídos correctamente')
  		// 	   return res.send(empleados);
  		//   } else {
      //     res.statusCode = 500;
      // 		log.writeLog('Internal error(%d): %s',res.statusCode,err.message);
      //     return res.send({ error: 'Server error' });
  		//   }
      // });
    };

}

module.exports = EmpleadoController;
