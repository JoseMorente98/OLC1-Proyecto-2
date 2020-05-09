import { Request, Response } from 'express';
import MySQL from "./../mysql/mysql";
import mongoose from 'mongoose';
const Usuario = require('./../model/usuario.model');

export default class UsuarioController {
    private static _instance: UsuarioController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || ( this._instance = new this() );
    }


    getAll = (req: Request, res: Response) => {
        Usuario.find({})
        .exec((err:any, usuarios:any) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json(usuarios);

        })
    }

    getSingle = (req: Request, res: Response) => {
        let id = req.params.id;

        Usuario.findById(id)
        .exec((err:any, usuario:any) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
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
    }

    create = (req: Request, res: Response) => {
        let body = req.body;
        
        let usuario = new Usuario({
            nombre: body.nombre,
            email: body.email,
            password: body.password,
            img: body.img,
            google: body.google,
            estado: body.estado
        });
        
        usuario.save((err:any, data:any) => {
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
        })
    }

    update = (req: Request, res: Response) => {
        let id = req.params.id;
        let body = req.body;

        Usuario.findById(id, (err:any, data:any) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
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

            data.save((err:any, usuarioSave:any) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    });
                }

                res.json({
                    ok: true,
                    producto: usuarioSave
                });

            });

        });
    }

    delete = (req: Request, res: Response) => {
        const id = req.params.id;

        Usuario.findByIdAndRemove(id, (err:any, data:any) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
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
    }
}