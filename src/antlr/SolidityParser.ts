// Generated from antlr/Solidity.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SolidityListener } from "./SolidityListener";
import { SolidityVisitor } from "./SolidityVisitor";


export class SolidityParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly T__92 = 93;
	public static readonly T__93 = 94;
	public static readonly T__94 = 95;
	public static readonly T__95 = 96;
	public static readonly T__96 = 97;
	public static readonly T__97 = 98;
	public static readonly T__98 = 99;
	public static readonly T__99 = 100;
	public static readonly T__100 = 101;
	public static readonly T__101 = 102;
	public static readonly T__102 = 103;
	public static readonly T__103 = 104;
	public static readonly Int = 105;
	public static readonly Uint = 106;
	public static readonly Byte = 107;
	public static readonly Fixed = 108;
	public static readonly Ufixed = 109;
	public static readonly TvmCell = 110;
	public static readonly BooleanLiteral = 111;
	public static readonly DecimalNumber = 112;
	public static readonly HexNumber = 113;
	public static readonly NumberUnit = 114;
	public static readonly HexLiteralFragment = 115;
	public static readonly ReservedKeyword = 116;
	public static readonly AnonymousKeyword = 117;
	public static readonly BreakKeyword = 118;
	public static readonly ConstantKeyword = 119;
	public static readonly ImmutableKeyword = 120;
	public static readonly ContinueKeyword = 121;
	public static readonly LeaveKeyword = 122;
	public static readonly ExternalKeyword = 123;
	public static readonly IndexedKeyword = 124;
	public static readonly InternalKeyword = 125;
	public static readonly PayableKeyword = 126;
	public static readonly PrivateKeyword = 127;
	public static readonly PublicKeyword = 128;
	public static readonly StaticKeyword = 129;
	public static readonly VirtualKeyword = 130;
	public static readonly PureKeyword = 131;
	public static readonly TypeKeyword = 132;
	public static readonly ViewKeyword = 133;
	public static readonly GlobalKeyword = 134;
	public static readonly InlineKeyword = 135;
	public static readonly ResponsibleKeyword = 136;
	public static readonly ConstructorKeyword = 137;
	public static readonly FallbackKeyword = 138;
	public static readonly ReceiveKeyword = 139;
	public static readonly Identifier = 140;
	public static readonly StringLiteralFragment = 141;
	public static readonly VersionLiteral = 142;
	public static readonly WS = 143;
	public static readonly COMMENT = 144;
	public static readonly LINE_COMMENT = 145;
	public static readonly RULE_sourceUnit = 0;
	public static readonly RULE_pragmaDirective = 1;
	public static readonly RULE_pragmaName = 2;
	public static readonly RULE_pragmaValue = 3;
	public static readonly RULE_version = 4;
	public static readonly RULE_versionOperator = 5;
	public static readonly RULE_versionConstraint = 6;
	public static readonly RULE_importDeclaration = 7;
	public static readonly RULE_importDirective = 8;
	public static readonly RULE_importPath = 9;
	public static readonly RULE_contractDefinition = 10;
	public static readonly RULE_inheritanceSpecifier = 11;
	public static readonly RULE_contractPart = 12;
	public static readonly RULE_stateVariableDeclaration = 13;
	public static readonly RULE_fileLevelConstant = 14;
	public static readonly RULE_customErrorDefinition = 15;
	public static readonly RULE_typeDefinition = 16;
	public static readonly RULE_usingForDeclaration = 17;
	public static readonly RULE_usingForObject = 18;
	public static readonly RULE_usingForObjectDirective = 19;
	public static readonly RULE_userDefinableOperators = 20;
	public static readonly RULE_structDefinition = 21;
	public static readonly RULE_modifierDefinition = 22;
	public static readonly RULE_modifierInvocation = 23;
	public static readonly RULE_functionDefinition = 24;
	public static readonly RULE_functionDescriptor = 25;
	public static readonly RULE_returnParameters = 26;
	public static readonly RULE_modifierList = 27;
	public static readonly RULE_eventDefinition = 28;
	public static readonly RULE_enumValue = 29;
	public static readonly RULE_enumDefinition = 30;
	public static readonly RULE_parameterList = 31;
	public static readonly RULE_parameter = 32;
	public static readonly RULE_eventParameterList = 33;
	public static readonly RULE_eventParameter = 34;
	public static readonly RULE_functionTypeParameterList = 35;
	public static readonly RULE_functionTypeParameter = 36;
	public static readonly RULE_variableDeclaration = 37;
	public static readonly RULE_typeName = 38;
	public static readonly RULE_userDefinedTypeName = 39;
	public static readonly RULE_mappingKey = 40;
	public static readonly RULE_mapping = 41;
	public static readonly RULE_functionTypeName = 42;
	public static readonly RULE_storageLocation = 43;
	public static readonly RULE_stateMutability = 44;
	public static readonly RULE_block = 45;
	public static readonly RULE_statement = 46;
	public static readonly RULE_expressionStatement = 47;
	public static readonly RULE_ifStatement = 48;
	public static readonly RULE_tryStatement = 49;
	public static readonly RULE_catchClause = 50;
	public static readonly RULE_whileStatement = 51;
	public static readonly RULE_repeatStatement = 52;
	public static readonly RULE_simpleStatement = 53;
	public static readonly RULE_uncheckedStatement = 54;
	public static readonly RULE_forStatement = 55;
	public static readonly RULE_forRangeStatement = 56;
	public static readonly RULE_inlineAssemblyStatement = 57;
	public static readonly RULE_inlineAssemblyStatementFlag = 58;
	public static readonly RULE_doWhileStatement = 59;
	public static readonly RULE_continueStatement = 60;
	public static readonly RULE_breakStatement = 61;
	public static readonly RULE_returnStatement = 62;
	public static readonly RULE_throwStatement = 63;
	public static readonly RULE_emitStatement = 64;
	public static readonly RULE_revertStatement = 65;
	public static readonly RULE_variableDeclarationStatement = 66;
	public static readonly RULE_variableDeclarationList = 67;
	public static readonly RULE_identifierList = 68;
	public static readonly RULE_elementaryTypeName = 69;
	public static readonly RULE_optionalTypeName = 70;
	public static readonly RULE_vectorTypeName = 71;
	public static readonly RULE_expression = 72;
	public static readonly RULE_primaryExpression = 73;
	public static readonly RULE_nameValueBlockStatement = 74;
	public static readonly RULE_expressionList = 75;
	public static readonly RULE_nameValueList = 76;
	public static readonly RULE_nameValue = 77;
	public static readonly RULE_functionCallArguments = 78;
	public static readonly RULE_functionCall = 79;
	public static readonly RULE_assemblyBlock = 80;
	public static readonly RULE_assemblyItem = 81;
	public static readonly RULE_assemblyExpression = 82;
	public static readonly RULE_assemblyMember = 83;
	public static readonly RULE_assemblyCall = 84;
	public static readonly RULE_assemblyLocalDefinition = 85;
	public static readonly RULE_assemblyAssignment = 86;
	public static readonly RULE_assemblyIdentifierOrList = 87;
	public static readonly RULE_assemblyIdentifierList = 88;
	public static readonly RULE_assemblyStackAssignment = 89;
	public static readonly RULE_labelDefinition = 90;
	public static readonly RULE_assemblySwitch = 91;
	public static readonly RULE_assemblyCase = 92;
	public static readonly RULE_assemblyFunctionDefinition = 93;
	public static readonly RULE_assemblyFunctionReturns = 94;
	public static readonly RULE_assemblyFor = 95;
	public static readonly RULE_assemblyIf = 96;
	public static readonly RULE_assemblyLiteral = 97;
	public static readonly RULE_tupleExpression = 98;
	public static readonly RULE_typeNameExpression = 99;
	public static readonly RULE_numberLiteral = 100;
	public static readonly RULE_identifier = 101;
	public static readonly RULE_hexLiteral = 102;
	public static readonly RULE_onBounceKeyword = 103;
	public static readonly RULE_onTickTockKeyword = 104;
	public static readonly RULE_overrideSpecifier = 105;
	public static readonly RULE_stringLiteral = 106;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceUnit", "pragmaDirective", "pragmaName", "pragmaValue", "version", 
		"versionOperator", "versionConstraint", "importDeclaration", "importDirective", 
		"importPath", "contractDefinition", "inheritanceSpecifier", "contractPart", 
		"stateVariableDeclaration", "fileLevelConstant", "customErrorDefinition", 
		"typeDefinition", "usingForDeclaration", "usingForObject", "usingForObjectDirective", 
		"userDefinableOperators", "structDefinition", "modifierDefinition", "modifierInvocation", 
		"functionDefinition", "functionDescriptor", "returnParameters", "modifierList", 
		"eventDefinition", "enumValue", "enumDefinition", "parameterList", "parameter", 
		"eventParameterList", "eventParameter", "functionTypeParameterList", "functionTypeParameter", 
		"variableDeclaration", "typeName", "userDefinedTypeName", "mappingKey", 
		"mapping", "functionTypeName", "storageLocation", "stateMutability", "block", 
		"statement", "expressionStatement", "ifStatement", "tryStatement", "catchClause", 
		"whileStatement", "repeatStatement", "simpleStatement", "uncheckedStatement", 
		"forStatement", "forRangeStatement", "inlineAssemblyStatement", "inlineAssemblyStatementFlag", 
		"doWhileStatement", "continueStatement", "breakStatement", "returnStatement", 
		"throwStatement", "emitStatement", "revertStatement", "variableDeclarationStatement", 
		"variableDeclarationList", "identifierList", "elementaryTypeName", "optionalTypeName", 
		"vectorTypeName", "expression", "primaryExpression", "nameValueBlockStatement", 
		"expressionList", "nameValueList", "nameValue", "functionCallArguments", 
		"functionCall", "assemblyBlock", "assemblyItem", "assemblyExpression", 
		"assemblyMember", "assemblyCall", "assemblyLocalDefinition", "assemblyAssignment", 
		"assemblyIdentifierOrList", "assemblyIdentifierList", "assemblyStackAssignment", 
		"labelDefinition", "assemblySwitch", "assemblyCase", "assemblyFunctionDefinition", 
		"assemblyFunctionReturns", "assemblyFor", "assemblyIf", "assemblyLiteral", 
		"tupleExpression", "typeNameExpression", "numberLiteral", "identifier", 
		"hexLiteral", "onBounceKeyword", "onTickTockKeyword", "overrideSpecifier", 
		"stringLiteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'pragma'", "';'", "'ton-solidity'", "'ever-solidity'", "'*'", 
		"'||'", "'^'", "'~'", "'>='", "'>'", "'<'", "'<='", "'='", "'as'", "'import'", 
		"'from'", "'{'", "','", "'}'", "'abstract'", "'contract'", "'interface'", 
		"'library'", "'is'", "'('", "')'", "'error'", "'using'", "'for'", "'|'", 
		"'&'", "'+'", "'-'", "'/'", "'%'", "'=='", "'!='", "'struct'", "'modifier'", 
		"'function'", "'returns'", "'event'", "'enum'", "'['", "']'", "'address'", 
		"'.'", "'mapping'", "'=>'", "'memory'", "'storage'", "'calldata'", "'if'", 
		"'else'", "'try'", "'catch'", "'while'", "'repeat'", "'unchecked'", "':'", 
		"'assembly'", "'do'", "'return'", "'throw'", "'emit'", "'revert'", "'var'", 
		"'bool'", "'string'", "'byte'", "'optional'", "'vector'", "'++'", "'--'", 
		"'new'", "'delete'", "'!'", "'**'", "'<<'", "'>>'", "'&&'", "'?'", "'|='", 
		"'^='", "'&='", "'<<='", "'>>='", "'+='", "'-='", "'*='", "'/='", "'%='", 
		"'let'", "':='", "'=:'", "'switch'", "'case'", "'default'", "'->'", "'msgValue'", 
		"'callback'", "'onBounce'", "'onTickTock'", "'override'", undefined, undefined, 
		undefined, undefined, undefined, "'TvmCell'", undefined, undefined, undefined, 
		undefined, undefined, undefined, "'anonymous'", "'break'", "'constant'", 
		"'immutable'", "'continue'", "'leave'", "'external'", "'indexed'", "'internal'", 
		"'payable'", "'private'", "'public'", "'static'", "'virtual'", "'pure'", 
		"'type'", "'view'", "'global'", "'inline'", "'responsible'", "'constructor'", 
		"'fallback'", "'receive'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"Int", "Uint", "Byte", "Fixed", "Ufixed", "TvmCell", "BooleanLiteral", 
		"DecimalNumber", "HexNumber", "NumberUnit", "HexLiteralFragment", "ReservedKeyword", 
		"AnonymousKeyword", "BreakKeyword", "ConstantKeyword", "ImmutableKeyword", 
		"ContinueKeyword", "LeaveKeyword", "ExternalKeyword", "IndexedKeyword", 
		"InternalKeyword", "PayableKeyword", "PrivateKeyword", "PublicKeyword", 
		"StaticKeyword", "VirtualKeyword", "PureKeyword", "TypeKeyword", "ViewKeyword", 
		"GlobalKeyword", "InlineKeyword", "ResponsibleKeyword", "ConstructorKeyword", 
		"FallbackKeyword", "ReceiveKeyword", "Identifier", "StringLiteralFragment", 
		"VersionLiteral", "WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SolidityParser._LITERAL_NAMES, SolidityParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SolidityParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Solidity.g4"; }

	// @Override
	public get ruleNames(): string[] { return SolidityParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SolidityParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SolidityParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceUnit(): SourceUnitContext {
		let _localctx: SourceUnitContext = new SourceUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SolidityParser.RULE_sourceUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__0) | (1 << SolidityParser.T__14) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__21) | (1 << SolidityParser.T__22) | (1 << SolidityParser.T__26) | (1 << SolidityParser.T__27))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__39 - 38)) | (1 << (SolidityParser.T__42 - 38)) | (1 << (SolidityParser.T__45 - 38)) | (1 << (SolidityParser.T__47 - 38)) | (1 << (SolidityParser.T__51 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)) | (1 << (SolidityParser.T__67 - 38)) | (1 << (SolidityParser.T__68 - 38)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (SolidityParser.T__69 - 70)) | (1 << (SolidityParser.T__70 - 70)) | (1 << (SolidityParser.T__71 - 70)) | (1 << (SolidityParser.T__99 - 70)) | (1 << (SolidityParser.T__100 - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (SolidityParser.T__101 - 102)) | (1 << (SolidityParser.T__102 - 102)) | (1 << (SolidityParser.Int - 102)) | (1 << (SolidityParser.Uint - 102)) | (1 << (SolidityParser.Byte - 102)) | (1 << (SolidityParser.Fixed - 102)) | (1 << (SolidityParser.Ufixed - 102)) | (1 << (SolidityParser.TvmCell - 102)) | (1 << (SolidityParser.LeaveKeyword - 102)) | (1 << (SolidityParser.PayableKeyword - 102)) | (1 << (SolidityParser.TypeKeyword - 102)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.FallbackKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
				{
				this.state = 224;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 214;
					this.pragmaDirective();
					}
					break;

				case 2:
					{
					this.state = 215;
					this.importDirective();
					}
					break;

				case 3:
					{
					this.state = 216;
					this.contractDefinition();
					}
					break;

				case 4:
					{
					this.state = 217;
					this.enumDefinition();
					}
					break;

				case 5:
					{
					this.state = 218;
					this.structDefinition();
					}
					break;

				case 6:
					{
					this.state = 219;
					this.functionDefinition();
					}
					break;

				case 7:
					{
					this.state = 220;
					this.fileLevelConstant();
					}
					break;

				case 8:
					{
					this.state = 221;
					this.customErrorDefinition();
					}
					break;

				case 9:
					{
					this.state = 222;
					this.typeDefinition();
					}
					break;

				case 10:
					{
					this.state = 223;
					this.usingForDeclaration();
					}
					break;
				}
				}
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 229;
			this.match(SolidityParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaDirective(): PragmaDirectiveContext {
		let _localctx: PragmaDirectiveContext = new PragmaDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SolidityParser.RULE_pragmaDirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.match(SolidityParser.T__0);
			this.state = 232;
			this.pragmaName();
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__4) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__11) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SolidityParser.T__65 - 66)) | (1 << (SolidityParser.T__66 - 66)) | (1 << (SolidityParser.T__67 - 66)) | (1 << (SolidityParser.T__68 - 66)) | (1 << (SolidityParser.T__69 - 66)) | (1 << (SolidityParser.T__70 - 66)) | (1 << (SolidityParser.T__71 - 66)) | (1 << (SolidityParser.T__72 - 66)) | (1 << (SolidityParser.T__73 - 66)) | (1 << (SolidityParser.T__74 - 66)) | (1 << (SolidityParser.T__75 - 66)) | (1 << (SolidityParser.T__76 - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)) | (1 << (SolidityParser.VersionLiteral - 132)))) !== 0)) {
				{
				this.state = 233;
				this.pragmaValue();
				}
			}

			this.state = 236;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaName(): PragmaNameContext {
		let _localctx: PragmaNameContext = new PragmaNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SolidityParser.RULE_pragmaName);
		let _la: number;
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__2:
			case SolidityParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 238;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__2 || _la === SolidityParser.T__3)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case SolidityParser.T__15:
			case SolidityParser.T__26:
			case SolidityParser.T__51:
			case SolidityParser.T__65:
			case SolidityParser.T__99:
			case SolidityParser.T__100:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 239;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaValue(): PragmaValueContext {
		let _localctx: PragmaValueContext = new PragmaValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SolidityParser.RULE_pragmaValue);
		try {
			this.state = 245;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 242;
				this.match(SolidityParser.T__4);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 243;
				this.version();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 244;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public version(): VersionContext {
		let _localctx: VersionContext = new VersionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SolidityParser.RULE_version);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.versionConstraint();
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__11) | (1 << SolidityParser.T__12))) !== 0) || _la === SolidityParser.DecimalNumber || _la === SolidityParser.VersionLiteral) {
				{
				{
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__5) {
					{
					this.state = 248;
					this.match(SolidityParser.T__5);
					}
				}

				this.state = 251;
				this.versionConstraint();
				}
				}
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionOperator(): VersionOperatorContext {
		let _localctx: VersionOperatorContext = new VersionOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SolidityParser.RULE_versionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__11) | (1 << SolidityParser.T__12))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionConstraint(): VersionConstraintContext {
		let _localctx: VersionConstraintContext = new VersionConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SolidityParser.RULE_versionConstraint);
		let _la: number;
		try {
			this.state = 267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__11) | (1 << SolidityParser.T__12))) !== 0)) {
					{
					this.state = 259;
					this.versionOperator();
					}
				}

				this.state = 262;
				this.match(SolidityParser.VersionLiteral);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__11) | (1 << SolidityParser.T__12))) !== 0)) {
					{
					this.state = 263;
					this.versionOperator();
					}
				}

				this.state = 266;
				this.match(SolidityParser.DecimalNumber);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SolidityParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this.identifier();
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13) {
				{
				this.state = 270;
				this.match(SolidityParser.T__13);
				this.state = 271;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDirective(): ImportDirectiveContext {
		let _localctx: ImportDirectiveContext = new ImportDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SolidityParser.RULE_importDirective);
		let _la: number;
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 274;
				this.match(SolidityParser.T__14);
				this.state = 275;
				this.importPath();
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__13) {
					{
					this.state = 276;
					this.match(SolidityParser.T__13);
					this.state = 277;
					this.identifier();
					}
				}

				this.state = 280;
				this.match(SolidityParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 282;
				this.match(SolidityParser.T__14);
				this.state = 285;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.T__4:
					{
					this.state = 283;
					this.match(SolidityParser.T__4);
					}
					break;
				case SolidityParser.T__15:
				case SolidityParser.T__26:
				case SolidityParser.T__51:
				case SolidityParser.T__65:
				case SolidityParser.T__99:
				case SolidityParser.T__100:
				case SolidityParser.LeaveKeyword:
				case SolidityParser.PayableKeyword:
				case SolidityParser.ConstructorKeyword:
				case SolidityParser.ReceiveKeyword:
				case SolidityParser.Identifier:
					{
					this.state = 284;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__13) {
					{
					this.state = 287;
					this.match(SolidityParser.T__13);
					this.state = 288;
					this.identifier();
					}
				}

				this.state = 291;
				this.match(SolidityParser.T__15);
				this.state = 292;
				this.importPath();
				this.state = 293;
				this.match(SolidityParser.T__1);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 295;
				this.match(SolidityParser.T__14);
				this.state = 296;
				this.match(SolidityParser.T__16);
				this.state = 297;
				this.importDeclaration();
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__17) {
					{
					{
					this.state = 298;
					this.match(SolidityParser.T__17);
					this.state = 299;
					this.importDeclaration();
					}
					}
					this.state = 304;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 305;
				this.match(SolidityParser.T__18);
				this.state = 306;
				this.match(SolidityParser.T__15);
				this.state = 307;
				this.importPath();
				this.state = 308;
				this.match(SolidityParser.T__1);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SolidityParser.RULE_importPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.match(SolidityParser.StringLiteralFragment);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractDefinition(): ContractDefinitionContext {
		let _localctx: ContractDefinitionContext = new ContractDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SolidityParser.RULE_contractDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__19) {
				{
				this.state = 314;
				this.match(SolidityParser.T__19);
				}
			}

			this.state = 317;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__20) | (1 << SolidityParser.T__21) | (1 << SolidityParser.T__22))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 318;
			this.identifier();
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__23) {
				{
				this.state = 319;
				this.match(SolidityParser.T__23);
				this.state = 320;
				this.inheritanceSpecifier();
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__17) {
					{
					{
					this.state = 321;
					this.match(SolidityParser.T__17);
					this.state = 322;
					this.inheritanceSpecifier();
					}
					}
					this.state = 327;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 330;
			this.match(SolidityParser.T__16);
			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (SolidityParser.T__15 - 16)) | (1 << (SolidityParser.T__26 - 16)) | (1 << (SolidityParser.T__27 - 16)) | (1 << (SolidityParser.T__37 - 16)) | (1 << (SolidityParser.T__38 - 16)) | (1 << (SolidityParser.T__39 - 16)) | (1 << (SolidityParser.T__41 - 16)) | (1 << (SolidityParser.T__42 - 16)) | (1 << (SolidityParser.T__45 - 16)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (SolidityParser.T__47 - 48)) | (1 << (SolidityParser.T__51 - 48)) | (1 << (SolidityParser.T__65 - 48)) | (1 << (SolidityParser.T__66 - 48)) | (1 << (SolidityParser.T__67 - 48)) | (1 << (SolidityParser.T__68 - 48)) | (1 << (SolidityParser.T__69 - 48)) | (1 << (SolidityParser.T__70 - 48)) | (1 << (SolidityParser.T__71 - 48)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.T__101 - 100)) | (1 << (SolidityParser.T__102 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.FallbackKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)))) !== 0)) {
				{
				{
				this.state = 331;
				this.contractPart();
				}
				}
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 337;
			this.match(SolidityParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritanceSpecifier(): InheritanceSpecifierContext {
		let _localctx: InheritanceSpecifierContext = new InheritanceSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SolidityParser.RULE_inheritanceSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.userDefinedTypeName();
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__24) {
				{
				this.state = 340;
				this.match(SolidityParser.T__24);
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__7) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SolidityParser.T__65 - 66)) | (1 << (SolidityParser.T__66 - 66)) | (1 << (SolidityParser.T__67 - 66)) | (1 << (SolidityParser.T__68 - 66)) | (1 << (SolidityParser.T__69 - 66)) | (1 << (SolidityParser.T__70 - 66)) | (1 << (SolidityParser.T__71 - 66)) | (1 << (SolidityParser.T__72 - 66)) | (1 << (SolidityParser.T__73 - 66)) | (1 << (SolidityParser.T__74 - 66)) | (1 << (SolidityParser.T__75 - 66)) | (1 << (SolidityParser.T__76 - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)))) !== 0)) {
					{
					this.state = 341;
					this.expressionList();
					}
				}

				this.state = 344;
				this.match(SolidityParser.T__25);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractPart(): ContractPartContext {
		let _localctx: ContractPartContext = new ContractPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SolidityParser.RULE_contractPart);
		try {
			this.state = 356;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 347;
				this.stateVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 348;
				this.usingForDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 349;
				this.structDefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 350;
				this.modifierDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 351;
				this.functionDefinition();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 352;
				this.eventDefinition();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 353;
				this.enumDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 354;
				this.customErrorDefinition();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 355;
				this.typeDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateVariableDeclaration(): StateVariableDeclarationContext {
		let _localctx: StateVariableDeclarationContext = new StateVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SolidityParser.RULE_stateVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.typeName(0);
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.ConstantKeyword - 104)) | (1 << (SolidityParser.ImmutableKeyword - 104)) | (1 << (SolidityParser.InternalKeyword - 104)) | (1 << (SolidityParser.PrivateKeyword - 104)) | (1 << (SolidityParser.PublicKeyword - 104)) | (1 << (SolidityParser.StaticKeyword - 104)))) !== 0)) {
				{
				this.state = 366;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.StaticKeyword:
					{
					this.state = 359;
					this.match(SolidityParser.StaticKeyword);
					}
					break;
				case SolidityParser.PublicKeyword:
					{
					this.state = 360;
					this.match(SolidityParser.PublicKeyword);
					}
					break;
				case SolidityParser.InternalKeyword:
					{
					this.state = 361;
					this.match(SolidityParser.InternalKeyword);
					}
					break;
				case SolidityParser.PrivateKeyword:
					{
					this.state = 362;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;
				case SolidityParser.ConstantKeyword:
					{
					this.state = 363;
					this.match(SolidityParser.ConstantKeyword);
					}
					break;
				case SolidityParser.ImmutableKeyword:
					{
					this.state = 364;
					this.match(SolidityParser.ImmutableKeyword);
					}
					break;
				case SolidityParser.T__103:
					{
					this.state = 365;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 371;
			this.identifier();
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12) {
				{
				this.state = 372;
				this.match(SolidityParser.T__12);
				this.state = 373;
				this.expression(0);
				}
			}

			this.state = 376;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fileLevelConstant(): FileLevelConstantContext {
		let _localctx: FileLevelConstantContext = new FileLevelConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SolidityParser.RULE_fileLevelConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.typeName(0);
			this.state = 379;
			this.match(SolidityParser.ConstantKeyword);
			this.state = 380;
			this.identifier();
			this.state = 381;
			this.match(SolidityParser.T__12);
			this.state = 382;
			this.expression(0);
			this.state = 383;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public customErrorDefinition(): CustomErrorDefinitionContext {
		let _localctx: CustomErrorDefinitionContext = new CustomErrorDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SolidityParser.RULE_customErrorDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this.match(SolidityParser.T__26);
			this.state = 386;
			this.identifier();
			this.state = 387;
			this.parameterList();
			this.state = 388;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDefinition(): TypeDefinitionContext {
		let _localctx: TypeDefinitionContext = new TypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SolidityParser.RULE_typeDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(SolidityParser.TypeKeyword);
			this.state = 391;
			this.identifier();
			this.state = 392;
			this.match(SolidityParser.T__23);
			this.state = 393;
			this.elementaryTypeName();
			this.state = 394;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingForDeclaration(): UsingForDeclarationContext {
		let _localctx: UsingForDeclarationContext = new UsingForDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SolidityParser.RULE_usingForDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(SolidityParser.T__27);
			this.state = 397;
			this.usingForObject();
			this.state = 398;
			this.match(SolidityParser.T__28);
			this.state = 401;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__4:
				{
				this.state = 399;
				this.match(SolidityParser.T__4);
				}
				break;
			case SolidityParser.T__15:
			case SolidityParser.T__26:
			case SolidityParser.T__39:
			case SolidityParser.T__45:
			case SolidityParser.T__47:
			case SolidityParser.T__51:
			case SolidityParser.T__65:
			case SolidityParser.T__66:
			case SolidityParser.T__67:
			case SolidityParser.T__68:
			case SolidityParser.T__69:
			case SolidityParser.T__70:
			case SolidityParser.T__71:
			case SolidityParser.T__99:
			case SolidityParser.T__100:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.TvmCell:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				{
				this.state = 400;
				this.typeName(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.GlobalKeyword) {
				{
				this.state = 403;
				this.match(SolidityParser.GlobalKeyword);
				}
			}

			this.state = 406;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingForObject(): UsingForObjectContext {
		let _localctx: UsingForObjectContext = new UsingForObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SolidityParser.RULE_usingForObject);
		let _la: number;
		try {
			this.state = 420;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__15:
			case SolidityParser.T__26:
			case SolidityParser.T__51:
			case SolidityParser.T__65:
			case SolidityParser.T__99:
			case SolidityParser.T__100:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 408;
				this.userDefinedTypeName();
				}
				break;
			case SolidityParser.T__16:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 409;
				this.match(SolidityParser.T__16);
				this.state = 410;
				this.usingForObjectDirective();
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__17) {
					{
					{
					this.state = 411;
					this.match(SolidityParser.T__17);
					this.state = 412;
					this.usingForObjectDirective();
					}
					}
					this.state = 417;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 418;
				this.match(SolidityParser.T__18);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingForObjectDirective(): UsingForObjectDirectiveContext {
		let _localctx: UsingForObjectDirectiveContext = new UsingForObjectDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SolidityParser.RULE_usingForObjectDirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.userDefinedTypeName();
			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__13) {
				{
				this.state = 423;
				this.match(SolidityParser.T__13);
				this.state = 424;
				this.userDefinableOperators();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public userDefinableOperators(): UserDefinableOperatorsContext {
		let _localctx: UserDefinableOperatorsContext = new UserDefinableOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SolidityParser.RULE_userDefinableOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__4) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__11) | (1 << SolidityParser.T__29) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__33 - 32)) | (1 << (SolidityParser.T__34 - 32)) | (1 << (SolidityParser.T__35 - 32)) | (1 << (SolidityParser.T__36 - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDefinition(): StructDefinitionContext {
		let _localctx: StructDefinitionContext = new StructDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SolidityParser.RULE_structDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(SolidityParser.T__37);
			this.state = 430;
			this.identifier();
			this.state = 431;
			this.match(SolidityParser.T__16);
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (SolidityParser.T__15 - 16)) | (1 << (SolidityParser.T__26 - 16)) | (1 << (SolidityParser.T__39 - 16)) | (1 << (SolidityParser.T__45 - 16)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (SolidityParser.T__47 - 48)) | (1 << (SolidityParser.T__51 - 48)) | (1 << (SolidityParser.T__65 - 48)) | (1 << (SolidityParser.T__66 - 48)) | (1 << (SolidityParser.T__67 - 48)) | (1 << (SolidityParser.T__68 - 48)) | (1 << (SolidityParser.T__69 - 48)) | (1 << (SolidityParser.T__70 - 48)) | (1 << (SolidityParser.T__71 - 48)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
				{
				this.state = 432;
				this.variableDeclaration();
				this.state = 433;
				this.match(SolidityParser.T__1);
				this.state = 439;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (SolidityParser.T__15 - 16)) | (1 << (SolidityParser.T__26 - 16)) | (1 << (SolidityParser.T__39 - 16)) | (1 << (SolidityParser.T__45 - 16)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (SolidityParser.T__47 - 48)) | (1 << (SolidityParser.T__51 - 48)) | (1 << (SolidityParser.T__65 - 48)) | (1 << (SolidityParser.T__66 - 48)) | (1 << (SolidityParser.T__67 - 48)) | (1 << (SolidityParser.T__68 - 48)) | (1 << (SolidityParser.T__69 - 48)) | (1 << (SolidityParser.T__70 - 48)) | (1 << (SolidityParser.T__71 - 48)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
					{
					{
					this.state = 434;
					this.variableDeclaration();
					this.state = 435;
					this.match(SolidityParser.T__1);
					}
					}
					this.state = 441;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 444;
			this.match(SolidityParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifierDefinition(): ModifierDefinitionContext {
		let _localctx: ModifierDefinitionContext = new ModifierDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SolidityParser.RULE_modifierDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(SolidityParser.T__38);
			this.state = 447;
			this.identifier();
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__24) {
				{
				this.state = 448;
				this.parameterList();
				}
			}

			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__103 || _la === SolidityParser.VirtualKeyword) {
				{
				this.state = 453;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.VirtualKeyword:
					{
					this.state = 451;
					this.match(SolidityParser.VirtualKeyword);
					}
					break;
				case SolidityParser.T__103:
					{
					this.state = 452;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 460;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__1:
				{
				this.state = 458;
				this.match(SolidityParser.T__1);
				}
				break;
			case SolidityParser.T__16:
				{
				this.state = 459;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifierInvocation(): ModifierInvocationContext {
		let _localctx: ModifierInvocationContext = new ModifierInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SolidityParser.RULE_modifierInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.identifier();
			this.state = 468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__24) {
				{
				this.state = 463;
				this.match(SolidityParser.T__24);
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__7) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SolidityParser.T__65 - 66)) | (1 << (SolidityParser.T__66 - 66)) | (1 << (SolidityParser.T__67 - 66)) | (1 << (SolidityParser.T__68 - 66)) | (1 << (SolidityParser.T__69 - 66)) | (1 << (SolidityParser.T__70 - 66)) | (1 << (SolidityParser.T__71 - 66)) | (1 << (SolidityParser.T__72 - 66)) | (1 << (SolidityParser.T__73 - 66)) | (1 << (SolidityParser.T__74 - 66)) | (1 << (SolidityParser.T__75 - 66)) | (1 << (SolidityParser.T__76 - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)))) !== 0)) {
					{
					this.state = 464;
					this.expressionList();
					}
				}

				this.state = 467;
				this.match(SolidityParser.T__25);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SolidityParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			this.functionDescriptor();
			this.state = 471;
			this.parameterList();
			this.state = 472;
			this.modifierList();
			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__40) {
				{
				this.state = 473;
				this.returnParameters();
				}
			}

			this.state = 478;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__1:
				{
				this.state = 476;
				this.match(SolidityParser.T__1);
				}
				break;
			case SolidityParser.T__16:
				{
				this.state = 477;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDescriptor(): FunctionDescriptorContext {
		let _localctx: FunctionDescriptorContext = new FunctionDescriptorContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SolidityParser.RULE_functionDescriptor);
		let _la: number;
		try {
			this.state = 489;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__39:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 480;
				this.match(SolidityParser.T__39);
				this.state = 482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
					{
					this.state = 481;
					this.identifier();
					}
				}

				}
				break;
			case SolidityParser.ConstructorKeyword:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 484;
				this.match(SolidityParser.ConstructorKeyword);
				}
				break;
			case SolidityParser.FallbackKeyword:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 485;
				this.match(SolidityParser.FallbackKeyword);
				}
				break;
			case SolidityParser.ReceiveKeyword:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 486;
				this.match(SolidityParser.ReceiveKeyword);
				}
				break;
			case SolidityParser.T__101:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 487;
				this.onBounceKeyword();
				}
				break;
			case SolidityParser.T__102:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 488;
				this.onTickTockKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnParameters(): ReturnParametersContext {
		let _localctx: ReturnParametersContext = new ReturnParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SolidityParser.RULE_returnParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 491;
			this.match(SolidityParser.T__40);
			this.state = 492;
			this.parameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifierList(): ModifierListContext {
		let _localctx: ModifierListContext = new ModifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SolidityParser.RULE_modifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.T__103 - 100)) | (1 << (SolidityParser.ConstantKeyword - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.ExternalKeyword - 100)) | (1 << (SolidityParser.InternalKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)) | (1 << (SolidityParser.PrivateKeyword - 100)) | (1 << (SolidityParser.PublicKeyword - 100)) | (1 << (SolidityParser.VirtualKeyword - 100)) | (1 << (SolidityParser.PureKeyword - 100)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SolidityParser.ViewKeyword - 133)) | (1 << (SolidityParser.InlineKeyword - 133)) | (1 << (SolidityParser.ResponsibleKeyword - 133)) | (1 << (SolidityParser.ConstructorKeyword - 133)) | (1 << (SolidityParser.ReceiveKeyword - 133)) | (1 << (SolidityParser.Identifier - 133)))) !== 0)) {
				{
				this.state = 504;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 494;
					this.match(SolidityParser.ExternalKeyword);
					}
					break;

				case 2:
					{
					this.state = 495;
					this.match(SolidityParser.PublicKeyword);
					}
					break;

				case 3:
					{
					this.state = 496;
					this.match(SolidityParser.InternalKeyword);
					}
					break;

				case 4:
					{
					this.state = 497;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;

				case 5:
					{
					this.state = 498;
					this.match(SolidityParser.InlineKeyword);
					}
					break;

				case 6:
					{
					this.state = 499;
					this.match(SolidityParser.ResponsibleKeyword);
					}
					break;

				case 7:
					{
					this.state = 500;
					this.match(SolidityParser.VirtualKeyword);
					}
					break;

				case 8:
					{
					this.state = 501;
					this.stateMutability();
					}
					break;

				case 9:
					{
					this.state = 502;
					this.modifierInvocation();
					}
					break;

				case 10:
					{
					this.state = 503;
					this.overrideSpecifier();
					}
					break;
				}
				}
				this.state = 508;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDefinition(): EventDefinitionContext {
		let _localctx: EventDefinitionContext = new EventDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SolidityParser.RULE_eventDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			this.match(SolidityParser.T__41);
			this.state = 510;
			this.identifier();
			this.state = 511;
			this.eventParameterList();
			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.AnonymousKeyword) {
				{
				this.state = 512;
				this.match(SolidityParser.AnonymousKeyword);
				}
			}

			this.state = 515;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumValue(): EnumValueContext {
		let _localctx: EnumValueContext = new EnumValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SolidityParser.RULE_enumValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDefinition(): EnumDefinitionContext {
		let _localctx: EnumDefinitionContext = new EnumDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SolidityParser.RULE_enumDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 519;
			this.match(SolidityParser.T__42);
			this.state = 520;
			this.identifier();
			this.state = 521;
			this.match(SolidityParser.T__16);
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
				{
				this.state = 522;
				this.enumValue();
				}
			}

			this.state = 529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__17) {
				{
				{
				this.state = 525;
				this.match(SolidityParser.T__17);
				this.state = 526;
				this.enumValue();
				}
				}
				this.state = 531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 532;
			this.match(SolidityParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SolidityParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.match(SolidityParser.T__24);
			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (SolidityParser.T__15 - 16)) | (1 << (SolidityParser.T__26 - 16)) | (1 << (SolidityParser.T__39 - 16)) | (1 << (SolidityParser.T__45 - 16)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (SolidityParser.T__47 - 48)) | (1 << (SolidityParser.T__51 - 48)) | (1 << (SolidityParser.T__65 - 48)) | (1 << (SolidityParser.T__66 - 48)) | (1 << (SolidityParser.T__67 - 48)) | (1 << (SolidityParser.T__68 - 48)) | (1 << (SolidityParser.T__69 - 48)) | (1 << (SolidityParser.T__70 - 48)) | (1 << (SolidityParser.T__71 - 48)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
				{
				this.state = 535;
				this.parameter();
				this.state = 540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__17) {
					{
					{
					this.state = 536;
					this.match(SolidityParser.T__17);
					this.state = 537;
					this.parameter();
					}
					}
					this.state = 542;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 545;
			this.match(SolidityParser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SolidityParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this.typeName(0);
			this.state = 549;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 548;
				this.storageLocation();
				}
				break;
			}
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
				{
				this.state = 551;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventParameterList(): EventParameterListContext {
		let _localctx: EventParameterListContext = new EventParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SolidityParser.RULE_eventParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.match(SolidityParser.T__24);
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (SolidityParser.T__15 - 16)) | (1 << (SolidityParser.T__26 - 16)) | (1 << (SolidityParser.T__39 - 16)) | (1 << (SolidityParser.T__45 - 16)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (SolidityParser.T__47 - 48)) | (1 << (SolidityParser.T__51 - 48)) | (1 << (SolidityParser.T__65 - 48)) | (1 << (SolidityParser.T__66 - 48)) | (1 << (SolidityParser.T__67 - 48)) | (1 << (SolidityParser.T__68 - 48)) | (1 << (SolidityParser.T__69 - 48)) | (1 << (SolidityParser.T__70 - 48)) | (1 << (SolidityParser.T__71 - 48)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
				{
				this.state = 555;
				this.eventParameter();
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__17) {
					{
					{
					this.state = 556;
					this.match(SolidityParser.T__17);
					this.state = 557;
					this.eventParameter();
					}
					}
					this.state = 562;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 565;
			this.match(SolidityParser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventParameter(): EventParameterContext {
		let _localctx: EventParameterContext = new EventParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SolidityParser.RULE_eventParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			this.typeName(0);
			this.state = 569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.IndexedKeyword) {
				{
				this.state = 568;
				this.match(SolidityParser.IndexedKeyword);
				}
			}

			this.state = 572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
				{
				this.state = 571;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeParameterList(): FunctionTypeParameterListContext {
		let _localctx: FunctionTypeParameterListContext = new FunctionTypeParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SolidityParser.RULE_functionTypeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.match(SolidityParser.T__24);
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (SolidityParser.T__15 - 16)) | (1 << (SolidityParser.T__26 - 16)) | (1 << (SolidityParser.T__39 - 16)) | (1 << (SolidityParser.T__45 - 16)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (SolidityParser.T__47 - 48)) | (1 << (SolidityParser.T__51 - 48)) | (1 << (SolidityParser.T__65 - 48)) | (1 << (SolidityParser.T__66 - 48)) | (1 << (SolidityParser.T__67 - 48)) | (1 << (SolidityParser.T__68 - 48)) | (1 << (SolidityParser.T__69 - 48)) | (1 << (SolidityParser.T__70 - 48)) | (1 << (SolidityParser.T__71 - 48)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
				{
				this.state = 575;
				this.functionTypeParameter();
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__17) {
					{
					{
					this.state = 576;
					this.match(SolidityParser.T__17);
					this.state = 577;
					this.functionTypeParameter();
					}
					}
					this.state = 582;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 585;
			this.match(SolidityParser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeParameter(): FunctionTypeParameterContext {
		let _localctx: FunctionTypeParameterContext = new FunctionTypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SolidityParser.RULE_functionTypeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this.typeName(0);
			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (SolidityParser.T__49 - 50)) | (1 << (SolidityParser.T__50 - 50)) | (1 << (SolidityParser.T__51 - 50)))) !== 0)) {
				{
				this.state = 588;
				this.storageLocation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SolidityParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.typeName(0);
			this.state = 593;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 592;
				this.storageLocation();
				}
				break;
			}
			this.state = 595;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public typeName(): TypeNameContext;
	public typeName(_p: number): TypeNameContext;
	// @RuleVersion(0)
	public typeName(_p?: number): TypeNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, _parentState);
		let _prevctx: TypeNameContext = _localctx;
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, SolidityParser.RULE_typeName, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 598;
				this.elementaryTypeName();
				}
				break;

			case 2:
				{
				this.state = 599;
				this.userDefinedTypeName();
				}
				break;

			case 3:
				{
				this.state = 600;
				this.mapping();
				}
				break;

			case 4:
				{
				this.state = 601;
				this.functionTypeName();
				}
				break;

			case 5:
				{
				this.state = 602;
				this.optionalTypeName();
				}
				break;

			case 6:
				{
				this.state = 603;
				this.vectorTypeName();
				}
				break;

			case 7:
				{
				this.state = 604;
				this.match(SolidityParser.T__45);
				this.state = 605;
				this.match(SolidityParser.PayableKeyword);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 616;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_typeName);
					this.state = 608;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 609;
					this.match(SolidityParser.T__43);
					this.state = 611;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__7) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SolidityParser.T__65 - 66)) | (1 << (SolidityParser.T__66 - 66)) | (1 << (SolidityParser.T__67 - 66)) | (1 << (SolidityParser.T__68 - 66)) | (1 << (SolidityParser.T__69 - 66)) | (1 << (SolidityParser.T__70 - 66)) | (1 << (SolidityParser.T__71 - 66)) | (1 << (SolidityParser.T__72 - 66)) | (1 << (SolidityParser.T__73 - 66)) | (1 << (SolidityParser.T__74 - 66)) | (1 << (SolidityParser.T__75 - 66)) | (1 << (SolidityParser.T__76 - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)))) !== 0)) {
						{
						this.state = 610;
						this.expression(0);
						}
					}

					this.state = 613;
					this.match(SolidityParser.T__44);
					}
					}
				}
				this.state = 618;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		let _localctx: UserDefinedTypeNameContext = new UserDefinedTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SolidityParser.RULE_userDefinedTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this.identifier();
			this.state = 624;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 620;
					this.match(SolidityParser.T__46);
					this.state = 621;
					this.identifier();
					}
					}
				}
				this.state = 626;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mappingKey(): MappingKeyContext {
		let _localctx: MappingKeyContext = new MappingKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SolidityParser.RULE_mappingKey);
		try {
			this.state = 629;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__45:
			case SolidityParser.T__66:
			case SolidityParser.T__67:
			case SolidityParser.T__68:
			case SolidityParser.T__69:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.TvmCell:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 627;
				this.elementaryTypeName();
				}
				break;
			case SolidityParser.T__15:
			case SolidityParser.T__26:
			case SolidityParser.T__51:
			case SolidityParser.T__65:
			case SolidityParser.T__99:
			case SolidityParser.T__100:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 628;
				this.userDefinedTypeName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapping(): MappingContext {
		let _localctx: MappingContext = new MappingContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SolidityParser.RULE_mapping);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.match(SolidityParser.T__47);
			this.state = 632;
			this.match(SolidityParser.T__24);
			this.state = 633;
			this.mappingKey();
			this.state = 634;
			this.match(SolidityParser.T__48);
			this.state = 635;
			this.typeName(0);
			this.state = 636;
			this.match(SolidityParser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeName(): FunctionTypeNameContext {
		let _localctx: FunctionTypeNameContext = new FunctionTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SolidityParser.RULE_functionTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this.match(SolidityParser.T__39);
			this.state = 639;
			this.functionTypeParameterList();
			this.state = 645;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 643;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SolidityParser.InternalKeyword:
						{
						this.state = 640;
						this.match(SolidityParser.InternalKeyword);
						}
						break;
					case SolidityParser.ExternalKeyword:
						{
						this.state = 641;
						this.match(SolidityParser.ExternalKeyword);
						}
						break;
					case SolidityParser.ConstantKeyword:
					case SolidityParser.PayableKeyword:
					case SolidityParser.PureKeyword:
					case SolidityParser.ViewKeyword:
						{
						this.state = 642;
						this.stateMutability();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 647;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			}
			this.state = 650;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 648;
				this.match(SolidityParser.T__40);
				this.state = 649;
				this.functionTypeParameterList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storageLocation(): StorageLocationContext {
		let _localctx: StorageLocationContext = new StorageLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SolidityParser.RULE_storageLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			_la = this._input.LA(1);
			if (!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (SolidityParser.T__49 - 50)) | (1 << (SolidityParser.T__50 - 50)) | (1 << (SolidityParser.T__51 - 50)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateMutability(): StateMutabilityContext {
		let _localctx: StateMutabilityContext = new StateMutabilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SolidityParser.RULE_stateMutability);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			_la = this._input.LA(1);
			if (!(((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (SolidityParser.ConstantKeyword - 119)) | (1 << (SolidityParser.PayableKeyword - 119)) | (1 << (SolidityParser.PureKeyword - 119)) | (1 << (SolidityParser.ViewKeyword - 119)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SolidityParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.match(SolidityParser.T__16);
			this.state = 660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__7) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26) | (1 << SolidityParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__54 - 32)) | (1 << (SolidityParser.T__56 - 32)) | (1 << (SolidityParser.T__57 - 32)) | (1 << (SolidityParser.T__58 - 32)) | (1 << (SolidityParser.T__60 - 32)) | (1 << (SolidityParser.T__61 - 32)) | (1 << (SolidityParser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SolidityParser.T__63 - 64)) | (1 << (SolidityParser.T__64 - 64)) | (1 << (SolidityParser.T__65 - 64)) | (1 << (SolidityParser.T__66 - 64)) | (1 << (SolidityParser.T__67 - 64)) | (1 << (SolidityParser.T__68 - 64)) | (1 << (SolidityParser.T__69 - 64)) | (1 << (SolidityParser.T__70 - 64)) | (1 << (SolidityParser.T__71 - 64)) | (1 << (SolidityParser.T__72 - 64)) | (1 << (SolidityParser.T__73 - 64)) | (1 << (SolidityParser.T__74 - 64)) | (1 << (SolidityParser.T__75 - 64)) | (1 << (SolidityParser.T__76 - 64)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.BreakKeyword - 100)) | (1 << (SolidityParser.ContinueKeyword - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)))) !== 0)) {
				{
				{
				this.state = 657;
				this.statement();
				}
				}
				this.state = 662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 663;
			this.match(SolidityParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SolidityParser.RULE_statement);
		try {
			this.state = 682;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 665;
				this.ifStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 666;
				this.tryStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 667;
				this.whileStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 668;
				this.repeatStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 669;
				this.forStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 670;
				this.forRangeStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 671;
				this.block();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 672;
				this.inlineAssemblyStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 673;
				this.doWhileStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 674;
				this.continueStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 675;
				this.breakStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 676;
				this.returnStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 677;
				this.throwStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 678;
				this.emitStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 679;
				this.simpleStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 680;
				this.uncheckedStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 681;
				this.revertStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SolidityParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.expression(0);
			this.state = 685;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SolidityParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 687;
			this.match(SolidityParser.T__52);
			this.state = 688;
			this.match(SolidityParser.T__24);
			this.state = 689;
			this.expression(0);
			this.state = 690;
			this.match(SolidityParser.T__25);
			this.state = 691;
			this.statement();
			this.state = 694;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 692;
				this.match(SolidityParser.T__53);
				this.state = 693;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SolidityParser.RULE_tryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this.match(SolidityParser.T__54);
			this.state = 697;
			this.block();
			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 698;
				this.catchClause();
				}
				}
				this.state = 701;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SolidityParser.T__55);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SolidityParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 703;
			this.match(SolidityParser.T__55);
			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__15) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
				{
				this.state = 705;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
					{
					this.state = 704;
					this.identifier();
					}
				}

				this.state = 707;
				this.parameterList();
				}
			}

			this.state = 710;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SolidityParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.match(SolidityParser.T__56);
			this.state = 713;
			this.match(SolidityParser.T__24);
			this.state = 714;
			this.expression(0);
			this.state = 715;
			this.match(SolidityParser.T__25);
			this.state = 716;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeatStatement(): RepeatStatementContext {
		let _localctx: RepeatStatementContext = new RepeatStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SolidityParser.RULE_repeatStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.match(SolidityParser.T__57);
			this.state = 719;
			this.match(SolidityParser.T__24);
			this.state = 720;
			this.expression(0);
			this.state = 721;
			this.match(SolidityParser.T__25);
			this.state = 722;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleStatement(): SimpleStatementContext {
		let _localctx: SimpleStatementContext = new SimpleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SolidityParser.RULE_simpleStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 724;
				this.variableDeclarationStatement();
				}
				break;

			case 2:
				{
				this.state = 725;
				this.expressionStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uncheckedStatement(): UncheckedStatementContext {
		let _localctx: UncheckedStatementContext = new UncheckedStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SolidityParser.RULE_uncheckedStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.match(SolidityParser.T__58);
			this.state = 729;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SolidityParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this.match(SolidityParser.T__28);
			this.state = 732;
			this.match(SolidityParser.T__24);
			this.state = 735;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__7:
			case SolidityParser.T__15:
			case SolidityParser.T__16:
			case SolidityParser.T__24:
			case SolidityParser.T__26:
			case SolidityParser.T__31:
			case SolidityParser.T__32:
			case SolidityParser.T__39:
			case SolidityParser.T__43:
			case SolidityParser.T__45:
			case SolidityParser.T__47:
			case SolidityParser.T__51:
			case SolidityParser.T__65:
			case SolidityParser.T__66:
			case SolidityParser.T__67:
			case SolidityParser.T__68:
			case SolidityParser.T__69:
			case SolidityParser.T__70:
			case SolidityParser.T__71:
			case SolidityParser.T__72:
			case SolidityParser.T__73:
			case SolidityParser.T__74:
			case SolidityParser.T__75:
			case SolidityParser.T__76:
			case SolidityParser.T__99:
			case SolidityParser.T__100:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.TvmCell:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.TypeKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
				{
				this.state = 733;
				this.simpleStatement();
				}
				break;
			case SolidityParser.T__1:
				{
				this.state = 734;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 739;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__7:
			case SolidityParser.T__15:
			case SolidityParser.T__16:
			case SolidityParser.T__24:
			case SolidityParser.T__26:
			case SolidityParser.T__31:
			case SolidityParser.T__32:
			case SolidityParser.T__39:
			case SolidityParser.T__43:
			case SolidityParser.T__45:
			case SolidityParser.T__47:
			case SolidityParser.T__51:
			case SolidityParser.T__65:
			case SolidityParser.T__66:
			case SolidityParser.T__67:
			case SolidityParser.T__68:
			case SolidityParser.T__69:
			case SolidityParser.T__70:
			case SolidityParser.T__71:
			case SolidityParser.T__72:
			case SolidityParser.T__73:
			case SolidityParser.T__74:
			case SolidityParser.T__75:
			case SolidityParser.T__76:
			case SolidityParser.T__99:
			case SolidityParser.T__100:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.TvmCell:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.TypeKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
				{
				this.state = 737;
				this.expressionStatement();
				}
				break;
			case SolidityParser.T__1:
				{
				this.state = 738;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__7) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SolidityParser.T__65 - 66)) | (1 << (SolidityParser.T__66 - 66)) | (1 << (SolidityParser.T__67 - 66)) | (1 << (SolidityParser.T__68 - 66)) | (1 << (SolidityParser.T__69 - 66)) | (1 << (SolidityParser.T__70 - 66)) | (1 << (SolidityParser.T__71 - 66)) | (1 << (SolidityParser.T__72 - 66)) | (1 << (SolidityParser.T__73 - 66)) | (1 << (SolidityParser.T__74 - 66)) | (1 << (SolidityParser.T__75 - 66)) | (1 << (SolidityParser.T__76 - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)))) !== 0)) {
				{
				this.state = 741;
				this.expression(0);
				}
			}

			this.state = 744;
			this.match(SolidityParser.T__25);
			this.state = 745;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forRangeStatement(): ForRangeStatementContext {
		let _localctx: ForRangeStatementContext = new ForRangeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SolidityParser.RULE_forRangeStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.match(SolidityParser.T__28);
			this.state = 748;
			this.match(SolidityParser.T__24);
			this.state = 754;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__15:
			case SolidityParser.T__26:
			case SolidityParser.T__39:
			case SolidityParser.T__45:
			case SolidityParser.T__47:
			case SolidityParser.T__51:
			case SolidityParser.T__65:
			case SolidityParser.T__66:
			case SolidityParser.T__67:
			case SolidityParser.T__68:
			case SolidityParser.T__69:
			case SolidityParser.T__70:
			case SolidityParser.T__71:
			case SolidityParser.T__99:
			case SolidityParser.T__100:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.TvmCell:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				{
				this.state = 749;
				this.variableDeclaration();
				}
				break;
			case SolidityParser.T__24:
				{
				this.state = 750;
				this.match(SolidityParser.T__24);
				this.state = 751;
				this.variableDeclarationList();
				this.state = 752;
				this.match(SolidityParser.T__25);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 756;
			this.match(SolidityParser.T__59);
			this.state = 759;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 757;
				this.identifier();
				}
				break;

			case 2:
				{
				this.state = 758;
				this.expression(0);
				}
				break;
			}
			this.state = 761;
			this.match(SolidityParser.T__25);
			this.state = 762;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineAssemblyStatement(): InlineAssemblyStatementContext {
		let _localctx: InlineAssemblyStatementContext = new InlineAssemblyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, SolidityParser.RULE_inlineAssemblyStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			this.match(SolidityParser.T__60);
			this.state = 766;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.StringLiteralFragment) {
				{
				this.state = 765;
				this.match(SolidityParser.StringLiteralFragment);
				}
			}

			this.state = 772;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__24) {
				{
				this.state = 768;
				this.match(SolidityParser.T__24);
				this.state = 769;
				this.inlineAssemblyStatementFlag();
				this.state = 770;
				this.match(SolidityParser.T__25);
				}
			}

			this.state = 774;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineAssemblyStatementFlag(): InlineAssemblyStatementFlagContext {
		let _localctx: InlineAssemblyStatementFlagContext = new InlineAssemblyStatementFlagContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SolidityParser.RULE_inlineAssemblyStatementFlag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			this.stringLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doWhileStatement(): DoWhileStatementContext {
		let _localctx: DoWhileStatementContext = new DoWhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SolidityParser.RULE_doWhileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this.match(SolidityParser.T__61);
			this.state = 779;
			this.statement();
			this.state = 780;
			this.match(SolidityParser.T__56);
			this.state = 781;
			this.match(SolidityParser.T__24);
			this.state = 782;
			this.expression(0);
			this.state = 783;
			this.match(SolidityParser.T__25);
			this.state = 784;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SolidityParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
			this.match(SolidityParser.ContinueKeyword);
			this.state = 787;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SolidityParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.match(SolidityParser.BreakKeyword);
			this.state = 790;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SolidityParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 792;
			this.match(SolidityParser.T__62);
			this.state = 794;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__7) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SolidityParser.T__65 - 66)) | (1 << (SolidityParser.T__66 - 66)) | (1 << (SolidityParser.T__67 - 66)) | (1 << (SolidityParser.T__68 - 66)) | (1 << (SolidityParser.T__69 - 66)) | (1 << (SolidityParser.T__70 - 66)) | (1 << (SolidityParser.T__71 - 66)) | (1 << (SolidityParser.T__72 - 66)) | (1 << (SolidityParser.T__73 - 66)) | (1 << (SolidityParser.T__74 - 66)) | (1 << (SolidityParser.T__75 - 66)) | (1 << (SolidityParser.T__76 - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)))) !== 0)) {
				{
				this.state = 793;
				this.expression(0);
				}
			}

			this.state = 796;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, SolidityParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 798;
			this.match(SolidityParser.T__63);
			this.state = 799;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emitStatement(): EmitStatementContext {
		let _localctx: EmitStatementContext = new EmitStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SolidityParser.RULE_emitStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 801;
			this.match(SolidityParser.T__64);
			this.state = 802;
			this.functionCall();
			this.state = 803;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public revertStatement(): RevertStatementContext {
		let _localctx: RevertStatementContext = new RevertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SolidityParser.RULE_revertStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this.match(SolidityParser.T__65);
			this.state = 806;
			this.functionCall();
			this.state = 807;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationStatement(): VariableDeclarationStatementContext {
		let _localctx: VariableDeclarationStatementContext = new VariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SolidityParser.RULE_variableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 809;
				this.match(SolidityParser.T__66);
				this.state = 810;
				this.identifierList();
				}
				break;

			case 2:
				{
				this.state = 811;
				this.variableDeclaration();
				}
				break;

			case 3:
				{
				this.state = 812;
				this.match(SolidityParser.T__24);
				this.state = 813;
				this.variableDeclarationList();
				this.state = 814;
				this.match(SolidityParser.T__25);
				}
				break;
			}
			this.state = 820;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12) {
				{
				this.state = 818;
				this.match(SolidityParser.T__12);
				this.state = 819;
				this.expression(0);
				}
			}

			this.state = 822;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, SolidityParser.RULE_variableDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (SolidityParser.T__15 - 16)) | (1 << (SolidityParser.T__26 - 16)) | (1 << (SolidityParser.T__39 - 16)) | (1 << (SolidityParser.T__45 - 16)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (SolidityParser.T__47 - 48)) | (1 << (SolidityParser.T__51 - 48)) | (1 << (SolidityParser.T__65 - 48)) | (1 << (SolidityParser.T__66 - 48)) | (1 << (SolidityParser.T__67 - 48)) | (1 << (SolidityParser.T__68 - 48)) | (1 << (SolidityParser.T__69 - 48)) | (1 << (SolidityParser.T__70 - 48)) | (1 << (SolidityParser.T__71 - 48)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
				{
				this.state = 824;
				this.variableDeclaration();
				}
			}

			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__17) {
				{
				{
				this.state = 827;
				this.match(SolidityParser.T__17);
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (SolidityParser.T__15 - 16)) | (1 << (SolidityParser.T__26 - 16)) | (1 << (SolidityParser.T__39 - 16)) | (1 << (SolidityParser.T__45 - 16)))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (SolidityParser.T__47 - 48)) | (1 << (SolidityParser.T__51 - 48)) | (1 << (SolidityParser.T__65 - 48)) | (1 << (SolidityParser.T__66 - 48)) | (1 << (SolidityParser.T__67 - 48)) | (1 << (SolidityParser.T__68 - 48)) | (1 << (SolidityParser.T__69 - 48)) | (1 << (SolidityParser.T__70 - 48)) | (1 << (SolidityParser.T__71 - 48)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
					{
					this.state = 828;
					this.variableDeclaration();
					}
				}

				}
				}
				this.state = 835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SolidityParser.RULE_identifierList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			this.match(SolidityParser.T__24);
			this.state = 843;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 838;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
						{
						this.state = 837;
						this.identifier();
						}
					}

					this.state = 840;
					this.match(SolidityParser.T__17);
					}
					}
				}
				this.state = 845;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			}
			this.state = 847;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
				{
				this.state = 846;
				this.identifier();
				}
			}

			this.state = 849;
			this.match(SolidityParser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementaryTypeName(): ElementaryTypeNameContext {
		let _localctx: ElementaryTypeNameContext = new ElementaryTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SolidityParser.RULE_elementaryTypeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 851;
			_la = this._input.LA(1);
			if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (SolidityParser.T__45 - 46)) | (1 << (SolidityParser.T__66 - 46)) | (1 << (SolidityParser.T__67 - 46)) | (1 << (SolidityParser.T__68 - 46)) | (1 << (SolidityParser.T__69 - 46)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (SolidityParser.Int - 105)) | (1 << (SolidityParser.Uint - 105)) | (1 << (SolidityParser.Byte - 105)) | (1 << (SolidityParser.Fixed - 105)) | (1 << (SolidityParser.Ufixed - 105)) | (1 << (SolidityParser.TvmCell - 105)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalTypeName(): OptionalTypeNameContext {
		let _localctx: OptionalTypeNameContext = new OptionalTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, SolidityParser.RULE_optionalTypeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 853;
			this.match(SolidityParser.T__70);
			this.state = 854;
			this.match(SolidityParser.T__24);
			this.state = 855;
			this.typeName(0);
			this.state = 860;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__17) {
				{
				{
				this.state = 856;
				this.match(SolidityParser.T__17);
				this.state = 857;
				this.typeName(0);
				}
				}
				this.state = 862;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 863;
			this.match(SolidityParser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public vectorTypeName(): VectorTypeNameContext {
		let _localctx: VectorTypeNameContext = new VectorTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, SolidityParser.RULE_vectorTypeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 865;
			this.match(SolidityParser.T__71);
			this.state = 866;
			this.match(SolidityParser.T__24);
			this.state = 867;
			this.typeName(0);
			this.state = 872;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__17) {
				{
				{
				this.state = 868;
				this.match(SolidityParser.T__17);
				this.state = 869;
				this.typeName(0);
				}
				}
				this.state = 874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 875;
			this.match(SolidityParser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 144;
		this.enterRecursionRule(_localctx, 144, SolidityParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 902;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 878;
				this.match(SolidityParser.T__74);
				this.state = 879;
				this.typeName(0);
				}
				break;

			case 2:
				{
				this.state = 880;
				this.match(SolidityParser.T__16);
				this.state = 882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
					{
					this.state = 881;
					this.nameValueList();
					}
				}

				this.state = 884;
				this.match(SolidityParser.T__18);
				this.state = 885;
				this.expression(23);
				}
				break;

			case 3:
				{
				this.state = 886;
				this.nameValueBlockStatement();
				}
				break;

			case 4:
				{
				this.state = 887;
				this.match(SolidityParser.T__24);
				this.state = 888;
				this.expression(0);
				this.state = 889;
				this.match(SolidityParser.T__25);
				}
				break;

			case 5:
				{
				this.state = 891;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__72 || _la === SolidityParser.T__73)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 892;
				this.expression(19);
				}
				break;

			case 6:
				{
				this.state = 893;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__31 || _la === SolidityParser.T__32)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 894;
				this.expression(18);
				}
				break;

			case 7:
				{
				this.state = 895;
				this.match(SolidityParser.T__75);
				this.state = 896;
				this.expression(17);
				}
				break;

			case 8:
				{
				this.state = 897;
				this.match(SolidityParser.T__76);
				this.state = 898;
				this.expression(16);
				}
				break;

			case 9:
				{
				this.state = 899;
				this.match(SolidityParser.T__7);
				this.state = 900;
				this.expression(15);
				}
				break;

			case 10:
				{
				this.state = 901;
				this.primaryExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 978;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 976;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 904;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 905;
						this.match(SolidityParser.T__77);
						this.state = 906;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 907;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 908;
						_la = this._input.LA(1);
						if (!(((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (SolidityParser.T__4 - 5)) | (1 << (SolidityParser.T__33 - 5)) | (1 << (SolidityParser.T__34 - 5)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 909;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 910;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 911;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__31 || _la === SolidityParser.T__32)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 912;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 913;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 914;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__78 || _la === SolidityParser.T__79)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 915;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 916;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 917;
						this.match(SolidityParser.T__30);
						this.state = 918;
						this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 919;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 920;
						this.match(SolidityParser.T__6);
						this.state = 921;
						this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 922;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 923;
						this.match(SolidityParser.T__29);
						this.state = 924;
						this.expression(9);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 925;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 926;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__11))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 927;
						this.expression(8);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 928;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 929;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__35 || _la === SolidityParser.T__36)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 930;
						this.expression(7);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 931;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 932;
						this.match(SolidityParser.T__80);
						this.state = 933;
						this.expression(6);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 934;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 935;
						this.match(SolidityParser.T__5);
						this.state = 936;
						this.expression(5);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 937;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 938;
						this.match(SolidityParser.T__81);
						this.state = 939;
						this.expression(0);
						this.state = 940;
						this.match(SolidityParser.T__59);
						this.state = 941;
						this.expression(4);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 943;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 944;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__12 || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (SolidityParser.T__82 - 83)) | (1 << (SolidityParser.T__83 - 83)) | (1 << (SolidityParser.T__84 - 83)) | (1 << (SolidityParser.T__85 - 83)) | (1 << (SolidityParser.T__86 - 83)) | (1 << (SolidityParser.T__87 - 83)) | (1 << (SolidityParser.T__88 - 83)) | (1 << (SolidityParser.T__89 - 83)) | (1 << (SolidityParser.T__90 - 83)) | (1 << (SolidityParser.T__91 - 83)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 945;
						this.expression(3);
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 946;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 947;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__72 || _la === SolidityParser.T__73)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 948;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 949;
						this.match(SolidityParser.T__43);
						this.state = 950;
						this.expression(0);
						this.state = 951;
						this.match(SolidityParser.T__44);
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 953;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 954;
						this.match(SolidityParser.T__43);
						this.state = 956;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__7) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SolidityParser.T__65 - 66)) | (1 << (SolidityParser.T__66 - 66)) | (1 << (SolidityParser.T__67 - 66)) | (1 << (SolidityParser.T__68 - 66)) | (1 << (SolidityParser.T__69 - 66)) | (1 << (SolidityParser.T__70 - 66)) | (1 << (SolidityParser.T__71 - 66)) | (1 << (SolidityParser.T__72 - 66)) | (1 << (SolidityParser.T__73 - 66)) | (1 << (SolidityParser.T__74 - 66)) | (1 << (SolidityParser.T__75 - 66)) | (1 << (SolidityParser.T__76 - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)))) !== 0)) {
							{
							this.state = 955;
							this.expression(0);
							}
						}

						this.state = 958;
						this.match(SolidityParser.T__59);
						this.state = 960;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__7) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SolidityParser.T__65 - 66)) | (1 << (SolidityParser.T__66 - 66)) | (1 << (SolidityParser.T__67 - 66)) | (1 << (SolidityParser.T__68 - 66)) | (1 << (SolidityParser.T__69 - 66)) | (1 << (SolidityParser.T__70 - 66)) | (1 << (SolidityParser.T__71 - 66)) | (1 << (SolidityParser.T__72 - 66)) | (1 << (SolidityParser.T__73 - 66)) | (1 << (SolidityParser.T__74 - 66)) | (1 << (SolidityParser.T__75 - 66)) | (1 << (SolidityParser.T__76 - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)))) !== 0)) {
							{
							this.state = 959;
							this.expression(0);
							}
						}

						this.state = 962;
						this.match(SolidityParser.T__44);
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 963;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 964;
						this.match(SolidityParser.T__46);
						this.state = 965;
						this.identifier();
						}
						break;

					case 18:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 966;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 967;
						this.match(SolidityParser.T__16);
						this.state = 968;
						this.nameValueList();
						this.state = 969;
						this.match(SolidityParser.T__18);
						}
						break;

					case 19:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 971;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 972;
						this.match(SolidityParser.T__24);
						this.state = 973;
						this.functionCallArguments();
						this.state = 974;
						this.match(SolidityParser.T__25);
						}
						break;
					}
					}
				}
				this.state = 980;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SolidityParser.RULE_primaryExpression);
		try {
			this.state = 999;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 981;
				this.match(SolidityParser.BooleanLiteral);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 982;
				this.numberLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 983;
				this.hexLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 984;
				this.stringLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 985;
				this.identifier();
				this.state = 988;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 986;
					this.match(SolidityParser.T__43);
					this.state = 987;
					this.match(SolidityParser.T__44);
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 990;
				this.match(SolidityParser.TypeKeyword);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 991;
				this.match(SolidityParser.PayableKeyword);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 992;
				this.tupleExpression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 993;
				this.typeNameExpression();
				this.state = 996;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 994;
					this.match(SolidityParser.T__43);
					this.state = 995;
					this.match(SolidityParser.T__44);
					}
					break;
				}
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 998;
				this.typeName(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameValueBlockStatement(): NameValueBlockStatementContext {
		let _localctx: NameValueBlockStatementContext = new NameValueBlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, SolidityParser.RULE_nameValueBlockStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1001;
			this.match(SolidityParser.T__16);
			this.state = 1008;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 1003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
					{
					this.state = 1002;
					this.nameValueList();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 1006;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__7) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SolidityParser.T__65 - 66)) | (1 << (SolidityParser.T__66 - 66)) | (1 << (SolidityParser.T__67 - 66)) | (1 << (SolidityParser.T__68 - 66)) | (1 << (SolidityParser.T__69 - 66)) | (1 << (SolidityParser.T__70 - 66)) | (1 << (SolidityParser.T__71 - 66)) | (1 << (SolidityParser.T__72 - 66)) | (1 << (SolidityParser.T__73 - 66)) | (1 << (SolidityParser.T__74 - 66)) | (1 << (SolidityParser.T__75 - 66)) | (1 << (SolidityParser.T__76 - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)))) !== 0)) {
					{
					this.state = 1005;
					this.expressionList();
					}
				}

				}
				break;
			}
			this.state = 1010;
			this.match(SolidityParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, SolidityParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1012;
			this.expression(0);
			this.state = 1017;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__17) {
				{
				{
				this.state = 1013;
				this.match(SolidityParser.T__17);
				this.state = 1014;
				this.expression(0);
				}
				}
				this.state = 1019;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameValueList(): NameValueListContext {
		let _localctx: NameValueListContext = new NameValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, SolidityParser.RULE_nameValueList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1020;
			this.nameValue();
			this.state = 1025;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1021;
					this.match(SolidityParser.T__17);
					this.state = 1022;
					this.nameValue();
					}
					}
				}
				this.state = 1027;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			}
			this.state = 1029;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__17) {
				{
				this.state = 1028;
				this.match(SolidityParser.T__17);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameValue(): NameValueContext {
		let _localctx: NameValueContext = new NameValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, SolidityParser.RULE_nameValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1031;
			this.identifier();
			this.state = 1032;
			this.match(SolidityParser.T__59);
			this.state = 1033;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCallArguments(): FunctionCallArgumentsContext {
		let _localctx: FunctionCallArgumentsContext = new FunctionCallArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SolidityParser.RULE_functionCallArguments);
		let _la: number;
		try {
			this.state = 1043;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1035;
				this.match(SolidityParser.T__16);
				this.state = 1037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
					{
					this.state = 1036;
					this.nameValueList();
					}
				}

				this.state = 1039;
				this.match(SolidityParser.T__18);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1041;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__7) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SolidityParser.T__65 - 66)) | (1 << (SolidityParser.T__66 - 66)) | (1 << (SolidityParser.T__67 - 66)) | (1 << (SolidityParser.T__68 - 66)) | (1 << (SolidityParser.T__69 - 66)) | (1 << (SolidityParser.T__70 - 66)) | (1 << (SolidityParser.T__71 - 66)) | (1 << (SolidityParser.T__72 - 66)) | (1 << (SolidityParser.T__73 - 66)) | (1 << (SolidityParser.T__74 - 66)) | (1 << (SolidityParser.T__75 - 66)) | (1 << (SolidityParser.T__76 - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)))) !== 0)) {
					{
					this.state = 1040;
					this.expressionList();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SolidityParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1045;
			this.expression(0);
			this.state = 1046;
			this.match(SolidityParser.T__24);
			this.state = 1047;
			this.functionCallArguments();
			this.state = 1048;
			this.match(SolidityParser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyBlock(): AssemblyBlockContext {
		let _localctx: AssemblyBlockContext = new AssemblyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, SolidityParser.RULE_assemblyBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1050;
			this.match(SolidityParser.T__16);
			this.state = 1054;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26) | (1 << SolidityParser.T__28))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SolidityParser.T__39 - 40)) | (1 << (SolidityParser.T__45 - 40)) | (1 << (SolidityParser.T__51 - 40)) | (1 << (SolidityParser.T__52 - 40)) | (1 << (SolidityParser.T__62 - 40)) | (1 << (SolidityParser.T__65 - 40)) | (1 << (SolidityParser.T__69 - 40)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.T__92 - 93)) | (1 << (SolidityParser.T__95 - 93)) | (1 << (SolidityParser.T__99 - 93)) | (1 << (SolidityParser.T__100 - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.BreakKeyword - 93)) | (1 << (SolidityParser.ContinueKeyword - 93)) | (1 << (SolidityParser.LeaveKeyword - 93)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (SolidityParser.PayableKeyword - 126)) | (1 << (SolidityParser.ConstructorKeyword - 126)) | (1 << (SolidityParser.ReceiveKeyword - 126)) | (1 << (SolidityParser.Identifier - 126)) | (1 << (SolidityParser.StringLiteralFragment - 126)))) !== 0)) {
				{
				{
				this.state = 1051;
				this.assemblyItem();
				}
				}
				this.state = 1056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1057;
			this.match(SolidityParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyItem(): AssemblyItemContext {
		let _localctx: AssemblyItemContext = new AssemblyItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, SolidityParser.RULE_assemblyItem);
		try {
			this.state = 1076;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1059;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1060;
				this.assemblyBlock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1061;
				this.assemblyExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1062;
				this.assemblyLocalDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1063;
				this.assemblyAssignment();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1064;
				this.assemblyStackAssignment();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1065;
				this.labelDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1066;
				this.assemblySwitch();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1067;
				this.assemblyFunctionDefinition();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1068;
				this.assemblyFor();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1069;
				this.assemblyIf();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1070;
				this.match(SolidityParser.BreakKeyword);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1071;
				this.match(SolidityParser.ContinueKeyword);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1072;
				this.match(SolidityParser.LeaveKeyword);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1073;
				this.numberLiteral();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1074;
				this.stringLiteral();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1075;
				this.hexLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyExpression(): AssemblyExpressionContext {
		let _localctx: AssemblyExpressionContext = new AssemblyExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SolidityParser.RULE_assemblyExpression);
		try {
			this.state = 1081;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1078;
				this.assemblyCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1079;
				this.assemblyLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1080;
				this.assemblyMember();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyMember(): AssemblyMemberContext {
		let _localctx: AssemblyMemberContext = new AssemblyMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, SolidityParser.RULE_assemblyMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1083;
			this.identifier();
			this.state = 1084;
			this.match(SolidityParser.T__46);
			this.state = 1085;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyCall(): AssemblyCallContext {
		let _localctx: AssemblyCallContext = new AssemblyCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, SolidityParser.RULE_assemblyCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1091;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__62:
				{
				this.state = 1087;
				this.match(SolidityParser.T__62);
				}
				break;
			case SolidityParser.T__45:
				{
				this.state = 1088;
				this.match(SolidityParser.T__45);
				}
				break;
			case SolidityParser.T__69:
				{
				this.state = 1089;
				this.match(SolidityParser.T__69);
				}
				break;
			case SolidityParser.T__15:
			case SolidityParser.T__26:
			case SolidityParser.T__51:
			case SolidityParser.T__65:
			case SolidityParser.T__99:
			case SolidityParser.T__100:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				{
				this.state = 1090;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1093;
				this.match(SolidityParser.T__24);
				this.state = 1095;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (SolidityParser.T__45 - 46)) | (1 << (SolidityParser.T__51 - 46)) | (1 << (SolidityParser.T__62 - 46)) | (1 << (SolidityParser.T__65 - 46)) | (1 << (SolidityParser.T__69 - 46)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)) | (1 << (SolidityParser.StringLiteralFragment - 137)))) !== 0)) {
					{
					this.state = 1094;
					this.assemblyExpression();
					}
				}

				this.state = 1101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__17) {
					{
					{
					this.state = 1097;
					this.match(SolidityParser.T__17);
					this.state = 1098;
					this.assemblyExpression();
					}
					}
					this.state = 1103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1104;
				this.match(SolidityParser.T__25);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyLocalDefinition(): AssemblyLocalDefinitionContext {
		let _localctx: AssemblyLocalDefinitionContext = new AssemblyLocalDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, SolidityParser.RULE_assemblyLocalDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1107;
			this.match(SolidityParser.T__92);
			this.state = 1108;
			this.assemblyIdentifierOrList();
			this.state = 1111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__93) {
				{
				this.state = 1109;
				this.match(SolidityParser.T__93);
				this.state = 1110;
				this.assemblyExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyAssignment(): AssemblyAssignmentContext {
		let _localctx: AssemblyAssignmentContext = new AssemblyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, SolidityParser.RULE_assemblyAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1113;
			this.assemblyIdentifierOrList();
			this.state = 1114;
			this.match(SolidityParser.T__93);
			this.state = 1115;
			this.assemblyExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		let _localctx: AssemblyIdentifierOrListContext = new AssemblyIdentifierOrListContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, SolidityParser.RULE_assemblyIdentifierOrList);
		try {
			this.state = 1124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1117;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1118;
				this.assemblyMember();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1119;
				this.assemblyIdentifierList();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1120;
				this.match(SolidityParser.T__24);
				this.state = 1121;
				this.assemblyIdentifierList();
				this.state = 1122;
				this.match(SolidityParser.T__25);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyIdentifierList(): AssemblyIdentifierListContext {
		let _localctx: AssemblyIdentifierListContext = new AssemblyIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, SolidityParser.RULE_assemblyIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1126;
			this.identifier();
			this.state = 1131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__17) {
				{
				{
				this.state = 1127;
				this.match(SolidityParser.T__17);
				this.state = 1128;
				this.identifier();
				}
				}
				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyStackAssignment(): AssemblyStackAssignmentContext {
		let _localctx: AssemblyStackAssignmentContext = new AssemblyStackAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, SolidityParser.RULE_assemblyStackAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1134;
			this.assemblyExpression();
			this.state = 1135;
			this.match(SolidityParser.T__94);
			this.state = 1136;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelDefinition(): LabelDefinitionContext {
		let _localctx: LabelDefinitionContext = new LabelDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, SolidityParser.RULE_labelDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1138;
			this.identifier();
			this.state = 1139;
			this.match(SolidityParser.T__59);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblySwitch(): AssemblySwitchContext {
		let _localctx: AssemblySwitchContext = new AssemblySwitchContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, SolidityParser.RULE_assemblySwitch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1141;
			this.match(SolidityParser.T__95);
			this.state = 1142;
			this.assemblyExpression();
			this.state = 1146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__96 || _la === SolidityParser.T__97) {
				{
				{
				this.state = 1143;
				this.assemblyCase();
				}
				}
				this.state = 1148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyCase(): AssemblyCaseContext {
		let _localctx: AssemblyCaseContext = new AssemblyCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, SolidityParser.RULE_assemblyCase);
		try {
			this.state = 1155;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__96:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1149;
				this.match(SolidityParser.T__96);
				this.state = 1150;
				this.assemblyLiteral();
				this.state = 1151;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__97:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1153;
				this.match(SolidityParser.T__97);
				this.state = 1154;
				this.assemblyBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext {
		let _localctx: AssemblyFunctionDefinitionContext = new AssemblyFunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, SolidityParser.RULE_assemblyFunctionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1157;
			this.match(SolidityParser.T__39);
			this.state = 1158;
			this.identifier();
			this.state = 1159;
			this.match(SolidityParser.T__24);
			this.state = 1161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0)) {
				{
				this.state = 1160;
				this.assemblyIdentifierList();
				}
			}

			this.state = 1163;
			this.match(SolidityParser.T__25);
			this.state = 1165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__98) {
				{
				this.state = 1164;
				this.assemblyFunctionReturns();
				}
			}

			this.state = 1167;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyFunctionReturns(): AssemblyFunctionReturnsContext {
		let _localctx: AssemblyFunctionReturnsContext = new AssemblyFunctionReturnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, SolidityParser.RULE_assemblyFunctionReturns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1169;
			this.match(SolidityParser.T__98);
			this.state = 1170;
			this.assemblyIdentifierList();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyFor(): AssemblyForContext {
		let _localctx: AssemblyForContext = new AssemblyForContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, SolidityParser.RULE_assemblyFor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1172;
			this.match(SolidityParser.T__28);
			this.state = 1175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__16:
				{
				this.state = 1173;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__15:
			case SolidityParser.T__26:
			case SolidityParser.T__45:
			case SolidityParser.T__51:
			case SolidityParser.T__62:
			case SolidityParser.T__65:
			case SolidityParser.T__69:
			case SolidityParser.T__99:
			case SolidityParser.T__100:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
				{
				this.state = 1174;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1177;
			this.assemblyExpression();
			this.state = 1180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__16:
				{
				this.state = 1178;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__15:
			case SolidityParser.T__26:
			case SolidityParser.T__45:
			case SolidityParser.T__51:
			case SolidityParser.T__62:
			case SolidityParser.T__65:
			case SolidityParser.T__69:
			case SolidityParser.T__99:
			case SolidityParser.T__100:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
				{
				this.state = 1179;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1182;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyIf(): AssemblyIfContext {
		let _localctx: AssemblyIfContext = new AssemblyIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, SolidityParser.RULE_assemblyIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1184;
			this.match(SolidityParser.T__52);
			this.state = 1185;
			this.assemblyExpression();
			this.state = 1186;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyLiteral(): AssemblyLiteralContext {
		let _localctx: AssemblyLiteralContext = new AssemblyLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, SolidityParser.RULE_assemblyLiteral);
		try {
			this.state = 1193;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.StringLiteralFragment:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1188;
				this.stringLiteral();
				}
				break;
			case SolidityParser.DecimalNumber:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1189;
				this.match(SolidityParser.DecimalNumber);
				}
				break;
			case SolidityParser.HexNumber:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1190;
				this.match(SolidityParser.HexNumber);
				}
				break;
			case SolidityParser.HexLiteralFragment:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1191;
				this.hexLiteral();
				}
				break;
			case SolidityParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1192;
				this.match(SolidityParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleExpression(): TupleExpressionContext {
		let _localctx: TupleExpressionContext = new TupleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, SolidityParser.RULE_tupleExpression);
		let _la: number;
		try {
			this.state = 1221;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__24:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1195;
				this.match(SolidityParser.T__24);
				{
				this.state = 1197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__7) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SolidityParser.T__65 - 66)) | (1 << (SolidityParser.T__66 - 66)) | (1 << (SolidityParser.T__67 - 66)) | (1 << (SolidityParser.T__68 - 66)) | (1 << (SolidityParser.T__69 - 66)) | (1 << (SolidityParser.T__70 - 66)) | (1 << (SolidityParser.T__71 - 66)) | (1 << (SolidityParser.T__72 - 66)) | (1 << (SolidityParser.T__73 - 66)) | (1 << (SolidityParser.T__74 - 66)) | (1 << (SolidityParser.T__75 - 66)) | (1 << (SolidityParser.T__76 - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)))) !== 0)) {
					{
					this.state = 1196;
					this.expression(0);
					}
				}

				this.state = 1205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__17) {
					{
					{
					this.state = 1199;
					this.match(SolidityParser.T__17);
					this.state = 1201;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__7) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SolidityParser.T__65 - 66)) | (1 << (SolidityParser.T__66 - 66)) | (1 << (SolidityParser.T__67 - 66)) | (1 << (SolidityParser.T__68 - 66)) | (1 << (SolidityParser.T__69 - 66)) | (1 << (SolidityParser.T__70 - 66)) | (1 << (SolidityParser.T__71 - 66)) | (1 << (SolidityParser.T__72 - 66)) | (1 << (SolidityParser.T__73 - 66)) | (1 << (SolidityParser.T__74 - 66)) | (1 << (SolidityParser.T__75 - 66)) | (1 << (SolidityParser.T__76 - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)))) !== 0)) {
						{
						this.state = 1200;
						this.expression(0);
						}
					}

					}
					}
					this.state = 1207;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 1208;
				this.match(SolidityParser.T__25);
				}
				break;
			case SolidityParser.T__43:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1209;
				this.match(SolidityParser.T__43);
				this.state = 1218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__7) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__16) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__32 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__43 - 32)) | (1 << (SolidityParser.T__45 - 32)) | (1 << (SolidityParser.T__47 - 32)) | (1 << (SolidityParser.T__51 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SolidityParser.T__65 - 66)) | (1 << (SolidityParser.T__66 - 66)) | (1 << (SolidityParser.T__67 - 66)) | (1 << (SolidityParser.T__68 - 66)) | (1 << (SolidityParser.T__69 - 66)) | (1 << (SolidityParser.T__70 - 66)) | (1 << (SolidityParser.T__71 - 66)) | (1 << (SolidityParser.T__72 - 66)) | (1 << (SolidityParser.T__73 - 66)) | (1 << (SolidityParser.T__74 - 66)) | (1 << (SolidityParser.T__75 - 66)) | (1 << (SolidityParser.T__76 - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.Int - 100)) | (1 << (SolidityParser.Uint - 100)) | (1 << (SolidityParser.Byte - 100)) | (1 << (SolidityParser.Fixed - 100)) | (1 << (SolidityParser.Ufixed - 100)) | (1 << (SolidityParser.TvmCell - 100)) | (1 << (SolidityParser.BooleanLiteral - 100)) | (1 << (SolidityParser.DecimalNumber - 100)) | (1 << (SolidityParser.HexNumber - 100)) | (1 << (SolidityParser.HexLiteralFragment - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (SolidityParser.TypeKeyword - 132)) | (1 << (SolidityParser.ConstructorKeyword - 132)) | (1 << (SolidityParser.ReceiveKeyword - 132)) | (1 << (SolidityParser.Identifier - 132)) | (1 << (SolidityParser.StringLiteralFragment - 132)))) !== 0)) {
					{
					this.state = 1210;
					this.expression(0);
					this.state = 1215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SolidityParser.T__17) {
						{
						{
						this.state = 1211;
						this.match(SolidityParser.T__17);
						this.state = 1212;
						this.expression(0);
						}
						}
						this.state = 1217;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1220;
				this.match(SolidityParser.T__44);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNameExpression(): TypeNameExpressionContext {
		let _localctx: TypeNameExpressionContext = new TypeNameExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, SolidityParser.RULE_typeNameExpression);
		try {
			this.state = 1225;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__45:
			case SolidityParser.T__66:
			case SolidityParser.T__67:
			case SolidityParser.T__68:
			case SolidityParser.T__69:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.TvmCell:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1223;
				this.elementaryTypeName();
				}
				break;
			case SolidityParser.T__15:
			case SolidityParser.T__26:
			case SolidityParser.T__51:
			case SolidityParser.T__65:
			case SolidityParser.T__99:
			case SolidityParser.T__100:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1224;
				this.userDefinedTypeName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberLiteral(): NumberLiteralContext {
		let _localctx: NumberLiteralContext = new NumberLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, SolidityParser.RULE_numberLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1227;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.DecimalNumber || _la === SolidityParser.HexNumber)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1229;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1228;
				this.match(SolidityParser.NumberUnit);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, SolidityParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1231;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.T__15 || _la === SolidityParser.T__26 || _la === SolidityParser.T__51 || _la === SolidityParser.T__65 || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.T__99 - 100)) | (1 << (SolidityParser.T__100 - 100)) | (1 << (SolidityParser.LeaveKeyword - 100)) | (1 << (SolidityParser.PayableKeyword - 100)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SolidityParser.ConstructorKeyword - 137)) | (1 << (SolidityParser.ReceiveKeyword - 137)) | (1 << (SolidityParser.Identifier - 137)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hexLiteral(): HexLiteralContext {
		let _localctx: HexLiteralContext = new HexLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, SolidityParser.RULE_hexLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1234;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1233;
					this.match(SolidityParser.HexLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1236;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onBounceKeyword(): OnBounceKeywordContext {
		let _localctx: OnBounceKeywordContext = new OnBounceKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, SolidityParser.RULE_onBounceKeyword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1238;
			this.match(SolidityParser.T__101);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onTickTockKeyword(): OnTickTockKeywordContext {
		let _localctx: OnTickTockKeywordContext = new OnTickTockKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, SolidityParser.RULE_onTickTockKeyword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1240;
			this.match(SolidityParser.T__102);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overrideSpecifier(): OverrideSpecifierContext {
		let _localctx: OverrideSpecifierContext = new OverrideSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, SolidityParser.RULE_overrideSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1242;
			this.match(SolidityParser.T__103);
			this.state = 1254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__24) {
				{
				this.state = 1243;
				this.match(SolidityParser.T__24);
				this.state = 1244;
				this.userDefinedTypeName();
				this.state = 1249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__17) {
					{
					{
					this.state = 1245;
					this.match(SolidityParser.T__17);
					this.state = 1246;
					this.userDefinedTypeName();
					}
					}
					this.state = 1251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1252;
				this.match(SolidityParser.T__25);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, SolidityParser.RULE_stringLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1257;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1256;
					this.match(SolidityParser.StringLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1259;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 38:
			return this.typeName_sempred(_localctx as TypeNameContext, predIndex);

		case 72:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private typeName_sempred(_localctx: TypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 14);

		case 2:
			return this.precpred(this._ctx, 13);

		case 3:
			return this.precpred(this._ctx, 12);

		case 4:
			return this.precpred(this._ctx, 11);

		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 7);

		case 9:
			return this.precpred(this._ctx, 6);

		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 29);

		case 15:
			return this.precpred(this._ctx, 27);

		case 16:
			return this.precpred(this._ctx, 26);

		case 17:
			return this.precpred(this._ctx, 25);

		case 18:
			return this.precpred(this._ctx, 24);

		case 19:
			return this.precpred(this._ctx, 21);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x93\u04F0\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02\xE3\n\x02\f\x02\x0E\x02\xE6" +
		"\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03\xED\n\x03\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x05\x04\xF3\n\x04\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\xF8\n\x05\x03\x06\x03\x06\x05\x06\xFC\n\x06\x03\x06\x07\x06\xFF\n" +
		"\x06\f\x06\x0E\x06\u0102\v\x06\x03\x07\x03\x07\x03\b\x05\b\u0107\n\b\x03" +
		"\b\x03\b\x05\b\u010B\n\b\x03\b\x05\b\u010E\n\b\x03\t\x03\t\x03\t\x05\t" +
		"\u0113\n\t\x03\n\x03\n\x03\n\x03\n\x05\n\u0119\n\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n\u0120\n\n\x03\n\x03\n\x05\n\u0124\n\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u012F\n\n\f\n\x0E\n\u0132\v" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0139\n\n\x03\v\x03\v\x03\f\x05" +
		"\f\u013E\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u0146\n\f\f\f\x0E" +
		"\f\u0149\v\f\x05\f\u014B\n\f\x03\f\x03\f\x07\f\u014F\n\f\f\f\x0E\f\u0152" +
		"\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r\u0159\n\r\x03\r\x05\r\u015C\n" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\u0167\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x07\x0F\u0171\n\x0F\f\x0F\x0E\x0F\u0174\v\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\u0179\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x05\x13\u0194\n\x13\x03\x13\x05\x13\u0197\n\x13\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u01A0\n\x14" +
		"\f\x14\x0E\x14\u01A3\v\x14\x03\x14\x03\x14\x05\x14\u01A7\n\x14\x03\x15" +
		"\x03\x15\x03\x15\x05\x15\u01AC\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u01B8\n\x17\f\x17" +
		"\x0E\x17\u01BB\v\x17\x05\x17\u01BD\n\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x05\x18\u01C4\n\x18\x03\x18\x03\x18\x07\x18\u01C8\n\x18\f\x18" +
		"\x0E\x18\u01CB\v\x18\x03\x18\x03\x18\x05\x18\u01CF\n\x18\x03\x19\x03\x19" +
		"\x03\x19\x05\x19\u01D4\n\x19\x03\x19\x05\x19\u01D7\n\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u01DD\n\x1A\x03\x1A\x03\x1A\x05\x1A\u01E1\n\x1A" +
		"\x03\x1B\x03\x1B\x05\x1B\u01E5\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x05\x1B\u01EC\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01FB" +
		"\n\x1D\f\x1D\x0E\x1D\u01FE\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E" +
		"\u0204\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x05 " +
		"\u020E\n \x03 \x03 \x07 \u0212\n \f \x0E \u0215\v \x03 \x03 \x03!\x03" +
		"!\x03!\x03!\x07!\u021D\n!\f!\x0E!\u0220\v!\x05!\u0222\n!\x03!\x03!\x03" +
		"\"\x03\"\x05\"\u0228\n\"\x03\"\x05\"\u022B\n\"\x03#\x03#\x03#\x03#\x07" +
		"#\u0231\n#\f#\x0E#\u0234\v#\x05#\u0236\n#\x03#\x03#\x03$\x03$\x05$\u023C" +
		"\n$\x03$\x05$\u023F\n$\x03%\x03%\x03%\x03%\x07%\u0245\n%\f%\x0E%\u0248" +
		"\v%\x05%\u024A\n%\x03%\x03%\x03&\x03&\x05&\u0250\n&\x03\'\x03\'\x05\'" +
		"\u0254\n\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05" +
		"(\u0261\n(\x03(\x03(\x03(\x05(\u0266\n(\x03(\x07(\u0269\n(\f(\x0E(\u026C" +
		"\v(\x03)\x03)\x03)\x07)\u0271\n)\f)\x0E)\u0274\v)\x03*\x03*\x05*\u0278" +
		"\n*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x07,\u0286" +
		"\n,\f,\x0E,\u0289\v,\x03,\x03,\x05,\u028D\n,\x03-\x03-\x03.\x03.\x03/" +
		"\x03/\x07/\u0295\n/\f/\x0E/\u0298\v/\x03/\x03/\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u02AD" +
		"\n0\x031\x031\x031\x032\x032\x032\x032\x032\x032\x032\x052\u02B9\n2\x03" +
		"3\x033\x033\x063\u02BE\n3\r3\x0E3\u02BF\x034\x034\x054\u02C4\n4\x034\x05" +
		"4\u02C7\n4\x034\x034\x035\x035\x035\x035\x035\x035\x036\x036\x036\x03" +
		"6\x036\x036\x037\x037\x057\u02D9\n7\x038\x038\x038\x039\x039\x039\x03" +
		"9\x059\u02E2\n9\x039\x039\x059\u02E6\n9\x039\x059\u02E9\n9\x039\x039\x03" +
		"9\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u02F5\n:\x03:\x03:\x03:\x05" +
		":\u02FA\n:\x03:\x03:\x03:\x03;\x03;\x05;\u0301\n;\x03;\x03;\x03;\x03;" +
		"\x05;\u0307\n;\x03;\x03;\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03=" +
		"\x03=\x03>\x03>\x03>\x03?\x03?\x03?\x03@\x03@\x05@\u031D\n@\x03@\x03@" +
		"\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x05D\u0333\nD\x03D\x03D\x05D\u0337\nD\x03D\x03D" +
		"\x03E\x05E\u033C\nE\x03E\x03E\x05E\u0340\nE\x07E\u0342\nE\fE\x0EE\u0345" +
		"\vE\x03F\x03F\x05F\u0349\nF\x03F\x07F\u034C\nF\fF\x0EF\u034F\vF\x03F\x05" +
		"F\u0352\nF\x03F\x03F\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x07H\u035D\nH" +
		"\fH\x0EH\u0360\vH\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x07I\u0369\nI\fI" +
		"\x0EI\u036C\vI\x03I\x03I\x03J\x03J\x03J\x03J\x03J\x05J\u0375\nJ\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x05J\u0389\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x05J\u03BF\nJ\x03J\x03J\x05J\u03C3\nJ\x03J\x03J\x03J\x03J\x03J" +
		"\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x07J\u03D3\nJ\fJ\x0EJ\u03D6" +
		"\vJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u03DF\nK\x03K\x03K\x03K\x03" +
		"K\x03K\x03K\x05K\u03E7\nK\x03K\x05K\u03EA\nK\x03L\x03L\x05L\u03EE\nL\x03" +
		"L\x05L\u03F1\nL\x05L\u03F3\nL\x03L\x03L\x03M\x03M\x03M\x07M\u03FA\nM\f" +
		"M\x0EM\u03FD\vM\x03N\x03N\x03N\x07N\u0402\nN\fN\x0EN\u0405\vN\x03N\x05" +
		"N\u0408\nN\x03O\x03O\x03O\x03O\x03P\x03P\x05P\u0410\nP\x03P\x03P\x05P" +
		"\u0414\nP\x05P\u0416\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x07R\u041F" +
		"\nR\fR\x0ER\u0422\vR\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03" +
		"S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u0437\nS\x03T\x03" +
		"T\x03T\x05T\u043C\nT\x03U\x03U\x03U\x03U\x03V\x03V\x03V\x03V\x05V\u0446" +
		"\nV\x03V\x03V\x05V\u044A\nV\x03V\x03V\x07V\u044E\nV\fV\x0EV\u0451\vV\x03" +
		"V\x05V\u0454\nV\x03W\x03W\x03W\x03W\x05W\u045A\nW\x03X\x03X\x03X\x03X" +
		"\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u0467\nY\x03Z\x03Z\x03Z\x07Z" +
		"\u046C\nZ\fZ\x0EZ\u046F\vZ\x03[\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03]" +
		"\x03]\x03]\x07]\u047B\n]\f]\x0E]\u047E\v]\x03^\x03^\x03^\x03^\x03^\x03" +
		"^\x05^\u0486\n^\x03_\x03_\x03_\x03_\x05_\u048C\n_\x03_\x03_\x05_\u0490" +
		"\n_\x03_\x03_\x03`\x03`\x03`\x03a\x03a\x03a\x05a\u049A\na\x03a\x03a\x03" +
		"a\x05a\u049F\na\x03a\x03a\x03b\x03b\x03b\x03b\x03c\x03c\x03c\x03c\x03" +
		"c\x05c\u04AC\nc\x03d\x03d\x05d\u04B0\nd\x03d\x03d\x05d\u04B4\nd\x07d\u04B6" +
		"\nd\fd\x0Ed\u04B9\vd\x03d\x03d\x03d\x03d\x03d\x07d\u04C0\nd\fd\x0Ed\u04C3" +
		"\vd\x05d\u04C5\nd\x03d\x05d\u04C8\nd\x03e\x03e\x05e\u04CC\ne\x03f\x03" +
		"f\x05f\u04D0\nf\x03g\x03g\x03h\x06h\u04D5\nh\rh\x0Eh\u04D6\x03i\x03i\x03" +
		"j\x03j\x03k\x03k\x03k\x03k\x03k\x07k\u04E2\nk\fk\x0Ek\u04E5\vk\x03k\x03" +
		"k\x05k\u04E9\nk\x03l\x06l\u04EC\nl\rl\x0El\u04ED\x03l\x02\x02\x04N\x92" +
		"m\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02" +
		"\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02" +
		"\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02" +
		"\x02\x12\x03\x02\x05\x06\x03\x02\t\x0F\x03\x02\x17\x19\x05\x02\x07\x07" +
		"\t\x0E \'\x03\x0246\x06\x02yy\x80\x80\x85\x85\x87\x87\x05\x0200EHkp\x03" +
		"\x02KL\x03\x02\"#\x04\x02\x07\x07$%\x03\x02QR\x03\x02\v\x0E\x03\x02&\'" +
		"\x04\x02\x0F\x0FU^\x03\x02rs\v\x02\x12\x12\x1D\x1D66DDfg||\x80\x80\x8B" +
		"\x8B\x8D\x8E\x02\u0580\x02\xE4\x03\x02\x02\x02\x04\xE9\x03\x02\x02\x02" +
		"\x06\xF2\x03\x02\x02\x02\b\xF7\x03\x02\x02\x02\n\xF9\x03\x02\x02\x02\f" +
		"\u0103\x03\x02\x02\x02\x0E\u010D\x03\x02\x02\x02\x10\u010F\x03\x02\x02" +
		"\x02\x12\u0138\x03\x02\x02\x02\x14\u013A\x03\x02\x02\x02\x16\u013D\x03" +
		"\x02\x02\x02\x18\u0155\x03\x02\x02\x02\x1A\u0166\x03\x02\x02\x02\x1C\u0168" +
		"\x03\x02\x02\x02\x1E\u017C\x03\x02\x02\x02 \u0183\x03\x02\x02\x02\"\u0188" +
		"\x03\x02\x02\x02$\u018E\x03\x02\x02\x02&\u01A6\x03\x02\x02\x02(\u01A8" +
		"\x03\x02\x02\x02*\u01AD\x03\x02\x02\x02,\u01AF\x03\x02\x02\x02.\u01C0" +
		"\x03\x02\x02\x020\u01D0\x03\x02\x02\x022\u01D8\x03\x02\x02\x024\u01EB" +
		"\x03\x02\x02\x026\u01ED\x03\x02\x02\x028\u01FC\x03\x02\x02\x02:\u01FF" +
		"\x03\x02\x02\x02<\u0207\x03\x02\x02\x02>\u0209\x03\x02\x02\x02@\u0218" +
		"\x03\x02\x02\x02B\u0225\x03\x02\x02\x02D\u022C\x03\x02\x02\x02F\u0239" +
		"\x03\x02\x02\x02H\u0240\x03\x02\x02\x02J\u024D\x03\x02\x02\x02L\u0251" +
		"\x03\x02\x02\x02N\u0260\x03\x02\x02\x02P\u026D\x03\x02\x02\x02R\u0277" +
		"\x03\x02\x02\x02T\u0279\x03\x02\x02\x02V\u0280\x03\x02\x02\x02X\u028E" +
		"\x03\x02\x02\x02Z\u0290\x03\x02\x02\x02\\\u0292\x03\x02\x02\x02^\u02AC" +
		"\x03\x02\x02\x02`\u02AE\x03\x02\x02\x02b\u02B1\x03\x02\x02\x02d\u02BA" +
		"\x03\x02\x02\x02f\u02C1\x03\x02\x02\x02h\u02CA\x03\x02\x02\x02j\u02D0" +
		"\x03\x02\x02\x02l\u02D8\x03\x02\x02\x02n\u02DA\x03\x02\x02\x02p\u02DD" +
		"\x03\x02\x02\x02r\u02ED\x03\x02\x02\x02t\u02FE\x03\x02\x02\x02v\u030A" +
		"\x03\x02\x02\x02x\u030C\x03\x02\x02\x02z\u0314\x03\x02\x02\x02|\u0317" +
		"\x03\x02\x02\x02~\u031A\x03\x02\x02\x02\x80\u0320\x03\x02\x02\x02\x82" +
		"\u0323\x03\x02\x02\x02\x84\u0327\x03\x02\x02\x02\x86\u0332\x03\x02\x02" +
		"\x02\x88\u033B\x03\x02\x02\x02\x8A\u0346\x03\x02\x02\x02\x8C\u0355\x03" +
		"\x02\x02\x02\x8E\u0357\x03\x02\x02\x02\x90\u0363\x03\x02\x02\x02\x92\u0388" +
		"\x03\x02\x02\x02\x94\u03E9\x03\x02\x02\x02\x96\u03EB\x03\x02\x02\x02\x98" +
		"\u03F6\x03\x02\x02\x02\x9A\u03FE\x03\x02\x02\x02\x9C\u0409\x03\x02\x02" +
		"\x02\x9E\u0415\x03\x02\x02\x02\xA0\u0417\x03\x02\x02\x02\xA2\u041C\x03" +
		"\x02\x02\x02\xA4\u0436\x03\x02\x02\x02\xA6\u043B\x03\x02\x02\x02\xA8\u043D" +
		"\x03\x02\x02\x02\xAA\u0445\x03\x02\x02\x02\xAC\u0455\x03\x02\x02\x02\xAE" +
		"\u045B\x03\x02\x02\x02\xB0\u0466\x03\x02\x02\x02\xB2\u0468\x03\x02\x02" +
		"\x02\xB4\u0470\x03\x02\x02\x02\xB6\u0474\x03\x02\x02\x02\xB8\u0477\x03" +
		"\x02\x02\x02\xBA\u0485\x03\x02\x02\x02\xBC\u0487\x03\x02\x02\x02\xBE\u0493" +
		"\x03\x02\x02\x02\xC0\u0496\x03\x02\x02\x02\xC2\u04A2\x03\x02\x02\x02\xC4" +
		"\u04AB\x03\x02\x02\x02\xC6\u04C7\x03\x02\x02\x02\xC8\u04CB\x03\x02\x02" +
		"\x02\xCA\u04CD\x03\x02\x02\x02\xCC\u04D1\x03\x02\x02\x02\xCE\u04D4\x03" +
		"\x02\x02\x02\xD0\u04D8\x03\x02\x02\x02\xD2\u04DA\x03\x02\x02\x02\xD4\u04DC" +
		"\x03\x02\x02\x02\xD6\u04EB\x03\x02\x02\x02\xD8\xE3\x05\x04\x03\x02\xD9" +
		"\xE3\x05\x12\n\x02\xDA\xE3\x05\x16\f\x02\xDB\xE3\x05> \x02\xDC\xE3\x05" +
		",\x17\x02\xDD\xE3\x052\x1A\x02\xDE\xE3\x05\x1E\x10\x02\xDF\xE3\x05 \x11" +
		"\x02\xE0\xE3\x05\"\x12\x02\xE1\xE3\x05$\x13\x02\xE2\xD8\x03\x02\x02\x02" +
		"\xE2\xD9\x03\x02\x02\x02\xE2\xDA\x03\x02\x02\x02\xE2\xDB\x03\x02\x02\x02" +
		"\xE2\xDC\x03\x02\x02\x02\xE2\xDD\x03\x02\x02\x02\xE2\xDE\x03\x02\x02\x02" +
		"\xE2\xDF\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE1\x03\x02\x02\x02" +
		"\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02" +
		"\xE5\xE7\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xE8\x07\x02\x02\x03" +
		"\xE8\x03\x03\x02\x02\x02\xE9\xEA\x07\x03\x02\x02\xEA\xEC\x05\x06\x04\x02" +
		"\xEB\xED\x05\b\x05\x02\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02" +
		"\xED\xEE\x03\x02\x02\x02\xEE\xEF\x07\x04\x02\x02\xEF\x05\x03\x02\x02\x02" +
		"\xF0\xF3\t\x02\x02\x02\xF1\xF3\x05\xCCg\x02\xF2\xF0\x03\x02\x02\x02\xF2" +
		"\xF1\x03\x02\x02\x02\xF3\x07\x03\x02\x02\x02\xF4\xF8\x07\x07\x02\x02\xF5" +
		"\xF8\x05\n\x06\x02\xF6\xF8\x05\x98M\x02\xF7\xF4\x03\x02\x02\x02\xF7\xF5" +
		"\x03\x02\x02\x02\xF7\xF6\x03\x02\x02\x02\xF8\t\x03\x02\x02\x02\xF9\u0100" +
		"\x05\x0E\b\x02\xFA\xFC\x07\b\x02\x02\xFB\xFA\x03\x02\x02\x02\xFB\xFC\x03" +
		"\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x05\x0E\b\x02\xFE\xFB\x03" +
		"\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100" +
		"\u0101\x03\x02\x02\x02\u0101\v\x03\x02\x02\x02\u0102\u0100\x03\x02\x02" +
		"\x02\u0103\u0104\t\x03\x02\x02\u0104\r\x03\x02\x02\x02\u0105\u0107\x05" +
		"\f\x07\x02\u0106\u0105\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107" +
		"\u0108\x03\x02\x02\x02\u0108\u010E\x07\x90\x02\x02\u0109\u010B\x05\f\x07" +
		"\x02\u010A\u0109\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010C" +
		"\x03\x02\x02\x02\u010C\u010E\x07r\x02\x02\u010D\u0106\x03\x02\x02\x02" +
		"\u010D\u010A\x03\x02\x02\x02\u010E\x0F\x03\x02\x02\x02\u010F\u0112\x05" +
		"\xCCg\x02\u0110\u0111\x07\x10\x02\x02\u0111\u0113\x05\xCCg\x02\u0112\u0110" +
		"\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\x11\x03\x02\x02\x02" +
		"\u0114\u0115\x07\x11\x02\x02\u0115\u0118\x05\x14\v\x02\u0116\u0117\x07" +
		"\x10\x02\x02\u0117\u0119\x05\xCCg\x02\u0118\u0116\x03\x02\x02\x02\u0118" +
		"\u0119\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011B\x07\x04" +
		"\x02\x02\u011B\u0139\x03\x02\x02\x02\u011C\u011F\x07\x11\x02\x02\u011D" +
		"\u0120\x07\x07\x02\x02\u011E\u0120\x05\xCCg\x02\u011F\u011D\x03\x02\x02" +
		"\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u0122" +
		"\x07\x10\x02\x02\u0122\u0124\x05\xCCg\x02\u0123\u0121\x03\x02\x02\x02" +
		"\u0123\u0124\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0126\x07" +
		"\x12\x02\x02\u0126\u0127\x05\x14\v\x02\u0127\u0128\x07\x04\x02\x02\u0128" +
		"\u0139\x03\x02\x02\x02\u0129\u012A\x07\x11\x02\x02\u012A\u012B\x07\x13" +
		"\x02\x02\u012B\u0130\x05\x10\t\x02\u012C\u012D\x07\x14\x02\x02\u012D\u012F" +
		"\x05\x10\t\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02" +
		"\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0133\x03" +
		"\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133\u0134\x07\x15\x02\x02\u0134" +
		"\u0135\x07\x12\x02\x02\u0135\u0136\x05\x14\v\x02\u0136\u0137\x07\x04\x02" +
		"\x02\u0137\u0139\x03\x02\x02\x02\u0138\u0114\x03\x02\x02\x02\u0138\u011C" +
		"\x03\x02\x02\x02\u0138\u0129\x03\x02\x02\x02\u0139\x13\x03\x02\x02\x02" +
		"\u013A\u013B\x07\x8F\x02\x02\u013B\x15\x03\x02\x02\x02\u013C\u013E\x07" +
		"\x16\x02\x02\u013D\u013C\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E" +
		"\u013F\x03\x02\x02\x02\u013F\u0140\t\x04\x02\x02\u0140\u014A\x05\xCCg" +
		"\x02\u0141\u0142\x07\x1A\x02\x02\u0142\u0147\x05\x18\r\x02\u0143\u0144" +
		"\x07\x14\x02\x02\u0144\u0146\x05\x18\r\x02\u0145\u0143\x03\x02\x02\x02" +
		"\u0146\u0149\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03" +
		"\x02\x02\x02\u0148\u014B\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A" +
		"\u0141\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014C\x03\x02" +
		"\x02\x02\u014C\u0150\x07\x13\x02\x02\u014D\u014F\x05\x1A\x0E\x02\u014E" +
		"\u014D\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02" +
		"\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0153\x03\x02\x02\x02\u0152" +
		"\u0150\x03\x02\x02\x02\u0153\u0154\x07\x15\x02\x02\u0154\x17\x03\x02\x02" +
		"\x02\u0155\u015B\x05P)\x02\u0156\u0158\x07\x1B\x02\x02\u0157\u0159\x05" +
		"\x98M\x02\u0158\u0157\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
		"\u015A\x03\x02\x02\x02\u015A\u015C\x07\x1C\x02\x02\u015B\u0156\x03\x02" +
		"\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\x19\x03\x02\x02\x02\u015D\u0167" +
		"\x05\x1C\x0F\x02\u015E\u0167\x05$\x13\x02\u015F\u0167\x05,\x17\x02\u0160" +
		"\u0167\x05.\x18\x02\u0161\u0167\x052\x1A\x02\u0162\u0167\x05:\x1E\x02" +
		"\u0163\u0167\x05> \x02\u0164\u0167\x05 \x11\x02\u0165\u0167\x05\"\x12" +
		"\x02\u0166\u015D\x03\x02\x02\x02\u0166\u015E\x03\x02\x02\x02\u0166\u015F" +
		"\x03\x02\x02\x02\u0166\u0160\x03\x02\x02\x02\u0166\u0161\x03\x02\x02\x02" +
		"\u0166\u0162\x03\x02\x02\x02\u0166\u0163\x03\x02\x02\x02\u0166\u0164\x03" +
		"\x02\x02\x02\u0166\u0165\x03\x02\x02\x02\u0167\x1B\x03\x02\x02\x02\u0168" +
		"\u0172\x05N(\x02\u0169\u0171\x07\x83\x02\x02\u016A\u0171\x07\x82\x02\x02" +
		"\u016B\u0171\x07\x7F\x02\x02\u016C\u0171\x07\x81\x02\x02\u016D\u0171\x07" +
		"y\x02\x02\u016E\u0171\x07z\x02\x02\u016F\u0171\x05\xD4k\x02\u0170\u0169" +
		"\x03\x02\x02\x02\u0170\u016A\x03\x02\x02\x02\u0170\u016B\x03\x02\x02\x02" +
		"\u0170\u016C\x03\x02\x02\x02\u0170\u016D\x03\x02\x02\x02\u0170\u016E\x03" +
		"\x02\x02\x02\u0170\u016F\x03\x02\x02\x02\u0171\u0174\x03\x02\x02\x02\u0172" +
		"\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0175\x03\x02" +
		"\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0178\x05\xCCg\x02\u0176\u0177" +
		"\x07\x0F\x02\x02\u0177\u0179\x05\x92J\x02\u0178\u0176\x03\x02\x02\x02" +
		"\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017B\x07" +
		"\x04\x02\x02\u017B\x1D\x03\x02\x02\x02\u017C\u017D\x05N(\x02\u017D\u017E" +
		"\x07y\x02\x02\u017E\u017F\x05\xCCg\x02\u017F\u0180\x07\x0F\x02\x02\u0180" +
		"\u0181\x05\x92J\x02\u0181\u0182\x07\x04\x02\x02\u0182\x1F\x03\x02\x02" +
		"\x02\u0183\u0184\x07\x1D\x02\x02\u0184\u0185\x05\xCCg\x02\u0185\u0186" +
		"\x05@!";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0186\u0187\x07\x04\x02\x02\u0187!\x03\x02\x02\x02\u0188\u0189\x07" +
		"\x86\x02\x02\u0189\u018A\x05\xCCg\x02\u018A\u018B\x07\x1A\x02\x02\u018B" +
		"\u018C\x05\x8CG\x02\u018C\u018D\x07\x04\x02\x02\u018D#\x03\x02\x02\x02" +
		"\u018E\u018F\x07\x1E\x02\x02\u018F\u0190\x05&\x14\x02\u0190\u0193\x07" +
		"\x1F\x02\x02\u0191\u0194\x07\x07\x02\x02\u0192\u0194\x05N(\x02\u0193\u0191" +
		"\x03\x02\x02\x02\u0193\u0192\x03\x02\x02\x02\u0194\u0196\x03\x02\x02\x02" +
		"\u0195\u0197\x07\x88\x02\x02\u0196\u0195\x03\x02\x02\x02\u0196\u0197\x03" +
		"\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x07\x04\x02\x02\u0199" +
		"%\x03\x02\x02\x02\u019A\u01A7\x05P)\x02\u019B\u019C\x07\x13\x02\x02\u019C" +
		"\u01A1\x05(\x15\x02\u019D\u019E\x07\x14\x02\x02\u019E\u01A0\x05(\x15\x02" +
		"\u019F\u019D\x03\x02\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03" +
		"\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A4\x03\x02\x02\x02\u01A3" +
		"\u01A1\x03\x02\x02\x02\u01A4\u01A5\x07\x15\x02\x02\u01A5\u01A7\x03\x02" +
		"\x02\x02\u01A6\u019A\x03\x02\x02\x02\u01A6\u019B\x03\x02\x02\x02\u01A7" +
		"\'\x03\x02\x02\x02\u01A8\u01AB\x05P)\x02\u01A9\u01AA\x07\x10\x02\x02\u01AA" +
		"\u01AC\x05*\x16\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02" +
		"\x02\u01AC)\x03\x02\x02\x02\u01AD\u01AE\t\x05\x02\x02\u01AE+\x03\x02\x02" +
		"\x02\u01AF\u01B0\x07(\x02\x02\u01B0\u01B1\x05\xCCg\x02\u01B1\u01BC\x07" +
		"\x13\x02\x02\u01B2\u01B3\x05L\'\x02\u01B3\u01B9\x07\x04\x02\x02\u01B4" +
		"\u01B5\x05L\'\x02\u01B5\u01B6\x07\x04\x02\x02\u01B6\u01B8\x03\x02\x02" +
		"\x02\u01B7\u01B4\x03\x02\x02\x02\u01B8\u01BB\x03\x02\x02\x02\u01B9\u01B7" +
		"\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BD\x03\x02\x02\x02" +
		"\u01BB\u01B9\x03\x02\x02\x02\u01BC\u01B2\x03\x02\x02\x02\u01BC\u01BD\x03" +
		"\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01BF\x07\x15\x02\x02\u01BF" +
		"-\x03\x02\x02\x02\u01C0\u01C1\x07)\x02\x02\u01C1\u01C3\x05\xCCg\x02\u01C2" +
		"\u01C4\x05@!\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02" +
		"\u01C4\u01C9\x03\x02\x02\x02\u01C5\u01C8\x07\x84\x02\x02\u01C6\u01C8\x05" +
		"\xD4k\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C8" +
		"\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02" +
		"\x02\x02\u01CA\u01CE\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC" +
		"\u01CF\x07\x04\x02\x02\u01CD\u01CF\x05\\/\x02\u01CE\u01CC\x03\x02\x02" +
		"\x02\u01CE\u01CD\x03\x02\x02\x02\u01CF/\x03\x02\x02\x02\u01D0\u01D6\x05" +
		"\xCCg\x02\u01D1\u01D3\x07\x1B\x02\x02\u01D2\u01D4\x05\x98M\x02\u01D3\u01D2" +
		"\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02" +
		"\u01D5\u01D7\x07\x1C\x02\x02\u01D6\u01D1\x03\x02\x02\x02\u01D6\u01D7\x03" +
		"\x02\x02\x02\u01D71\x03\x02\x02\x02\u01D8\u01D9\x054\x1B\x02\u01D9\u01DA" +
		"\x05@!\x02\u01DA\u01DC\x058\x1D\x02\u01DB\u01DD\x056\x1C\x02\u01DC\u01DB" +
		"\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02" +
		"\u01DE\u01E1\x07\x04\x02\x02\u01DF\u01E1\x05\\/\x02\u01E0\u01DE\x03\x02" +
		"\x02\x02\u01E0\u01DF\x03\x02\x02\x02\u01E13\x03\x02\x02\x02\u01E2\u01E4" +
		"\x07*\x02\x02\u01E3\u01E5\x05\xCCg\x02\u01E4\u01E3\x03\x02\x02\x02\u01E4" +
		"\u01E5\x03\x02\x02\x02\u01E5\u01EC\x03\x02\x02\x02\u01E6\u01EC\x07\x8B" +
		"\x02\x02\u01E7\u01EC\x07\x8C\x02\x02\u01E8\u01EC\x07\x8D\x02\x02\u01E9" +
		"\u01EC\x05\xD0i\x02\u01EA\u01EC\x05\xD2j\x02\u01EB\u01E2\x03\x02\x02\x02" +
		"\u01EB\u01E6\x03\x02\x02\x02\u01EB\u01E7\x03\x02\x02\x02\u01EB\u01E8\x03" +
		"\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01EC" +
		"5\x03\x02\x02\x02\u01ED\u01EE\x07+\x02\x02\u01EE\u01EF\x05@!\x02\u01EF" +
		"7\x03\x02\x02\x02\u01F0\u01FB\x07}\x02\x02\u01F1\u01FB\x07\x82\x02\x02" +
		"\u01F2\u01FB\x07\x7F\x02\x02\u01F3\u01FB\x07\x81\x02\x02\u01F4\u01FB\x07" +
		"\x89\x02\x02\u01F5\u01FB\x07\x8A\x02\x02\u01F6\u01FB\x07\x84\x02\x02\u01F7" +
		"\u01FB\x05Z.\x02\u01F8\u01FB\x050\x19\x02\u01F9\u01FB\x05\xD4k\x02\u01FA" +
		"\u01F0\x03\x02\x02\x02\u01FA\u01F1\x03\x02\x02\x02\u01FA\u01F2\x03\x02" +
		"\x02\x02\u01FA\u01F3\x03\x02\x02\x02\u01FA\u01F4\x03\x02\x02\x02\u01FA" +
		"\u01F5\x03\x02\x02\x02\u01FA\u01F6\x03\x02\x02\x02\u01FA\u01F7\x03\x02" +
		"\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FB" +
		"\u01FE\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02" +
		"\x02\x02\u01FD9\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FF\u0200" +
		"\x07,\x02\x02\u0200\u0201\x05\xCCg\x02\u0201\u0203\x05D#\x02\u0202\u0204" +
		"\x07w\x02\x02\u0203\u0202\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02" +
		"\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x07\x04\x02\x02\u0206;\x03\x02" +
		"\x02\x02\u0207\u0208\x05\xCCg\x02\u0208=\x03\x02\x02\x02\u0209\u020A\x07" +
		"-\x02\x02\u020A\u020B\x05\xCCg\x02\u020B\u020D\x07\x13\x02\x02\u020C\u020E" +
		"\x05<\x1F\x02\u020D\u020C\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02" +
		"\u020E\u0213\x03\x02\x02\x02\u020F\u0210\x07\x14\x02\x02\u0210\u0212\x05" +
		"<\x1F\x02\u0211\u020F\x03\x02\x02\x02\u0212\u0215\x03\x02\x02\x02\u0213" +
		"\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0216\x03\x02" +
		"\x02\x02\u0215\u0213\x03\x02\x02\x02\u0216\u0217\x07\x15\x02\x02\u0217" +
		"?\x03\x02\x02\x02\u0218\u0221\x07\x1B\x02\x02\u0219\u021E\x05B\"\x02\u021A" +
		"\u021B\x07\x14\x02\x02\u021B\u021D\x05B\"\x02\u021C\u021A\x03\x02\x02" +
		"\x02\u021D\u0220\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F" +
		"\x03\x02\x02\x02\u021F\u0222\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02" +
		"\u0221\u0219\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x03" +
		"\x02\x02\x02\u0223\u0224\x07\x1C\x02\x02\u0224A\x03\x02\x02\x02\u0225" +
		"\u0227\x05N(\x02\u0226\u0228\x05X-\x02\u0227\u0226\x03\x02\x02\x02\u0227" +
		"\u0228\x03\x02\x02\x02\u0228\u022A\x03\x02\x02\x02\u0229\u022B\x05\xCC" +
		"g\x02\u022A\u0229\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022BC\x03" +
		"\x02\x02\x02\u022C\u0235\x07\x1B\x02\x02\u022D\u0232\x05F$\x02\u022E\u022F" +
		"\x07\x14\x02\x02\u022F\u0231\x05F$\x02\u0230\u022E\x03\x02\x02\x02\u0231" +
		"\u0234\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02" +
		"\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234\u0232\x03\x02\x02\x02\u0235" +
		"\u022D\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0237\x03\x02" +
		"\x02\x02\u0237\u0238\x07\x1C\x02\x02\u0238E\x03\x02\x02\x02\u0239\u023B" +
		"\x05N(\x02\u023A\u023C\x07~\x02\x02\u023B\u023A\x03\x02\x02\x02\u023B" +
		"\u023C\x03\x02\x02\x02\u023C\u023E\x03\x02\x02\x02\u023D\u023F\x05\xCC" +
		"g\x02\u023E\u023D\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023FG\x03" +
		"\x02\x02\x02\u0240\u0249\x07\x1B\x02\x02\u0241\u0246\x05J&\x02\u0242\u0243" +
		"\x07\x14\x02\x02\u0243\u0245\x05J&\x02\u0244\u0242\x03\x02\x02\x02\u0245" +
		"\u0248\x03\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0246\u0247\x03\x02" +
		"\x02\x02\u0247\u024A\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0249" +
		"\u0241\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024B\x03\x02" +
		"\x02\x02\u024B\u024C\x07\x1C\x02\x02\u024CI\x03\x02\x02\x02\u024D\u024F" +
		"\x05N(\x02\u024E\u0250\x05X-\x02\u024F\u024E\x03\x02\x02\x02\u024F\u0250" +
		"\x03\x02\x02\x02\u0250K\x03\x02\x02\x02\u0251\u0253\x05N(\x02\u0252\u0254" +
		"\x05X-\x02\u0253\u0252\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254" +
		"\u0255\x03\x02\x02\x02\u0255\u0256\x05\xCCg\x02\u0256M\x03\x02\x02\x02" +
		"\u0257\u0258\b(\x01\x02\u0258\u0261\x05\x8CG\x02\u0259\u0261\x05P)\x02" +
		"\u025A\u0261\x05T+\x02\u025B\u0261\x05V,\x02\u025C\u0261\x05\x8EH\x02" +
		"\u025D\u0261\x05\x90I\x02\u025E\u025F\x070\x02\x02\u025F\u0261\x07\x80" +
		"\x02\x02\u0260\u0257\x03\x02\x02\x02\u0260\u0259\x03\x02\x02\x02\u0260" +
		"\u025A\x03\x02\x02\x02\u0260\u025B\x03\x02\x02\x02\u0260\u025C\x03\x02" +
		"\x02\x02\u0260\u025D\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0261" +
		"\u026A\x03\x02\x02\x02\u0262\u0263\f\x07\x02\x02\u0263\u0265\x07.\x02" +
		"\x02\u0264\u0266\x05\x92J\x02\u0265\u0264\x03\x02\x02\x02\u0265\u0266" +
		"\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0269\x07/\x02\x02" +
		"\u0268\u0262\x03\x02\x02\x02\u0269\u026C\x03\x02\x02\x02\u026A\u0268\x03" +
		"\x02\x02\x02\u026A\u026B\x03\x02\x02\x02\u026BO\x03\x02\x02\x02\u026C" +
		"\u026A\x03\x02\x02\x02\u026D\u0272\x05\xCCg\x02\u026E\u026F\x071\x02\x02" +
		"\u026F\u0271\x05\xCCg\x02\u0270\u026E\x03\x02\x02\x02\u0271\u0274\x03" +
		"\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273" +
		"Q\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0275\u0278\x05\x8CG\x02" +
		"\u0276\u0278\x05P)\x02\u0277\u0275\x03\x02\x02\x02\u0277\u0276\x03\x02" +
		"\x02\x02\u0278S\x03\x02\x02\x02\u0279\u027A\x072\x02\x02\u027A\u027B\x07" +
		"\x1B\x02\x02\u027B\u027C\x05R*\x02\u027C\u027D\x073\x02\x02\u027D\u027E" +
		"\x05N(\x02\u027E\u027F\x07\x1C\x02\x02\u027FU\x03\x02\x02\x02\u0280\u0281" +
		"\x07*\x02\x02\u0281\u0287\x05H%\x02\u0282\u0286\x07\x7F\x02\x02\u0283" +
		"\u0286\x07}\x02\x02\u0284\u0286\x05Z.\x02\u0285\u0282\x03\x02\x02\x02" +
		"\u0285\u0283\x03\x02\x02\x02\u0285\u0284\x03\x02\x02\x02\u0286\u0289\x03" +
		"\x02\x02\x02\u0287\u0285\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288" +
		"\u028C\x03\x02\x02\x02\u0289\u0287\x03\x02\x02\x02\u028A\u028B\x07+\x02" +
		"\x02\u028B\u028D\x05H%\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03" +
		"\x02\x02\x02\u028DW\x03\x02\x02\x02\u028E\u028F\t\x06\x02\x02\u028FY\x03" +
		"\x02\x02\x02\u0290\u0291\t\x07\x02\x02\u0291[\x03\x02\x02\x02\u0292\u0296" +
		"\x07\x13\x02\x02\u0293\u0295\x05^0\x02\u0294\u0293\x03\x02\x02\x02\u0295" +
		"\u0298\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0296\u0297\x03\x02" +
		"\x02\x02\u0297\u0299\x03\x02\x02\x02\u0298\u0296\x03\x02\x02\x02\u0299" +
		"\u029A\x07\x15\x02\x02\u029A]\x03\x02\x02\x02\u029B\u02AD\x05b2\x02\u029C" +
		"\u02AD\x05d3\x02\u029D\u02AD\x05h5\x02\u029E\u02AD\x05j6\x02\u029F\u02AD" +
		"\x05p9\x02\u02A0\u02AD\x05r:\x02\u02A1\u02AD\x05\\/\x02\u02A2\u02AD\x05" +
		"t;\x02\u02A3\u02AD\x05x=\x02\u02A4\u02AD\x05z>\x02\u02A5\u02AD\x05|?\x02" +
		"\u02A6\u02AD\x05~@\x02\u02A7\u02AD\x05\x80A\x02\u02A8\u02AD\x05\x82B\x02" +
		"\u02A9\u02AD\x05l7\x02\u02AA\u02AD\x05n8\x02\u02AB\u02AD\x05\x84C\x02" +
		"\u02AC\u029B\x03\x02\x02\x02\u02AC\u029C\x03\x02\x02\x02\u02AC\u029D\x03" +
		"\x02\x02\x02\u02AC\u029E\x03\x02\x02\x02\u02AC\u029F\x03\x02\x02\x02\u02AC" +
		"\u02A0\x03\x02\x02\x02\u02AC\u02A1\x03\x02\x02\x02\u02AC\u02A2\x03\x02" +
		"\x02\x02\u02AC\u02A3\x03\x02\x02\x02\u02AC\u02A4\x03\x02\x02\x02\u02AC" +
		"\u02A5\x03\x02\x02\x02\u02AC\u02A6\x03\x02\x02\x02\u02AC\u02A7\x03\x02" +
		"\x02\x02\u02AC\u02A8\x03\x02\x02\x02\u02AC\u02A9\x03\x02\x02\x02\u02AC" +
		"\u02AA\x03\x02\x02\x02\u02AC\u02AB\x03\x02\x02\x02\u02AD_\x03\x02\x02" +
		"\x02\u02AE\u02AF\x05\x92J\x02\u02AF\u02B0\x07\x04\x02\x02\u02B0a\x03\x02" +
		"\x02\x02\u02B1\u02B2\x077\x02\x02\u02B2\u02B3\x07\x1B\x02\x02\u02B3\u02B4" +
		"\x05\x92J\x02\u02B4\u02B5\x07\x1C\x02\x02\u02B5\u02B8\x05^0\x02\u02B6" +
		"\u02B7\x078\x02\x02\u02B7\u02B9\x05^0\x02\u02B8\u02B6\x03\x02\x02\x02" +
		"\u02B8\u02B9\x03\x02\x02\x02\u02B9c\x03\x02\x02\x02\u02BA\u02BB\x079\x02" +
		"\x02\u02BB\u02BD\x05\\/\x02\u02BC\u02BE\x05f4\x02\u02BD\u02BC\x03\x02" +
		"\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02BF" +
		"\u02C0\x03\x02\x02\x02\u02C0e\x03\x02\x02\x02\u02C1\u02C6\x07:\x02\x02" +
		"\u02C2\u02C4\x05\xCCg\x02\u02C3\u02C2\x03\x02\x02\x02\u02C3\u02C4\x03" +
		"\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C7\x05@!\x02\u02C6\u02C3" +
		"\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02" +
		"\u02C8\u02C9\x05\\/\x02\u02C9g\x03\x02\x02\x02\u02CA\u02CB\x07;\x02\x02" +
		"\u02CB\u02CC\x07\x1B\x02\x02\u02CC\u02CD\x05\x92J\x02\u02CD\u02CE\x07" +
		"\x1C\x02\x02\u02CE\u02CF\x05^0\x02\u02CFi\x03\x02\x02\x02\u02D0\u02D1" +
		"\x07<\x02\x02\u02D1\u02D2\x07\x1B\x02\x02\u02D2\u02D3\x05\x92J\x02\u02D3" +
		"\u02D4\x07\x1C\x02\x02\u02D4\u02D5\x05^0\x02\u02D5k\x03\x02\x02\x02\u02D6" +
		"\u02D9\x05\x86D\x02\u02D7\u02D9\x05`1\x02\u02D8\u02D6\x03\x02\x02\x02" +
		"\u02D8\u02D7\x03\x02\x02\x02\u02D9m\x03\x02\x02\x02\u02DA\u02DB\x07=\x02" +
		"\x02\u02DB\u02DC\x05\\/\x02\u02DCo\x03\x02\x02\x02\u02DD\u02DE\x07\x1F" +
		"\x02\x02\u02DE\u02E1\x07\x1B\x02\x02\u02DF\u02E2\x05l7\x02\u02E0\u02E2" +
		"\x07\x04\x02\x02\u02E1\u02DF\x03\x02\x02\x02\u02E1\u02E0\x03\x02\x02\x02" +
		"\u02E2\u02E5\x03\x02\x02\x02\u02E3\u02E6\x05`1\x02\u02E4\u02E6\x07\x04" +
		"\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E5\u02E4\x03\x02\x02\x02\u02E6" +
		"\u02E8\x03\x02\x02\x02\u02E7\u02E9\x05\x92J\x02\u02E8\u02E7\x03\x02\x02" +
		"\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EB" +
		"\x07\x1C\x02\x02\u02EB\u02EC\x05^0\x02\u02ECq\x03\x02\x02\x02\u02ED\u02EE" +
		"\x07\x1F\x02\x02\u02EE\u02F4\x07\x1B\x02\x02\u02EF\u02F5\x05L\'\x02\u02F0" +
		"\u02F1\x07\x1B\x02\x02\u02F1\u02F2\x05\x88E\x02\u02F2\u02F3\x07\x1C\x02" +
		"\x02\u02F3\u02F5\x03\x02\x02\x02\u02F4\u02EF\x03\x02\x02\x02\u02F4\u02F0" +
		"\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F9\x07>\x02\x02" +
		"\u02F7\u02FA\x05\xCCg\x02\u02F8\u02FA\x05\x92J\x02\u02F9\u02F7\x03\x02" +
		"\x02\x02\u02F9\u02F8\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB" +
		"\u02FC\x07\x1C\x02\x02\u02FC\u02FD\x05^0\x02\u02FDs\x03\x02\x02\x02\u02FE" +
		"\u0300\x07?\x02\x02\u02FF\u0301\x07\x8F\x02\x02\u0300\u02FF\x03\x02\x02" +
		"\x02\u0300\u0301\x03\x02\x02\x02\u0301\u0306\x03\x02\x02\x02\u0302\u0303" +
		"\x07\x1B\x02\x02\u0303\u0304\x05v<\x02\u0304\u0305\x07\x1C\x02\x02\u0305" +
		"\u0307\x03\x02\x02\x02\u0306\u0302\x03\x02\x02\x02\u0306\u0307\x03\x02" +
		"\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308\u0309\x05\xA2R\x02\u0309u\x03" +
		"\x02\x02\x02\u030A\u030B\x05\xD6l\x02\u030Bw\x03\x02\x02\x02\u030C\u030D" +
		"\x07@\x02\x02\u030D\u030E\x05^0\x02\u030E\u030F\x07;\x02\x02\u030F\u0310" +
		"\x07\x1B\x02\x02\u0310\u0311\x05\x92J\x02\u0311\u0312\x07\x1C\x02\x02" +
		"\u0312\u0313\x07\x04\x02\x02\u0313y\x03\x02\x02\x02\u0314\u0315\x07{\x02" +
		"\x02\u0315\u0316\x07\x04\x02\x02\u0316{\x03\x02\x02\x02\u0317\u0318\x07" +
		"x\x02\x02\u0318\u0319\x07\x04\x02\x02\u0319}\x03\x02\x02\x02\u031A\u031C" +
		"\x07A\x02\x02\u031B\u031D\x05\x92J\x02\u031C\u031B\x03\x02\x02\x02\u031C" +
		"\u031D\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\u031F\x07\x04" +
		"\x02\x02\u031F\x7F\x03\x02\x02\x02\u0320\u0321\x07B\x02\x02\u0321\u0322" +
		"\x07\x04\x02\x02\u0322\x81\x03\x02\x02\x02\u0323\u0324\x07C\x02\x02\u0324" +
		"\u0325\x05\xA0Q\x02\u0325\u0326\x07\x04\x02\x02\u0326\x83\x03\x02\x02" +
		"\x02\u0327\u0328\x07D\x02\x02\u0328\u0329\x05\xA0Q\x02\u0329\u032A\x07" +
		"\x04\x02\x02\u032A\x85\x03\x02\x02\x02\u032B\u032C\x07E\x02\x02\u032C" +
		"\u0333\x05\x8AF\x02\u032D\u0333\x05L\'\x02\u032E\u032F\x07\x1B\x02\x02" +
		"\u032F\u0330\x05\x88E\x02\u0330\u0331\x07\x1C\x02\x02\u0331\u0333\x03" +
		"\x02\x02\x02\u0332\u032B\x03\x02\x02\x02\u0332\u032D\x03\x02\x02\x02\u0332" +
		"\u032E\x03\x02\x02\x02\u0333\u0336\x03\x02\x02\x02\u0334\u0335\x07\x0F" +
		"\x02\x02\u0335\u0337\x05\x92J\x02\u0336\u0334\x03\x02\x02\x02\u0336\u0337" +
		"\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338\u0339\x07\x04\x02\x02" +
		"\u0339\x87\x03\x02\x02\x02\u033A\u033C\x05L\'\x02\u033B\u033A\x03\x02" +
		"\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u0343\x03\x02\x02\x02\u033D" +
		"\u033F\x07\x14\x02\x02\u033E\u0340\x05L\'\x02\u033F\u033E\x03\x02\x02" +
		"\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0342\x03\x02\x02\x02\u0341\u033D" +
		"\x03\x02\x02\x02\u0342\u0345\x03\x02\x02\x02\u0343\u0341\x03\x02\x02\x02" +
		"\u0343\u0344\x03\x02\x02\x02\u0344\x89\x03\x02\x02\x02\u0345\u0343\x03" +
		"\x02\x02\x02\u0346\u034D\x07\x1B\x02\x02\u0347\u0349\x05\xCCg\x02\u0348" +
		"\u0347\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034A\x03\x02" +
		"\x02\x02\u034A\u034C\x07\x14\x02\x02\u034B\u0348\x03\x02\x02\x02\u034C" +
		"\u034F\x03\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034D\u034E\x03\x02" +
		"\x02\x02\u034E\u0351\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02\u0350" +
		"\u0352\x05\xCCg\x02\u0351\u0350\x03\x02\x02\x02\u0351\u0352\x03\x02\x02" +
		"\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0354\x07\x1C\x02\x02\u0354\x8B" +
		"\x03\x02\x02\x02\u0355\u0356\t\b\x02\x02\u0356\x8D\x03\x02\x02\x02\u0357" +
		"\u0358\x07I\x02\x02\u0358\u0359\x07\x1B\x02\x02\u0359\u035E\x05N(\x02" +
		"\u035A\u035B\x07\x14\x02\x02\u035B\u035D\x05N(\x02\u035C\u035A\x03\x02" +
		"\x02\x02\u035D\u0360\x03\x02\x02\x02\u035E\u035C\x03\x02\x02\x02\u035E" +
		"\u035F\x03\x02\x02\x02\u035F\u0361\x03\x02\x02\x02\u0360\u035E\x03\x02" +
		"\x02\x02\u0361\u0362\x07\x1C\x02\x02\u0362\x8F\x03\x02\x02\x02\u0363\u0364" +
		"\x07J\x02\x02\u0364\u0365\x07\x1B\x02\x02\u0365\u036A\x05N(\x02\u0366" +
		"\u0367\x07\x14\x02\x02\u0367\u0369\x05N(\x02\u0368\u0366\x03\x02\x02\x02" +
		"\u0369\u036C\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02\u036A\u036B\x03" +
		"\x02\x02\x02\u036B\u036D\x03\x02\x02\x02\u036C\u036A\x03\x02\x02\x02\u036D" +
		"\u036E\x07\x1C\x02\x02\u036E\x91\x03\x02\x02\x02\u036F\u0370\bJ\x01\x02" +
		"\u0370\u0371\x07M\x02\x02\u0371\u0389\x05N(\x02\u0372\u0374\x07\x13\x02" +
		"\x02\u0373\u0375\x05\x9AN\x02\u0374\u0373\x03\x02\x02\x02\u0374\u0375" +
		"\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0377\x07\x15\x02\x02" +
		"\u0377\u0389\x05\x92J\x19\u0378\u0389\x05\x96L\x02\u0379\u037A\x07\x1B" +
		"\x02\x02\u037A\u037B\x05\x92J\x02\u037B\u037C\x07\x1C\x02\x02\u037C\u0389" +
		"\x03\x02\x02\x02\u037D\u037E\t\t\x02\x02\u037E\u0389\x05\x92J\x15\u037F" +
		"\u0380\t\n\x02\x02\u0380\u0389\x05\x92J\x14\u0381\u0382\x07N\x02\x02\u0382" +
		"\u0389\x05\x92J\x13\u0383\u0384\x07O\x02\x02\u0384\u0389\x05\x92J\x12" +
		"\u0385\u0386\x07\n\x02\x02\u0386\u0389\x05\x92J\x11\u0387\u0389\x05\x94" +
		"K\x02\u0388\u036F\x03\x02\x02\x02\u0388\u0372\x03\x02\x02\x02\u0388\u0378" +
		"\x03\x02\x02\x02\u0388\u0379\x03\x02\x02\x02\u0388\u037D\x03\x02\x02\x02" +
		"\u0388\u037F\x03\x02\x02\x02\u0388\u0381\x03\x02\x02\x02\u0388\u0383\x03" +
		"\x02\x02\x02\u0388\u0385\x03\x02\x02\x02\u0388\u0387\x03\x02\x02\x02\u0389" +
		"\u03D4\x03\x02\x02\x02\u038A\u038B\f\x10\x02\x02\u038B\u038C\x07P\x02" +
		"\x02\u038C\u03D3\x05\x92J\x11\u038D\u038E\f\x0F\x02\x02\u038E\u038F\t" +
		"\v\x02\x02\u038F\u03D3\x05\x92J\x10\u0390\u0391\f\x0E\x02\x02\u0391\u0392" +
		"\t\n\x02\x02\u0392\u03D3\x05\x92J\x0F\u0393\u0394\f\r\x02\x02\u0394\u0395" +
		"\t\f\x02\x02\u0395\u03D3\x05\x92J\x0E\u0396\u0397\f\f\x02\x02\u0397\u0398" +
		"\x07!\x02\x02\u0398\u03D3\x05\x92J\r\u0399\u039A\f\v\x02\x02\u039A\u039B" +
		"\x07\t\x02\x02\u039B\u03D3\x05\x92J\f\u039C\u039D\f\n\x02\x02\u039D\u039E" +
		"\x07 \x02\x02\u039E\u03D3\x05\x92J\v\u039F\u03A0\f\t\x02\x02\u03A0\u03A1" +
		"\t\r\x02\x02\u03A1\u03D3\x05\x92J\n\u03A2\u03A3\f\b\x02\x02\u03A3\u03A4" +
		"\t\x0E\x02\x02\u03A4\u03D3\x05\x92J\t\u03A5\u03A6\f\x07\x02\x02\u03A6" +
		"\u03A7\x07S\x02\x02\u03A7\u03D3\x05\x92J\b\u03A8\u03A9\f\x06\x02\x02\u03A9" +
		"\u03AA\x07\b\x02\x02\u03AA\u03D3\x05\x92J\x07\u03AB\u03AC\f\x05\x02\x02" +
		"\u03AC\u03AD\x07T\x02\x02\u03AD\u03AE\x05\x92J\x02\u03AE\u03AF\x07>\x02" +
		"\x02\u03AF\u03B0\x05\x92J\x06\u03B0\u03D3\x03\x02\x02\x02\u03B1\u03B2" +
		"\f\x04\x02\x02\u03B2\u03B3\t\x0F\x02\x02\u03B3\u03D3\x05\x92J\x05\u03B4" +
		"\u03B5\f\x1F\x02\x02\u03B5\u03D3\t\t\x02\x02\u03B6\u03B7\f\x1D\x02\x02" +
		"\u03B7\u03B8\x07.\x02\x02\u03B8\u03B9\x05\x92J\x02\u03B9\u03BA\x07/\x02" +
		"\x02\u03BA\u03D3\x03\x02\x02\x02\u03BB\u03BC\f\x1C\x02\x02\u03BC\u03BE" +
		"\x07.\x02\x02\u03BD\u03BF\x05\x92J\x02\u03BE\u03BD\x03\x02\x02\x02\u03BE" +
		"\u03BF\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03C2\x07>\x02" +
		"\x02\u03C1\u03C3\x05\x92J\x02\u03C2\u03C1\x03\x02\x02\x02\u03C2\u03C3" +
		"\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03D3\x07/\x02\x02" +
		"\u03C5\u03C6\f\x1B\x02\x02\u03C6\u03C7\x071\x02\x02\u03C7\u03D3\x05\xCC" +
		"g\x02\u03C8\u03C9\f\x1A\x02\x02\u03C9\u03CA\x07\x13\x02\x02\u03CA\u03CB" +
		"\x05\x9AN\x02\u03CB\u03CC\x07\x15\x02\x02\u03CC\u03D3\x03\x02\x02\x02" +
		"\u03CD\u03CE\f\x17\x02\x02\u03CE\u03CF\x07\x1B\x02\x02\u03CF\u03D0\x05" +
		"\x9EP\x02\u03D0\u03D1\x07\x1C\x02\x02\u03D1\u03D3\x03\x02\x02\x02\u03D2" +
		"\u038A\x03\x02\x02\x02\u03D2\u038D\x03\x02\x02\x02\u03D2\u0390\x03\x02" +
		"\x02\x02\u03D2\u0393\x03\x02\x02\x02\u03D2\u0396\x03\x02\x02\x02\u03D2" +
		"\u0399\x03\x02\x02\x02\u03D2\u039C\x03\x02\x02\x02\u03D2\u039F\x03\x02" +
		"\x02\x02\u03D2\u03A2\x03\x02\x02\x02\u03D2\u03A5\x03\x02\x02\x02\u03D2" +
		"\u03A8\x03\x02\x02\x02\u03D2\u03AB\x03\x02\x02\x02\u03D2\u03B1\x03\x02" +
		"\x02\x02\u03D2\u03B4\x03\x02\x02\x02\u03D2\u03B6\x03\x02\x02\x02\u03D2" +
		"\u03BB\x03\x02\x02\x02\u03D2\u03C5\x03\x02\x02\x02\u03D2\u03C8\x03\x02" +
		"\x02\x02\u03D2\u03CD\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02\u03D4" +
		"\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\x93\x03\x02\x02" +
		"\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03EA\x07q\x02\x02\u03D8\u03EA" +
		"\x05\xCAf\x02\u03D9\u03EA\x05\xCEh\x02\u03DA\u03EA\x05\xD6l\x02\u03DB" +
		"\u03DE\x05\xCCg\x02\u03DC\u03DD\x07.\x02\x02\u03DD\u03DF\x07/\x02\x02" +
		"\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF\u03EA\x03" +
		"\x02\x02\x02\u03E0\u03EA\x07\x86\x02\x02\u03E1\u03EA\x07\x80\x02\x02\u03E2" +
		"\u03EA\x05\xC6d\x02\u03E3\u03E6\x05\xC8e\x02\u03E4\u03E5\x07.\x02\x02" +
		"\u03E5\u03E7\x07/\x02\x02\u03E6\u03E4\x03\x02\x02\x02\u03E6\u03E7\x03" +
		"\x02\x02\x02\u03E7\u03EA\x03\x02\x02\x02\u03E8\u03EA\x05N(\x02\u03E9\u03D7" +
		"\x03\x02\x02\x02\u03E9\u03D8\x03\x02\x02\x02\u03E9\u03D9\x03\x02\x02\x02" +
		"\u03E9\u03DA\x03\x02\x02\x02\u03E9\u03DB\x03\x02\x02\x02\u03E9\u03E0\x03" +
		"\x02\x02\x02\u03E9\u03E1\x03\x02\x02\x02\u03E9\u03E2\x03\x02\x02\x02\u03E9" +
		"\u03E3\x03\x02\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03EA\x95\x03\x02\x02" +
		"\x02\u03EB\u03F2\x07\x13\x02\x02\u03EC\u03EE\x05\x9AN\x02\u03ED\u03EC" +
		"\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03F3\x03\x02\x02\x02" +
		"\u03EF\u03F1\x05\x98M\x02\u03F0\u03EF\x03\x02\x02\x02\u03F0\u03F1\x03" +
		"\x02\x02\x02\u03F1\u03F3\x03\x02\x02\x02\u03F2\u03ED\x03\x02\x02\x02\u03F2" +
		"\u03F0\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\u03F5\x07\x15" +
		"\x02\x02\u03F5\x97\x03\x02\x02\x02\u03F6\u03FB\x05\x92J\x02\u03F7\u03F8" +
		"\x07\x14\x02\x02\u03F8\u03FA\x05\x92J\x02\u03F9\u03F7\x03\x02\x02\x02" +
		"\u03FA\u03FD\x03\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FB\u03FC\x03" +
		"\x02\x02\x02\u03FC\x99\x03\x02\x02\x02\u03FD\u03FB\x03\x02\x02\x02\u03FE" +
		"\u0403\x05\x9CO\x02\u03FF\u0400\x07\x14\x02\x02\u0400\u0402\x05\x9CO\x02" +
		"\u0401\u03FF\x03\x02\x02\x02\u0402\u0405\x03\x02\x02\x02\u0403\u0401\x03" +
		"\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404\u0407\x03\x02\x02\x02\u0405" +
		"\u0403\x03\x02\x02\x02\u0406\u0408\x07\x14\x02\x02\u0407\u0406\x03\x02" +
		"\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\x9B\x03\x02\x02\x02\u0409\u040A" +
		"\x05\xCCg\x02\u040A\u040B\x07>\x02\x02\u040B\u040C\x05\x92J\x02\u040C" +
		"\x9D\x03\x02\x02\x02\u040D\u040F\x07\x13\x02\x02\u040E\u0410\x05\x9AN" +
		"\x02\u040F\u040E\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0411" +
		"\x03\x02\x02\x02\u0411\u0416\x07\x15\x02\x02\u0412\u0414\x05\x98M\x02" +
		"\u0413\u0412\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414\u0416\x03" +
		"\x02\x02\x02\u0415\u040D\x03\x02\x02\x02\u0415\u0413\x03\x02\x02\x02\u0416" +
		"\x9F\x03\x02\x02\x02\u0417\u0418\x05\x92J\x02\u0418\u0419\x07\x1B\x02" +
		"\x02\u0419\u041A\x05\x9EP\x02\u041A\u041B\x07\x1C\x02\x02\u041B\xA1\x03" +
		"\x02\x02\x02\u041C\u0420\x07\x13\x02\x02\u041D\u041F\x05\xA4S\x02\u041E" +
		"\u041D\x03\x02\x02\x02\u041F\u0422\x03\x02\x02\x02\u0420\u041E\x03\x02" +
		"\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0423\x03\x02\x02\x02\u0422" +
		"\u0420\x03\x02\x02\x02\u0423\u0424\x07\x15\x02\x02\u0424\xA3\x03\x02\x02" +
		"\x02\u0425\u0437\x05\xCCg\x02\u0426\u0437\x05\xA2R\x02\u0427\u0437\x05" +
		"\xA6T\x02\u0428\u0437\x05\xACW\x02\u0429\u0437\x05\xAEX\x02\u042A\u0437" +
		"\x05\xB4[\x02\u042B\u0437\x05\xB6\\\x02\u042C\u0437\x05\xB8]\x02\u042D" +
		"\u0437\x05\xBC_\x02\u042E";
	private static readonly _serializedATNSegment2: string =
		"\u0437\x05\xC0a\x02\u042F\u0437\x05\xC2b\x02\u0430\u0437\x07x\x02\x02" +
		"\u0431\u0437\x07{\x02\x02\u0432\u0437\x07|\x02\x02\u0433\u0437\x05\xCA" +
		"f\x02\u0434\u0437\x05\xD6l\x02\u0435\u0437\x05\xCEh\x02\u0436\u0425\x03" +
		"\x02\x02\x02\u0436\u0426\x03\x02\x02\x02\u0436\u0427\x03\x02\x02\x02\u0436" +
		"\u0428\x03\x02\x02\x02\u0436\u0429\x03\x02\x02\x02\u0436\u042A\x03\x02" +
		"\x02\x02\u0436\u042B\x03\x02\x02\x02\u0436\u042C\x03\x02\x02\x02\u0436" +
		"\u042D\x03\x02\x02\x02\u0436\u042E\x03\x02\x02\x02\u0436\u042F\x03\x02" +
		"\x02\x02\u0436\u0430\x03\x02\x02\x02\u0436\u0431\x03\x02\x02\x02\u0436" +
		"\u0432\x03\x02\x02\x02\u0436\u0433\x03\x02\x02\x02\u0436\u0434\x03\x02" +
		"\x02\x02\u0436\u0435\x03\x02\x02\x02\u0437\xA5\x03\x02\x02\x02\u0438\u043C" +
		"\x05\xAAV\x02\u0439\u043C\x05\xC4c\x02\u043A\u043C\x05\xA8U\x02\u043B" +
		"\u0438\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043B\u043A\x03\x02" +
		"\x02\x02\u043C\xA7\x03\x02\x02\x02\u043D\u043E\x05\xCCg\x02\u043E\u043F" +
		"\x071\x02\x02\u043F\u0440\x05\xCCg\x02\u0440\xA9\x03\x02\x02\x02\u0441" +
		"\u0446\x07A\x02\x02\u0442\u0446\x070\x02\x02\u0443\u0446\x07H\x02\x02" +
		"\u0444\u0446\x05\xCCg\x02\u0445\u0441\x03\x02\x02\x02\u0445\u0442\x03" +
		"\x02\x02\x02\u0445\u0443\x03\x02\x02\x02\u0445\u0444\x03\x02\x02\x02\u0446" +
		"\u0453\x03\x02\x02\x02\u0447\u0449\x07\x1B\x02\x02\u0448\u044A\x05\xA6" +
		"T\x02\u0449\u0448\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\u044F" +
		"\x03\x02\x02\x02\u044B\u044C\x07\x14\x02\x02\u044C\u044E\x05\xA6T\x02" +
		"\u044D\u044B\x03\x02\x02\x02\u044E\u0451\x03\x02\x02\x02\u044F\u044D\x03" +
		"\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u0452\x03\x02\x02\x02\u0451" +
		"\u044F\x03\x02\x02\x02\u0452\u0454\x07\x1C\x02\x02\u0453\u0447\x03\x02" +
		"\x02\x02\u0453\u0454\x03\x02\x02\x02\u0454\xAB\x03\x02\x02\x02\u0455\u0456" +
		"\x07_\x02\x02\u0456\u0459\x05\xB0Y\x02\u0457\u0458\x07`\x02\x02\u0458" +
		"\u045A\x05\xA6T\x02\u0459\u0457\x03\x02\x02\x02\u0459\u045A\x03\x02\x02" +
		"\x02\u045A\xAD\x03\x02\x02\x02\u045B\u045C\x05\xB0Y\x02\u045C\u045D\x07" +
		"`\x02\x02\u045D\u045E\x05\xA6T\x02\u045E\xAF\x03\x02\x02\x02\u045F\u0467" +
		"\x05\xCCg\x02\u0460\u0467\x05\xA8U\x02\u0461\u0467\x05\xB2Z\x02\u0462" +
		"\u0463\x07\x1B\x02\x02\u0463\u0464\x05\xB2Z\x02\u0464\u0465\x07\x1C\x02" +
		"\x02\u0465\u0467\x03\x02\x02\x02\u0466\u045F\x03\x02\x02\x02\u0466\u0460" +
		"\x03\x02\x02\x02\u0466\u0461\x03\x02\x02\x02\u0466\u0462\x03\x02\x02\x02" +
		"\u0467\xB1\x03\x02\x02\x02\u0468\u046D\x05\xCCg\x02\u0469\u046A\x07\x14" +
		"\x02\x02\u046A\u046C\x05\xCCg\x02\u046B\u0469\x03\x02\x02\x02\u046C\u046F" +
		"\x03\x02\x02\x02\u046D\u046B\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02" +
		"\u046E\xB3\x03\x02\x02\x02\u046F\u046D\x03\x02\x02\x02\u0470\u0471\x05" +
		"\xA6T\x02\u0471\u0472\x07a\x02\x02\u0472\u0473\x05\xCCg\x02\u0473\xB5" +
		"\x03\x02\x02\x02\u0474\u0475\x05\xCCg\x02\u0475\u0476\x07>\x02\x02\u0476" +
		"\xB7\x03\x02\x02\x02\u0477\u0478\x07b\x02\x02\u0478\u047C\x05\xA6T\x02" +
		"\u0479\u047B\x05\xBA^\x02\u047A\u0479\x03\x02\x02\x02\u047B\u047E\x03" +
		"\x02\x02\x02\u047C\u047A\x03\x02\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D" +
		"\xB9\x03\x02\x02\x02\u047E\u047C\x03\x02\x02\x02\u047F\u0480\x07c\x02" +
		"\x02\u0480\u0481\x05\xC4c\x02\u0481\u0482\x05\xA2R\x02\u0482\u0486\x03" +
		"\x02\x02\x02\u0483\u0484\x07d\x02\x02\u0484\u0486\x05\xA2R\x02\u0485\u047F" +
		"\x03\x02\x02\x02\u0485\u0483\x03\x02\x02\x02\u0486\xBB\x03\x02\x02\x02" +
		"\u0487\u0488\x07*\x02\x02\u0488\u0489\x05\xCCg\x02\u0489\u048B\x07\x1B" +
		"\x02\x02\u048A\u048C\x05\xB2Z\x02\u048B\u048A\x03\x02\x02\x02\u048B\u048C" +
		"\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D\u048F\x07\x1C\x02\x02" +
		"\u048E\u0490\x05\xBE`\x02\u048F\u048E\x03\x02\x02\x02\u048F\u0490\x03" +
		"\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u0492\x05\xA2R\x02\u0492" +
		"\xBD\x03\x02\x02\x02\u0493\u0494\x07e\x02\x02\u0494\u0495\x05\xB2Z\x02" +
		"\u0495\xBF\x03\x02\x02\x02\u0496\u0499\x07\x1F\x02\x02\u0497\u049A\x05" +
		"\xA2R\x02\u0498\u049A\x05\xA6T\x02\u0499\u0497\x03\x02\x02\x02\u0499\u0498" +
		"\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u049E\x05\xA6T\x02" +
		"\u049C\u049F\x05\xA2R\x02\u049D\u049F\x05\xA6T\x02\u049E\u049C\x03\x02" +
		"\x02\x02\u049E\u049D\x03\x02\x02\x02\u049F\u04A0\x03\x02\x02\x02\u04A0" +
		"\u04A1\x05\xA2R\x02\u04A1\xC1\x03\x02\x02\x02\u04A2\u04A3\x077\x02\x02" +
		"\u04A3\u04A4\x05\xA6T\x02\u04A4\u04A5\x05\xA2R\x02\u04A5\xC3\x03\x02\x02" +
		"\x02\u04A6\u04AC\x05\xD6l\x02\u04A7\u04AC\x07r\x02\x02\u04A8\u04AC\x07" +
		"s\x02\x02\u04A9\u04AC\x05\xCEh\x02\u04AA\u04AC\x07q\x02\x02\u04AB\u04A6" +
		"\x03\x02\x02\x02\u04AB\u04A7\x03\x02\x02\x02\u04AB\u04A8\x03\x02\x02\x02" +
		"\u04AB\u04A9\x03\x02\x02\x02\u04AB\u04AA\x03\x02\x02\x02\u04AC\xC5\x03" +
		"\x02\x02\x02\u04AD\u04AF\x07\x1B\x02\x02\u04AE\u04B0\x05\x92J\x02\u04AF" +
		"\u04AE\x03\x02\x02\x02\u04AF\u04B0\x03\x02\x02\x02\u04B0\u04B7\x03\x02" +
		"\x02\x02\u04B1\u04B3\x07\x14\x02\x02\u04B2\u04B4\x05\x92J\x02\u04B3\u04B2" +
		"\x03\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04B6\x03\x02\x02\x02" +
		"\u04B5\u04B1\x03\x02\x02\x02\u04B6\u04B9\x03\x02\x02\x02\u04B7\u04B5\x03" +
		"\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8\u04BA\x03\x02\x02\x02\u04B9" +
		"\u04B7\x03\x02\x02\x02\u04BA\u04C8\x07\x1C\x02\x02\u04BB\u04C4\x07.\x02" +
		"\x02\u04BC\u04C1\x05\x92J\x02\u04BD\u04BE\x07\x14\x02\x02\u04BE\u04C0" +
		"\x05\x92J\x02\u04BF\u04BD\x03\x02\x02\x02\u04C0\u04C3\x03\x02\x02\x02" +
		"\u04C1\u04BF\x03\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02\u04C2\u04C5\x03" +
		"\x02\x02\x02\u04C3\u04C1\x03\x02\x02\x02\u04C4\u04BC\x03\x02\x02\x02\u04C4" +
		"\u04C5\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C8\x07/\x02" +
		"\x02\u04C7\u04AD\x03\x02\x02\x02\u04C7\u04BB\x03\x02\x02\x02\u04C8\xC7" +
		"\x03\x02\x02\x02\u04C9\u04CC\x05\x8CG\x02\u04CA\u04CC\x05P)\x02\u04CB" +
		"\u04C9\x03\x02\x02\x02\u04CB\u04CA\x03\x02\x02\x02\u04CC\xC9\x03\x02\x02" +
		"\x02\u04CD\u04CF\t\x10\x02\x02\u04CE\u04D0\x07t\x02\x02\u04CF\u04CE\x03" +
		"\x02\x02\x02\u04CF\u04D0\x03\x02\x02\x02\u04D0\xCB\x03\x02\x02\x02\u04D1" +
		"\u04D2\t\x11\x02\x02\u04D2\xCD\x03\x02\x02\x02\u04D3\u04D5\x07u\x02\x02" +
		"\u04D4\u04D3\x03\x02\x02\x02\u04D5\u04D6\x03\x02\x02\x02\u04D6\u04D4\x03" +
		"\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02\u04D7\xCF\x03\x02\x02\x02\u04D8" +
		"\u04D9\x07h\x02\x02\u04D9\xD1\x03\x02\x02\x02\u04DA\u04DB\x07i\x02\x02" +
		"\u04DB\xD3\x03\x02\x02\x02\u04DC\u04E8\x07j\x02\x02\u04DD\u04DE\x07\x1B" +
		"\x02\x02\u04DE\u04E3\x05P)\x02\u04DF\u04E0\x07\x14\x02\x02\u04E0\u04E2" +
		"\x05P)\x02\u04E1\u04DF\x03\x02\x02\x02\u04E2\u04E5\x03\x02\x02\x02\u04E3" +
		"\u04E1\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02\x02\u04E4\u04E6\x03\x02" +
		"\x02\x02\u04E5\u04E3\x03\x02\x02\x02\u04E6\u04E7\x07\x1C\x02\x02\u04E7" +
		"\u04E9\x03\x02\x02\x02\u04E8\u04DD\x03\x02\x02\x02\u04E8\u04E9\x03\x02" +
		"\x02\x02\u04E9\xD5\x03\x02\x02\x02\u04EA\u04EC\x07\x8F\x02\x02\u04EB\u04EA" +
		"\x03\x02\x02\x02\u04EC\u04ED\x03\x02\x02\x02\u04ED\u04EB\x03\x02\x02\x02" +
		"\u04ED\u04EE\x03\x02\x02\x02\u04EE\xD7\x03\x02\x02\x02\x8E\xE2\xE4\xEC" +
		"\xF2\xF7\xFB\u0100\u0106\u010A\u010D\u0112\u0118\u011F\u0123\u0130\u0138" +
		"\u013D\u0147\u014A\u0150\u0158\u015B\u0166\u0170\u0172\u0178\u0193\u0196" +
		"\u01A1\u01A6\u01AB\u01B9\u01BC\u01C3\u01C7\u01C9\u01CE\u01D3\u01D6\u01DC" +
		"\u01E0\u01E4\u01EB\u01FA\u01FC\u0203\u020D\u0213\u021E\u0221\u0227\u022A" +
		"\u0232\u0235\u023B\u023E\u0246\u0249\u024F\u0253\u0260\u0265\u026A\u0272" +
		"\u0277\u0285\u0287\u028C\u0296\u02AC\u02B8\u02BF\u02C3\u02C6\u02D8\u02E1" +
		"\u02E5\u02E8\u02F4\u02F9\u0300\u0306\u031C\u0332\u0336\u033B\u033F\u0343" +
		"\u0348\u034D\u0351\u035E\u036A\u0374\u0388\u03BE\u03C2\u03D2\u03D4\u03DE" +
		"\u03E6\u03E9\u03ED\u03F0\u03F2\u03FB\u0403\u0407\u040F\u0413\u0415\u0420" +
		"\u0436\u043B\u0445\u0449\u044F\u0453\u0459\u0466\u046D\u047C\u0485\u048B" +
		"\u048F\u0499\u049E\u04AB\u04AF\u04B3\u04B7\u04C1\u04C4\u04C7\u04CB\u04CF" +
		"\u04D6\u04E3\u04E8\u04ED";
	public static readonly _serializedATN: string = Utils.join(
		[
			SolidityParser._serializedATNSegment0,
			SolidityParser._serializedATNSegment1,
			SolidityParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SolidityParser.__ATN) {
			SolidityParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SolidityParser._serializedATN));
		}

		return SolidityParser.__ATN;
	}

}

export class SourceUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(SolidityParser.EOF, 0); }
	public pragmaDirective(): PragmaDirectiveContext[];
	public pragmaDirective(i: number): PragmaDirectiveContext;
	public pragmaDirective(i?: number): PragmaDirectiveContext | PragmaDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PragmaDirectiveContext);
		} else {
			return this.getRuleContext(i, PragmaDirectiveContext);
		}
	}
	public importDirective(): ImportDirectiveContext[];
	public importDirective(i: number): ImportDirectiveContext;
	public importDirective(i?: number): ImportDirectiveContext | ImportDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDirectiveContext);
		} else {
			return this.getRuleContext(i, ImportDirectiveContext);
		}
	}
	public contractDefinition(): ContractDefinitionContext[];
	public contractDefinition(i: number): ContractDefinitionContext;
	public contractDefinition(i?: number): ContractDefinitionContext | ContractDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractDefinitionContext);
		} else {
			return this.getRuleContext(i, ContractDefinitionContext);
		}
	}
	public enumDefinition(): EnumDefinitionContext[];
	public enumDefinition(i: number): EnumDefinitionContext;
	public enumDefinition(i?: number): EnumDefinitionContext | EnumDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumDefinitionContext);
		} else {
			return this.getRuleContext(i, EnumDefinitionContext);
		}
	}
	public structDefinition(): StructDefinitionContext[];
	public structDefinition(i: number): StructDefinitionContext;
	public structDefinition(i?: number): StructDefinitionContext | StructDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDefinitionContext);
		} else {
			return this.getRuleContext(i, StructDefinitionContext);
		}
	}
	public functionDefinition(): FunctionDefinitionContext[];
	public functionDefinition(i: number): FunctionDefinitionContext;
	public functionDefinition(i?: number): FunctionDefinitionContext | FunctionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDefinitionContext);
		} else {
			return this.getRuleContext(i, FunctionDefinitionContext);
		}
	}
	public fileLevelConstant(): FileLevelConstantContext[];
	public fileLevelConstant(i: number): FileLevelConstantContext;
	public fileLevelConstant(i?: number): FileLevelConstantContext | FileLevelConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FileLevelConstantContext);
		} else {
			return this.getRuleContext(i, FileLevelConstantContext);
		}
	}
	public customErrorDefinition(): CustomErrorDefinitionContext[];
	public customErrorDefinition(i: number): CustomErrorDefinitionContext;
	public customErrorDefinition(i?: number): CustomErrorDefinitionContext | CustomErrorDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CustomErrorDefinitionContext);
		} else {
			return this.getRuleContext(i, CustomErrorDefinitionContext);
		}
	}
	public typeDefinition(): TypeDefinitionContext[];
	public typeDefinition(i: number): TypeDefinitionContext;
	public typeDefinition(i?: number): TypeDefinitionContext | TypeDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDefinitionContext);
		} else {
			return this.getRuleContext(i, TypeDefinitionContext);
		}
	}
	public usingForDeclaration(): UsingForDeclarationContext[];
	public usingForDeclaration(i: number): UsingForDeclarationContext;
	public usingForDeclaration(i?: number): UsingForDeclarationContext | UsingForDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UsingForDeclarationContext);
		} else {
			return this.getRuleContext(i, UsingForDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_sourceUnit; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSourceUnit) {
			listener.enterSourceUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSourceUnit) {
			listener.exitSourceUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSourceUnit) {
			return visitor.visitSourceUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaDirectiveContext extends ParserRuleContext {
	public pragmaName(): PragmaNameContext {
		return this.getRuleContext(0, PragmaNameContext);
	}
	public pragmaValue(): PragmaValueContext | undefined {
		return this.tryGetRuleContext(0, PragmaValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaDirective; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaDirective) {
			listener.enterPragmaDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaDirective) {
			listener.exitPragmaDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaDirective) {
			return visitor.visitPragmaDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaName) {
			listener.enterPragmaName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaName) {
			listener.exitPragmaName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaName) {
			return visitor.visitPragmaName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaValueContext extends ParserRuleContext {
	public version(): VersionContext | undefined {
		return this.tryGetRuleContext(0, VersionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaValue) {
			listener.enterPragmaValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaValue) {
			listener.exitPragmaValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaValue) {
			return visitor.visitPragmaValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionContext extends ParserRuleContext {
	public versionConstraint(): VersionConstraintContext[];
	public versionConstraint(i: number): VersionConstraintContext;
	public versionConstraint(i?: number): VersionConstraintContext | VersionConstraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VersionConstraintContext);
		} else {
			return this.getRuleContext(i, VersionConstraintContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_version; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersion) {
			listener.enterVersion(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersion) {
			listener.exitVersion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersion) {
			return visitor.visitVersion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_versionOperator; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersionOperator) {
			listener.enterVersionOperator(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersionOperator) {
			listener.exitVersionOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersionOperator) {
			return visitor.visitVersionOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionConstraintContext extends ParserRuleContext {
	public VersionLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.VersionLiteral, 0); }
	public versionOperator(): VersionOperatorContext | undefined {
		return this.tryGetRuleContext(0, VersionOperatorContext);
	}
	public DecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.DecimalNumber, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_versionConstraint; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersionConstraint) {
			listener.enterVersionConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersionConstraint) {
			listener.exitVersionConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersionConstraint) {
			return visitor.visitVersionConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDirectiveContext extends ParserRuleContext {
	public importPath(): ImportPathContext {
		return this.getRuleContext(0, ImportPathContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importDirective; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterImportDirective) {
			listener.enterImportDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitImportDirective) {
			listener.exitImportDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportDirective) {
			return visitor.visitImportDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportPathContext extends ParserRuleContext {
	public StringLiteralFragment(): TerminalNode { return this.getToken(SolidityParser.StringLiteralFragment, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importPath; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterImportPath) {
			listener.enterImportPath(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitImportPath) {
			listener.exitImportPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportPath) {
			return visitor.visitImportPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public inheritanceSpecifier(): InheritanceSpecifierContext[];
	public inheritanceSpecifier(i: number): InheritanceSpecifierContext;
	public inheritanceSpecifier(i?: number): InheritanceSpecifierContext | InheritanceSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InheritanceSpecifierContext);
		} else {
			return this.getRuleContext(i, InheritanceSpecifierContext);
		}
	}
	public contractPart(): ContractPartContext[];
	public contractPart(i: number): ContractPartContext;
	public contractPart(i?: number): ContractPartContext | ContractPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractPartContext);
		} else {
			return this.getRuleContext(i, ContractPartContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_contractDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContractDefinition) {
			listener.enterContractDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContractDefinition) {
			listener.exitContractDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContractDefinition) {
			return visitor.visitContractDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InheritanceSpecifierContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getRuleContext(0, UserDefinedTypeNameContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inheritanceSpecifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterInheritanceSpecifier) {
			listener.enterInheritanceSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitInheritanceSpecifier) {
			listener.exitInheritanceSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInheritanceSpecifier) {
			return visitor.visitInheritanceSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractPartContext extends ParserRuleContext {
	public stateVariableDeclaration(): StateVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StateVariableDeclarationContext);
	}
	public usingForDeclaration(): UsingForDeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingForDeclarationContext);
	}
	public structDefinition(): StructDefinitionContext | undefined {
		return this.tryGetRuleContext(0, StructDefinitionContext);
	}
	public modifierDefinition(): ModifierDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ModifierDefinitionContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public eventDefinition(): EventDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EventDefinitionContext);
	}
	public enumDefinition(): EnumDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EnumDefinitionContext);
	}
	public customErrorDefinition(): CustomErrorDefinitionContext | undefined {
		return this.tryGetRuleContext(0, CustomErrorDefinitionContext);
	}
	public typeDefinition(): TypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, TypeDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_contractPart; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContractPart) {
			listener.enterContractPart(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContractPart) {
			listener.exitContractPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContractPart) {
			return visitor.visitContractPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateVariableDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public StaticKeyword(): TerminalNode[];
	public StaticKeyword(i: number): TerminalNode;
	public StaticKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.StaticKeyword);
		} else {
			return this.getToken(SolidityParser.StaticKeyword, i);
		}
	}
	public PublicKeyword(): TerminalNode[];
	public PublicKeyword(i: number): TerminalNode;
	public PublicKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PublicKeyword);
		} else {
			return this.getToken(SolidityParser.PublicKeyword, i);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public PrivateKeyword(): TerminalNode[];
	public PrivateKeyword(i: number): TerminalNode;
	public PrivateKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PrivateKeyword);
		} else {
			return this.getToken(SolidityParser.PrivateKeyword, i);
		}
	}
	public ConstantKeyword(): TerminalNode[];
	public ConstantKeyword(i: number): TerminalNode;
	public ConstantKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ConstantKeyword);
		} else {
			return this.getToken(SolidityParser.ConstantKeyword, i);
		}
	}
	public ImmutableKeyword(): TerminalNode[];
	public ImmutableKeyword(i: number): TerminalNode;
	public ImmutableKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ImmutableKeyword);
		} else {
			return this.getToken(SolidityParser.ImmutableKeyword, i);
		}
	}
	public overrideSpecifier(): OverrideSpecifierContext[];
	public overrideSpecifier(i: number): OverrideSpecifierContext;
	public overrideSpecifier(i?: number): OverrideSpecifierContext | OverrideSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSpecifierContext);
		} else {
			return this.getRuleContext(i, OverrideSpecifierContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stateVariableDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStateVariableDeclaration) {
			listener.enterStateVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStateVariableDeclaration) {
			listener.exitStateVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStateVariableDeclaration) {
			return visitor.visitStateVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileLevelConstantContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public ConstantKeyword(): TerminalNode { return this.getToken(SolidityParser.ConstantKeyword, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_fileLevelConstant; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFileLevelConstant) {
			listener.enterFileLevelConstant(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFileLevelConstant) {
			listener.exitFileLevelConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFileLevelConstant) {
			return visitor.visitFileLevelConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CustomErrorDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_customErrorDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterCustomErrorDefinition) {
			listener.enterCustomErrorDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitCustomErrorDefinition) {
			listener.exitCustomErrorDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitCustomErrorDefinition) {
			return visitor.visitCustomErrorDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefinitionContext extends ParserRuleContext {
	public TypeKeyword(): TerminalNode { return this.getToken(SolidityParser.TypeKeyword, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public elementaryTypeName(): ElementaryTypeNameContext {
		return this.getRuleContext(0, ElementaryTypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_typeDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTypeDefinition) {
			listener.enterTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTypeDefinition) {
			listener.exitTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTypeDefinition) {
			return visitor.visitTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingForDeclarationContext extends ParserRuleContext {
	public usingForObject(): UsingForObjectContext {
		return this.getRuleContext(0, UsingForObjectContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public GlobalKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.GlobalKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_usingForDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUsingForDeclaration) {
			listener.enterUsingForDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUsingForDeclaration) {
			listener.exitUsingForDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUsingForDeclaration) {
			return visitor.visitUsingForDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingForObjectContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
	}
	public usingForObjectDirective(): UsingForObjectDirectiveContext[];
	public usingForObjectDirective(i: number): UsingForObjectDirectiveContext;
	public usingForObjectDirective(i?: number): UsingForObjectDirectiveContext | UsingForObjectDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UsingForObjectDirectiveContext);
		} else {
			return this.getRuleContext(i, UsingForObjectDirectiveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_usingForObject; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUsingForObject) {
			listener.enterUsingForObject(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUsingForObject) {
			listener.exitUsingForObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUsingForObject) {
			return visitor.visitUsingForObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingForObjectDirectiveContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getRuleContext(0, UserDefinedTypeNameContext);
	}
	public userDefinableOperators(): UserDefinableOperatorsContext | undefined {
		return this.tryGetRuleContext(0, UserDefinableOperatorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_usingForObjectDirective; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUsingForObjectDirective) {
			listener.enterUsingForObjectDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUsingForObjectDirective) {
			listener.exitUsingForObjectDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUsingForObjectDirective) {
			return visitor.visitUsingForObjectDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserDefinableOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_userDefinableOperators; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUserDefinableOperators) {
			listener.enterUserDefinableOperators(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUserDefinableOperators) {
			listener.exitUserDefinableOperators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUserDefinableOperators) {
			return visitor.visitUserDefinableOperators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_structDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStructDefinition) {
			listener.enterStructDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStructDefinition) {
			listener.exitStructDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStructDefinition) {
			return visitor.visitStructDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public VirtualKeyword(): TerminalNode[];
	public VirtualKeyword(i: number): TerminalNode;
	public VirtualKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.VirtualKeyword);
		} else {
			return this.getToken(SolidityParser.VirtualKeyword, i);
		}
	}
	public overrideSpecifier(): OverrideSpecifierContext[];
	public overrideSpecifier(i: number): OverrideSpecifierContext;
	public overrideSpecifier(i?: number): OverrideSpecifierContext | OverrideSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSpecifierContext);
		} else {
			return this.getRuleContext(i, OverrideSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierDefinition) {
			listener.enterModifierDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierDefinition) {
			listener.exitModifierDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierDefinition) {
			return visitor.visitModifierDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierInvocationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierInvocation; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierInvocation) {
			listener.enterModifierInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierInvocation) {
			listener.exitModifierInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierInvocation) {
			return visitor.visitModifierInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public functionDescriptor(): FunctionDescriptorContext {
		return this.getRuleContext(0, FunctionDescriptorContext);
	}
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public modifierList(): ModifierListContext {
		return this.getRuleContext(0, ModifierListContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public returnParameters(): ReturnParametersContext | undefined {
		return this.tryGetRuleContext(0, ReturnParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDescriptorContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public ConstructorKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ConstructorKeyword, 0); }
	public FallbackKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.FallbackKeyword, 0); }
	public ReceiveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ReceiveKeyword, 0); }
	public onBounceKeyword(): OnBounceKeywordContext | undefined {
		return this.tryGetRuleContext(0, OnBounceKeywordContext);
	}
	public onTickTockKeyword(): OnTickTockKeywordContext | undefined {
		return this.tryGetRuleContext(0, OnTickTockKeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionDescriptor; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionDescriptor) {
			listener.enterFunctionDescriptor(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionDescriptor) {
			listener.exitFunctionDescriptor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionDescriptor) {
			return visitor.visitFunctionDescriptor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnParametersContext extends ParserRuleContext {
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_returnParameters; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterReturnParameters) {
			listener.enterReturnParameters(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitReturnParameters) {
			listener.exitReturnParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitReturnParameters) {
			return visitor.visitReturnParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierListContext extends ParserRuleContext {
	public ExternalKeyword(): TerminalNode[];
	public ExternalKeyword(i: number): TerminalNode;
	public ExternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ExternalKeyword);
		} else {
			return this.getToken(SolidityParser.ExternalKeyword, i);
		}
	}
	public PublicKeyword(): TerminalNode[];
	public PublicKeyword(i: number): TerminalNode;
	public PublicKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PublicKeyword);
		} else {
			return this.getToken(SolidityParser.PublicKeyword, i);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public PrivateKeyword(): TerminalNode[];
	public PrivateKeyword(i: number): TerminalNode;
	public PrivateKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PrivateKeyword);
		} else {
			return this.getToken(SolidityParser.PrivateKeyword, i);
		}
	}
	public InlineKeyword(): TerminalNode[];
	public InlineKeyword(i: number): TerminalNode;
	public InlineKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InlineKeyword);
		} else {
			return this.getToken(SolidityParser.InlineKeyword, i);
		}
	}
	public ResponsibleKeyword(): TerminalNode[];
	public ResponsibleKeyword(i: number): TerminalNode;
	public ResponsibleKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ResponsibleKeyword);
		} else {
			return this.getToken(SolidityParser.ResponsibleKeyword, i);
		}
	}
	public VirtualKeyword(): TerminalNode[];
	public VirtualKeyword(i: number): TerminalNode;
	public VirtualKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.VirtualKeyword);
		} else {
			return this.getToken(SolidityParser.VirtualKeyword, i);
		}
	}
	public stateMutability(): StateMutabilityContext[];
	public stateMutability(i: number): StateMutabilityContext;
	public stateMutability(i?: number): StateMutabilityContext | StateMutabilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateMutabilityContext);
		} else {
			return this.getRuleContext(i, StateMutabilityContext);
		}
	}
	public modifierInvocation(): ModifierInvocationContext[];
	public modifierInvocation(i: number): ModifierInvocationContext;
	public modifierInvocation(i?: number): ModifierInvocationContext | ModifierInvocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierInvocationContext);
		} else {
			return this.getRuleContext(i, ModifierInvocationContext);
		}
	}
	public overrideSpecifier(): OverrideSpecifierContext[];
	public overrideSpecifier(i: number): OverrideSpecifierContext;
	public overrideSpecifier(i?: number): OverrideSpecifierContext | OverrideSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSpecifierContext);
		} else {
			return this.getRuleContext(i, OverrideSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierList) {
			listener.enterModifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierList) {
			listener.exitModifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierList) {
			return visitor.visitModifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public eventParameterList(): EventParameterListContext {
		return this.getRuleContext(0, EventParameterListContext);
	}
	public AnonymousKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AnonymousKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventDefinition) {
			listener.enterEventDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventDefinition) {
			listener.exitEventDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventDefinition) {
			return visitor.visitEventDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_enumValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEnumValue) {
			listener.enterEnumValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEnumValue) {
			listener.exitEnumValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEnumValue) {
			return visitor.visitEnumValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public enumValue(): EnumValueContext[];
	public enumValue(i: number): EnumValueContext;
	public enumValue(i?: number): EnumValueContext | EnumValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumValueContext);
		} else {
			return this.getRuleContext(i, EnumValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_enumDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEnumDefinition) {
			listener.enterEnumDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEnumDefinition) {
			listener.exitEnumDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEnumDefinition) {
			return visitor.visitEnumDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_parameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventParameterListContext extends ParserRuleContext {
	public eventParameter(): EventParameterContext[];
	public eventParameter(i: number): EventParameterContext;
	public eventParameter(i?: number): EventParameterContext | EventParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventParameterContext);
		} else {
			return this.getRuleContext(i, EventParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventParameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventParameterList) {
			listener.enterEventParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventParameterList) {
			listener.exitEventParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventParameterList) {
			return visitor.visitEventParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public IndexedKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.IndexedKeyword, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventParameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventParameter) {
			listener.enterEventParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventParameter) {
			listener.exitEventParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventParameter) {
			return visitor.visitEventParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeParameterListContext extends ParserRuleContext {
	public functionTypeParameter(): FunctionTypeParameterContext[];
	public functionTypeParameter(i: number): FunctionTypeParameterContext;
	public functionTypeParameter(i?: number): FunctionTypeParameterContext | FunctionTypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionTypeParameterContext);
		} else {
			return this.getRuleContext(i, FunctionTypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeParameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionTypeParameterList) {
			listener.enterFunctionTypeParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionTypeParameterList) {
			listener.exitFunctionTypeParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeParameterList) {
			return visitor.visitFunctionTypeParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeParameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionTypeParameter) {
			listener.enterFunctionTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionTypeParameter) {
			listener.exitFunctionTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeParameter) {
			return visitor.visitFunctionTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
	}
	public mapping(): MappingContext | undefined {
		return this.tryGetRuleContext(0, MappingContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public functionTypeName(): FunctionTypeNameContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeNameContext);
	}
	public optionalTypeName(): OptionalTypeNameContext | undefined {
		return this.tryGetRuleContext(0, OptionalTypeNameContext);
	}
	public vectorTypeName(): VectorTypeNameContext | undefined {
		return this.tryGetRuleContext(0, VectorTypeNameContext);
	}
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_typeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserDefinedTypeNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_userDefinedTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUserDefinedTypeName) {
			listener.enterUserDefinedTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUserDefinedTypeName) {
			listener.exitUserDefinedTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUserDefinedTypeName) {
			return visitor.visitUserDefinedTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingKeyContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_mappingKey; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterMappingKey) {
			listener.enterMappingKey(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitMappingKey) {
			listener.exitMappingKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMappingKey) {
			return visitor.visitMappingKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingContext extends ParserRuleContext {
	public mappingKey(): MappingKeyContext {
		return this.getRuleContext(0, MappingKeyContext);
	}
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_mapping; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterMapping) {
			listener.enterMapping(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitMapping) {
			listener.exitMapping(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMapping) {
			return visitor.visitMapping(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeNameContext extends ParserRuleContext {
	public functionTypeParameterList(): FunctionTypeParameterListContext[];
	public functionTypeParameterList(i: number): FunctionTypeParameterListContext;
	public functionTypeParameterList(i?: number): FunctionTypeParameterListContext | FunctionTypeParameterListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionTypeParameterListContext);
		} else {
			return this.getRuleContext(i, FunctionTypeParameterListContext);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public ExternalKeyword(): TerminalNode[];
	public ExternalKeyword(i: number): TerminalNode;
	public ExternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ExternalKeyword);
		} else {
			return this.getToken(SolidityParser.ExternalKeyword, i);
		}
	}
	public stateMutability(): StateMutabilityContext[];
	public stateMutability(i: number): StateMutabilityContext;
	public stateMutability(i?: number): StateMutabilityContext | StateMutabilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateMutabilityContext);
		} else {
			return this.getRuleContext(i, StateMutabilityContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionTypeName) {
			listener.enterFunctionTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionTypeName) {
			listener.exitFunctionTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeName) {
			return visitor.visitFunctionTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StorageLocationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_storageLocation; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStorageLocation) {
			listener.enterStorageLocation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStorageLocation) {
			listener.exitStorageLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStorageLocation) {
			return visitor.visitStorageLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMutabilityContext extends ParserRuleContext {
	public PureKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PureKeyword, 0); }
	public ConstantKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ConstantKeyword, 0); }
	public ViewKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ViewKeyword, 0); }
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stateMutability; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStateMutability) {
			listener.enterStateMutability(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStateMutability) {
			listener.exitStateMutability(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStateMutability) {
			return visitor.visitStateMutability(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_block; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public repeatStatement(): RepeatStatementContext | undefined {
		return this.tryGetRuleContext(0, RepeatStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public forRangeStatement(): ForRangeStatementContext | undefined {
		return this.tryGetRuleContext(0, ForRangeStatementContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public inlineAssemblyStatement(): InlineAssemblyStatementContext | undefined {
		return this.tryGetRuleContext(0, InlineAssemblyStatementContext);
	}
	public doWhileStatement(): DoWhileStatementContext | undefined {
		return this.tryGetRuleContext(0, DoWhileStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public emitStatement(): EmitStatementContext | undefined {
		return this.tryGetRuleContext(0, EmitStatementContext);
	}
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	public uncheckedStatement(): UncheckedStatementContext | undefined {
		return this.tryGetRuleContext(0, UncheckedStatementContext);
	}
	public revertStatement(): RevertStatementContext | undefined {
		return this.tryGetRuleContext(0, RevertStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_statement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeatStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_repeatStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterRepeatStatement) {
			listener.enterRepeatStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitRepeatStatement) {
			listener.exitRepeatStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitRepeatStatement) {
			return visitor.visitRepeatStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleStatementContext extends ParserRuleContext {
	public variableDeclarationStatement(): VariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_simpleStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSimpleStatement) {
			listener.enterSimpleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSimpleStatement) {
			listener.exitSimpleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSimpleStatement) {
			return visitor.visitSimpleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UncheckedStatementContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_uncheckedStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUncheckedStatement) {
			listener.enterUncheckedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUncheckedStatement) {
			listener.exitUncheckedStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUncheckedStatement) {
			return visitor.visitUncheckedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForRangeStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_forRangeStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterForRangeStatement) {
			listener.enterForRangeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitForRangeStatement) {
			listener.exitForRangeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitForRangeStatement) {
			return visitor.visitForRangeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineAssemblyStatementContext extends ParserRuleContext {
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	public StringLiteralFragment(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.StringLiteralFragment, 0); }
	public inlineAssemblyStatementFlag(): InlineAssemblyStatementFlagContext | undefined {
		return this.tryGetRuleContext(0, InlineAssemblyStatementFlagContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inlineAssemblyStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterInlineAssemblyStatement) {
			listener.enterInlineAssemblyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitInlineAssemblyStatement) {
			listener.exitInlineAssemblyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInlineAssemblyStatement) {
			return visitor.visitInlineAssemblyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineAssemblyStatementFlagContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inlineAssemblyStatementFlag; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterInlineAssemblyStatementFlag) {
			listener.enterInlineAssemblyStatementFlag(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitInlineAssemblyStatementFlag) {
			listener.exitInlineAssemblyStatementFlag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInlineAssemblyStatementFlag) {
			return visitor.visitInlineAssemblyStatementFlag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWhileStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_doWhileStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterDoWhileStatement) {
			listener.enterDoWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitDoWhileStatement) {
			listener.exitDoWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitDoWhileStatement) {
			return visitor.visitDoWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public ContinueKeyword(): TerminalNode { return this.getToken(SolidityParser.ContinueKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BreakKeyword(): TerminalNode { return this.getToken(SolidityParser.BreakKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmitStatementContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_emitStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEmitStatement) {
			listener.enterEmitStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEmitStatement) {
			listener.exitEmitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEmitStatement) {
			return visitor.visitEmitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RevertStatementContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_revertStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterRevertStatement) {
			listener.enterRevertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitRevertStatement) {
			listener.exitRevertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitRevertStatement) {
			return visitor.visitRevertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationStatementContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclarationStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclarationStatement) {
			listener.enterVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclarationStatement) {
			listener.exitVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationStatement) {
			return visitor.visitVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementaryTypeNameContext extends ParserRuleContext {
	public Int(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Int, 0); }
	public Uint(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Uint, 0); }
	public Byte(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Byte, 0); }
	public Fixed(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Fixed, 0); }
	public Ufixed(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Ufixed, 0); }
	public TvmCell(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.TvmCell, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_elementaryTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterElementaryTypeName) {
			listener.enterElementaryTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitElementaryTypeName) {
			listener.exitElementaryTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitElementaryTypeName) {
			return visitor.visitElementaryTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalTypeNameContext extends ParserRuleContext {
	public typeName(): TypeNameContext[];
	public typeName(i: number): TypeNameContext;
	public typeName(i?: number): TypeNameContext | TypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNameContext);
		} else {
			return this.getRuleContext(i, TypeNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_optionalTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterOptionalTypeName) {
			listener.enterOptionalTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitOptionalTypeName) {
			listener.exitOptionalTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitOptionalTypeName) {
			return visitor.visitOptionalTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VectorTypeNameContext extends ParserRuleContext {
	public typeName(): TypeNameContext[];
	public typeName(i: number): TypeNameContext;
	public typeName(i?: number): TypeNameContext | TypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNameContext);
		} else {
			return this.getRuleContext(i, TypeNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_vectorTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVectorTypeName) {
			listener.enterVectorTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVectorTypeName) {
			listener.exitVectorTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVectorTypeName) {
			return visitor.visitVectorTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public nameValueList(): NameValueListContext | undefined {
		return this.tryGetRuleContext(0, NameValueListContext);
	}
	public nameValueBlockStatement(): NameValueBlockStatementContext | undefined {
		return this.tryGetRuleContext(0, NameValueBlockStatementContext);
	}
	public functionCallArguments(): FunctionCallArgumentsContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallArgumentsContext);
	}
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BooleanLiteral, 0); }
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	public hexLiteral(): HexLiteralContext | undefined {
		return this.tryGetRuleContext(0, HexLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public TypeKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.TypeKeyword, 0); }
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	public tupleExpression(): TupleExpressionContext | undefined {
		return this.tryGetRuleContext(0, TupleExpressionContext);
	}
	public typeNameExpression(): TypeNameExpressionContext | undefined {
		return this.tryGetRuleContext(0, TypeNameExpressionContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameValueBlockStatementContext extends ParserRuleContext {
	public nameValueList(): NameValueListContext | undefined {
		return this.tryGetRuleContext(0, NameValueListContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_nameValueBlockStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNameValueBlockStatement) {
			listener.enterNameValueBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNameValueBlockStatement) {
			listener.exitNameValueBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNameValueBlockStatement) {
			return visitor.visitNameValueBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameValueListContext extends ParserRuleContext {
	public nameValue(): NameValueContext[];
	public nameValue(i: number): NameValueContext;
	public nameValue(i?: number): NameValueContext | NameValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameValueContext);
		} else {
			return this.getRuleContext(i, NameValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_nameValueList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNameValueList) {
			listener.enterNameValueList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNameValueList) {
			listener.exitNameValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNameValueList) {
			return visitor.visitNameValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameValueContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_nameValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNameValue) {
			listener.enterNameValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNameValue) {
			listener.exitNameValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNameValue) {
			return visitor.visitNameValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallArgumentsContext extends ParserRuleContext {
	public nameValueList(): NameValueListContext | undefined {
		return this.tryGetRuleContext(0, NameValueListContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionCallArguments; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionCallArguments) {
			listener.enterFunctionCallArguments(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionCallArguments) {
			listener.exitFunctionCallArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionCallArguments) {
			return visitor.visitFunctionCallArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public functionCallArguments(): FunctionCallArgumentsContext {
		return this.getRuleContext(0, FunctionCallArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyBlockContext extends ParserRuleContext {
	public assemblyItem(): AssemblyItemContext[];
	public assemblyItem(i: number): AssemblyItemContext;
	public assemblyItem(i?: number): AssemblyItemContext | AssemblyItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyItemContext);
		} else {
			return this.getRuleContext(i, AssemblyItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyBlock; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyBlock) {
			listener.enterAssemblyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyBlock) {
			listener.exitAssemblyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyBlock) {
			return visitor.visitAssemblyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyItemContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext | undefined {
		return this.tryGetRuleContext(0, AssemblyBlockContext);
	}
	public assemblyExpression(): AssemblyExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyLocalDefinition(): AssemblyLocalDefinitionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLocalDefinitionContext);
	}
	public assemblyAssignment(): AssemblyAssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssemblyAssignmentContext);
	}
	public assemblyStackAssignment(): AssemblyStackAssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssemblyStackAssignmentContext);
	}
	public labelDefinition(): LabelDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LabelDefinitionContext);
	}
	public assemblySwitch(): AssemblySwitchContext | undefined {
		return this.tryGetRuleContext(0, AssemblySwitchContext);
	}
	public assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyFunctionDefinitionContext);
	}
	public assemblyFor(): AssemblyForContext | undefined {
		return this.tryGetRuleContext(0, AssemblyForContext);
	}
	public assemblyIf(): AssemblyIfContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIfContext);
	}
	public BreakKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BreakKeyword, 0); }
	public ContinueKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ContinueKeyword, 0); }
	public LeaveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LeaveKeyword, 0); }
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public hexLiteral(): HexLiteralContext | undefined {
		return this.tryGetRuleContext(0, HexLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyItem; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyItem) {
			listener.enterAssemblyItem(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyItem) {
			listener.exitAssemblyItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyItem) {
			return visitor.visitAssemblyItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyExpressionContext extends ParserRuleContext {
	public assemblyCall(): AssemblyCallContext | undefined {
		return this.tryGetRuleContext(0, AssemblyCallContext);
	}
	public assemblyLiteral(): AssemblyLiteralContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLiteralContext);
	}
	public assemblyMember(): AssemblyMemberContext | undefined {
		return this.tryGetRuleContext(0, AssemblyMemberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyExpression) {
			listener.enterAssemblyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyExpression) {
			listener.exitAssemblyExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyExpression) {
			return visitor.visitAssemblyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyMemberContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyMember; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyMember) {
			listener.enterAssemblyMember(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyMember) {
			listener.exitAssemblyMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyMember) {
			return visitor.visitAssemblyMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyCallContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyExpression(): AssemblyExpressionContext[];
	public assemblyExpression(i: number): AssemblyExpressionContext;
	public assemblyExpression(i?: number): AssemblyExpressionContext | AssemblyExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyExpressionContext);
		} else {
			return this.getRuleContext(i, AssemblyExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyCall; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyCall) {
			listener.enterAssemblyCall(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyCall) {
			listener.exitAssemblyCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyCall) {
			return visitor.visitAssemblyCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyLocalDefinitionContext extends ParserRuleContext {
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		return this.getRuleContext(0, AssemblyIdentifierOrListContext);
	}
	public assemblyExpression(): AssemblyExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyLocalDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyLocalDefinition) {
			listener.enterAssemblyLocalDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyLocalDefinition) {
			listener.exitAssemblyLocalDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyLocalDefinition) {
			return visitor.visitAssemblyLocalDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyAssignmentContext extends ParserRuleContext {
	public assemblyIdentifierOrList(): AssemblyIdentifierOrListContext {
		return this.getRuleContext(0, AssemblyIdentifierOrListContext);
	}
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyAssignment; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyAssignment) {
			listener.enterAssemblyAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyAssignment) {
			listener.exitAssemblyAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyAssignment) {
			return visitor.visitAssemblyAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIdentifierOrListContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyMember(): AssemblyMemberContext | undefined {
		return this.tryGetRuleContext(0, AssemblyMemberContext);
	}
	public assemblyIdentifierList(): AssemblyIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIdentifierOrList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIdentifierOrList) {
			listener.enterAssemblyIdentifierOrList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIdentifierOrList) {
			listener.exitAssemblyIdentifierOrList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIdentifierOrList) {
			return visitor.visitAssemblyIdentifierOrList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIdentifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIdentifierList) {
			listener.enterAssemblyIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIdentifierList) {
			listener.exitAssemblyIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIdentifierList) {
			return visitor.visitAssemblyIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyStackAssignmentContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyStackAssignment; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyStackAssignment) {
			listener.enterAssemblyStackAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyStackAssignment) {
			listener.exitAssemblyStackAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyStackAssignment) {
			return visitor.visitAssemblyStackAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_labelDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterLabelDefinition) {
			listener.enterLabelDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitLabelDefinition) {
			listener.exitLabelDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitLabelDefinition) {
			return visitor.visitLabelDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblySwitchContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyCase(): AssemblyCaseContext[];
	public assemblyCase(i: number): AssemblyCaseContext;
	public assemblyCase(i?: number): AssemblyCaseContext | AssemblyCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyCaseContext);
		} else {
			return this.getRuleContext(i, AssemblyCaseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblySwitch; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblySwitch) {
			listener.enterAssemblySwitch(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblySwitch) {
			listener.exitAssemblySwitch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblySwitch) {
			return visitor.visitAssemblySwitch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyCaseContext extends ParserRuleContext {
	public assemblyLiteral(): AssemblyLiteralContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLiteralContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyCase; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyCase) {
			listener.enterAssemblyCase(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyCase) {
			listener.exitAssemblyCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyCase) {
			return visitor.visitAssemblyCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyFunctionDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	public assemblyIdentifierList(): AssemblyIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
	}
	public assemblyFunctionReturns(): AssemblyFunctionReturnsContext | undefined {
		return this.tryGetRuleContext(0, AssemblyFunctionReturnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFunctionDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFunctionDefinition) {
			listener.enterAssemblyFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFunctionDefinition) {
			listener.exitAssemblyFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFunctionDefinition) {
			return visitor.visitAssemblyFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyFunctionReturnsContext extends ParserRuleContext {
	public assemblyIdentifierList(): AssemblyIdentifierListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFunctionReturns; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFunctionReturns) {
			listener.enterAssemblyFunctionReturns(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFunctionReturns) {
			listener.exitAssemblyFunctionReturns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFunctionReturns) {
			return visitor.visitAssemblyFunctionReturns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyForContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext[];
	public assemblyExpression(i: number): AssemblyExpressionContext;
	public assemblyExpression(i?: number): AssemblyExpressionContext | AssemblyExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyExpressionContext);
		} else {
			return this.getRuleContext(i, AssemblyExpressionContext);
		}
	}
	public assemblyBlock(): AssemblyBlockContext[];
	public assemblyBlock(i: number): AssemblyBlockContext;
	public assemblyBlock(i?: number): AssemblyBlockContext | AssemblyBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyBlockContext);
		} else {
			return this.getRuleContext(i, AssemblyBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFor; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFor) {
			listener.enterAssemblyFor(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFor) {
			listener.exitAssemblyFor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFor) {
			return visitor.visitAssemblyFor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIfContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIf; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIf) {
			listener.enterAssemblyIf(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIf) {
			listener.exitAssemblyIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIf) {
			return visitor.visitAssemblyIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyLiteralContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public DecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.DecimalNumber, 0); }
	public HexNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.HexNumber, 0); }
	public hexLiteral(): HexLiteralContext | undefined {
		return this.tryGetRuleContext(0, HexLiteralContext);
	}
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyLiteral) {
			listener.enterAssemblyLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyLiteral) {
			listener.exitAssemblyLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyLiteral) {
			return visitor.visitAssemblyLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_tupleExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTupleExpression) {
			listener.enterTupleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTupleExpression) {
			listener.exitTupleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameExpressionContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_typeNameExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTypeNameExpression) {
			listener.enterTypeNameExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTypeNameExpression) {
			listener.exitTypeNameExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTypeNameExpression) {
			return visitor.visitTypeNameExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberLiteralContext extends ParserRuleContext {
	public DecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.DecimalNumber, 0); }
	public HexNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.HexNumber, 0); }
	public NumberUnit(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.NumberUnit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_numberLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNumberLiteral) {
			listener.enterNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNumberLiteral) {
			listener.exitNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public ReceiveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ReceiveKeyword, 0); }
	public ConstructorKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ConstructorKeyword, 0); }
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	public LeaveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LeaveKeyword, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_identifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HexLiteralContext extends ParserRuleContext {
	public HexLiteralFragment(): TerminalNode[];
	public HexLiteralFragment(i: number): TerminalNode;
	public HexLiteralFragment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.HexLiteralFragment);
		} else {
			return this.getToken(SolidityParser.HexLiteralFragment, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_hexLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterHexLiteral) {
			listener.enterHexLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitHexLiteral) {
			listener.exitHexLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitHexLiteral) {
			return visitor.visitHexLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnBounceKeywordContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_onBounceKeyword; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterOnBounceKeyword) {
			listener.enterOnBounceKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitOnBounceKeyword) {
			listener.exitOnBounceKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitOnBounceKeyword) {
			return visitor.visitOnBounceKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnTickTockKeywordContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_onTickTockKeyword; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterOnTickTockKeyword) {
			listener.enterOnTickTockKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitOnTickTockKeyword) {
			listener.exitOnTickTockKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitOnTickTockKeyword) {
			return visitor.visitOnTickTockKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideSpecifierContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext[];
	public userDefinedTypeName(i: number): UserDefinedTypeNameContext;
	public userDefinedTypeName(i?: number): UserDefinedTypeNameContext | UserDefinedTypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UserDefinedTypeNameContext);
		} else {
			return this.getRuleContext(i, UserDefinedTypeNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_overrideSpecifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterOverrideSpecifier) {
			listener.enterOverrideSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitOverrideSpecifier) {
			listener.exitOverrideSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitOverrideSpecifier) {
			return visitor.visitOverrideSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public StringLiteralFragment(): TerminalNode[];
	public StringLiteralFragment(i: number): TerminalNode;
	public StringLiteralFragment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.StringLiteralFragment);
		} else {
			return this.getToken(SolidityParser.StringLiteralFragment, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


