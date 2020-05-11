import fs = require('fs');
var JisonLex = require('jison-lex');

var symbols = fs.readFileSync('./lexico.jison', 'utf8');
var lexer = new JisonLex(symbols);

module.exports = lexer;