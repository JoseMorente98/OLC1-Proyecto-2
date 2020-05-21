class SentenciaWhile {
    /**
    * PROPIEDADES
    */
    lista;
    identificador;
    fila;
    columna;
    nombre;
    condicion;

    /**
     * CONSTRUCTOR
     */
    constructor(condicion, lista, fila, columna) {
        this.nombre = "While";
        this.condicion = condicion;
        this.lista = lista;
        this.fila = fila;
        this.columna = columna; 
    }
}

exports.SentenciaWhile = SentenciaWhile;
