class Metodo {
    /**
    * PROPIEDADES
    */
    tipo;
    identificador;
    parametro;
    lista;
    retorno;
    fila;
    columna;
    nombre;

    /**
     * CONSTRUCTOR
     */
    constructor(tipo, identificador, parametro, lista, fila, columna) {
        this.nombre = "Metodo"
        this.tipo = tipo;
        this.identificador = identificador;
        this.parametro = parametro;
        this.lista = lista;
        this.fila = fila;
        this.columna = columna; 
    }
}

exports.Metodo = Metodo;
