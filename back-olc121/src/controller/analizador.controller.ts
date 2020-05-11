import { Request, Response } from 'express';
import { TokenControlador } from "../controlador/token.controlador";
import { Token } from '../model/token.model';
//import { AnalizadorJISON } from '../jison/analizador.jison';
//SCANNER
import AnalizadorJISON = require("../jison/analizador-lexico")

export default class AnalizadorController {
    private static _instance: AnalizadorController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || ( this._instance = new this() );
    }

    analizadorLexico = (req: Request, res: Response) => {
        let body = req.body;
        let columna = 0;
        let linea = 1;

        let data = {
            entrada: body.entrada
        }

        var array = [];
        for (let index = 0; index < data.entrada.length; index++) {
            const element = data.entrada[index];

            if (element == "\n") {
                linea++;
                columna = 0;
            }
            AnalizadorJISON.setInput(element);
//lexema: string, descripcion:string, fila: number, columna:number
            if (AnalizadorJISON.lex() != "INVALID") {
                TokenControlador.getInstancia().agregarError(element, AnalizadorJISON.lex(), linea, columna);
                //lexController.addToken(element, lexico.lex(), line, col);
            } else {
                //lexController.addError(element, 'LEXICAL_ERROR', line, col);
                TokenControlador.getInstancia().agregarError(element, AnalizadorJISON.lex(), linea, columna);
                array.push("ERROR LEXICO: Simbolo desconocido, " + element + " Linea:" + linea + ", Columna:" + columna);
            }
            columna++;
        }
        let arregloToken: Token[] = TokenControlador.getInstancia().getArregloToken;
        let strData = "";

        arregloToken.forEach((e) => {
            console.log(e.toString());
            strData = strData + " " + e.toString();
        });

        res.status(200).json({
            ok: true,
            data: strData
        });
    }
}