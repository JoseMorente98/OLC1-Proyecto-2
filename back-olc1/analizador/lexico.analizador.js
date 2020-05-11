var fs = require('fs');
var JisonLex = require('jison-lex');

var symbols = fs.readFileSync('./jison/lexico.jison', 'utf8');
var lexicoAnalizador = new JisonLex(symbols);

module.exports = lexicoAnalizador;