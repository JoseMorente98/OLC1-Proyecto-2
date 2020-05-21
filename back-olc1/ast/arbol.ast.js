
class Arbol {
    /**
     * PROPIEDADES
     */
    instrucciones;
    excepciones;
    consola;

    /**
    * CONSTRUCTOR
    */
    constructor(instrucciones) {
        this.instrucciones = instrucciones;
        this.excepciones = new Array();
        this.consola = new Array();
    }

    agregarError(error){
        this.excepciones.push(error)
    }
}

exports.Arbol = Arbol;
