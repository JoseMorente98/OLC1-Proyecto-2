"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Usuario = require('./../model/usuario.model');
var UsuarioController = /** @class */ (function () {
    function UsuarioController() {
        this.getAll = function (req, res) {
            Usuario.find({})
                .exec(function (err, usuarios) {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err: err
                    });
                }
                res.json(usuarios);
            });
        };
        this.getSingle = function (req, res) {
            var id = req.params.id;
            Usuario.findById(id)
                .exec(function (err, usuario) {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err: err
                    });
                }
                if (!usuario) {
                    return res.status(400).json({
                        ok: false,
                        err: {
                            message: 'ID no existe'
                        }
                    });
                }
                res.json(usuario);
            });
        };
        this.create = function (req, res) {
            var body = req.body;
            var usuario = new Usuario({
                nombre: body.nombre,
                email: body.email,
                password: body.password,
                img: body.img,
                google: body.google,
                estado: body.estado
            });
            usuario.save(function (err, data) {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        error: err
                    });
                }
                res.json({
                    ok: true,
                    usuario: data
                });
            });
        };
        this.update = function (req, res) {
            var id = req.params.id;
            var body = req.body;
            Usuario.findById(id, function (err, data) {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err: err
                    });
                }
                if (!data) {
                    return res.status(400).json({
                        ok: false,
                        err: {
                            message: 'El ID no existe'
                        }
                    });
                }
                data.nombre = body.nombre;
                data.email = body.email;
                data.img = body.img;
                data.google = body.google;
                data.estado = body.estado;
                data.save(function (err, usuarioSave) {
                    if (err) {
                        return res.status(500).json({
                            ok: false,
                            err: err
                        });
                    }
                    res.json({
                        ok: true,
                        producto: usuarioSave
                    });
                });
            });
        };
        this.delete = function (req, res) {
            var id = req.params.id;
            Usuario.findByIdAndRemove(id, function (err, data) {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err: err
                    });
                }
                if (!data) {
                    return res.status(400).json({
                        ok: false,
                        err: {
                            message: 'El id no existe'
                        }
                    });
                }
                res.status(200).json({
                    ok: true,
                    message: 'Usuario eliminado con exito.'
                });
            });
        };
    }
    UsuarioController.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    return UsuarioController;
}());
exports.default = UsuarioController;
