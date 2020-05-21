class Incremento {
    /**
    * PROPIEDADES
    */
    identificador;
    operador;
    operador2;
    nombre;
    fila;
    columna;

    /**
     * CONSTRUCTOR
     */
    constructor(identificador, operador, operador2, fila, columna) {
        this.nombre = "Incremento";
        this.identificador = identificador;
        this.operador = operador;
        this.operador2 = operador2;
        this.fila = fila;
        this.columna = columna;
    }
}

exports.Incremento = Incremento;
