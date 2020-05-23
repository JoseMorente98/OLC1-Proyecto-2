var express = require('express');
var router = express.Router();
var analizadorSintactico = require('../jison/sintactico');
var SintacticoAnalizador = require('../analizador/sintactico.analizador');
var sintacticoAnalizador = new SintacticoAnalizador();
var SintacticoControlador = require('../controlador/sintactico.controlador');
var sintacticoControlador = new SintacticoControlador();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.post('/', function(req, res, next) {
    sintacticoAnalizador.limpiarVariables();
    var array = new Array();
    var body = req.body;
    var data = {
        entrada: body.entrada
    }

    var arbol = analizadorSintactico.parse(data.entrada);

    sintacticoAnalizador.insertarErrores(arbol.instrucciones);

    sintacticoAnalizador.getArregloError().forEach(data => {
        console.log(data);
        sintacticoControlador.agregarError(data.tipo, data.descripcion, data.fila, data.columna);
        array.push(data.descripcion);
    });

    if(sintacticoAnalizador.getArregloError().length > 0) {
        res.status(200).json({
            status: 400,
            ok: false,
            entrada: data.entrada,
            consola: array,
            ast: arbol.instrucciones[0],
            data: "Análisis Completado con errores"
        });
    } else {
        res.status(200).json({
            status: 200,
            ok: true,
            entrada: data.entrada,
            consola: array,
            ast: arbol.instrucciones[0],
            data: "Análisis Completo"
        });
    }

    
});

router.get('/error', function(req, res, next) {
    var arregloToken = [];
    var arregloResponse = [];
    arregloToken = sintacticoControlador.getArregloError();

    arregloToken.forEach(element => {
        console.log(element)
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

module.exports = router;
