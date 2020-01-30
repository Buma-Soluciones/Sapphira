// Generated from Sapphira.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SapphiraParser.
function SapphiraListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SapphiraListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SapphiraListener.prototype.constructor = SapphiraListener;

// Enter a parse tree produced by SapphiraParser#s.
SapphiraListener.prototype.enterS = function(ctx) {
};

// Exit a parse tree produced by SapphiraParser#s.
SapphiraListener.prototype.exitS = function(ctx) {
};


// Enter a parse tree produced by SapphiraParser#program_block.
SapphiraListener.prototype.enterProgram_block = function(ctx) {
};

// Exit a parse tree produced by SapphiraParser#program_block.
SapphiraListener.prototype.exitProgram_block = function(ctx) {
};


// Enter a parse tree produced by SapphiraParser#state_block.
SapphiraListener.prototype.enterState_block = function(ctx) {
};

// Exit a parse tree produced by SapphiraParser#state_block.
SapphiraListener.prototype.exitState_block = function(ctx) {
};


// Enter a parse tree produced by SapphiraParser#state_declr.
SapphiraListener.prototype.enterState_declr = function(ctx) {
};

// Exit a parse tree produced by SapphiraParser#state_declr.
SapphiraListener.prototype.exitState_declr = function(ctx) {
};


// Enter a parse tree produced by SapphiraParser#trans_block.
SapphiraListener.prototype.enterTrans_block = function(ctx) {
};

// Exit a parse tree produced by SapphiraParser#trans_block.
SapphiraListener.prototype.exitTrans_block = function(ctx) {
};


// Enter a parse tree produced by SapphiraParser#trans_declr.
SapphiraListener.prototype.enterTrans_declr = function(ctx) {
};

// Exit a parse tree produced by SapphiraParser#trans_declr.
SapphiraListener.prototype.exitTrans_declr = function(ctx) {
};


// Enter a parse tree produced by SapphiraParser#cuant_state.
SapphiraListener.prototype.enterCuant_state = function(ctx) {
};

// Exit a parse tree produced by SapphiraParser#cuant_state.
SapphiraListener.prototype.exitCuant_state = function(ctx) {
};


// Enter a parse tree produced by SapphiraParser#expr.
SapphiraListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by SapphiraParser#expr.
SapphiraListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by SapphiraParser#term.
SapphiraListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by SapphiraParser#term.
SapphiraListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by SapphiraParser#bool_primitive.
SapphiraListener.prototype.enterBool_primitive = function(ctx) {
};

// Exit a parse tree produced by SapphiraParser#bool_primitive.
SapphiraListener.prototype.exitBool_primitive = function(ctx) {
};


// Enter a parse tree produced by SapphiraParser#logic_expr.
SapphiraListener.prototype.enterLogic_expr = function(ctx) {
};

// Exit a parse tree produced by SapphiraParser#logic_expr.
SapphiraListener.prototype.exitLogic_expr = function(ctx) {
};


// Enter a parse tree produced by SapphiraParser#simulation_block.
SapphiraListener.prototype.enterSimulation_block = function(ctx) {
};

// Exit a parse tree produced by SapphiraParser#simulation_block.
SapphiraListener.prototype.exitSimulation_block = function(ctx) {
};



exports.SapphiraListener = SapphiraListener;