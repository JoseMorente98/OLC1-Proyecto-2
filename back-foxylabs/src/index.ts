import Server from "./server/server";
import MySQL from "./mysql/mysql";
import usuario from "./router/usuario.router";
import bodyParser = require('body-parser');
import mongoose = require('mongoose');
//0LAF4cDDKvvSQetT
//jose-morente
//mongodb+srv://jose-morente:0LAF4cDDKvvSQetT@cluster0-shard-00-02-lnx95.mongodb.net/test

/**
 * CONFIGURACIÓN DE PUERTO LOCAL Y PRODUCCIÓN
 */
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
const server = Server.init(PORT);

/**
 * INSTANCIA DE MONGOOSE
 */
mongoose.connect('mongodb://localhost:27017/Test', ({
  useNewUrlParser: true,
  useUnifiedTopology: true
}));

const api:string = "/api/"

/**
 * HEADEARS & CORS
 */
server.app.use((req:any, res:any, next:any) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');  
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  if(req.methods == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

/**
 * BODY PARSER
 */
server.app.use(bodyParser.json())
server.app.use(bodyParser.urlencoded({ extended: false }))

/**
 * API'S
 */
server.app.use(api, usuario);

server.start(()=> {
  console.log("Servidor corriendo en el puerto 3000 :D")
});


