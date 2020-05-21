class SentenciaSwitch {
    /**
    * PROPIEDADES
    */
    lista;
    identificador;
    fila;
    columna;
    nombre;
    def;
    condicion;

    /**
     * CONSTRUCTOR
     */
    constructor(condicion, lista, def, fila, columna) {
        this.nombre = "Switch"
        this.def = def;
        this.condicion = condicion;
        this.lista = lista;
        this.fila = fila;
        this.columna = columna; 
    }
}

exports.SentenciaSwitch = SentenciaSwitch;
