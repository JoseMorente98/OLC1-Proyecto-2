import { Router } from "express";
import UsuarioController from "./../controller/usuario.controller"
const usuario = Router();

usuario.get('/usuario', UsuarioController.getInstance().getAll);

export default usuario;