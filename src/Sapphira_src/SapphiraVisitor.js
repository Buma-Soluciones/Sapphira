// Generated from Sapphira.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SapphiraParser.

function SapphiraVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SapphiraVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SapphiraVisitor.prototype.constructor = SapphiraVisitor;

// Visit a parse tree produced by SapphiraParser#s.
SapphiraVisitor.prototype.visitS = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SapphiraParser#program_block.
SapphiraVisitor.prototype.visitProgram_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SapphiraParser#state_block.
SapphiraVisitor.prototype.visitState_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SapphiraParser#state_declr.
SapphiraVisitor.prototype.visitState_declr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SapphiraParser#trans_block.
SapphiraVisitor.prototype.visitTrans_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SapphiraParser#trans_declr.
SapphiraVisitor.prototype.visitTrans_declr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SapphiraParser#cuant_state.
SapphiraVisitor.prototype.visitCuant_state = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SapphiraParser#expr.
SapphiraVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SapphiraParser#term.
SapphiraVisitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SapphiraParser#bool_primitive.
SapphiraVisitor.prototype.visitBool_primitive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SapphiraParser#logic_expr.
SapphiraVisitor.prototype.visitLogic_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SapphiraParser#simulation_block.
SapphiraVisitor.prototype.visitSimulation_block = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SapphiraVisitor = SapphiraVisitor;