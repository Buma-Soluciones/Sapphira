grammar Sapphira;

s : program_block simulation_block;
program_block : ID KEY_LEFT state_block trans_block KEY_RIGHT COLON;
state_block : STATES KEY_LEFT state_declr* KEY_RIGHT COLON;
state_declr : ID STRING COLON;
trans_block : TRANS KEY_LEFT trans_declr* KEY_RIGHT COLON;
trans_declr : DE ID A ID (CUANDO cuant_state expr cuant_state)? COLON;
cuant_state : NUM ID;
expr : (logic_expr term?)*;
term : NO
     | bool_primitive;
bool_primitive : VERDADERO
               | FALSO;
logic_expr : Y
           | O
           | XOR;
simulation_block : SIMULAR ID CONF ID COLON;

/////////////////////////////       Tokens            ////////////////////////////////////

KEY_LEFT : '{';
KEY_RIGHT : '}';
COLON : ';';
STATES : 'estados';
TRANS : 'transiciones';
DE : 'de';
A : 'a';
CUANDO : 'cuando';
NO : 'no';
VERDADERO : 'verdadero';
FALSO : 'falso';
Y : 'y';
O : 'o';
XOR : 'xor';
SIMULAR : 'simular';
CONF : 'conf';
NUM : [0-9]+;
STRING : '"'.*?'"';
ID : [-a-zA-Z_ñÑ][a-z0-9A-Z_ñÑ]*;

/////////////////////////////       Skip      /////////////////////////////

LINE_COMMENT 	: '#' ~[\r\n]* -> skip ;
EOL: [\r\n]+ -> skip;
WS : [ \t]+ -> skip;