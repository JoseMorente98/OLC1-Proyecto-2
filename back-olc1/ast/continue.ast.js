
class Continue {
    /**
    * PROPIEDADES
    */
   identificador;
   fila;
   columna;
   nombre;

   /**
    * CONSTRUCTOR
    */
   constructor(identificador, fila, columna) {
       this.nombre = "Continue";
       this.identificador = identificador;
       this.fila  = fila;
       this.columna = columna;
   }
}

exports.Continue = Continue;
