"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_controlador_1 = require("../controlador/token.controlador");
//import { AnalizadorJISON } from '../jison/analizador.jison';
//SCANNER
var AnalizadorJISON = require("../jison/analizador-lexico");
var AnalizadorController = /** @class */ (function () {
    function AnalizadorController() {
        this.analizadorLexico = function (req, res) {
            var body = req.body;
            var columna = 0;
            var linea = 1;
            var data = {
                entrada: body.entrada
            };
            var array = [];
            for (var index = 0; index < data.entrada.length; index++) {
                var element = data.entrada[index];
                if (element == "\n") {
                    linea++;
                    columna = 0;
                }
                AnalizadorJISON.setInput(element);
                //lexema: string, descripcion:string, fila: number, columna:number
                if (AnalizadorJISON.lex() != "INVALID") {
                    token_controlador_1.TokenControlador.getInstancia().agregarError(element, AnalizadorJISON.lex(), linea, columna);
                    //lexController.addToken(element, lexico.lex(), line, col);
                }
                else {
                    //lexController.addError(element, 'LEXICAL_ERROR', line, col);
                    token_controlador_1.TokenControlador.getInstancia().agregarError(element, AnalizadorJISON.lex(), linea, columna);
                    array.push("ERROR LEXICO: Simbolo desconocido, " + element + " Linea:" + linea + ", Columna:" + columna);
                }
                columna++;
            }
            var arregloToken = token_controlador_1.TokenControlador.getInstancia().getArregloToken;
            var strData = "";
            arregloToken.forEach(function (e) {
                console.log(e.toString());
                strData = strData + " " + e.toString();
            });
            res.status(200).json({
                ok: true,
                data: strData
            });
        };
    }
    AnalizadorController.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return AnalizadorController;
}());
exports.default = AnalizadorController;
