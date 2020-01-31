// Generated from Sapphira.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SapphiraListener = require('./SapphiraListener').SapphiraListener;
var SapphiraVisitor = require('./SapphiraVisitor').SapphiraVisitor;

var grammarFileName = "Sapphira.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0019f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004(\n\u0004\f\u0004\u000e\u0004+\u000b\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u00067\n\u0006",
    "\f\u0006\u000e\u0006:\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007H\n\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0005\tQ\n\t\u0007",
    "\tS\n\t\f\t\u000e\tV\u000b\t\u0003\n\u0003\n\u0005\nZ\n\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0002\u0002\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u0002\u0005\u0003\u0002\u0005\u0006\u0003\u0002",
    "\r\u000e\u0003\u0002\u000f\u0011\u0002_\u0002\u001a\u0003\u0002\u0002",
    "\u0002\u0004\u001d\u0003\u0002\u0002\u0002\u0006$\u0003\u0002\u0002",
    "\u0002\b/\u0003\u0002\u0002\u0002\n3\u0003\u0002\u0002\u0002\f>\u0003",
    "\u0002\u0002\u0002\u000eK\u0003\u0002\u0002\u0002\u0010T\u0003\u0002",
    "\u0002\u0002\u0012Y\u0003\u0002\u0002\u0002\u0014[\u0003\u0002\u0002",
    "\u0002\u0016]\u0003\u0002\u0002\u0002\u0018_\u0003\u0002\u0002\u0002",
    "\u001a\u001b\u0005\u0004\u0003\u0002\u001b\u001c\u0005\u0018\r\u0002",
    "\u001c\u0003\u0003\u0002\u0002\u0002\u001d\u001e\u0007\u0016\u0002\u0002",
    "\u001e\u001f\u0007\u0003\u0002\u0002\u001f \u0005\u0006\u0004\u0002",
    " !\u0005\n\u0006\u0002!\"\u0007\u0004\u0002\u0002\"#\u0007\u0005\u0002",
    "\u0002#\u0005\u0003\u0002\u0002\u0002$%\u0007\u0007\u0002\u0002%)\u0007",
    "\u0003\u0002\u0002&(\u0005\b\u0005\u0002\'&\u0003\u0002\u0002\u0002",
    "(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*\u0003\u0002",
    "\u0002\u0002*,\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002,-\u0007",
    "\u0004\u0002\u0002-.\u0007\u0005\u0002\u0002.\u0007\u0003\u0002\u0002",
    "\u0002/0\u0007\u0016\u0002\u000201\u0007\u0015\u0002\u000212\u0007\u0005",
    "\u0002\u00022\t\u0003\u0002\u0002\u000234\u0007\b\u0002\u000248\u0007",
    "\u0003\u0002\u000257\u0005\f\u0007\u000265\u0003\u0002\u0002\u00027",
    ":\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002",
    "\u00029;\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002;<\u0007\u0004",
    "\u0002\u0002<=\u0007\u0005\u0002\u0002=\u000b\u0003\u0002\u0002\u0002",
    ">?\u0007\t\u0002\u0002?@\u0007\u0016\u0002\u0002@A\u0007\n\u0002\u0002",
    "AG\u0007\u0016\u0002\u0002BC\u0007\u000b\u0002\u0002CD\u0005\u000e\b",
    "\u0002DE\u0005\u0010\t\u0002EF\u0005\u000e\b\u0002FH\u0003\u0002\u0002",
    "\u0002GB\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002HI\u0003\u0002",
    "\u0002\u0002IJ\t\u0002\u0002\u0002J\r\u0003\u0002\u0002\u0002KL\u0007",
    "\u0014\u0002\u0002LM\u0007\u0016\u0002\u0002M\u000f\u0003\u0002\u0002",
    "\u0002NP\u0005\u0016\f\u0002OQ\u0005\u0012\n\u0002PO\u0003\u0002\u0002",
    "\u0002PQ\u0003\u0002\u0002\u0002QS\u0003\u0002\u0002\u0002RN\u0003\u0002",
    "\u0002\u0002SV\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003",
    "\u0002\u0002\u0002U\u0011\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002",
    "\u0002WZ\u0007\f\u0002\u0002XZ\u0005\u0014\u000b\u0002YW\u0003\u0002",
    "\u0002\u0002YX\u0003\u0002\u0002\u0002Z\u0013\u0003\u0002\u0002\u0002",
    "[\\\t\u0003\u0002\u0002\\\u0015\u0003\u0002\u0002\u0002]^\t\u0004\u0002",
    "\u0002^\u0017\u0003\u0002\u0002\u0002_`\u0007\u0012\u0002\u0002`a\u0007",
    "\u0016\u0002\u0002ab\u0007\u0013\u0002\u0002bc\u0007\u0016\u0002\u0002",
    "cd\u0007\u0005\u0002\u0002d\u0019\u0003\u0002\u0002\u0002\b)8GPTY"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "'}'", "';'", "'.'", "'estados'", "'transiciones'", 
                     "'de'", "'a'", "'cuando'", "'no'", "'verdadero'", "'falso'", 
                     "'y'", "'o'", "'xor'", "'simular'", "'conf'" ];

