class Clase  {
    /**
    * PROPIEDADES
    */
    lista;
    importes;
    identificador;
    fila;
    columna;
    nombre;

    /**
    * CONSTRUCTOR
    */
    constructor(identificador, lista, importes, fila, columna) {
        this.nombre = "Clase";
        this.identificador = identificador;
        this.lista  = lista;
        this.importes  = importes;
        this.fila  = fila;
        this.columna = columna;
    }
    
}
exports.Clase = Clase;
