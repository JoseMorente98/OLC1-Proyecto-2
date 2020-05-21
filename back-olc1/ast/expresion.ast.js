class Expresion {
    /**
    * PROPIEDADES
    */
    datos;
    tipo;
    fila;
    columna;
    nombre;

    /**
     * CONSTRUCTOR
     */
    constructor(tipo, datos, fila, columna) {
        this.nombre = "Expresion";
        this.tipo = tipo;
        this.datos = datos;
        this.fila  = fila;
        this.columna = columna;
    }
        
    /**
     * EJECUTAR
     */
    ejecutar(table, tree) {
        return this.data;
    }
}

exports.Expresion = Expresion;
