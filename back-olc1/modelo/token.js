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

    toString = function () {
        return {
            "id": this.id,
            "lexema": this.lexema,
            "descripcion": this.descripcion,
            "fila": this.fila,
            "columna": this.columna
        };
    };
}

module.exports = Token;