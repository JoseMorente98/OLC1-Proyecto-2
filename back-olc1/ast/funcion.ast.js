class Funcion {
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
    constructor(tipo, identificador, parametro, lista, retorno, fila, columna) {
        this.nombre = "Funcion"
        this.tipo = tipo;
        this.identificador = identificador;
        this.parametro = parametro;
        this.retorno = retorno;
        this.lista = lista;
        this.fila = fila;
        this.columna = columna; 
    }
}

exports.Funcion = Funcion;
