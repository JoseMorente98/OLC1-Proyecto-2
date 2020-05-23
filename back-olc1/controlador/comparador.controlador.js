class ComparadorControlador {
    /**
     * REPORTE CLASE
     */
    arregloReporteClase = [];
    arregloReporteMetodos = [];
    arregloReporteMetodosVariable = [];
    arregloReporteFunciones = [];
    arregloReporteFuncionesVariable = [];

    /**
     * PROPIEDADES AMBITO
     */
    arregloMetodosClase = [];
    arregloMetodosClase2 = [];
    arregloFuncionClase = [];
    arregloFuncionClase2 = [];

    /**
     * PROPIEDADES GLOBALES
     */
    arregloGlobalVariables = [];
    arregloGlobalVariables2 = [];

    /**
     * PROPIEDADES METODOS
     */
    arregloGlobalVariablesMetodo = [];
    arregloGlobalVariablesMetodo2 = [];

     /**
     * PROPIEDADES METODOS
     */
    arregloGlobalVariablesFuncion = [];
    arregloGlobalVariablesFuncion2 = [];

    /**
     * PROPIEDADES COPIAS
     */
    arregloMetodos = [];
    arregloFuncion = [];
    arregloFuncionCopia = [];
    arregloMetodosCopia = [];
    arregloVariables = [];
    arregloVariablesCopia = [];

    constructor(){
        ////console.log("Analizer Controller");
    }


    limpiarVariables(){
        this.arregloReporteClase = [];
        this.arregloMetodosClase = [];
        this.arregloMetodosClase2 = [];
        this.arregloFuncionClase = [];
        this.arregloFuncionClase2 = [];
        this.arregloFuncion = [];
        this.arregloFuncionCopia = [];
        this.arregloMetodos = [];
        this.arregloMetodosCopia = [];
        this.arregloVariables = [];
        this.arregloVariablesCopia = [];
        this.arregloGlobalVariables = [];
        this.arregloGlobalVariables2 = [];

        this.arregloGlobalVariablesMetodo = [];
        this.arregloGlobalVariablesMetodo2 = [];
        this.arregloGlobalVariablesFuncion = [];
        this.arregloGlobalVariablesFuncion2 = [];
        this.arregloReporteClase = [];
        this.arregloReporteMetodos = [];
        this.arregloReporteMetodosVariable = [];
        this.arregloReporteFunciones = [];
        this.arregloReporteFuncionesVariable = [];
    }

    /**
     * EVALUAR CLASES IGUALES
     */
    evaluarClases(arbolAST, arbolASTCopia) {
        if(arbolAST.length == arbolASTCopia.length) {
            for (let i = 0; i < arbolAST.length; i++) {
                const element = arbolAST[i];
                const element2 = arbolASTCopia[i];
                if(element.identificador == element2.identificador) {
                    var arregloCopiasMetodo = [];
                    var arregloCopiasFunciones = [];
                    var cantidadFuncion = false;
                    var cantidadMetodo = false;
                    ////console.log(element)
                    ////console.log(element2)
                    this.evaluarMetodosFunciones(element.lista, this.arregloMetodosClase, this.arregloFuncionClase);
                    this.evaluarMetodosFunciones(element2.lista, this.arregloMetodosClase2, this.arregloFuncionClase2);
                    
                    /**
                     * METODOS IGUALES
                     */
                    if(this.arregloMetodosClase.length == this.arregloMetodosClase2.length) {
                        cantidadMetodo = true;
                        this.arregloMetodosClase.sort();
                        this.arregloMetodosClase2.sort();
                        ////console.log("==============================AMBITO CLASE======================")
                        this.arregloMetodosClase.forEach(element => {
                            ////console.log(element.nombre)
                        });
                        var contador = 0;
                        for(let i = 0; i < this.arregloMetodosClase.length; i++) {
                            var metodo = this.arregloMetodosClase[i];
                            var metodo2 = this.arregloMetodosClase2[i];
                            if(metodo.identificador == metodo2.identificador) {
                                ////console.log("NOMBRE IGUAL")
                                if(metodo.parametro.length == metodo2.parametro.length) {
                                    ////console.log("MISMO TIPO")
                                    var data = {
                                        tipo: "void",
                                        nombre: metodo.identificador,
                                        parametro: metodo.parametro.length,
                                    }
                                    var data2 = {
                                        clase: element.identificador,
                                        metodo: metodo
                                    }
                                    var dataCopia = {
                                        clase: element.identificador,
                                        metodo: metodo2
                                    }
                                    arregloCopiasMetodo.push(data);
                                    this.arregloGlobalVariables.push(data2);
                                    this.arregloGlobalVariables2.push(dataCopia);
                                }                                    
                            }
                        }
                    }
                
                    /**
                     * FUNCIONES IGUALES
                     */
                    if(this.arregloFuncionClase.length == this.arregloFuncionClase2.length) {
                        cantidadFuncion = true;
                        this.arregloFuncionClase.sort();
                        this.arregloFuncionClase2.sort();
                        ////console.log("==============================AMBITO FUNCION======================")
                        this.arregloFuncionClase2.forEach(element => {
                            ////console.log(element.nombre)
                        });
                        var contador = 0;
                        for(let i = 0; i < this.arregloFuncionClase.length; i++) {
                            var funcion = this.arregloFuncionClase[i];
                            var funcion2 = this.arregloFuncionClase2[i];
                            if(funcion.identificador == funcion2.identificador) {
                                ////console.log("NOMBRE IGUAL")
                                if(funcion.tipo.tipo == funcion2.tipo.tipo) {
                                    if(funcion.parametro.length == funcion2.parametro.length) {
                                        ////console.log("MISMO TIPO")
                                        var data = {
                                            tipo: funcion.tipo.tipo,
                                            nombre: funcion.identificador,
                                            parametro: funcion.parametro.length
                                        }
                                        var data2 = {
                                            clase: element.identificador,
                                            funcion: funcion
                                        }
                                        var dataCopia = {
                                            clase: element.identificador,
                                            funcion: funcion2
                                        }
                                        this.arregloGlobalVariables.push(data2);
                                        this.arregloGlobalVariables2.push(dataCopia);
                                        arregloCopiasFunciones.push(data);
                                    }
                                    
                                }
                            }
                        }
                    }
        
                    if(cantidadFuncion == true) {
                        if(cantidadMetodo == true) {
                            var data = {
                                nombre: element.identificador,
                                tipo: "Clase",
                                metodos: arregloCopiasMetodo.length,
                                funciones: arregloCopiasFunciones.length,
                                arregloM: arregloCopiasMetodo,
                                arregloF: arregloCopiasFunciones
                            }
                            this.arregloReporteClase.push(data);
                        } else {
                            var data = {
                                nombre: element.identificador,
                                tipo: "Clase",
                                metodos: 0,
                                funciones: arregloCopiasFunciones.length,
                                arregloM: arregloCopiasMetodo,
                                arregloF: arregloCopiasFunciones
                            }
                            this.arregloReporteClase.push(data);
                        }
                    } else if(cantidadFuncion == false && cantidadMetodo == false) {
                        var data = {
                            nombre: element.identificador,
                            tipo: "Clase",
                            metodos: 0,
                            funciones: 0,
                            arregloM: arregloCopiasMetodo,
                            arregloF: arregloCopiasFunciones
                        }
                        this.arregloReporteClase.push(data);
                    }
                }
            }
        } else {
            /**
             * NO EVALUA
             */
            this.arregloReporteClase = [];
        }
    }

    evaluarMetodosFunciones(lista, arregloMetodo, arregloFuncion){
        lista.forEach(data => {
            ////console.log(data)
            if(data.nombre == "Metodo") {
                arregloMetodo.push(data);
            }
            if(data.nombre == "Funcion") {
                arregloFuncion.push(data);
            }
        });
    }

    getArregloReporteClase() {
        return this.arregloReporteClase;
    }

    getArregloReporteFuncion() {
        return this.arregloReporteFunciones;
    }

    getArregloReporteMetodo() {
        return this.arregloReporteMetodos;
    }

    getArregloReporteFuncionVariable() {
        return this.arregloReporteFuncionesVariable;
    }

    getArregloReporteMetodoVariable() {
        return this.arregloReporteMetodosVariable;
    }

    /**
     * EVALUAR VARIABLES IGUALES
     */
    evaluarVariables() {
        for (let i = 0; i < this.arregloGlobalVariables.length; i++) {
            const element = this.arregloGlobalVariables[i];
            console.log(element)
            if(element.metodo.lista) {
                console.log("====================METODOS========================")
                //c/onsole.log(element.metodo.lista)
                element.metodo.lista.forEach(data => {
                    if(data.nombre = "Declaracion") {
                        console.log(data)
                        var object = {
                            clase: element.clase,
                            metodo: element.metodo.identificador,
                            variable: data
                        }
                        this.arregloGlobalVariablesMetodo.push(object)
                    }
                });

            } else if(element.funcion.lista) {
                console.log("====================FUNCION========================")
                ////console.log(element.funcion.lista)
                element.funcion.lista.forEach(data => {
                    if(data.nombre = "Declaracion") {
                        console.log(data)
                        var object = {
                            clase: element.clase,
                            funcion: element.funcion.identificador,
                            variable: data
                        }
                        this.arregloGlobalVariablesFuncion.push(object)
                    }
                });
                
            }
            
        }

        for (let i = 0; i < this.arregloGlobalVariables.length; i++) {
            const element = this.arregloGlobalVariables2[i];
            //console.log(element)
            if(element.metodo.lista) {
                //console.log("====================METODOS========================")
                //c/onsole.log(element.metodo.lista)
                element.metodo.lista.forEach(data => {
                    if(data.nombre = "Declaracion") {
                        //console.log(data)
                        var object = {
                            clase: element.clase,
                            metodo: element.metodo.identificador,
                            variable: data
                        }
                        this.arregloGlobalVariablesMetodo2.push(object)
                    }
                });

            } else if(element.funcion.lista) {
                //console.log("====================FUNCION========================")
                ////console.log(element.funcion.lista)
                element.funcion.lista.forEach(data => {
                    if(data.nombre = "Declaracion") {
                        //console.log(data)
                        var object = {
                            clase: element.clase,
                            funcion: element.funcion.identificador,
                            variable: data
                        }
                        this.arregloGlobalVariablesFuncion2.push(object)
                    }
                });
                
            }
        }

        this.arregloGlobalVariablesMetodo.forEach(element => {
            this.arregloGlobalVariablesMetodo2.forEach(element2 => {
                if(element.clase == element2.clase) {
                    if(element.metodo == element2.metodo) {
                        if(element.variable.identificador == element2.variable.identificador) {
                            if(element.variable.tipo.tipo == element2.variable.tipo.tipo) {
                                
                                var data = {
                                    clase: element.clase,
                                    metodo: element.metodo,
                                    variable: element.variable.identificador,
                                    tipo: element.variable.tipo.tipo
                                }
                                this.arregloReporteMetodosVariable.push(data);
                            }
                        }
                    }
                }
            });
        });
        

        this.arregloGlobalVariablesFuncion.forEach(element => {
            //console.log(element)
            this.arregloGlobalVariablesFuncion2.forEach(element2 => {
                if(element.clase == element2.clase) {
                    if(element.funcion == element2.funcion) {
                        if(element.variable.identificador == element2.variable.identificador) {
                            if(element.variable.tipo.tipo == element2.variable.tipo.tipo) {
                                var data = {
                                    clase: element.clase,
                                    funcion: element.funcion,
                                    variable: element.variable.identificador,
                                    tipo: element.variable.tipo.tipo
                                }
                                this.arregloReporteFuncionesVariable.push(data);
                            }
                        }
                    }
                }
            });
        });


        //console.log("=======================VARIABLES METODOS=======================")
        this.arregloReporteMetodosVariable.forEach(element => {
            //console.log(element)
        });
        //console.log("=======================VARIABLES FUNCION=======================")
        this.arregloReporteFuncionesVariable.forEach(element => {
            //console.log(element)
        });
    }

}
module.exports = ComparadorControlador