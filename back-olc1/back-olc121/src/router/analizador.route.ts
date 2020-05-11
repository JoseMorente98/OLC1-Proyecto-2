import { Router } from "express";
import AnalizadorController from "./../controller/analizador.controller"
const usuario = Router();

usuario.post('/lexico', AnalizadorController.getInstance().analizadorLexico);

export default usuario;