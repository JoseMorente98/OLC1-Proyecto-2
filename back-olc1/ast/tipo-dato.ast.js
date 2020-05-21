class TipoDato{
    /**
    * PROPIEDADES
    */
    tipo;
    nombre;

    /**
    * CONSTRUCTOR
    */
    constructor(tipo){
        this.nombre = "Tipo de Dato";
        this.tipo = tipo;
    }

    /**
    * TO STRING
    */
    toString() {
        switch (this.tipo) {
            case "string":
                return "string"
            case "int":
                return "int"
            case "boolean":
                return "boolean"
            case "char":
                return "char"
            case "double":
                return "double"
        }
    }
}

exports.TipoDato = TipoDato;
