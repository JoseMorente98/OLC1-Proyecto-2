
class ExpresionRelacional {
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
        this.nombre = "Expresion Relacional";
        this.expresionIzquierda = expresionIzquierda;
        this.right = expresionDerecha;
        this.operador = operador;
        this.fila  = fila;
        this.columna = columna;
    }
}

exports.ExpresionRelacional = ExpresionRelacional;
