class SintacticoAnalizador {
    arregloErrorSintactico = [];

    insertarErrores(arregloErrorSintactico) {
        if(arregloErrorSintactico != undefined) {
            if(arregloErrorSintactico != []) {
                arregloErrorSintactico.forEach(data => {
                    console.log("===================================")
                    console.log(data)
                    console.log(data.nombre)
                    if(data.nombre == 'Excepcion') {
                        this.arregloErrorSintactico.push(data);
                    } else {
                        switch (data.nombre) {
                            case "For":
                                this.insertarErrores(data.lista);
                                break;
                            case "Switch":
                                this.insertarErrores(data.lista);
                                break;
                            case "DoWhile":
                                this.insertarErrores(data.lista);
                                break;
                            case "While":
                                this.insertarErrores(data.lista);                                
                                break;
                            case "Funcion":
                                this.insertarErrores(data.lista);                                
                                break;
                            case "Default":
                                this.insertarErrores(data.lista);                                
                                break;
                            case "Return":
                                this.insertarErrores(data.lista);                                
                                break;
                            case "Metodo":
                                this.insertarErrores(data.lista);
                            case "Clase":
                                this.insertarErrores(data.lista);                                
                                break;
                            case "Case":
                                this.insertarErrores(data.lista);                                
                                break;
                            case "Else":
                                this.insertarErrores(data.lista);                                
                                break;
                            case "If":
                                this.insertarErrores(data.lista);
                                this.insertarErrores(data.elseif)
                                break;
                            default:
                                break;
                        }
                    }
                });
            }
        }
    }

    getArregloError() {
        return this.arregloErrorSintactico;
    }
    
    limpiarVariables() {
        this.arregloErrorSintactico = [];
    }

}

module.exports = SintacticoAnalizador