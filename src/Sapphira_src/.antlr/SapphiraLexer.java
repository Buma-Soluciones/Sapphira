// Generated from c:\Users\sebas\Music\Sapphira\src\Sapphira_src\Sapphira.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SapphiraLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		KEY_LEFT=1, KEY_RIGHT=2, COLON=3, STATES=4, TRANS=5, DE=6, A=7, CUANDO=8, 
		NO=9, VERDADERO=10, FALSO=11, Y=12, O=13, XOR=14, SIMULAR=15, CONF=16, 
		NUM=17, STRING=18, ID=19, LINE_COMMENT=20, EOL=21, WS=22;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"KEY_LEFT", "KEY_RIGHT", "COLON", "STATES", "TRANS", "DE", "A", "CUANDO", 
		"NO", "VERDADERO", "FALSO", "Y", "O", "XOR", "SIMULAR", "CONF", "NUM", 
		"STRING", "ID", "LINE_COMMENT", "EOL", "WS"
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


	public SapphiraLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Sapphira.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\30\u00aa\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\3\2\3\2\3\3\3"+
		"\3\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3"+
		"\f\3\f\3\f\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\17\3\17\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\22\6\22\u0080\n\22"+
		"\r\22\16\22\u0081\3\23\3\23\7\23\u0086\n\23\f\23\16\23\u0089\13\23\3\23"+
		"\3\23\3\24\3\24\7\24\u008f\n\24\f\24\16\24\u0092\13\24\3\25\3\25\7\25"+
		"\u0096\n\25\f\25\16\25\u0099\13\25\3\25\3\25\3\26\6\26\u009e\n\26\r\26"+
		"\16\26\u009f\3\26\3\26\3\27\6\27\u00a5\n\27\r\27\16\27\u00a6\3\27\3\27"+
		"\3\u0087\2\30\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16"+
		"\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30\3\2\7\3\2\62;\t\2//C\\"+
		"aac|\u00b3\u00b3\u00c5\u00c5\u201a\u201a\t\2\62;C\\aac|\u00b3\u00b3\u00c5"+
		"\u00c5\u201a\u201a\4\2\f\f\17\17\4\2\13\13\"\"\2\u00af\2\3\3\2\2\2\2\5"+
		"\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2"+
		"\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33"+
		"\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2"+
		"\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\3/\3\2\2\2\5\61\3\2\2\2\7"+
		"\63\3\2\2\2\t\65\3\2\2\2\13=\3\2\2\2\rJ\3\2\2\2\17M\3\2\2\2\21O\3\2\2"+
		"\2\23V\3\2\2\2\25Y\3\2\2\2\27c\3\2\2\2\31i\3\2\2\2\33k\3\2\2\2\35m\3\2"+
		"\2\2\37q\3\2\2\2!y\3\2\2\2#\177\3\2\2\2%\u0083\3\2\2\2\'\u008c\3\2\2\2"+
		")\u0093\3\2\2\2+\u009d\3\2\2\2-\u00a4\3\2\2\2/\60\7}\2\2\60\4\3\2\2\2"+
		"\61\62\7\177\2\2\62\6\3\2\2\2\63\64\7=\2\2\64\b\3\2\2\2\65\66\7g\2\2\66"+
		"\67\7u\2\2\678\7v\2\289\7c\2\29:\7f\2\2:;\7q\2\2;<\7u\2\2<\n\3\2\2\2="+
		">\7v\2\2>?\7t\2\2?@\7c\2\2@A\7p\2\2AB\7u\2\2BC\7k\2\2CD\7e\2\2DE\7k\2"+
		"\2EF\7q\2\2FG\7p\2\2GH\7g\2\2HI\7u\2\2I\f\3\2\2\2JK\7f\2\2KL\7g\2\2L\16"+
		"\3\2\2\2MN\7c\2\2N\20\3\2\2\2OP\7e\2\2PQ\7w\2\2QR\7c\2\2RS\7p\2\2ST\7"+
		"f\2\2TU\7q\2\2U\22\3\2\2\2VW\7p\2\2WX\7q\2\2X\24\3\2\2\2YZ\7x\2\2Z[\7"+
		"g\2\2[\\\7t\2\2\\]\7f\2\2]^\7c\2\2^_\7f\2\2_`\7g\2\2`a\7t\2\2ab\7q\2\2"+
		"b\26\3\2\2\2cd\7h\2\2de\7c\2\2ef\7n\2\2fg\7u\2\2gh\7q\2\2h\30\3\2\2\2"+
		"ij\7{\2\2j\32\3\2\2\2kl\7q\2\2l\34\3\2\2\2mn\7z\2\2no\7q\2\2op\7t\2\2"+
		"p\36\3\2\2\2qr\7u\2\2rs\7k\2\2st\7o\2\2tu\7w\2\2uv\7n\2\2vw\7c\2\2wx\7"+
		"t\2\2x \3\2\2\2yz\7e\2\2z{\7q\2\2{|\7p\2\2|}\7h\2\2}\"\3\2\2\2~\u0080"+
		"\t\2\2\2\177~\3\2\2\2\u0080\u0081\3\2\2\2\u0081\177\3\2\2\2\u0081\u0082"+
		"\3\2\2\2\u0082$\3\2\2\2\u0083\u0087\7$\2\2\u0084\u0086\13\2\2\2\u0085"+
		"\u0084\3\2\2\2\u0086\u0089\3\2\2\2\u0087\u0088\3\2\2\2\u0087\u0085\3\2"+
		"\2\2\u0088\u008a\3\2\2\2\u0089\u0087\3\2\2\2\u008a\u008b\7$\2\2\u008b"+
		"&\3\2\2\2\u008c\u0090\t\3\2\2\u008d\u008f\t\4\2\2\u008e\u008d\3\2\2\2"+
		"\u008f\u0092\3\2\2\2\u0090\u008e\3\2\2\2\u0090\u0091\3\2\2\2\u0091(\3"+
		"\2\2\2\u0092\u0090\3\2\2\2\u0093\u0097\7%\2\2\u0094\u0096\n\5\2\2\u0095"+
		"\u0094\3\2\2\2\u0096\u0099\3\2\2\2\u0097\u0095\3\2\2\2\u0097\u0098\3\2"+
		"\2\2\u0098\u009a\3\2\2\2\u0099\u0097\3\2\2\2\u009a\u009b\b\25\2\2\u009b"+
		"*\3\2\2\2\u009c\u009e\t\5\2\2\u009d\u009c\3\2\2\2\u009e\u009f\3\2\2\2"+
		"\u009f\u009d\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\u00a2"+
		"\b\26\2\2\u00a2,\3\2\2\2\u00a3\u00a5\t\6\2\2\u00a4\u00a3\3\2\2\2\u00a5"+
		"\u00a6\3\2\2\2\u00a6\u00a4\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00a8\3\2"+
		"\2\2\u00a8\u00a9\b\27\2\2\u00a9.\3\2\2\2\t\2\u0081\u0087\u0090\u0097\u009f"+
		"\u00a6\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}