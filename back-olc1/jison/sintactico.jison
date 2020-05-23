%lex
%options ranges
%options case-insensitive

DIGITO                      [0-9]
DIGITOTWO                   [1-9]
DIGITOS                     ("0"|{DIGITOTWO}{DIGITO}*)
EXPONENTE                   ([Ee][+-]?{DIGITOS})
BSL                         "\\".
identificador                ([a-zA-Z_])[a-zA-Z0-9_]*
BR                          \r\n|\n|\r
%s                          comment

%%

"//".*                /* skip comments */
"/*"                  this.begin('comment');
<comment>"*/"         this.popState();
<comment>.            /* skip comment content*/
\s+                   /* skip whitespace */

"*"                   return 'TK_Multiplicacion'
"/"                   return 'TK_Division'
"%"                   return 'TK_Modulo'
"-"                   return 'TK_Sustraccion'
"^"                   return 'TK_Potencia'
"+"                   return 'TK_Adicion'
";"                   return 'TK_PuntoComa'
"."                   return 'TK_Punto'
"<"                   return 'TK_Menor'
">"                   return 'TK_Mayor'
"!"                   return 'TK_Exclamacion'
"="                   return 'TK_Igual'
":"                   return 'TK_DosPuntos'
","                   return 'TK_Coma'
"("                   return 'TK_ParentesisIzquierdo'
")"                   return 'TK_ParentesisDerecho'  
"["                   return 'TK_CorcheteIzquierdo'
"]"                   return 'TK_CorcheteDerecho'
"{"                   return 'TK_LlaveIzquierdo'
"}"                   return 'TK_LlaveDerecho'
"=="                  return '=='
"!="                  return '!='
"++"                  return '++'
"--"                  return '--'
"||"                  return '||'
"&&"                  return '&&'

"import"              return 'PR_import'
"class"               return 'PR_class'
"System"              return 'PR_System'
"out"                 return 'PR_out'  
"println"             return 'PR_println'  
"print"               return 'PR_print'

"for"                 return 'PR_for'  
"if"                  return 'PR_if'
"else"                return 'PR_else'
"switch"              return 'PR_switch'
"default"             return 'PR_default'
"case"                return 'PR_case'
"do"                  return 'PR_do'
"while"               return 'PR_while'
"break"               return 'PR_break'
"continue"            return 'PR_continue'
"return"              return 'PR_return'

"true"                return 'PR_true'
"false"               return 'PR_false'
"main"                return 'PR_main'
"void"                return 'PR_void' 

"boolean"             return 'PR_boolean'
"char"                return 'PR_char'
"double"              return 'PR_double'
"int"                 return 'PR_int'
"String"              return 'PR_String'

{identificador}       return 'identificador'

