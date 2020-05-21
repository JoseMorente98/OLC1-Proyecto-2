
class Asignacion {
    /**
    * PROPIEDADES
    */
    datos;
    identificador;
    fila;
    columna;
    nombre;

    /**
    * CONSTRUCTOR
    */
    constructor(identificador, datos, fila, columna) {
        this.nombre = "Asignación";
        this.identificador = identificador;
        this.datos = datos;
        this.fila  = fila;
        this.columna = columna;
    }
}

exports.Asignacion = Asignacion;
