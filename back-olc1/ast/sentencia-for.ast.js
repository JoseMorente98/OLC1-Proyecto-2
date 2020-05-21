class SentenciaFor {
    /**
    * PROPIEDADES
    */
    lista;
    identificador;
    fila;
    columna;
    nombre;
    asignacion;
    condicion;
    incremento;

    /**
     * CONSTRUCTOR
     */
    constructor(asignacion, condicion, incremento, lista, fila, columna) {
        this.nombre = "For"
        this.asignacion = asignacion;
        this.condicion = condicion;
        this.incremento = incremento;
        this.lista = lista;
        this.fila = fila;
        this.columna = columna; 
    }
}

exports.SentenciaFor = SentenciaFor;
