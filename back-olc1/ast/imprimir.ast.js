class Imprimir  {
    /**
    * PROPIEDADES
    */
    parametro;
    fila;
    columna;
    nombre;

    /**
    * CONSTRUCTOR
    */
    constructor(parametro, fila, columna) {
        this.nombre = "Imprimir";
        this.parametro  = parametro;
        this.fila  = fila;
        this.columna = columna;
    }
    
}

exports.Imprimir = Imprimir;
