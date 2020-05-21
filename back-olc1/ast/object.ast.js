class ObjectoSimbolo  {
    /**
    * PROPIEDADES
    */
    tipo;
    identificador;
    valor;
    nombre;

    /**
    * CONSTRUCTOR
    */
    constructor(tipo, identificador, valor) {
        this.tipo  = tipo;
        this.identificador  = identificador;
        this.valor = valor;
    }
    
}

exports.ObjectoSimbolo = ObjectoSimbolo;
