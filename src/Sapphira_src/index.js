var antlr4 = require('antlr4');
var SapphiraLexer = require('./SapphiraLexer').SapphiraLexer;
var SapphiraParser = require('./SapphiraParser').SapphiraParser;
var SapphiraListener = require('./SapphiraListener').SapphiraListener;
var SapphiraVisitor = require('./SapphiraVisitor').SapphiraVisitor;
var Translator = require('./Translator').Translator;

const fs = require('fs');
var text = fs.readFileSync('wireworld.sp','utf8')
console.log (text)
var auxInput = text;
var input = auxInput
var chars = new antlr4.InputStream(input);
var lexer = new SapphiraLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new SapphiraParser(tokens);
parser.buildParseTrees = true;
var tree = parser.s();
console.log(tree.toStringTree(parser.ruleNames));

var walker = new Translator()
antlr4.tree.ParseTreeWalker.DEFAULT.walk(walker, tree);

