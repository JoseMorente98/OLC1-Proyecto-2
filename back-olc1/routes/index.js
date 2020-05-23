var express = require('express');
var router = express.Router();
var SintacticoAnalizador = require('../analizador/sintactico.analizador');
var sintacticoAnalizador = new SintacticoAnalizador();
var SintacticoControlador = require('../controlador/sintactico.controlador');
var sintacticoControlador = new SintacticoControlador();
var analizadorSintactico = require('../jison/sintactico');
var ComparadorControlador = require('../controlador/comparador.controlador');
var comparadorControlador = new ComparadorControlador();
var ComparadorControlador = require('../controlador/comparador.controlador');
var comparadorControlador = new ComparadorControlador();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.post('/analizar-copias', function(req, res, next) {
    sintacticoControlador.limpiarVariables();
    sintacticoAnalizador.limpiarVariables();
    comparadorControlador.limpiarVariables();
    var body = req.body;
    var data = {
        entrada: body.entrada,
        entradaCopia: body.entradaCopia,
    }

    /**
     * GENERAR ANALISIS SINTACTICO
     */
    var arbolAST = analizadorSintactico.parse(data.entrada);
    var arbolASTCopia = analizadorSintactico.parse(data.entradaCopia);

    /**
     * SINTACTICO
     */
    ////console.log(arbolAST)
    sintacticoAnalizador.insertarErrores(arbolAST.instrucciones);

    sintacticoAnalizador.getArregloError().forEach(data => {
        sintacticoControlador.agregarError(data.tipo, data.descripcion, data.fila, data.columna);
    });

    //comparadorControlador.evaluarClases(arbolAST.instrucciones, arbolASTCopia.instrucciones);
    //comparadorControlador.evaluarVariables();

    if(sintacticoAnalizador.getArregloError().length > 0) {
        /**
         * ANALISIS SINTACTICO CON ERRORES
         */
        res.status(200).json({
            status: 400,
            ok: true,
            ast: arbolAST.instrucciones,
            data: "Análisis Completado con errores."
        });
    } else {
        /**
         * ANALISIS SINTACTICO
         */
        res.status(200).json({
            status: 200,
            ok: true,
            ast: arbolAST.instrucciones,
            data: "Análisis Completo"
        });

    }

});

/* GET home page. */
router.post('/analizar-copias2', function(req, res, next) {
    //sintacticoControlador.limpiarVariables();
    //sintacticoAnalizador.limpiarVariables();
    //comparadorControlador.limpiarVariables();
    var body = req.body;
    var data = {
        entrada: body.entrada,
        entradaCopia: body.entradaCopia,
    }

    /**
     * GENERAR ANALISIS SINTACTICO
     */
    var arbolAST = analizadorSintactico.parse(data.entrada);
    var arbolASTCopia = analizadorSintactico.parse(data.entradaCopia);

    /**
     * SINTACTICO
     */
    ////console.log(arbolAST)
    //sintacticoAnalizador.insertarErrores(arbolAST.instrucciones);

    /*sintacticoAnalizador.getArregloError().forEach(data => {
        sintacticoControlador.agregarError(data.tipo, data.descripcion, data.fila, data.columna);
    });*/

    comparadorControlador.evaluarClases(arbolAST.instrucciones, arbolASTCopia.instrucciones);
    comparadorControlador.evaluarVariables();

    res.status(200).json({
        status: 200,
        ok: true,
        data: "Análisis Completo"
    });

});

router.get('/sintactico-error', function(req, res, next) {
    var arregloToken = [];
    var arregloResponse = [];
    arregloToken = sintacticoControlador.getArregloError();

    arregloToken.forEach(element => {
        //console.log(element)
        var data = {
            id: element.id,
            lexema: element.lexema,
            descripcion: element.descripcion,
            fila: element.fila,
            columna: element.columna
        }
        arregloResponse.push(data);
    });

    res.status(200).json(arregloResponse);
});

router.get('/clase-reporte', function(req, res, next) {
    var arregloClase = [];
    var arregloResponse = [];
    arregloClase = comparadorControlador.getArregloReporteClase();

    arregloClase.forEach(element => {
        //console.log(element)
        var data = {
            nombre: element.nombre,
            tipo: element.tipo,
            metodos: element.metodos,
            funciones: element.funciones,
            arregloM: element.arregloM,
            arregloF: element.arregloF
        }
        arregloResponse.push(data);
    });

    res.status(200).json(arregloResponse);
});

router.get('/funcion-reporte', function(req, res, next) {
    var arregloClase = [];
    var arregloResponse = [];
    arregloClase = comparadorControlador.getArregloReporteClase();

    arregloClase.forEach(element => {
        //console.log(element)
        var data = {
            nombre: element.nombre,
            tipo: element.tipo,
            metodos: element.metodos,
            funciones: element.funciones,
            arregloM: arregloM,
            arregloF: arregloF
        }
        arregloResponse.push(data);
    });

    res.status(200).json(arregloResponse);
});

router.get('/variables', function(req, res, next) {
    var arregloClase = [];
    var arregloResponse = [];
    arregloClase = comparadorControlador.getArregloReporteMetodoVariable();

    arregloClase.forEach(element => {
        //console.log(element)
        var data = {
            clase: element.clase,
            metodo: element.metodo,
            variable: element.variable,
            tipo: element.tipo,
        }
        arregloResponse.push(data);
    });

    res.status(200).json(arregloResponse);
});

router.get('/variables2', function(req, res, next) {
    var arregloClase = [];
    var arregloResponse = [];
    arregloClase = comparadorControlador.getArregloReporteFuncionVariable();

    arregloClase.forEach(element => {
        //console.log(element)
        var data = {
            clase: element.clase,
            funcion: element.funcion,
            variable: element.variable,
            tipo: element.tipo,
        }
        arregloResponse.push(data);
    });

    res.status(200).json(arregloResponse);
});

module.exports = router;
