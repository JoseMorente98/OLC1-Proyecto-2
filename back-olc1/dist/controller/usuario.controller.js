"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Usuario = require('./../model/usuario.model');
var UsuarioController = /** @class */ (function () {
    function UsuarioController() {
        this.getAll = function (req, res) {
            res.status(200).json({
                ok: true,
                data: "Hola Mundo"
            });
        };
    }
    UsuarioController.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return UsuarioController;
}());
exports.default = UsuarioController;
