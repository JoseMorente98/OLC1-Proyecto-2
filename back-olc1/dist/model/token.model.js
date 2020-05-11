"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Token = /** @class */ (function () {
    function Token(id, lexema, descripcion, fila, columna) {
        this.id = id;
        this.lexema = lexema;
        this.descripcion = descripcion;
        this.fila = fila;
        this.columna = columna;
    }
    Object.defineProperty(Token.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "setId", {
        set: function (v) {
            this.id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "getDescripcion", {
        get: function () {
            return this.descripcion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "setDescripcion", {
        set: function (v) {
            this.descripcion = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "getLexema", {
        get: function () {
            return this.lexema;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "setLexema", {
        set: function (v) {
            this.lexema = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "getFila", {
        get: function () {
            return this.fila;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "setFila", {
        set: function (v) {
            this.fila = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "getColumna", {
        get: function () {
            return this.columna;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "setColumna", {
        set: function (v) {
            this.columna = v;
        },
        enumerable: true,
        configurable: true
    });
    Token.prototype.toString = function () {
        return {
            "id": this.id,
            "lexema": this.lexema,
            "descripcion": this.descripcion,
            "fila": this.fila,
            "columna": this.columna
        };
    };
    return Token;
}());
exports.Token = Token;
