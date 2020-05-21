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
        this.nombre = "Llamada Funcion";
        this.identificador = identificador;
        this.lista  = lista;
        this.fila  = fila;
        this.columna = columna;
    }
    
}
exports.LlamadaFuncion = LlamadaFuncion;