var symbolicNames = [ null, "KEY_LEFT", "KEY_RIGHT", "COLON", "DOT", "STATES", 
                      "TRANS", "DE", "A", "CUANDO", "NO", "VERDADERO", "FALSO", 
                      "Y", "O", "XOR", "SIMULAR", "CONF", "NUM", "STRING", 
                      "ID", "LINE_COMMENT", "EOL", "WS" ];

var ruleNames =  [ "s", "program_block", "state_block", "state_declr", "trans_block", 
                   "trans_declr", "cuant_state", "expr", "term", "bool_primitive", 
                   "logic_expr", "simulation_block" ];

function SapphiraParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SapphiraParser.prototype = Object.create(antlr4.Parser.prototype);
SapphiraParser.prototype.constructor = SapphiraParser;

Object.defineProperty(SapphiraParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SapphiraParser.EOF = antlr4.Token.EOF;
SapphiraParser.KEY_LEFT = 1;
SapphiraParser.KEY_RIGHT = 2;
SapphiraParser.COLON = 3;
SapphiraParser.DOT = 4;
SapphiraParser.STATES = 5;
SapphiraParser.TRANS = 6;
SapphiraParser.DE = 7;
SapphiraParser.A = 8;
SapphiraParser.CUANDO = 9;
SapphiraParser.NO = 10;
SapphiraParser.VERDADERO = 11;
SapphiraParser.FALSO = 12;
SapphiraParser.Y = 13;
SapphiraParser.O = 14;
SapphiraParser.XOR = 15;
SapphiraParser.SIMULAR = 16;
SapphiraParser.CONF = 17;
SapphiraParser.NUM = 18;
SapphiraParser.STRING = 19;
SapphiraParser.ID = 20;
SapphiraParser.LINE_COMMENT = 21;
SapphiraParser.EOL = 22;
SapphiraParser.WS = 23;

SapphiraParser.RULE_s = 0;
SapphiraParser.RULE_program_block = 1;
SapphiraParser.RULE_state_block = 2;
SapphiraParser.RULE_state_declr = 3;
SapphiraParser.RULE_trans_block = 4;
SapphiraParser.RULE_trans_declr = 5;
SapphiraParser.RULE_cuant_state = 6;
SapphiraParser.RULE_expr = 7;
SapphiraParser.RULE_term = 8;
SapphiraParser.RULE_bool_primitive = 9;
SapphiraParser.RULE_logic_expr = 10;
SapphiraParser.RULE_simulation_block = 11;


function SContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SapphiraParser.RULE_s;
    return this;
}

SContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SContext.prototype.constructor = SContext;

SContext.prototype.program_block = function() {
    return this.getTypedRuleContext(Program_blockContext,0);
};

SContext.prototype.simulation_block = function() {
    return this.getTypedRuleContext(Simulation_blockContext,0);
};

SContext.prototype.enterRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.enterS(this);
	}
};

SContext.prototype.exitRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.exitS(this);
	}
};

SContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SapphiraVisitor ) {
        return visitor.visitS(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SapphiraParser.SContext = SContext;

SapphiraParser.prototype.s = function() {

    var localctx = new SContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SapphiraParser.RULE_s);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.program_block();
        this.state = 25;
        this.simulation_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Program_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SapphiraParser.RULE_program_block;
    return this;
}

Program_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Program_blockContext.prototype.constructor = Program_blockContext;

Program_blockContext.prototype.ID = function() {
    return this.getToken(SapphiraParser.ID, 0);
};

Program_blockContext.prototype.KEY_LEFT = function() {
    return this.getToken(SapphiraParser.KEY_LEFT, 0);
};

Program_blockContext.prototype.state_block = function() {
    return this.getTypedRuleContext(State_blockContext,0);
};

Program_blockContext.prototype.trans_block = function() {
    return this.getTypedRuleContext(Trans_blockContext,0);
};

Program_blockContext.prototype.KEY_RIGHT = function() {
    return this.getToken(SapphiraParser.KEY_RIGHT, 0);
};

Program_blockContext.prototype.COLON = function() {
    return this.getToken(SapphiraParser.COLON, 0);
};

Program_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.enterProgram_block(this);
	}
};

