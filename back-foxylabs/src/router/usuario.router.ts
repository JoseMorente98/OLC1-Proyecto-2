import { Router } from "express";
import UsuarioController from "./../controller/usuario.controller"
const usuario = Router();

usuario.get('/usuario', UsuarioController.getInstance().getAll);
usuario.get('/usuario/:id', UsuarioController.getInstance().getSingle);
usuario.post('/usuario', UsuarioController.getInstance().create);
usuario.put('/usuario/:id', UsuarioController.getInstance().update);
usuario.delete('/usuario/:id', UsuarioController.getInstance().delete);

export default usuario;