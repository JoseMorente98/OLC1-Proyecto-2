class LlamadaFuncion  {
    /**
    * PROPIEDADES
    */
    lista;
    identificador;
    fila;
    columna;
    nombre;

    /**
    * CONSTRUCTOR
    */
    constructor(identificador, lista, fila, columna) {
        this.nombre = "LlamadaFuncion";
        this.identificador = identificador;
        this.lista  = lista;
        this.fila  = fila;
        this.columna = columna;
    }
    
}
exports.LlamadaFuncion = LlamadaFuncion;
