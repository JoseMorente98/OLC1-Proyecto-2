
class ExpresionLogica {
    /**
    * PROPIEDADES
    */
    expresionIzquierda;
    expresionDerecha;
    operador;
    fila;
    columna;
    nombre;

    /**
    * CONSTRUCTOR
    */
    constructor(expresionIzquierda, expresionDerecha, operador, fila, columna) {
        this.nombre = "ExpresionLogica";
        this.expresionIzquierda = expresionIzquierda;
        this.expresionDerecha = expresionDerecha;
        this.operador = operador;
        this.fila  = fila;
        this.columna = columna;
    }
}

exports.ExpresionLogica = ExpresionLogica;
