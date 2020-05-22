
var Token = require('../modelo/token');

class SintacticoControlador {    
    arregloErrorSintactico = [];
    idError = 1;

    constructor() {
    }

    agregarError(lexema, descripcion, fila, columna) {
        var token = new Token(this.idError, lexema, descripcion, fila, columna);
        this.arregloErrorSintactico.push(token);
        this.idError++;
    }

    getArregloError() {
        return this.arregloErrorSintactico;
    }

    limpiarVariables() {
        this.arregloErrorSintactico = [];
        this.idError = 1;
    }    
}

module.exports = SintacticoControlador