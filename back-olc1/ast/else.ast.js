class Else  {
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
        this.nombre = "Else";
        this.lista  = lista;
        this.fila  = fila;
        this.columna = columna;
    }
    
}

exports.Else = Else;
