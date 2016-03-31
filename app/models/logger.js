'use strict';

class Log {

  /* Class constructor */
  constructor(param, path, writeStream, logLevel) {
    this.show = this._showLog(param) ? false : true;            /* flag for showing log in console */
    this.path = path;                                           /* relative path of the log */
    this.ws = writeStream;                                      /* writeStream */
  }

  /* Identifies if the log must be shown in console */
  _showLog(string){
     return string === '--show-no-log';
  }

  /* Returns the relative path of the log */
  getPath(){
    return this.path;
  }

  /* Write a string to the log */
  writeLog(string){
    this.ws.write(string + '\n');

    if(this.show){
      console.log(string);
    }
  }

  /* This method will be used as a Middleware  in order to reporting the
      duration of each request */
  requestDuration(log) {
    return function loggerMiddleware(request, response, next) {
              let start = +new Date();
              let host = request.connection.remoteAddress;
              let url = request.url;
              let method = request.method;

              response.on('finish', function() {
                let duration = +new Date() - start;
                let message = `\nRequest:\nHOST=${host}\nMETHOD=${method}\nURL=${url}\nTOOK=${duration}ms`;
                log.writeLog(message);
              })
              next();
          }
      }

}

module.exports = Log;
