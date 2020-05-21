class SentenciaIf {
    /**
    * PROPIEDADES
    */
    lista;
    identificador;
    fila;
    columna;
    nombre;
    elseif;
    condicion;

    /**
     * CONSTRUCTOR
     */
    constructor(condicion, lista, elseif, fila, columna) {
        this.nombre = "If"
        this.elseif = elseif;
        this.condicion = condicion;
        this.lista = lista;
        this.fila = fila;
        this.columna = columna; 
    }
}

exports.SentenciaIf = SentenciaIf;
