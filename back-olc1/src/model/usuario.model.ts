import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
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
})

module.exports = mongoose.model('Usuario', usuarioSchema);