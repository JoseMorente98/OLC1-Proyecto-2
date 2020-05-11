class Token {
    id;
    lexema;
    descripcion;
    fila;
    columna;
    
    constructor(id, lexema, descripcion, fila, columna){
        this.id = id;
        this.lexema = lexema;
        this.descripcion = descripcion;
        this.fila = fila;
        this.columna = columna;
    }
}

module.exports = Token;