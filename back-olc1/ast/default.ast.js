class Default  {
    /**
    * PROPIEDADES
    */
    lista;
    fila;
    columna;
    nombre;

    /**
    * CONSTRUCTOR
    */
    constructor( lista, fila, columna) {
        this.nombre = "Default";
        this.lista  = lista;
        this.fila  = fila;
        this.columna = columna;
    }
    
}

exports.Default = Default;
