
class Identificador {
    /**
    * PROPIEDADES
    */
    identificador;
    fila;
    columna;
    nombre;

    /**
    * CONSTRUCTOR
    */
    constructor(identificador, fila, columna) {
        this.nombre = "Asignación";
        this.identificador = identificador;
        this.fila  = fila;
        this.columna = columna;
    }
}

exports.Identificador = Identificador;