({DIGITOS}"."{DIGITOS}?{EXPONENTE}?[fFdD]?|"."{DIGITOS}{EXPONENTE}?[fFdD]?|{DIGITOS}{EXPONENTE}[fFdD]?|{DIGITOS}{EXPONENTE}?[fFdD])/([^\w]|$)   return 'TK_Decimal';
{DIGITOS}          return 'TK_Entero';
"\"\""                return 'TK_String';
"\""([^"]|{BSL})*"\"" return 'TK_String';
"\\"([0-7]{1,3}|[rfntvsSbBwWdD\\*+()${}|[\]\/.^?]|"c"[A-Z]|"x"[0-9A-F]{2}|"u"[a-fA-F0-9]{4})      return 'TK_char';
"\\".                           yytext = yytext.replace(/^\\/g,''); return 'TK_char';
"'"("\\\\"|"\'"|[^'])*"'"       yytext = yytext.replace(/\\'/g,"'"); return 'TK_char';

<<EOF>>	              return 'EOF'
/lex

%{
const {Asignacion} = require('../ast/asignacion.ast');
const {Break} = require('../ast/break.ast');
const {Case} = require('../ast/case.ast');
const {Clase} = require('../ast/clase.ast');
const {Continue} = require('../ast/continue.ast');
const {Declaracion} = require('../ast/declaracion.ast');
const {Decremento} = require('../ast/decremento.ast');
const {Default} = require('../ast/default.ast');
const {Else} = require('../ast/else.ast');
const {Excepcion} = require('../ast/excepcion.ast');
const {Expresion} = require('../ast/expresion.ast');
const {ExpresionAritmetica} = require('../ast/expresion-aritmetica.ast');
const {ExpresionLogica} = require('../ast/expresion-logica.ast');
const {ExpresionRelacional} = require('../ast/expresion-relacional.ast');
const {Identificador} = require('../ast/Identificador.ast');
const {Importe} = require('../ast/import.ast');
const {Imprimir} = require('../ast/imprimir.ast');
const {Incremento} = require('../ast/incremento.ast');
const {LlamadaFuncion} = require('../ast/llamada.ast');
const {Metodo} = require('../ast/metodo.ast');
const {Funcion} = require('../ast/funcion.ast');
const {Retorno} = require('../ast/retorno.ast');
const {SentenciaDoWhile} = require('../ast/sentencia-do-while.ast');
const {SentenciaFor} = require('../ast/sentencia-for.ast');
const {SentenciaIf} = require('../ast/sentencia-if.ast');
const {SentenciaSwitch} = require('../ast/sentencia-switch.ast');
const {SentenciaWhile} = require('../ast/sentencia-while.ast');
const {TipoDato} = require('../ast/tipo-dato.ast');    
const {Paso} = require('../ast/paso.ast');    
const {Arbol} = require('../ast/arbol.ast');
%}

%left 'PR_else'
%left 'TK_Adicion' 'TK_Sustraccion'
%left '&&'
%left 'TK_Multiplicacion' 'TK_Division' 'TK_Potencia'
%left '==', '!='
%left 'TK_Menor' '++' 'TK_Mayor' '--'
%left '||'
%right 'TK_Exclamacion' 'TK_Modulo'
%left UMENOS

%start INIT

%%

INIT     
    : INICIO_INSTRUCCION EOF                {$$ = new Arbol($1); return $$;}
    ;

INICIO_INSTRUCCION 
    : INICIO_INSTRUCCION DECLARACION_TIPO   { $$ = $1; $$.push($2); }
    | DECLARACION_TIPO                      { $$ = [$1]; }
    ;

DECLARACION_TIPO
    : DECLARACION_CLASE             {$$ = $1;}
    | DECLARACION_VARIABLES       {$$ = $1;}
    | ASIGNACION_VARIABLES        {$$ = $1;}
    | SENTENCIA_IF                {$$ = $1;}
    | SENTENCIA_WHILE             {$$ = $1;}
    | SENTENCIA_DO_WHILE           {$$ = $1;}
    | SENTENCIA_FOR               {$$ = $1;}
    | SENTENCIA_SWITCH            {$$ = $1;}
    | CONSOLA             {$$ = $1;}
    | METODO_VOID       {$$ = $1;}
    | error             {$$ = new Excepcion($1, "Este es un error sintáctico: " + $1 + " en fila: " + (this._$.first_line) 
                                                    + ", columna: " +  this._$.first_column, this._$.first_line, this._$.first_column)}
    ;

DECLARACION_CLASE 
    : DECLARACION_IMPORTE 'PR_class' identificador BLOQUE_CLASE {$$ = new Clase($3, $4, $1);} 
    ;

DECLARACION_IMPORTE 
    :  CLASE_IMPORTES              { $$ = $1 } 
    |                          { $$ = [] } 
    ;

CLASE_IMPORTES 
    : CLASE_IMPORTES IMPORT            { $$ = $1; $$.push($2); }
    | IMPORT                          { $$ = [$1]; }
    ;

IMPORT 
    : 'PR_import' identificador 'TK_PuntoComa' {$$ = new Importe($2,  this._$.first_line, this._$.first_column);}
    ;

BLOQUE_CLASE 
    : 'TK_LlaveIzquierdo' INICIO_INSTRUCCION 'TK_LlaveDerecho' {$$ = $2;}
    | 'TK_LlaveIzquierdo' 'TK_LlaveDerecho' {$$ = [];}
    ;

DECLARACION_VARIABLES 
    : TIPO_DATO identificador VALOR              'TK_PuntoComa'     {$$ = new Declaracion($1, $2, $3, this._$.first_line, this._$.first_column);}  
    | TIPO_DATO identificador 'TK_ParentesisIzquierdo' PARAMETROS 'TK_ParentesisDerecho' 'TK_LlaveIzquierdo' LISTA_INSTRUCCION_FUNCION 'PR_return' ENUNCIADO 'TK_PuntoComa' 'TK_LlaveDerecho' {$$ = new Funcion($1, $2, $4, $7, $9, this._$.first_line, this._$.first_column);} 
    ;

VALOR 
    : 'TK_Igual' ENUNCIADO                  {$$ = $2}
    | 'TK_Coma' MAS_ELEMENTOS             {$$ = null;}
    |                               {$$ = null;}
    ;

TIPO_DATO : 'PR_int'        {$$ = new TipoDato('int');}
     | 'PR_String'     {$$ = new TipoDato('String');}
     | 'PR_boolean'    {$$ = new TipoDato('boolean');}
     | 'PR_char'       {$$ = new TipoDato('char');}
     | 'PR_double'     {$$ = new TipoDato('double');}
     ;

PARAMETROS 
    :  MAS_PARAMETROS    {$$ = $1;}
    |                   {$$ = [];}
    ;

MAS_PARAMETROS 
    : MAS_PARAMETROS PARAMETRO            { $$ = $1; $$.push($2); }
    | PARAMETRO                          { $$ = [$1]; }
    ;

PARAMETRO 
    : TIPO_DATO identificador                       {$$ = new Declaracion($1, $2, null, this._$.first_line, this._$.first_column);  }
    | 'TK_Coma' TIPO_DATO identificador                   {$$ = new Declaracion($2, $3, null, this._$.first_line, this._$.first_column);  }
    ;

LISTA_INSTRUCCION_FUNCION 
    : LISTA_INSTRUCCION_FUNCION DECLARACION_TIPO_FUNCION  { $$ = $1; $$.push($2); }
    | DECLARACION_TIPO_FUNCION                 { $$ = [$1]; }
    ;

DECLARACION_TIPO_FUNCION 
    : DECLARACION_VARIABLE_2      {$$ = $1;}
    | LLAMADA_FUNCION     {$$ = $1;}
    | ASIGNACION_VARIABLE_3       {$$ = $1;}
    | SENTENCIA_IF                {$$ = $1;}
    | SENTENCIA_WHILE             {$$ = $1;}
    | SENTENCIA_DO_WHILE           {$$ = $1;}
    | CONSOLA             {$$ = $1;}
    | SENTENCIA_FOR               {$$ = $1;}
    | SENTENCIA_SWITCH            {$$ = $1;}
    | identificador 'TK_Adicion' 'TK_Adicion' 'TK_PuntoComa'      {$$ = new Incremento($1, $2, $3, this._$.first_line, this._$.first_column);}
    | identificador 'TK_Sustraccion' 'TK_Sustraccion' 'TK_PuntoComa'        {$$ = new Decremento($1, $2, $3, this._$.first_line, this._$.first_column);}
    | identificador 'TK_Multiplicacion' 'TK_Sustraccion' 'TK_PuntoComa' 'TK_Entero' {$$ = [];}
    | 'PR_break' 'TK_PuntoComa'       {$$ = new Break($1, this._$.first_line, this._$.first_column);}
    | 'PR_continue' 'TK_PuntoComa'    {$$ = new Continue($1, this._$.first_line, this._$.first_column);}
    | error             {$$ = new Excepcion($1, "Este es un error sintáctico: " + $1 + " en fila: " + (this._$.first_line) 
                                                    + ", columna: " +  this._$.first_column, this._$.first_line, this._$.first_column)}
    ;

DECLARACION_VARIABLE_2 
    : TIPO_DATO identificador VALOR 'TK_PuntoComa'      {$$ = new Declaracion($1, $2, $3, this._$.first_line, this._$.first_column);}  
    ;

ASIGNACION_VARIABLES 
    : identificador 'TK_Igual' ENUNCIADO  'TK_PuntoComa'              {$$ = new Asignacion($1, $3, this._$.first_line, this._$.first_column);}
    ;

SENTENCIA_IF : 'PR_if' CONDICION_SENTENCIA BLOQUE_INSTRUCCIONES                           {$$ = new SentenciaIf($2, $3, [], this._$.first_line, this._$.first_column);}
   | 'PR_if' CONDICION_SENTENCIA BLOQUE_INSTRUCCIONES 'PR_else' BLOQUE_INSTRUCCIONES {$$ = new SentenciaIf($2, $3, [new Else($5,this._$.first_line, this._$.first_column)], this._$.first_line, this._$.first_column);}
   | 'PR_if' CONDICION_SENTENCIA BLOQUE_INSTRUCCIONES 'PR_else' SENTENCIA_IF                 {$$ = new SentenciaIf($2, $3, [$5], this._$.first_line, this._$.first_column);}
   ;

CONDICION_SENTENCIA 
    : 'TK_ParentesisIzquierdo' ENUNCIADO 'TK_ParentesisDerecho' {$$ = $2;}
    ;

BLOQUE_INSTRUCCIONES 
    : 'TK_LlaveIzquierdo' LISTA_INSTRUCCION 'TK_LlaveDerecho' {$$ = $2;}
    | 'TK_LlaveIzquierdo' 'TK_LlaveDerecho' {$$ = [];}
    ;

SENTENCIA_SWITCH
    : 'PR_switch' CONDICION_SENTENCIA 'TK_LlaveIzquierdo'  INSTRUCCION_SWITCH  DEFAULT  'TK_LlaveDerecho' {$$ = new SentenciaSwitch($2, $4, [$5], this._$.first_line, this._$.first_column);}
    ;


INSTRUCCION_SWITCH
    :  INSTRUCCION_CASES    {$$ = $1;}
    |           {$$ = [];}
    ;

INSTRUCCION_CASES 
    : INSTRUCCION_CASES OPCION_CASE            { $$ = $1; $$.push($2); }
    | OPCION_CASE                  { $$ = [$1]; }
    ;

OPCION_CASE 
    : 'PR_case' ENUNCIADO 'TK_DosPuntos' LISTA_INSTRUCCION_SWITCH 'PR_break' 'TK_PuntoComa' {$$ = new Case($2, $4, this._$.first_line, this._$.first_column);}
    ;

DEFAULT 
    : 'PR_default' 'TK_DosPuntos' LISTA_INSTRUCCION {$$ = new Default($3, this._$.first_line, this._$.first_column);}
    ;

LISTA_INSTRUCCION_SWITCH
    : LISTA_INSTRUCCION_SWITCH DECLARACION_TIPO_SWITCH   { $$ = $1; $$.push($2); }
    | DECLARACION_TIPO_SWITCH                 { $$ = [$1]; }
    ;

DECLARACION_TIPO_SWITCH 
    : DECLARACION_VARIABLE_2      {$$ = $1;}
    | LLAMADA_FUNCION     {$$ = $1;}
    | ASIGNACION_VARIABLE_3       {$$ = $1;}
    | SENTENCIA_IF                {$$ = $1;}
    | SENTENCIA_WHILE             {$$ = $1;}
    | SENTENCIA_DO_WHILE           {$$ = $1;}
    | CONSOLA             {$$ = $1;}
    | SENTENCIA_FOR               {$$ = $1;}
    | SENTENCIA_SWITCH            {$$ = $1;}
    | identificador 'TK_Adicion' 'TK_Adicion' 'TK_PuntoComa'      {$$ = new Incremento($1, $2, $3, this._$.first_line, this._$.first_column);}
    | identificador 'TK_Sustraccion' 'TK_Sustraccion' 'TK_PuntoComa'        {$$ = new Decremento($1, $2, $3, this._$.first_line, this._$.first_column);}
    | identificador 'TK_Multiplicacion' 'TK_Sustraccion' 'TK_PuntoComa' 'TK_Entero' {$$ = [];}
    | 'PR_continue' 'TK_PuntoComa'    {$$ = new Continue($1, this._$.first_line, this._$.first_column);}
    | 'PR_return' 'TK_PuntoComa'          {$$ = new Retorno( $1, $2, this._$.first_line, this._$.first_column);}
    | error             {$$ = new Excepcion($1, "Este es un error sintáctico: " + $1 + " en fila: " + (this._$.first_line) 
                                                    + ", columna: " +  this._$.first_column, this._$.first_line, this._$.first_column)}
    ;

SENTENCIA_WHILE : 'PR_while' CONDICION_SENTENCIA BLOQUE_INSTRUCCIONES {$$ = new SentenciaWhile($2, $3, this._$.first_line, this._$.first_column);}
      ;

SENTENCIA_DO_WHILE 
    : 'PR_do'  BLOQUE_INSTRUCCIONES 'PR_while' CONDICION_SENTENCIA 'TK_PuntoComa' {$$ = new SentenciaDoWhile($2, $4, this._$.first_line, this._$.first_column);}
    ;

SENTENCIA_FOR 
    : 'PR_for' 'TK_ParentesisIzquierdo' INICIALIZACION 'TK_PuntoComa' ENUNCIADO 'TK_PuntoComa' TAMANO_PASO  'TK_ParentesisDerecho' BLOQUE_INSTRUCCIONES  {$$ = new SentenciaFor($3, $5, $7, $9, this._$.first_line, this._$.first_column);}
    ;

INICIALIZACION 
    : ASIGNACION_FOR  {$$ = $1;}  
    | DECLARACION_FOR {$$ = $1;}
    ;

DECLARACION_FOR 
    : TIPO_DATO identificador  'TK_Igual' ENUNCIADO        {$$ = new Declaracion($1, $2, $4, this._$.first_line, this._$.first_column);}
    ;
ASIGNACION_FOR : identificador 'TK_Igual' ENUNCIADO   {$$ = new Asignacion($1, $3, this._$.first_line, this._$.first_column);}
    ;

TAMANO_PASO 
    : identificador 'TK_Adicion' 'TK_Adicion'        {$$ = new Incremento($1, $2, $3, this._$.first_line, this._$.first_column);}
    | identificador 'TK_Sustraccion' 'TK_Sustraccion'        {$$ = new Decremento($1, $2, $3, this._$.first_line, this._$.first_column);}
    | identificador 'TK_Igual' ENUNCIADO        {$$ = new Paso($1, $3, this._$.first_line, this._$.first_column);}
    | identificador 'TK_Multiplicacion' 'TK_Sustraccion' 'TK_Entero' {$$ = [];}
    ;

METODO_VOID 
    : 'PR_void' 'PR_main' 'TK_ParentesisIzquierdo'  'TK_ParentesisDerecho'     'TK_LlaveIzquierdo' LISTA_INSTRUCCION 'TK_LlaveDerecho'    {$$ = new Metodo('PR_void', 'PR_main', [], $6, this._$.first_line, this._$.first_column);} 
    | 'PR_void' identificador 'TK_ParentesisIzquierdo' PARAMETROS 'TK_ParentesisDerecho' 'TK_LlaveIzquierdo' LISTA_INSTRUCCION 'TK_LlaveDerecho'    {$$ = new Metodo('PR_void', $2, $4, $7, this._$.first_line, this._$.first_column);}
    ;


LISTA_INSTRUCCION 
    : LISTA_INSTRUCCION DECLARACION_TIPO_METODO   { $$ = $1; $$.push($2); }
    | DECLARACION_TIPO_METODO                 { $$ = [$1]; }
    ;

DECLARACION_TIPO_METODO 
    : DECLARACION_VARIABLE_2      {$$ = $1;}
    | LLAMADA_FUNCION     {$$ = $1;}
    | ASIGNACION_VARIABLE_3       {$$ = $1;}
    | SENTENCIA_IF                {$$ = $1;}
    | SENTENCIA_WHILE             {$$ = $1;}
    | SENTENCIA_DO_WHILE           {$$ = $1;}
    | CONSOLA             {$$ = $1;}
    | SENTENCIA_FOR               {$$ = $1;}
    | SENTENCIA_SWITCH            {$$ = $1;}
    | identificador 'TK_Adicion' 'TK_Adicion' 'TK_PuntoComa'      {$$ = new Incremento($1, $2, $3, this._$.first_line, this._$.first_column);}
    | identificador 'TK_Sustraccion' 'TK_Sustraccion' 'TK_PuntoComa'        {$$ = new Decremento($1, $2, $3, this._$.first_line, this._$.first_column);}
    | identificador 'TK_Multiplicacion' 'TK_Sustraccion' 'TK_PuntoComa' 'TK_Entero' {$$ = [];}
    | 'PR_break' 'TK_PuntoComa'       {$$ = new Break($1, this._$.first_line, this._$.first_column);}
    | 'PR_continue' 'TK_PuntoComa'    {$$ = new Continue($1, this._$.first_line, this._$.first_column);}
    | 'PR_return' 'TK_PuntoComa'          {$$ = new Retorno( $1, $2, this._$.first_line, this._$.first_column);}
    | 'PR_return' EXPRESION 'TK_PuntoComa'          {$$ = new Retorno( $1, $2, this._$.first_line, this._$.first_column);}
    | error             {$$ = new Excepcion($1, "Este es un error sintáctico: " + $1 + " en fila: " + (this._$.first_line) 
                                                    + ", columna: " +  this._$.first_column, this._$.first_line, this._$.first_column)}
    ;

ERROR 
    : 'TK_LlaveDerecho'
    | 'TK_PuntoComa'        
    | 'TK_ParentesisDerecho'        
    | 'TK_LlaveIzquierdo'        
    | 'TK_ParentesisIzquierdo'        
    ;

ASIGNACION_VARIABLE_3 
    : identificador 'TK_Igual' ENUNCIADO  'TK_PuntoComa'              {$$ = new Asignacion($1, $3, this._$.first_line, this._$.first_column);}
    | identificador 'TK_Igual' identificador 'TK_ParentesisIzquierdo' PARAMETROS_FUNCION 'TK_ParentesisDerecho'  'TK_PuntoComa'              {$$ = new Asignacion($1, $3 + $4 + $5 + $6, this._$.first_line, this._$.first_column);}
    ;

MAS_ELEMENTOS 
    : ASIGNACION_VARIABLES2 MAS_ELEMENTOS2             
    ;

MAS_ELEMENTOS2
    : 'TK_Coma' MAS_ELEMENTOS
    | //epsilon                                 
    ;
ASIGNACION_VARIABLES2 
    : identificador 'TK_Igual' ENUNCIADO                   {$$ = new Asignacion($1, $3, this._$.first_line, this._$.first_column);}
    | identificador                                 {$$ = new Asignacion($1, null, this._$.first_line, this._$.first_column);}
    ;

PARAMETROS_FUNCION 
    :  PARAMETROS_POR_FUNCION    {$$ = $1;}
    |                            {$$ = [];}
    ;

PARAMETROS_POR_FUNCION 
    : PARAMETROS_POR_FUNCION PARAMETRO_FUNCION            { $$ = $1; $$.push($2); }
    | PARAMETRO_FUNCION                                { $$ = [$1]; }
    ;

PARAMETRO_FUNCION 
    : identificador                       {$$ = new Identificador($1, this._$.first_line, this._$.first_column);  }
    | 'TK_Decimal'                       {$$ = new Identificador($1, this._$.first_line, this._$.first_column);  }
    | 'TK_Entero'                       {$$ = new Identificador($1, this._$.first_line, this._$.first_column);  }
    | 'TK_String'                       {$$ = new Identificador($1, this._$.first_line, this._$.first_column);  }
    | 'TK_char'                       {$$ = new Identificador($1, this._$.first_line, this._$.first_column);  }
    | 'PR_true'                       {$$ = new Identificador($1, this._$.first_line, this._$.first_column);  }
    | 'PR_false'                       {$$ = new Identificador($1, this._$.first_line, this._$.first_column);  }
    | 'TK_Coma' identificador                   {$$ = new Identificador($2, this._$.first_line, this._$.first_column);  }
    | 'TK_Coma' 'TK_Decimal'                   {$$ = new Identificador($2, this._$.first_line, this._$.first_column);  }
    | 'TK_Coma' 'TK_Entero'                   {$$ = new Identificador($2, this._$.first_line, this._$.first_column);  }
    | 'TK_Coma' 'TK_String'                   {$$ = new Identificador($2, this._$.first_line, this._$.first_column);  }
    | 'TK_Coma' 'TK_char'                   {$$ = new Identificador($2, this._$.first_line, this._$.first_column);  }
    | 'TK_Coma' 'PR_true'                   {$$ = new Identificador($2, this._$.first_line, this._$.first_column);  }
    | 'TK_Coma' 'PR_false'                   {$$ = new Identificador($2, this._$.first_line, this._$.first_column);  }
    ;

CONSOLA
    : 'PR_System' 'TK_Punto' 'PR_out' 'TK_Punto' CONSOLA_TIPO { $$ = $5 }
    ;

CONSOLA_TIPO
    : 'PR_print'   'TK_ParentesisIzquierdo' ENUNCIADO 'TK_ParentesisDerecho' 'TK_PuntoComa'   {$$ = new Imprimir($3, this._$.first_line, this._$.first_column);}
    | 'PR_println' 'TK_ParentesisIzquierdo' ENUNCIADO 'TK_ParentesisDerecho' 'TK_PuntoComa'   {$$ = new Imprimir($3, this._$.first_line, this._$.first_column);}
    ;

LLAMADA_FUNCION 
    : identificador 'TK_ParentesisIzquierdo' PARAMETROS_FUNCION 'TK_ParentesisDerecho' 'TK_PuntoComa'   {$$ = new LlamadaFuncion($1, $3, this._$.first_line, this._$.first_column);}
    ;

DECREMENTO_INCREMENTO 
    : '++'         	            {$$ = $1}
    | '--'         	            {$$ = $1}
    ;

ENUNCIADO 
    : 'TK_Entero'	'TK_Modulo' 			           { $$ = new ExpresionAritmetica($1, null, $2, this._$.first_line, this._$.first_column); }
    | 'TK_Entero'	DECREMENTO_INCREMENTO 			   { $$ = new ExpresionAritmetica($1, null, $2, this._$.first_line, this._$.first_column); }
    | 'TK_Sustraccion' ENUNCIADO %prec UMENOS	       { $$ = new ExpresionAritmetica($1, null, 'TK_Sustraccion', this._$.first_line, this._$.first_column); }
    | ENUNCIADO 'TK_Adicion' ENUNCIADO		       { $$ = new ExpresionAritmetica($1, $3, 'TK_Adicion', this._$.first_line, this._$.first_column); }
    | ENUNCIADO 'TK_Sustraccion' ENUNCIADO		       { $$ = new ExpresionAritmetica($1, $3, 'TK_Sustraccion', this._$.first_line, this._$.first_column); }
    | ENUNCIADO 'TK_Multiplicacion' ENUNCIADO		       { $$ = new ExpresionAritmetica($1, $3, 'TK_Multiplicacion', this._$.first_line, this._$.first_column); }
    | ENUNCIADO 'TK_Division' ENUNCIADO	           { $$ = new ExpresionAritmetica($1, $3, 'TK_Division', this._$.first_line, this._$.first_column); }
    | ENUNCIADO 'TK_Potencia' ENUNCIADO	           { $$ = new ExpresionAritmetica($1, $3, 'TK_Potencia', this._$.first_line, this._$.first_column); }
    | ENUNCIADO 'TK_Mayor' 'TK_Igual' ENUNCIADO	           { $$ = new ExpresionRelacional($1, $4, 'TK_Mayor' + 'TK_Igual',this._$.first_line, this._$.first_column); }
    | ENUNCIADO 'TK_Menor' 'TK_Igual' ENUNCIADO	           { $$ = new ExpresionRelacional($1, $4, 'TK_Menor' + 'TK_Igual', this._$.first_line, this._$.first_column); }
    | ENUNCIADO 'TK_Menor' ENUNCIADO		       { $$ = new ExpresionRelacional($1, $3, 'TK_Menor', this._$.first_line, this._$.first_column); }
    | ENUNCIADO 'TK_Mayor' ENUNCIADO		       { $$ = new ExpresionRelacional($1, $3, 'TK_Mayor', this._$.first_line, this._$.first_column); }
    | ENUNCIADO '==' ENUNCIADO	           { $$ = new ExpresionRelacional($1, $3, '==', this._$.first_line, this._$.first_column); }
    | ENUNCIADO '!=' ENUNCIADO	           { $$ = new ExpresionRelacional($1, $3, '!=', this._$.first_line, this._$.first_column); }
    | 'TK_Exclamacion' ENUNCIADO	                       { $$ = new ExpresionLogica($2, null, 'TK_Exclamacion', this._$.first_line, this._$.first_column); }
    | ENUNCIADO '||' ENUNCIADO	           { $$ = new ExpresionLogica($1, $3, '||', this._$.first_line, this._$.first_column); }
    | ENUNCIADO '&&' ENUNCIADO	           { $$ = new ExpresionLogica($1, $3, '&&', this._$.first_line, this._$.first_column); }
    | 'TK_Decimal'				               { $$ = new Expresion(new TipoDato('PR_double'), Number($1), this._$.first_line, this._$.first_column); }
    | 'TK_Entero'				               { $$ = new Expresion(new TipoDato('PR_int'), Number($1), this._$.first_line, this._$.first_column); }
    | 'PR_true'				               { $$ = new Expresion(new TipoDato('PR_boolean'), true, this._$.first_line, this._$.first_column); }
    | 'PR_false'				               { $$ = new Expresion(new TipoDato('PR_boolean'), false, this._$.first_line, this._$.first_column); }
    | 'TK_String'			           { $$ = new Expresion(new TipoDato('string'), $1.replace(/\"/g,""), this._$.first_line, this._$.first_column); }
    | 'TK_char'			               { $$ = new Expresion(new TipoDato('PR_char'), $1.replace(/\'/g,""), this._$.first_line, this._$.first_column); }*/
    | identificador		                   { $$ = new Identificador($1, this._$.first_line, this._$.first_column); }
    | 'TK_ParentesisIzquierdo' ENUNCIADO 'TK_ParentesisDerecho'		               { $$ = $2; }                          
    ;