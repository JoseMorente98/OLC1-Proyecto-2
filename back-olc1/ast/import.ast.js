class Importe  {
    /**
    * PROPIEDADES
    */
    identificador;
    fila;
    columna;
    nombre;

    /**
    * CONSTRUCTOR
    */
    constructor(identificador, fila, columna) {
        this.nombre = "Importe";
        this.identificador  = identificador;
        this.fila  = fila;
        this.columna = columna;
    }
    
}

exports.Importe = Importe;
