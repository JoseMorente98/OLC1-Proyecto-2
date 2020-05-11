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

"{"                   return 'EMBRACE'; /* Basic Syntax */
"}"                   return 'UNBRACE';
"("                   return 'LEFT_PAREN';
")"                   return 'RIGHT_PAREN';
"["                   return 'LEFT_BRACKET';
"]"                   return 'RIGHT_BRACKET';
","                   return 'COMMA';
"?"                   return 'QUESTION_MARK';
":"                   return 'COLON';
";"                   return 'LINE_TERMINATOR';

"System.out.println"  return "SYSOUT";
"System.out.print"  return "SYSOUT";
"sysout"              return "SYSOUT";


"public"              return 'public';
"private"             return 'private';

"static"              return 'static';
"main"                return 'main';

"final"               return 'final';

"void"                return 'void';

"package"             return 'KEYWORD_PACKAGE'; /* Keywords */
"import"              return 'KEYWORD_IMPORT';
"if"                  return 'KEYWORD_IF';
"else"                return 'KEYWORD_ELSE';
"while"               return 'KEYWORD_WHILE';
"do"                  return 'KEYWORD_DO';
"for"                 return 'KEYWORD_FOR';
"break"               return 'break';
"continue"            return 'continue';
"switch"              return 'switch';
"case"                return 'case';
"default"             return 'default';

"true"                return 'TRUE_LITERAL';
"false"               return 'FALSE_LITERAL';

"class"               return 'KEYWORD_CLASS';
"extends"             return 'KEYWORD_EXTENDS';
"interface"           return 'KEYWORD_INTERFACE';
"abstract"            return 'KEYWORD_ABSTRACT';
"this"                return 'KEYWORD_THIS';
"super"               return 'KEYWORD_SUPER';

"new"                 return 'KEYWORD_NEW';
"return"              return 'KEYWORD_RETURN';

"boolean"             return 'PRIMITIVE_BOOLEAN';
"int"                 return 'PRIMITIVE_INTEGER';
"double"              return 'PRIMITIVE_DOUBLE';
"String"              return 'STRING_TYPE';

"ArrayList"           return 'KEYWORD_ARRAYLIST';
"List"                return 'KEYWORD_LIST';

"java.util.ArrayList" return 'PACKAGE_ARRAYLIST';
"java.util.List"      return 'PACKAGE_LIST';
"java.util.*"         return 'PACKAGE_UTIL';

"<<"                  return 'OPERATOR_LEFTSHIFT';
">>>"                 return 'OPERATOR_ZEROFILL_RIGHTSHIFT';
">>"                  return 'OPERATOR_RIGHTSHIFT';
"<="                  return 'OPERATOR_LESS_THAN_EQUAL';
"<"                   return 'OPERATOR_LESS_THAN';
"=="                  return 'OPERATOR_EQUAL';
">="                  return 'OPERATOR_GREATER_THAN_EQUAL';
">"                   return 'OPERATOR_GREATER_THAN';
"!="                  return 'OPERATOR_NOT_EQUAL';
"||"                  return 'OPERATOR_LOGICAL_OR';
"|"                   return 'OPERATOR_INCLUSIVE_OR';
"^"                   return 'OPERATOR_XOR';
"&&"                  return 'OPERATOR_LOGICAL_AND';
"&"                   return 'OPERATOR_INCLUSIVE_AND';
"~"                   return 'OPERATOR_BITWISE_NEGATION';
"!"                   return 'OPERATOR_NEGATION';
"="                   return 'OPERATOR_ASSIGNMENT';
"+="                  return '+=';
"-="                  return '-=';
"*="                  return '*=';
"/="                  return '/=';
"%="                  return '%=';
"++"                  return 'OPERATOR_INCREMENT';
"+"                   return 'OPERATOR_ADDITION';
"--"                  return 'OPERATOR_DECREMENT';
"-"                   return 'OPERATOR_SUBTRACTION';
"*"                   return 'OPERATOR_MULTIPLICATION';
"/"                   return 'OPERATOR_DIVISON';
"%"                   return 'OPERATOR_MODULO';
"."                   return 'OPERATOR_CALL';

"null"                return 'NULL_LITERAL';

[A-Z][a-zA-Z0-9_]*   return 'CLASS_IDENTIFIER';
[a-zA-Z][a-zA-Z0-9_]*   return 'IDENTIFIER'; /* Varying form */
({DIGITOS}"."{DIGITOS}?{EXPONENTE}?[fFdD]?|"."{DIGITOS}{EXPONENTE}?[fFdD]?|{DIGITOS}{EXPONENTE}[fFdD]?|{DIGITOS}{EXPONENTE}?[fFdD])/([^\w]|$)   return 'FLOATING_POINT_LITERAL';
{DIGITOS}          return 'DECIMAL_INTEGER_LITERAL';
"\"\""                return 'STRING_LITERAL';
"\""([^"]|{BSL})*"\"" return 'STRING_LITERAL';

<<EOF>>               return 'EOF';
.                     return 'INVALID';

%%