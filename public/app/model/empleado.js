'use strict'

class Empleado {

  constructor() {
    this.rol;
    this.fname;
    this.lname;
    this.email;
    this.gender;
    this.idType;
    this.idNumber;
    this.fnac;
    this.civilStatus;
    this.eStatus = 1;
  }

  getStatus() {
    return this.eStatus;
  }

  setStatus(value) {
      this.eStatus = value;
  }

  addEmployee(empleado){
    alert(`El empleado ${empleado.fname} ${empleado.lname} ha sido dado de alta exitosamente!`);
  }

  delEmployee(empleado){
    alert(`El empleado ${empleado.fname} ${empleado.lname} ha sido dado de baja satisfactoriamente!`);
  }

  modEmployee(empleado){
    alert(`El empleado ${empleado.fname} ${empleado.lname} ha sido dado modificado correctamente!`);
  }

}

module.exports = Empleado;
