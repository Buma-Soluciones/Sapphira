// Generated from c:\Users\sebas\Music\Sapphira\src\Sapphira_src\Sapphira.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SapphiraParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		KEY_LEFT=1, KEY_RIGHT=2, COLON=3, STATES=4, TRANS=5, DE=6, A=7, CUANDO=8, 
		NO=9, VERDADERO=10, FALSO=11, Y=12, O=13, XOR=14, SIMULAR=15, CONF=16, 
		NUM=17, STRING=18, ID=19, LINE_COMMENT=20, EOL=21, WS=22;
	public static final int
		RULE_s = 0, RULE_program_block = 1, RULE_state_block = 2, RULE_state_declr = 3, 
		RULE_trans_block = 4, RULE_trans_declr = 5, RULE_cuant_state = 6, RULE_expr = 7, 
		RULE_term = 8, RULE_bool_primitive = 9, RULE_logic_expr = 10, RULE_simulation_block = 11;
	public static final String[] ruleNames = {
		"s", "program_block", "state_block", "state_declr", "trans_block", "trans_declr", 
		"cuant_state", "expr", "term", "bool_primitive", "logic_expr", "simulation_block"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'{'", "'}'", "';'", "'estados'", "'transiciones'", "'de'", "'a'", 
		"'cuando'", "'no'", "'verdadero'", "'falso'", "'y'", "'o'", "'xor'", "'simular'", 
		"'conf'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "KEY_LEFT", "KEY_RIGHT", "COLON", "STATES", "TRANS", "DE", "A", 
		"CUANDO", "NO", "VERDADERO", "FALSO", "Y", "O", "XOR", "SIMULAR", "CONF", 
		"NUM", "STRING", "ID", "LINE_COMMENT", "EOL", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Sapphira.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SapphiraParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class SContext extends ParserRuleContext {
		public Program_blockContext program_block() {
			return getRuleContext(Program_blockContext.class,0);
		}
		public Simulation_blockContext simulation_block() {
			return getRuleContext(Simulation_blockContext.class,0);
		}
		public SContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_s; }
	}

	public final SContext s() throws RecognitionException {
		SContext _localctx = new SContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_s);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			program_block();
			setState(25);
			simulation_block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Program_blockContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(SapphiraParser.ID, 0); }
		public TerminalNode KEY_LEFT() { return getToken(SapphiraParser.KEY_LEFT, 0); }
		public State_blockContext state_block() {
			return getRuleContext(State_blockContext.class,0);
		}
		public Trans_blockContext trans_block() {
			return getRuleContext(Trans_blockContext.class,0);
		}
		public TerminalNode KEY_RIGHT() { return getToken(SapphiraParser.KEY_RIGHT, 0); }
		public TerminalNode COLON() { return getToken(SapphiraParser.COLON, 0); }
		public Program_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program_block; }
	}

	public final Program_blockContext program_block() throws RecognitionException {
		Program_blockContext _localctx = new Program_blockContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_program_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(27);
			match(ID);
			setState(28);
			match(KEY_LEFT);
			setState(29);
			state_block();
			setState(30);
			trans_block();
			setState(31);
			match(KEY_RIGHT);
			setState(32);
			match(COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class State_blockContext extends ParserRuleContext {
		public TerminalNode STATES() { return getToken(SapphiraParser.STATES, 0); }
		public TerminalNode KEY_LEFT() { return getToken(SapphiraParser.KEY_LEFT, 0); }
		public TerminalNode KEY_RIGHT() { return getToken(SapphiraParser.KEY_RIGHT, 0); }
		public TerminalNode COLON() { return getToken(SapphiraParser.COLON, 0); }
		public List<State_declrContext> state_declr() {
			return getRuleContexts(State_declrContext.class);
		}
		public State_declrContext state_declr(int i) {
			return getRuleContext(State_declrContext.class,i);
		}
		public State_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_state_block; }
	}

	public final State_blockContext state_block() throws RecognitionException {
		State_blockContext _localctx = new State_blockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_state_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			match(STATES);
			setState(35);
			match(KEY_LEFT);
			setState(39);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ID) {
				{
				{
				setState(36);
				state_declr();
				}
				}
				setState(41);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(42);
			match(KEY_RIGHT);
			setState(43);
			match(COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class State_declrContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(SapphiraParser.ID, 0); }
		public TerminalNode STRING() { return getToken(SapphiraParser.STRING, 0); }
		public TerminalNode COLON() { return getToken(SapphiraParser.COLON, 0); }
		public State_declrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_state_declr; }
	}

	public final State_declrContext state_declr() throws RecognitionException {
		State_declrContext _localctx = new State_declrContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_state_declr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(ID);
			setState(46);
			match(STRING);
			setState(47);
			match(COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Trans_blockContext extends ParserRuleContext {
		public TerminalNode TRANS() { return getToken(SapphiraParser.TRANS, 0); }
		public TerminalNode KEY_LEFT() { return getToken(SapphiraParser.KEY_LEFT, 0); }
		public TerminalNode KEY_RIGHT() { return getToken(SapphiraParser.KEY_RIGHT, 0); }
		public TerminalNode COLON() { return getToken(SapphiraParser.COLON, 0); }
		public List<Trans_declrContext> trans_declr() {
			return getRuleContexts(Trans_declrContext.class);
		}
		public Trans_declrContext trans_declr(int i) {
			return getRuleContext(Trans_declrContext.class,i);
		}
		public Trans_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trans_block; }
	}

	public final Trans_blockContext trans_block() throws RecognitionException {
		Trans_blockContext _localctx = new Trans_blockContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_trans_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			match(TRANS);
			setState(50);
			match(KEY_LEFT);
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DE) {
				{
				{
				setState(51);
				trans_declr();
				}
				}
				setState(56);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(57);
			match(KEY_RIGHT);
			setState(58);
			match(COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Trans_declrContext extends ParserRuleContext {
		public TerminalNode DE() { return getToken(SapphiraParser.DE, 0); }
		public List<TerminalNode> ID() { return getTokens(SapphiraParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(SapphiraParser.ID, i);
		}
		public TerminalNode A() { return getToken(SapphiraParser.A, 0); }
		public TerminalNode COLON() { return getToken(SapphiraParser.COLON, 0); }
		public TerminalNode CUANDO() { return getToken(SapphiraParser.CUANDO, 0); }
		public List<Cuant_stateContext> cuant_state() {
			return getRuleContexts(Cuant_stateContext.class);
		}
		public Cuant_stateContext cuant_state(int i) {
			return getRuleContext(Cuant_stateContext.class,i);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public Trans_declrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trans_declr; }
	}

	public final Trans_declrContext trans_declr() throws RecognitionException {
		Trans_declrContext _localctx = new Trans_declrContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_trans_declr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(DE);
			setState(61);
			match(ID);
			setState(62);
			match(A);
			setState(63);
			match(ID);
			setState(69);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CUANDO) {
				{
				setState(64);
				match(CUANDO);
				setState(65);
				cuant_state();
				setState(66);
				expr();
				setState(67);
				cuant_state();
				}
			}

			setState(71);
			match(COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Cuant_stateContext extends ParserRuleContext {
		public TerminalNode NUM() { return getToken(SapphiraParser.NUM, 0); }
		public TerminalNode ID() { return getToken(SapphiraParser.ID, 0); }
		public Cuant_stateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cuant_state; }
	}

	public final Cuant_stateContext cuant_state() throws RecognitionException {
		Cuant_stateContext _localctx = new Cuant_stateContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_cuant_state);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(NUM);
			setState(74);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public List<Logic_exprContext> logic_expr() {
			return getRuleContexts(Logic_exprContext.class);
		}
		public Logic_exprContext logic_expr(int i) {
			return getRuleContext(Logic_exprContext.class,i);
		}
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Y) | (1L << O) | (1L << XOR))) != 0)) {
				{
				{
				setState(76);
				logic_expr();
				setState(78);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NO) | (1L << VERDADERO) | (1L << FALSO))) != 0)) {
					{
					setState(77);
					term();
					}
				}

				}
				}
				setState(84);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TermContext extends ParserRuleContext {
		public TerminalNode NO() { return getToken(SapphiraParser.NO, 0); }
		public Bool_primitiveContext bool_primitive() {
			return getRuleContext(Bool_primitiveContext.class,0);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_term);
		try {
			setState(87);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NO:
				enterOuterAlt(_localctx, 1);
				{
				setState(85);
				match(NO);
				}
				break;
			case VERDADERO:
			case FALSO:
				enterOuterAlt(_localctx, 2);
				{
				setState(86);
				bool_primitive();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Bool_primitiveContext extends ParserRuleContext {
		public TerminalNode VERDADERO() { return getToken(SapphiraParser.VERDADERO, 0); }
		public TerminalNode FALSO() { return getToken(SapphiraParser.FALSO, 0); }
		public Bool_primitiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bool_primitive; }
	}

	public final Bool_primitiveContext bool_primitive() throws RecognitionException {
		Bool_primitiveContext _localctx = new Bool_primitiveContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_bool_primitive);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			_la = _input.LA(1);
			if ( !(_la==VERDADERO || _la==FALSO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Logic_exprContext extends ParserRuleContext {
		public TerminalNode Y() { return getToken(SapphiraParser.Y, 0); }
		public TerminalNode O() { return getToken(SapphiraParser.O, 0); }
		public TerminalNode XOR() { return getToken(SapphiraParser.XOR, 0); }
		public Logic_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logic_expr; }
	}

	public final Logic_exprContext logic_expr() throws RecognitionException {
		Logic_exprContext _localctx = new Logic_exprContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_logic_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Y) | (1L << O) | (1L << XOR))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Simulation_blockContext extends ParserRuleContext {
		public TerminalNode SIMULAR() { return getToken(SapphiraParser.SIMULAR, 0); }
		public List<TerminalNode> ID() { return getTokens(SapphiraParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(SapphiraParser.ID, i);
		}
		public TerminalNode CONF() { return getToken(SapphiraParser.CONF, 0); }
		public TerminalNode COLON() { return getToken(SapphiraParser.COLON, 0); }
		public Simulation_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simulation_block; }
	}

	public final Simulation_blockContext simulation_block() throws RecognitionException {
		Simulation_blockContext _localctx = new Simulation_blockContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_simulation_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			match(SIMULAR);
			setState(94);
			match(ID);
			setState(95);
			match(CONF);
			setState(96);
			match(ID);
			setState(97);
			match(COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\30f\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4"+
		"\f\t\f\4\r\t\r\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\7\4"+
		"(\n\4\f\4\16\4+\13\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\7\6\67\n"+
		"\6\f\6\16\6:\13\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7"+
		"H\n\7\3\7\3\7\3\b\3\b\3\b\3\t\3\t\5\tQ\n\t\7\tS\n\t\f\t\16\tV\13\t\3\n"+
		"\3\n\5\nZ\n\n\3\13\3\13\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\2\2\16\2\4"+
		"\6\b\n\f\16\20\22\24\26\30\2\4\3\2\f\r\3\2\16\20\2_\2\32\3\2\2\2\4\35"+
		"\3\2\2\2\6$\3\2\2\2\b/\3\2\2\2\n\63\3\2\2\2\f>\3\2\2\2\16K\3\2\2\2\20"+
		"T\3\2\2\2\22Y\3\2\2\2\24[\3\2\2\2\26]\3\2\2\2\30_\3\2\2\2\32\33\5\4\3"+
		"\2\33\34\5\30\r\2\34\3\3\2\2\2\35\36\7\25\2\2\36\37\7\3\2\2\37 \5\6\4"+
		"\2 !\5\n\6\2!\"\7\4\2\2\"#\7\5\2\2#\5\3\2\2\2$%\7\6\2\2%)\7\3\2\2&(\5"+
		"\b\5\2\'&\3\2\2\2(+\3\2\2\2)\'\3\2\2\2)*\3\2\2\2*,\3\2\2\2+)\3\2\2\2,"+
		"-\7\4\2\2-.\7\5\2\2.\7\3\2\2\2/\60\7\25\2\2\60\61\7\24\2\2\61\62\7\5\2"+
		"\2\62\t\3\2\2\2\63\64\7\7\2\2\648\7\3\2\2\65\67\5\f\7\2\66\65\3\2\2\2"+
		"\67:\3\2\2\28\66\3\2\2\289\3\2\2\29;\3\2\2\2:8\3\2\2\2;<\7\4\2\2<=\7\5"+
		"\2\2=\13\3\2\2\2>?\7\b\2\2?@\7\25\2\2@A\7\t\2\2AG\7\25\2\2BC\7\n\2\2C"+
		"D\5\16\b\2DE\5\20\t\2EF\5\16\b\2FH\3\2\2\2GB\3\2\2\2GH\3\2\2\2HI\3\2\2"+
		"\2IJ\7\5\2\2J\r\3\2\2\2KL\7\23\2\2LM\7\25\2\2M\17\3\2\2\2NP\5\26\f\2O"+
		"Q\5\22\n\2PO\3\2\2\2PQ\3\2\2\2QS\3\2\2\2RN\3\2\2\2SV\3\2\2\2TR\3\2\2\2"+
		"TU\3\2\2\2U\21\3\2\2\2VT\3\2\2\2WZ\7\13\2\2XZ\5\24\13\2YW\3\2\2\2YX\3"+
		"\2\2\2Z\23\3\2\2\2[\\\t\2\2\2\\\25\3\2\2\2]^\t\3\2\2^\27\3\2\2\2_`\7\21"+
		"\2\2`a\7\25\2\2ab\7\22\2\2bc\7\25\2\2cd\7\5\2\2d\31\3\2\2\2\b)8GPTY";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}