"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'El password es necesario']
    },
    img: {
        type: String,
        required: [true, 'El password es necesario']
    },
    estado: {
        type: Boolean,
        required: [true, 'El password es necesario']
    },
    google: {
        type: Boolean,
        required: [true, 'El password es necesario']
    },
});
module.exports = mongoose_1.default.model('Usuario', usuarioSchema);
