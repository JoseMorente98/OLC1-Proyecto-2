class Excepcion {
    /**
    * PROPIEDADES
    */
    tipo;
    descripcion;
    fila;
    columna;
    nombre;

    /**
     * CONSTRUCTOR
     */
    constructor(tipo, descripcion, fila, columna) {
        this.nombre = "Excepcion";
        this.tipo  = tipo;
        this.descripcion  = descripcion;
        this.fila  = fila;
        this.columna = columna;
    }

    /**
     * TO STRING
     */
    toString() {
        return `${this.tipo} ${this.descripcion} ${this.fila} ${this.columna}`;
    }
}

exports.Excepcion = Excepcion;
