%lex
%options ranges

DIGITO                 [0-9]
DIGITOTWO                [1-9]
DIGITOS                ("0"|{DIGITOTWO}{DIGITO}*)
EXPONENTE              ([Ee][+-]?{DIGITOS})
BSL               "\\".
%s                comment

%%



"//".*                /* skip comments */
"/*"                  this.begin('comment');
<comment>"*/"         this.popState();
<comment>.            /* skip comment content*/
\s+                   /* skip whitespace */

"{"                   return 'TK_LlaveIzquierdo'; /* Basic Syntax */
"}"                   return 'TK_LlaveDerecho';
"("                   return 'TK_ParentesisIzquierdo';
")"                   return 'TK_ParentesisDerecho';
"["                   return 'TK_CorcheteIzquierdo';
"]"                   return 'TK_CorcheteDerecho';
","                   return 'TK_Coma';
"?"                   return 'TK_InterrogacionCierre';
":"                   return 'TK_DosPuntos';
";"                   return 'TK_PuntoComa';

"System.out.println"  return "PR_SystemOutPrint";
"System.out.print"  return "PR_SystemOutPrint";
"sysout"              return "PR_SystemOutPrint";


"public"              return 'PR_public';
"private"             return 'PR_private';

"static"              return 'PR_static';
"main"                return 'PR_main';

"final"               return 'PR_final';

"void"                return 'PR_void';

"package"             return 'PR_package'; /* Keywords */
"import"              return 'PR_import';
"if"                  return 'PR_if';
"else"                return 'PR_else';
"while"               return 'PR_while';
"do"                  return 'PR_do';
"for"                 return 'PR_for';
"break"               return 'PR_break';
"continue"            return 'PR_continue';
"switch"              return 'PR_switch';
"case"                return 'PR_case';
"default"             return 'PR_default';

"true"                return 'PR_true';
"false"               return 'PR_false';

"class"               return 'PR_class';
"extends"             return 'PR_extends';
"interface"           return 'PR_interface';
"abstract"            return 'PR_abstract';
"this"                return 'PR_this';
"super"               return 'PR_super';

"new"                 return 'PR_new';
"return"              return 'PR_return';

"boolean"             return 'PR_boolean';
"int"                 return 'PR_int';
"double"              return 'PR_double';
"String"              return 'PR_String';

"<="                  return 'TK_MenorIgual';
"<"                   return 'TK_MenorIgual';
"=="                  return 'TK_Igual';
">="                  return 'TK_MayorIgual';
">"                   return 'TK_Mayor';
"!="                  return 'TK_Diferente';
"||"                  return 'TK_Or';
"^"                   return 'TK_Potencia';
"&&"                  return 'TK_And';
"!"                   return 'TK_Negacion';
"="                   return 'TK_Igual';
"+="                  return '+=';
"-="                  return '-=';
"*="                  return '*=';
"/="                  return '/=';
"%="                  return '%=';
"++"                  return 'TK_Incremento';
"+"                   return 'TK_Adicion';
"--"                  return 'TK_Decremento';
"-"                   return 'TK_Sustraccion';
"*"                   return 'TK_Multiplicacion';
"/"                   return 'TK_Division';
"%"                   return 'TK_Modulo';
"."                   return 'TK_Punto';

"null"                return 'PR_null';

[A-Z][a-zA-Z0-9_]*   return 'TK_IdentificadorClase';
[a-zA-Z][a-zA-Z0-9_]*   return 'TK_Identificador'; /* Varying form */
({DIGITOS}"."{DIGITOS}?{EXPONENTE}?[fFdD]?|"."{DIGITOS}{EXPONENTE}?[fFdD]?|{DIGITOS}{EXPONENTE}[fFdD]?|{DIGITOS}{EXPONENTE}?[fFdD])/([^\w]|$)   return 'TK_Decimal';
{DIGITOS}          return 'TK_Entero';
"\"\""                return 'TK_String';
"\""([^"]|{BSL})*"\"" return 'TK_String';

<<EOF>>               return 'EOF';
.                     return 'TK_Desconocido';

%%