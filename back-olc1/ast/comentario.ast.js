class Comentario {
     /**
    * PROPIEDADES
    */
    tipo;
    fila;
    columna;
    nombre;

    /**
     * CONSTRUCTOR
     */
    constructor(tipo, fila, columna) {
        this.nombre ="Comentario";
        this.tipo = tipo;
        this.fila = fila;
        this.columna= columna;
    }
}
exports.Comentario = Comentario;