Program_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.exitProgram_block(this);
	}
};

Program_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SapphiraVisitor ) {
        return visitor.visitProgram_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SapphiraParser.Program_blockContext = Program_blockContext;

SapphiraParser.prototype.program_block = function() {

    var localctx = new Program_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SapphiraParser.RULE_program_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.match(SapphiraParser.ID);
        this.state = 28;
        this.match(SapphiraParser.KEY_LEFT);
        this.state = 29;
        this.state_block();
        this.state = 30;
        this.trans_block();
        this.state = 31;
        this.match(SapphiraParser.KEY_RIGHT);
        this.state = 32;
        this.match(SapphiraParser.COLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function State_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SapphiraParser.RULE_state_block;
    return this;
}

State_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
State_blockContext.prototype.constructor = State_blockContext;

State_blockContext.prototype.STATES = function() {
    return this.getToken(SapphiraParser.STATES, 0);
};

State_blockContext.prototype.KEY_LEFT = function() {
    return this.getToken(SapphiraParser.KEY_LEFT, 0);
};

State_blockContext.prototype.KEY_RIGHT = function() {
    return this.getToken(SapphiraParser.KEY_RIGHT, 0);
};

State_blockContext.prototype.COLON = function() {
    return this.getToken(SapphiraParser.COLON, 0);
};

State_blockContext.prototype.state_declr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(State_declrContext);
    } else {
        return this.getTypedRuleContext(State_declrContext,i);
    }
};

State_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.enterState_block(this);
	}
};

State_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.exitState_block(this);
	}
};

State_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SapphiraVisitor ) {
        return visitor.visitState_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SapphiraParser.State_blockContext = State_blockContext;

SapphiraParser.prototype.state_block = function() {

    var localctx = new State_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SapphiraParser.RULE_state_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.match(SapphiraParser.STATES);
        this.state = 35;
        this.match(SapphiraParser.KEY_LEFT);
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SapphiraParser.ID) {
            this.state = 36;
            this.state_declr();
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 42;
        this.match(SapphiraParser.KEY_RIGHT);
        this.state = 43;
        this.match(SapphiraParser.COLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function State_declrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SapphiraParser.RULE_state_declr;
    return this;
}

State_declrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
State_declrContext.prototype.constructor = State_declrContext;

State_declrContext.prototype.ID = function() {
    return this.getToken(SapphiraParser.ID, 0);
};

State_declrContext.prototype.STRING = function() {
    return this.getToken(SapphiraParser.STRING, 0);
};

State_declrContext.prototype.COLON = function() {
    return this.getToken(SapphiraParser.COLON, 0);
};

State_declrContext.prototype.enterRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.enterState_declr(this);
	}
};

State_declrContext.prototype.exitRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.exitState_declr(this);
	}
};

State_declrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SapphiraVisitor ) {
        return visitor.visitState_declr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SapphiraParser.State_declrContext = State_declrContext;

SapphiraParser.prototype.state_declr = function() {

    var localctx = new State_declrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SapphiraParser.RULE_state_declr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.match(SapphiraParser.ID);
        this.state = 46;
        this.match(SapphiraParser.STRING);
        this.state = 47;
        this.match(SapphiraParser.COLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Trans_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SapphiraParser.RULE_trans_block;
    return this;
}

Trans_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Trans_blockContext.prototype.constructor = Trans_blockContext;

Trans_blockContext.prototype.TRANS = function() {
    return this.getToken(SapphiraParser.TRANS, 0);
};

Trans_blockContext.prototype.KEY_LEFT = function() {
    return this.getToken(SapphiraParser.KEY_LEFT, 0);
};

Trans_blockContext.prototype.KEY_RIGHT = function() {
    return this.getToken(SapphiraParser.KEY_RIGHT, 0);
};

Trans_blockContext.prototype.COLON = function() {
    return this.getToken(SapphiraParser.COLON, 0);
};

Trans_blockContext.prototype.trans_declr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Trans_declrContext);
    } else {
        return this.getTypedRuleContext(Trans_declrContext,i);
    }
};

