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
        this.nombre = "Else";
        this.tipo  = tipo;
        this.descripcion  = descripcion;
        this.fila  = fila;
        this.columna = columna;
    }

    /**
     * TO STRING
     */
    toString() {
        return `${this.type} ${this.description} ${this.line} ${this.column}`;
    }
}

exports.Excepcion = Excepcion;
