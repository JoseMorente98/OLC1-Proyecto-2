"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var analizador_controller_1 = __importDefault(require("./../controller/analizador.controller"));
var usuario = express_1.Router();
usuario.post('/lexico', analizador_controller_1.default.getInstance().analizadorLexico);
exports.default = usuario;
