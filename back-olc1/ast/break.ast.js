
class Break {
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
       this.nombre = "Break";
       this.identificador = identificador;
       this.fila  = fila;
       this.columna = columna;
   }
}

exports.Break = Break;
