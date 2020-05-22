class SentenciaDoWhile  {
    /**
    * PROPIEDADES
    */
    lista;
    condicion;
    fila;
    columna;
    nombre;

    /**
    * CONSTRUCTOR
    */
    constructor( lista, condicion, fila, columna) {
        this.nombre = "DoWhile";
        this.condicion = condicion;
        this.lista  = lista;
        this.fila  = fila;
        this.columna = columna;
    }
    
}

exports.SentenciaDoWhile = SentenciaDoWhile;