Trans_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.enterTrans_block(this);
	}
};

Trans_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.exitTrans_block(this);
	}
};

Trans_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SapphiraVisitor ) {
        return visitor.visitTrans_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SapphiraParser.Trans_blockContext = Trans_blockContext;

SapphiraParser.prototype.trans_block = function() {

    var localctx = new Trans_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SapphiraParser.RULE_trans_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.match(SapphiraParser.TRANS);
        this.state = 50;
        this.match(SapphiraParser.KEY_LEFT);
        this.state = 54;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SapphiraParser.DE) {
            this.state = 51;
            this.trans_declr();
            this.state = 56;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 57;
        this.match(SapphiraParser.KEY_RIGHT);
        this.state = 58;
        this.match(SapphiraParser.COLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Trans_declrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SapphiraParser.RULE_trans_declr;
    return this;
}

Trans_declrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Trans_declrContext.prototype.constructor = Trans_declrContext;

Trans_declrContext.prototype.DE = function() {
    return this.getToken(SapphiraParser.DE, 0);
};

Trans_declrContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SapphiraParser.ID);
    } else {
        return this.getToken(SapphiraParser.ID, i);
    }
};


Trans_declrContext.prototype.A = function() {
    return this.getToken(SapphiraParser.A, 0);
};

Trans_declrContext.prototype.COLON = function() {
    return this.getToken(SapphiraParser.COLON, 0);
};

Trans_declrContext.prototype.DOT = function() {
    return this.getToken(SapphiraParser.DOT, 0);
};

Trans_declrContext.prototype.CUANDO = function() {
    return this.getToken(SapphiraParser.CUANDO, 0);
};

Trans_declrContext.prototype.cuant_state = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Cuant_stateContext);
    } else {
        return this.getTypedRuleContext(Cuant_stateContext,i);
    }
};

Trans_declrContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Trans_declrContext.prototype.enterRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.enterTrans_declr(this);
	}
};

Trans_declrContext.prototype.exitRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.exitTrans_declr(this);
	}
};

Trans_declrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SapphiraVisitor ) {
        return visitor.visitTrans_declr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SapphiraParser.Trans_declrContext = Trans_declrContext;

SapphiraParser.prototype.trans_declr = function() {

    var localctx = new Trans_declrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SapphiraParser.RULE_trans_declr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.match(SapphiraParser.DE);
        this.state = 61;
        this.match(SapphiraParser.ID);
        this.state = 62;
        this.match(SapphiraParser.A);
        this.state = 63;
        this.match(SapphiraParser.ID);
        this.state = 69;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SapphiraParser.CUANDO) {
            this.state = 64;
            this.match(SapphiraParser.CUANDO);
            this.state = 65;
            this.cuant_state();
            this.state = 66;
            this.expr();
            this.state = 67;
            this.cuant_state();
        }

        this.state = 71;
        _la = this._input.LA(1);
        if(!(_la===SapphiraParser.COLON || _la===SapphiraParser.DOT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Cuant_stateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SapphiraParser.RULE_cuant_state;
    return this;
}

Cuant_stateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Cuant_stateContext.prototype.constructor = Cuant_stateContext;

Cuant_stateContext.prototype.NUM = function() {
    return this.getToken(SapphiraParser.NUM, 0);
};

Cuant_stateContext.prototype.ID = function() {
    return this.getToken(SapphiraParser.ID, 0);
};

Cuant_stateContext.prototype.enterRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.enterCuant_state(this);
	}
};

Cuant_stateContext.prototype.exitRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.exitCuant_state(this);
	}
};

Cuant_stateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SapphiraVisitor ) {
        return visitor.visitCuant_state(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SapphiraParser.Cuant_stateContext = Cuant_stateContext;

SapphiraParser.prototype.cuant_state = function() {

    var localctx = new Cuant_stateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SapphiraParser.RULE_cuant_state);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(SapphiraParser.NUM);
        this.state = 74;
        this.match(SapphiraParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SapphiraParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.logic_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Logic_exprContext);
    } else {
        return this.getTypedRuleContext(Logic_exprContext,i);
    }
};

ExprContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SapphiraVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SapphiraParser.ExprContext = ExprContext;

SapphiraParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SapphiraParser.RULE_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SapphiraParser.Y) | (1 << SapphiraParser.O) | (1 << SapphiraParser.XOR))) !== 0)) {
            this.state = 76;
            this.logic_expr();
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SapphiraParser.NO) | (1 << SapphiraParser.VERDADERO) | (1 << SapphiraParser.FALSO))) !== 0)) {
                this.state = 77;
                this.term();
            }

            this.state = 84;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SapphiraParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.NO = function() {
    return this.getToken(SapphiraParser.NO, 0);
};

TermContext.prototype.bool_primitive = function() {
    return this.getTypedRuleContext(Bool_primitiveContext,0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.exitTerm(this);
	}
};

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SapphiraVisitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SapphiraParser.TermContext = TermContext;

SapphiraParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SapphiraParser.RULE_term);
    try {
        this.state = 87;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SapphiraParser.NO:
            this.enterOuterAlt(localctx, 1);
            this.state = 85;
            this.match(SapphiraParser.NO);
            break;
        case SapphiraParser.VERDADERO:
        case SapphiraParser.FALSO:
            this.enterOuterAlt(localctx, 2);
            this.state = 86;
            this.bool_primitive();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Bool_primitiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SapphiraParser.RULE_bool_primitive;
    return this;
}

Bool_primitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Bool_primitiveContext.prototype.constructor = Bool_primitiveContext;

Bool_primitiveContext.prototype.VERDADERO = function() {
    return this.getToken(SapphiraParser.VERDADERO, 0);
};

Bool_primitiveContext.prototype.FALSO = function() {
    return this.getToken(SapphiraParser.FALSO, 0);
};

Bool_primitiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.enterBool_primitive(this);
	}
};

Bool_primitiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.exitBool_primitive(this);
	}
};

Bool_primitiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SapphiraVisitor ) {
        return visitor.visitBool_primitive(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SapphiraParser.Bool_primitiveContext = Bool_primitiveContext;

SapphiraParser.prototype.bool_primitive = function() {

    var localctx = new Bool_primitiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SapphiraParser.RULE_bool_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        _la = this._input.LA(1);
        if(!(_la===SapphiraParser.VERDADERO || _la===SapphiraParser.FALSO)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Logic_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SapphiraParser.RULE_logic_expr;
    return this;
}

Logic_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Logic_exprContext.prototype.constructor = Logic_exprContext;

Logic_exprContext.prototype.Y = function() {
    return this.getToken(SapphiraParser.Y, 0);
};

Logic_exprContext.prototype.O = function() {
    return this.getToken(SapphiraParser.O, 0);
};

Logic_exprContext.prototype.XOR = function() {
    return this.getToken(SapphiraParser.XOR, 0);
};

Logic_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.enterLogic_expr(this);
	}
};

Logic_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.exitLogic_expr(this);
	}
};

Logic_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SapphiraVisitor ) {
        return visitor.visitLogic_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SapphiraParser.Logic_exprContext = Logic_exprContext;

SapphiraParser.prototype.logic_expr = function() {

    var localctx = new Logic_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SapphiraParser.RULE_logic_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SapphiraParser.Y) | (1 << SapphiraParser.O) | (1 << SapphiraParser.XOR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Simulation_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SapphiraParser.RULE_simulation_block;
    return this;
}

Simulation_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Simulation_blockContext.prototype.constructor = Simulation_blockContext;

Simulation_blockContext.prototype.SIMULAR = function() {
    return this.getToken(SapphiraParser.SIMULAR, 0);
};

Simulation_blockContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SapphiraParser.ID);
    } else {
        return this.getToken(SapphiraParser.ID, i);
    }
};


Simulation_blockContext.prototype.CONF = function() {
    return this.getToken(SapphiraParser.CONF, 0);
};

Simulation_blockContext.prototype.COLON = function() {
    return this.getToken(SapphiraParser.COLON, 0);
};

Simulation_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.enterSimulation_block(this);
	}
};

Simulation_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SapphiraListener ) {
        listener.exitSimulation_block(this);
	}
};

Simulation_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SapphiraVisitor ) {
        return visitor.visitSimulation_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SapphiraParser.Simulation_blockContext = Simulation_blockContext;

SapphiraParser.prototype.simulation_block = function() {

    var localctx = new Simulation_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SapphiraParser.RULE_simulation_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(SapphiraParser.SIMULAR);
        this.state = 94;
        this.match(SapphiraParser.ID);
        this.state = 95;
        this.match(SapphiraParser.CONF);
        this.state = 96;
        this.match(SapphiraParser.ID);
        this.state = 97;
        this.match(SapphiraParser.COLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SapphiraParser = SapphiraParser;
