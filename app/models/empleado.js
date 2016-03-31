'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* empleado schema */
var Empleado = new Schema({
  rol:         { type: String, require: true },
  fname:       { type: String, require: true },
  lname:       { type: String, require: true },
  email:       { type: String, require: true },
  gender:      { type: String,
                 enum:  ['Masculino', 'Femenino'],
                 require: true
               },
  idType:      { type: String,
                 enum:  ['DNI','LC', 'LE', 'CI', 'Pasaporte', 'RENAPER'],
                 require: true
               },
  idNumber:    { type: Number, require: true },
  fnac:        { type: Date, require: true },
  civilStatus: { type: String,
                 enum:  ['Soltero', 'Casado'],
                 require: true
               },
  eStatus:     { type: Number,
                 emum: [0, 1],
                 require: true
               },

});

module.exports = mongoose.model('Empleado', Empleado);
