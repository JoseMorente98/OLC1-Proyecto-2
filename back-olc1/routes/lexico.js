var express = require('express');
var router = express.Router();
var TokenControlador = require('../controlador/token.controlador');
var tokenControlador = new TokenControlador();
var analizadorLexico = require('../analizador/lexico.analizador');

/* GET users listing. */
router.post('/', function(req, res, next) {
    tokenControlador.limpiarVariables();
    var arregloToken = [];
    var strData="";
    var body = req.body;
    var data = {
        entrada: body.entrada
    }
  
    var columna = 0;
    var fila = 0;
    var array = [];
    analizadorLexico.setInput(data.entrada);
    while (!analizadorLexico.done) {
        token = analizadorLexico.lex();
        columna = analizadorLexico.yylloc.first_column;
        fila = analizadorLexico.yylloc.first_line;
        console.log('<' + token + ', ' + analizadorLexico.yytext + "Fila: " + fila + " Columna: "+ columna + '>')
        if(token=='TK_Desconocido') {
            tokenControlador.agregarError(analizadorLexico.yytext, token, fila, columna);
        }else if(token=='EOF') {
            //EPSILON
        } else {
            tokenControlador.agregarToken(analizadorLexico.yytext, token, fila, columna);
        }
    }

    res.status(200).json({
        ok: true,
        data: "Análisis Completo"
    });
});

router.get('/token', function(req, res, next) {
    var arregloToken = [];
    var arregloResponse = [];
    arregloToken = tokenControlador.getArregloToken();

    arregloToken.forEach(element => {
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

router.get('/error', function(req, res, next) {
    var arregloToken = [];
    var arregloResponse = [];
    arregloToken = tokenControlador.getArregloError();

    arregloToken.forEach(element => {
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
