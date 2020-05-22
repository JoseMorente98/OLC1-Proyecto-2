class Paso {
    /**
    * PROPIEDADES
    */
    identificador;
    expresion;
    nombre;
    fila;
    columna;

    /**
     * CONSTRUCTOR
     */
    constructor(identificador, expresion, fila, columna) {
        this.nombre = "Paso";
        this.identificador = identificador;
        this.expresion = expresion;
        this.fila = fila;
        this.columna = columna;
    }
}

exports.Paso = Paso;
