
var Token = require('../modelo/token');

class TokenControlador {    
    arregloToken = [];
    arregloError = [];
    idToken = 1;
    idError = 1;

    constructor() {
    }

    agregarToken(lexema, descripcion, fila, columna) {
        var token = new Token(this.idToken, lexema, descripcion, fila, columna);
        this.arregloToken.push(token);
        this.idToken++;
    }

    agregarError(lexema, descripcion, fila, columna) {
        var token = new Token(this.idError, lexema, descripcion, fila, columna);
        this.arregloError.push(token);
        this.idError++;
    }

    getArregloToken() {
        return this.arregloToken;
    }

    getArregloError() {
        return this.arregloError;
    }

    limpiarVariables() {
        this.arregloToken = [];
        this.arregloError = [];
        this.idError = 1;
        this.idToken = 1;
    }    
}

module.exports = TokenControlador