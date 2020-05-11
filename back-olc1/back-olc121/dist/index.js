"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var analizador_route_1 = __importDefault(require("./router/analizador.route"));
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//0LAF4cDDKvvSQetT
//jose-morente
//mongodb+srv://jose-morente:0LAF4cDDKvvSQetT@cluster0-shard-00-02-lnx95.mongodb.net/test
/**
 * CONFIGURACIÓN DE PUERTO LOCAL Y PRODUCCIÓN
 */
var PORT = parseInt(process.env.PORT, 10) || 3000;
var server = server_1.default.init(PORT);
/**
 * INSTANCIA DE MONGOOSE
 */
mongoose.connect('mongodb://localhost:27017/Test', ({
    useNewUrlParser: true,
    useUnifiedTopology: true
}));
var api = "/api/";
/**
 * HEADEARS & CORS
 */
server.app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    if (req.methods == "OPTIONS") {
        res.sendStatus(200);
    }
    else {
        next();
    }
});
/**
 * BODY PARSER
 */
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({ extended: false }));
/**
 * API'S
 */
server.app.use(api, analizador_route_1.default);
server.start(function () {
    console.log("Servidor corriendo en el puerto 3000 :D");
});
