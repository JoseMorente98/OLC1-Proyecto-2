import { Request, Response } from 'express';
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
        res.status(200).json({
            ok: true,
            data: "Hola Mundo"
        });
    }
}