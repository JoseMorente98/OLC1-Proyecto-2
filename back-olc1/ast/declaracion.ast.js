class Declaracion {
    /**
    * PROPIEDADES
    */
    nombre;
    identificador;
    datos;
    tipo;
    fila;
    columna;
    
    /**
    * CONSTRUCTOR
    */
    constructor(tipo, identificador, datos, fila, columna) {
        this.nombre = "Declaracion" 
        this.tipo = tipo;
        this.identificador = identificador;
        this.datos = datos;
        this.fila = fila;
        this.columna = columna;
    }

    /**
    * EJECUTAR
    */
    ejecutar(table, tree) {
        return null;
    }
}

exports.Declaracion = Declaracion;
