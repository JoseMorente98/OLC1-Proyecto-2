class Case  {
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
    constructor(condicion, lista, fila, columna) {
        this.nombre = "Case";
        this.condicion = condicion;
        this.lista  = lista;
        this.fila  = fila;
        this.columna = columna;
    }
    
}
exports.Case = Case;
