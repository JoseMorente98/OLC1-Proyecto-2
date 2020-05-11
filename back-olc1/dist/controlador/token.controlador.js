"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_model_1 = require("../model/token.model");
var TokenControlador = /** @class */ (function () {
    function TokenControlador() {
        this.arregloToken = [];
        this.arregloError = [];
        this.idToken = 1;
        this.idError = 1;
    }
    TokenControlador.getInstancia = function () {
        if (this.instancia == null) {
            this.instancia = new TokenControlador();
        }
        return this.instancia;
    };
    Object.defineProperty(TokenControlador.prototype, "getArregloToken", {
        get: function () {
            return this.arregloToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenControlador.prototype, "getArregloError", {
        get: function () {
            return this.arregloError;
        },
        enumerable: true,
        configurable: true
    });
    TokenControlador.prototype.agregarToken = function (lexema, descripcion, fila, columna) {
        var token = new token_model_1.Token(this.idToken, lexema, descripcion, fila, columna);
        this.arregloToken.push(token);
        this.idToken++;
    };
    TokenControlador.prototype.agregarError = function (lexema, descripcion, fila, columna) {
        var token = new token_model_1.Token(this.idError, lexema, descripcion, fila, columna);
        this.arregloError.push(token);
        this.idError++;
    };
    TokenControlador.prototype.imprimirToken = function () {
        this.arregloToken.forEach(function (e) {
            console.log(e.toString());
        });
    };
    TokenControlador.prototype.imprimirError = function () {
        this.arregloError.forEach(function (e) {
            console.error(e.toString());
        });
    };
    TokenControlador.prototype.clear = function () {
        this.arregloToken = [];
        this.arregloError = [];
        this.idError = 1;
        this.idToken = 1;
    };
    return TokenControlador;
}());
exports.TokenControlador = TokenControlador;
