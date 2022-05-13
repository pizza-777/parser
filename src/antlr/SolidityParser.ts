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
	public static readonly T__104 = 105;
	public static readonly T__105 = 106;
	public static readonly Int = 107;
	public static readonly Uint = 108;
	public static readonly Byte = 109;
	public static readonly Fixed = 110;
	public static readonly Ufixed = 111;
	public static readonly TvmCell = 112;
	public static readonly BooleanLiteral = 113;
	public static readonly DecimalNumber = 114;
	public static readonly HexNumber = 115;
	public static readonly NumberUnit = 116;
	public static readonly HexLiteralFragment = 117;
	public static readonly ReservedKeyword = 118;
	public static readonly AnonymousKeyword = 119;
	public static readonly BreakKeyword = 120;
	public static readonly ConstantKeyword = 121;
	public static readonly ImmutableKeyword = 122;
	public static readonly ContinueKeyword = 123;
	public static readonly LeaveKeyword = 124;
	public static readonly ExternalKeyword = 125;
	public static readonly IndexedKeyword = 126;
	public static readonly InternalKeyword = 127;
	public static readonly PayableKeyword = 128;
	public static readonly PrivateKeyword = 129;
	public static readonly PublicKeyword = 130;
	public static readonly StaticKeyword = 131;
	public static readonly VirtualKeyword = 132;
	public static readonly PureKeyword = 133;
	public static readonly TypeKeyword = 134;
	public static readonly ViewKeyword = 135;
	public static readonly InlineKeyword = 136;
	public static readonly ResponsibleKeyword = 137;
	public static readonly ConstructorKeyword = 138;
	public static readonly FallbackKeyword = 139;
	public static readonly ReceiveKeyword = 140;
	public static readonly Identifier = 141;
	public static readonly StringLiteralFragment = 142;
	public static readonly VersionLiteral = 143;
	public static readonly WS = 144;
	public static readonly COMMENT = 145;
	public static readonly LINE_COMMENT = 146;
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
	public static readonly RULE_structDefinition = 18;
	public static readonly RULE_modifierDefinition = 19;
	public static readonly RULE_modifierInvocation = 20;
	public static readonly RULE_functionDefinition = 21;
	public static readonly RULE_functionDescriptor = 22;
	public static readonly RULE_returnParameters = 23;
	public static readonly RULE_modifierList = 24;
	public static readonly RULE_eventDefinition = 25;
	public static readonly RULE_enumValue = 26;
	public static readonly RULE_enumDefinition = 27;
	public static readonly RULE_parameterList = 28;
	public static readonly RULE_parameter = 29;
	public static readonly RULE_eventParameterList = 30;
	public static readonly RULE_eventParameter = 31;
	public static readonly RULE_functionTypeParameterList = 32;
	public static readonly RULE_functionTypeParameter = 33;
	public static readonly RULE_variableDeclaration = 34;
	public static readonly RULE_typeName = 35;
	public static readonly RULE_userDefinedTypeName = 36;
	public static readonly RULE_mappingKey = 37;
	public static readonly RULE_mapping = 38;
	public static readonly RULE_functionTypeName = 39;
	public static readonly RULE_storageLocation = 40;
	public static readonly RULE_stateMutability = 41;
	public static readonly RULE_block = 42;
	public static readonly RULE_statement = 43;
	public static readonly RULE_expressionStatement = 44;
	public static readonly RULE_ifStatement = 45;
	public static readonly RULE_tryStatement = 46;
	public static readonly RULE_catchClause = 47;
	public static readonly RULE_whileStatement = 48;
	public static readonly RULE_repeatStatement = 49;
	public static readonly RULE_simpleStatement = 50;
	public static readonly RULE_uncheckedStatement = 51;
	public static readonly RULE_forStatement = 52;
	public static readonly RULE_forRangeStatement = 53;
	public static readonly RULE_inlineAssemblyStatement = 54;
	public static readonly RULE_doWhileStatement = 55;
	public static readonly RULE_continueStatement = 56;
	public static readonly RULE_breakStatement = 57;
	public static readonly RULE_returnStatement = 58;
	public static readonly RULE_throwStatement = 59;
	public static readonly RULE_emitStatement = 60;
	public static readonly RULE_revertStatement = 61;
	public static readonly RULE_variableDeclarationStatement = 62;
	public static readonly RULE_variableDeclarationList = 63;
	public static readonly RULE_identifierList = 64;
	public static readonly RULE_elementaryTypeName = 65;
	public static readonly RULE_optionalTypeName = 66;
	public static readonly RULE_expression = 67;
	public static readonly RULE_primaryExpression = 68;
	public static readonly RULE_nameValueBlockStatement = 69;
	public static readonly RULE_expressionList = 70;
	public static readonly RULE_nameValueList = 71;
	public static readonly RULE_nameValue = 72;
	public static readonly RULE_functionCallArguments = 73;
	public static readonly RULE_functionCall = 74;
	public static readonly RULE_assemblyBlock = 75;
	public static readonly RULE_assemblyItem = 76;
	public static readonly RULE_assemblyExpression = 77;
	public static readonly RULE_assemblyMember = 78;
	public static readonly RULE_assemblyCall = 79;
	public static readonly RULE_assemblyLocalDefinition = 80;
	public static readonly RULE_assemblyAssignment = 81;
	public static readonly RULE_assemblyIdentifierOrList = 82;
	public static readonly RULE_assemblyIdentifierList = 83;
	public static readonly RULE_assemblyStackAssignment = 84;
	public static readonly RULE_labelDefinition = 85;
	public static readonly RULE_assemblySwitch = 86;
	public static readonly RULE_assemblyCase = 87;
	public static readonly RULE_assemblyFunctionDefinition = 88;
	public static readonly RULE_assemblyFunctionReturns = 89;
	public static readonly RULE_assemblyFor = 90;
	public static readonly RULE_assemblyIf = 91;
	public static readonly RULE_assemblyLiteral = 92;
	public static readonly RULE_subAssembly = 93;
	public static readonly RULE_tupleExpression = 94;
	public static readonly RULE_typeNameExpression = 95;
	public static readonly RULE_numberLiteral = 96;
	public static readonly RULE_identifier = 97;
	public static readonly RULE_hexLiteral = 98;
	public static readonly RULE_onBounceKeyword = 99;
	public static readonly RULE_overrideSpecifier = 100;
	public static readonly RULE_stringLiteral = 101;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceUnit", "pragmaDirective", "pragmaName", "pragmaValue", "version", 
		"versionOperator", "versionConstraint", "importDeclaration", "importDirective", 
		"importPath", "contractDefinition", "inheritanceSpecifier", "contractPart", 
		"stateVariableDeclaration", "fileLevelConstant", "customErrorDefinition", 
		"typeDefinition", "usingForDeclaration", "structDefinition", "modifierDefinition", 
		"modifierInvocation", "functionDefinition", "functionDescriptor", "returnParameters", 
		"modifierList", "eventDefinition", "enumValue", "enumDefinition", "parameterList", 
		"parameter", "eventParameterList", "eventParameter", "functionTypeParameterList", 
		"functionTypeParameter", "variableDeclaration", "typeName", "userDefinedTypeName", 
		"mappingKey", "mapping", "functionTypeName", "storageLocation", "stateMutability", 
		"block", "statement", "expressionStatement", "ifStatement", "tryStatement", 
		"catchClause", "whileStatement", "repeatStatement", "simpleStatement", 
		"uncheckedStatement", "forStatement", "forRangeStatement", "inlineAssemblyStatement", 
		"doWhileStatement", "continueStatement", "breakStatement", "returnStatement", 
		"throwStatement", "emitStatement", "revertStatement", "variableDeclarationStatement", 
		"variableDeclarationList", "identifierList", "elementaryTypeName", "optionalTypeName", 
		"expression", "primaryExpression", "nameValueBlockStatement", "expressionList", 
		"nameValueList", "nameValue", "functionCallArguments", "functionCall", 
		"assemblyBlock", "assemblyItem", "assemblyExpression", "assemblyMember", 
		"assemblyCall", "assemblyLocalDefinition", "assemblyAssignment", "assemblyIdentifierOrList", 
		"assemblyIdentifierList", "assemblyStackAssignment", "labelDefinition", 
		"assemblySwitch", "assemblyCase", "assemblyFunctionDefinition", "assemblyFunctionReturns", 
		"assemblyFor", "assemblyIf", "assemblyLiteral", "subAssembly", "tupleExpression", 
		"typeNameExpression", "numberLiteral", "identifier", "hexLiteral", "onBounceKeyword", 
		"overrideSpecifier", "stringLiteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'pragma'", "';'", "'solidity'", "'ton-solidity'", "'AbiHeader'", 
		"'msgValue'", "'ignoreIntOverflow'", "'experimental'", "'||'", "'^'", 
		"'~'", "'>='", "'>'", "'<'", "'<='", "'='", "'as'", "'import'", "'*'", 
		"'from'", "'{'", "','", "'}'", "'abstract'", "'contract'", "'interface'", 
		"'library'", "'is'", "'('", "')'", "'error'", "'using'", "'for'", "'struct'", 
		"'modifier'", "'function'", "'returns'", "'event'", "'enum'", "'['", "']'", 
		"'address'", "'.'", "'mapping'", "'=>'", "'memory'", "'storage'", "'calldata'", 
		"'if'", "'else'", "'try'", "'catch'", "'while'", "'repeat'", "'unchecked'", 
		"':'", "'assembly'", "'do'", "'return'", "'throw'", "'emit'", "'revert'", 
		"'var'", "'bool'", "'string'", "'byte'", "'optional('", "'++'", "'--'", 
		"'new'", "'+'", "'-'", "'after'", "'delete'", "'!'", "'**'", "'/'", "'%'", 
		"'<<'", "'>>'", "'&'", "'|'", "'=='", "'!='", "'&&'", "'?'", "'|='", "'^='", 
		"'&='", "'<<='", "'>>='", "'+='", "'-='", "'*='", "'/='", "'%='", "'let'", 
		"':='", "'=:'", "'switch'", "'case'", "'default'", "'->'", "'callback'", 
		"'onBounce'", "'override'", undefined, undefined, undefined, undefined, 
		undefined, "'TvmCell'", undefined, undefined, undefined, undefined, undefined, 
		undefined, "'anonymous'", "'break'", "'constant'", "'immutable'", "'continue'", 
		"'leave'", "'external'", "'indexed'", "'internal'", "'payable'", "'private'", 
		"'public'", "'static'", "'virtual'", "'pure'", "'type'", "'view'", "'inline'", 
		"'responsible'", "'constructor'", "'fallback'", "'receive'",
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
		undefined, undefined, "Int", "Uint", "Byte", "Fixed", "Ufixed", "TvmCell", 
		"BooleanLiteral", "DecimalNumber", "HexNumber", "NumberUnit", "HexLiteralFragment", 
		"ReservedKeyword", "AnonymousKeyword", "BreakKeyword", "ConstantKeyword", 
		"ImmutableKeyword", "ContinueKeyword", "LeaveKeyword", "ExternalKeyword", 
		"IndexedKeyword", "InternalKeyword", "PayableKeyword", "PrivateKeyword", 
		"PublicKeyword", "StaticKeyword", "VirtualKeyword", "PureKeyword", "TypeKeyword", 
		"ViewKeyword", "InlineKeyword", "ResponsibleKeyword", "ConstructorKeyword", 
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
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__0) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__17) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__23) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__25) | (1 << SolidityParser.T__26) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SolidityParser.T__33 - 34)) | (1 << (SolidityParser.T__35 - 34)) | (1 << (SolidityParser.T__38 - 34)) | (1 << (SolidityParser.T__41 - 34)) | (1 << (SolidityParser.T__43 - 34)) | (1 << (SolidityParser.T__47 - 34)) | (1 << (SolidityParser.T__61 - 34)) | (1 << (SolidityParser.T__62 - 34)) | (1 << (SolidityParser.T__63 - 34)) | (1 << (SolidityParser.T__64 - 34)))) !== 0) || _la === SolidityParser.T__65 || _la === SolidityParser.T__66 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.T__104 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.FallbackKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
				{
				this.state = 213;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 204;
					this.pragmaDirective();
					}
					break;

				case 2:
					{
					this.state = 205;
					this.importDirective();
					}
					break;

				case 3:
					{
					this.state = 206;
					this.contractDefinition();
					}
					break;

				case 4:
					{
					this.state = 207;
					this.enumDefinition();
					}
					break;

				case 5:
					{
					this.state = 208;
					this.structDefinition();
					}
					break;

				case 6:
					{
					this.state = 209;
					this.functionDefinition();
					}
					break;

				case 7:
					{
					this.state = 210;
					this.fileLevelConstant();
					}
					break;

				case 8:
					{
					this.state = 211;
					this.customErrorDefinition();
					}
					break;

				case 9:
					{
					this.state = 212;
					this.typeDefinition();
					}
					break;
				}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 218;
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
			this.state = 220;
			this.match(SolidityParser.T__0);
			this.state = 221;
			this.pragmaName();
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__11) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__14) | (1 << SolidityParser.T__15) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SolidityParser.T__67 - 68)) | (1 << (SolidityParser.T__68 - 68)) | (1 << (SolidityParser.T__69 - 68)) | (1 << (SolidityParser.T__70 - 68)) | (1 << (SolidityParser.T__71 - 68)) | (1 << (SolidityParser.T__72 - 68)) | (1 << (SolidityParser.T__73 - 68)) | (1 << (SolidityParser.T__74 - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)) | (1 << (SolidityParser.VersionLiteral - 138)))) !== 0)) {
				{
				this.state = 222;
				this.pragmaValue();
				}
			}

			this.state = 225;
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
			this.state = 232;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__2:
			case SolidityParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 227;
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
			case SolidityParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 228;
				this.match(SolidityParser.T__4);
				}
				break;
			case SolidityParser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 229;
				this.match(SolidityParser.T__5);
				}
				break;
			case SolidityParser.T__6:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 230;
				this.match(SolidityParser.T__6);
				}
				break;
			case SolidityParser.T__7:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 231;
				this.match(SolidityParser.T__7);
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
			this.state = 236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 234;
				this.version();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 235;
				this.expression(0);
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
			this.state = 238;
			this.versionConstraint();
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__8) | (1 << SolidityParser.T__9) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__11) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__14) | (1 << SolidityParser.T__15))) !== 0) || _la === SolidityParser.DecimalNumber || _la === SolidityParser.VersionLiteral) {
				{
				{
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__8) {
					{
					this.state = 239;
					this.match(SolidityParser.T__8);
					}
				}

				this.state = 242;
				this.versionConstraint();
				}
				}
				this.state = 247;
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
			this.state = 248;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__9) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__11) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__14) | (1 << SolidityParser.T__15))) !== 0))) {
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
			this.state = 258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__9) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__11) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__14) | (1 << SolidityParser.T__15))) !== 0)) {
					{
					this.state = 250;
					this.versionOperator();
					}
				}

				this.state = 253;
				this.match(SolidityParser.VersionLiteral);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__9) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__11) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__14) | (1 << SolidityParser.T__15))) !== 0)) {
					{
					this.state = 254;
					this.versionOperator();
					}
				}

				this.state = 257;
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
			this.state = 260;
			this.identifier();
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__16) {
				{
				this.state = 261;
				this.match(SolidityParser.T__16);
				this.state = 262;
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
			this.state = 301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 265;
				this.match(SolidityParser.T__17);
				this.state = 266;
				this.importPath();
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__16) {
					{
					this.state = 267;
					this.match(SolidityParser.T__16);
					this.state = 268;
					this.identifier();
					}
				}

				this.state = 271;
				this.match(SolidityParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 273;
				this.match(SolidityParser.T__17);
				this.state = 276;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.T__18:
					{
					this.state = 274;
					this.match(SolidityParser.T__18);
					}
					break;
				case SolidityParser.T__5:
				case SolidityParser.T__19:
				case SolidityParser.T__30:
				case SolidityParser.T__47:
				case SolidityParser.T__61:
				case SolidityParser.T__103:
				case SolidityParser.LeaveKeyword:
				case SolidityParser.PayableKeyword:
				case SolidityParser.ConstructorKeyword:
				case SolidityParser.ReceiveKeyword:
				case SolidityParser.Identifier:
					{
					this.state = 275;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__16) {
					{
					this.state = 278;
					this.match(SolidityParser.T__16);
					this.state = 279;
					this.identifier();
					}
				}

				this.state = 282;
				this.match(SolidityParser.T__19);
				this.state = 283;
				this.importPath();
				this.state = 284;
				this.match(SolidityParser.T__1);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 286;
				this.match(SolidityParser.T__17);
				this.state = 287;
				this.match(SolidityParser.T__20);
				this.state = 288;
				this.importDeclaration();
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__21) {
					{
					{
					this.state = 289;
					this.match(SolidityParser.T__21);
					this.state = 290;
					this.importDeclaration();
					}
					}
					this.state = 295;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 296;
				this.match(SolidityParser.T__22);
				this.state = 297;
				this.match(SolidityParser.T__19);
				this.state = 298;
				this.importPath();
				this.state = 299;
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
			this.state = 303;
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
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__23) {
				{
				this.state = 305;
				this.match(SolidityParser.T__23);
				}
			}

			this.state = 308;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__24) | (1 << SolidityParser.T__25) | (1 << SolidityParser.T__26))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 309;
			this.identifier();
			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__27) {
				{
				this.state = 310;
				this.match(SolidityParser.T__27);
				this.state = 311;
				this.inheritanceSpecifier();
				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__21) {
					{
					{
					this.state = 312;
					this.match(SolidityParser.T__21);
					this.state = 313;
					this.inheritanceSpecifier();
					}
					}
					this.state = 318;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 321;
			this.match(SolidityParser.T__20);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (SolidityParser.T__5 - 6)) | (1 << (SolidityParser.T__19 - 6)) | (1 << (SolidityParser.T__30 - 6)) | (1 << (SolidityParser.T__31 - 6)) | (1 << (SolidityParser.T__33 - 6)) | (1 << (SolidityParser.T__34 - 6)) | (1 << (SolidityParser.T__35 - 6)))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__38 - 38)) | (1 << (SolidityParser.T__41 - 38)) | (1 << (SolidityParser.T__43 - 38)) | (1 << (SolidityParser.T__47 - 38)) | (1 << (SolidityParser.T__61 - 38)) | (1 << (SolidityParser.T__62 - 38)) | (1 << (SolidityParser.T__63 - 38)) | (1 << (SolidityParser.T__64 - 38)) | (1 << (SolidityParser.T__65 - 38)) | (1 << (SolidityParser.T__66 - 38)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.T__104 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.FallbackKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
				{
				{
				this.state = 322;
				this.contractPart();
				}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 328;
			this.match(SolidityParser.T__22);
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
			this.state = 330;
			this.userDefinedTypeName();
			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__28) {
				{
				this.state = 331;
				this.match(SolidityParser.T__28);
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SolidityParser.T__67 - 68)) | (1 << (SolidityParser.T__68 - 68)) | (1 << (SolidityParser.T__69 - 68)) | (1 << (SolidityParser.T__70 - 68)) | (1 << (SolidityParser.T__71 - 68)) | (1 << (SolidityParser.T__72 - 68)) | (1 << (SolidityParser.T__73 - 68)) | (1 << (SolidityParser.T__74 - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
					{
					this.state = 332;
					this.expressionList();
					}
				}

				this.state = 335;
				this.match(SolidityParser.T__29);
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
			this.state = 347;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 338;
				this.stateVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 339;
				this.usingForDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 340;
				this.structDefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 341;
				this.modifierDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 342;
				this.functionDefinition();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 343;
				this.eventDefinition();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 344;
				this.enumDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 345;
				this.customErrorDefinition();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 346;
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
			this.state = 349;
			this.typeName(0);
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (SolidityParser.T__105 - 106)) | (1 << (SolidityParser.ConstantKeyword - 106)) | (1 << (SolidityParser.ImmutableKeyword - 106)) | (1 << (SolidityParser.InternalKeyword - 106)) | (1 << (SolidityParser.PrivateKeyword - 106)) | (1 << (SolidityParser.PublicKeyword - 106)) | (1 << (SolidityParser.StaticKeyword - 106)))) !== 0)) {
				{
				this.state = 357;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.StaticKeyword:
					{
					this.state = 350;
					this.match(SolidityParser.StaticKeyword);
					}
					break;
				case SolidityParser.PublicKeyword:
					{
					this.state = 351;
					this.match(SolidityParser.PublicKeyword);
					}
					break;
				case SolidityParser.InternalKeyword:
					{
					this.state = 352;
					this.match(SolidityParser.InternalKeyword);
					}
					break;
				case SolidityParser.PrivateKeyword:
					{
					this.state = 353;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;
				case SolidityParser.ConstantKeyword:
					{
					this.state = 354;
					this.match(SolidityParser.ConstantKeyword);
					}
					break;
				case SolidityParser.ImmutableKeyword:
					{
					this.state = 355;
					this.match(SolidityParser.ImmutableKeyword);
					}
					break;
				case SolidityParser.T__105:
					{
					this.state = 356;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 362;
			this.identifier();
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__15) {
				{
				this.state = 363;
				this.match(SolidityParser.T__15);
				this.state = 364;
				this.expression(0);
				}
			}

			this.state = 367;
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
			this.state = 369;
			this.typeName(0);
			this.state = 370;
			this.match(SolidityParser.ConstantKeyword);
			this.state = 371;
			this.identifier();
			this.state = 372;
			this.match(SolidityParser.T__15);
			this.state = 373;
			this.expression(0);
			this.state = 374;
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
			this.state = 376;
			this.match(SolidityParser.T__30);
			this.state = 377;
			this.identifier();
			this.state = 378;
			this.parameterList();
			this.state = 379;
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
			this.state = 381;
			this.match(SolidityParser.TypeKeyword);
			this.state = 382;
			this.identifier();
			this.state = 383;
			this.match(SolidityParser.T__27);
			this.state = 384;
			this.elementaryTypeName();
			this.state = 385;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this.match(SolidityParser.T__31);
			this.state = 388;
			this.userDefinedTypeName();
			this.state = 389;
			this.match(SolidityParser.T__32);
			this.state = 392;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__18:
				{
				this.state = 390;
				this.match(SolidityParser.T__18);
				}
				break;
			case SolidityParser.T__5:
			case SolidityParser.T__19:
			case SolidityParser.T__30:
			case SolidityParser.T__35:
			case SolidityParser.T__41:
			case SolidityParser.T__43:
			case SolidityParser.T__47:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.T__64:
			case SolidityParser.T__65:
			case SolidityParser.T__66:
			case SolidityParser.T__103:
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
				this.state = 391;
				this.typeName(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
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
	public structDefinition(): StructDefinitionContext {
		let _localctx: StructDefinitionContext = new StructDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SolidityParser.RULE_structDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(SolidityParser.T__33);
			this.state = 397;
			this.identifier();
			this.state = 398;
			this.match(SolidityParser.T__20);
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
				{
				this.state = 399;
				this.variableDeclaration();
				this.state = 400;
				this.match(SolidityParser.T__1);
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
					{
					{
					this.state = 401;
					this.variableDeclaration();
					this.state = 402;
					this.match(SolidityParser.T__1);
					}
					}
					this.state = 408;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 411;
			this.match(SolidityParser.T__22);
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
		this.enterRule(_localctx, 38, SolidityParser.RULE_modifierDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(SolidityParser.T__34);
			this.state = 414;
			this.identifier();
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__28) {
				{
				this.state = 415;
				this.parameterList();
				}
			}

			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__105 || _la === SolidityParser.VirtualKeyword) {
				{
				this.state = 420;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.VirtualKeyword:
					{
					this.state = 418;
					this.match(SolidityParser.VirtualKeyword);
					}
					break;
				case SolidityParser.T__105:
					{
					this.state = 419;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 427;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__1:
				{
				this.state = 425;
				this.match(SolidityParser.T__1);
				}
				break;
			case SolidityParser.T__20:
				{
				this.state = 426;
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
		this.enterRule(_localctx, 40, SolidityParser.RULE_modifierInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.identifier();
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__28) {
				{
				this.state = 430;
				this.match(SolidityParser.T__28);
				this.state = 432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SolidityParser.T__67 - 68)) | (1 << (SolidityParser.T__68 - 68)) | (1 << (SolidityParser.T__69 - 68)) | (1 << (SolidityParser.T__70 - 68)) | (1 << (SolidityParser.T__71 - 68)) | (1 << (SolidityParser.T__72 - 68)) | (1 << (SolidityParser.T__73 - 68)) | (1 << (SolidityParser.T__74 - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
					{
					this.state = 431;
					this.expressionList();
					}
				}

				this.state = 434;
				this.match(SolidityParser.T__29);
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
		this.enterRule(_localctx, 42, SolidityParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this.functionDescriptor();
			this.state = 438;
			this.parameterList();
			this.state = 439;
			this.modifierList();
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__36) {
				{
				this.state = 440;
				this.returnParameters();
				}
			}

			this.state = 445;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__1:
				{
				this.state = 443;
				this.match(SolidityParser.T__1);
				}
				break;
			case SolidityParser.T__20:
				{
				this.state = 444;
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
		this.enterRule(_localctx, 44, SolidityParser.RULE_functionDescriptor);
		let _la: number;
		try {
			this.state = 455;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__35:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 447;
				this.match(SolidityParser.T__35);
				this.state = 449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
					{
					this.state = 448;
					this.identifier();
					}
				}

				}
				break;
			case SolidityParser.ConstructorKeyword:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 451;
				this.match(SolidityParser.ConstructorKeyword);
				}
				break;
			case SolidityParser.FallbackKeyword:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 452;
				this.match(SolidityParser.FallbackKeyword);
				}
				break;
			case SolidityParser.ReceiveKeyword:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 453;
				this.match(SolidityParser.ReceiveKeyword);
				}
				break;
			case SolidityParser.T__104:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 454;
				this.onBounceKeyword();
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
		this.enterRule(_localctx, 46, SolidityParser.RULE_returnParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.match(SolidityParser.T__36);
			this.state = 458;
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
		this.enterRule(_localctx, 48, SolidityParser.RULE_modifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.T__105 - 104)) | (1 << (SolidityParser.ConstantKeyword - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.ExternalKeyword - 104)) | (1 << (SolidityParser.InternalKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.PrivateKeyword - 104)) | (1 << (SolidityParser.PublicKeyword - 104)) | (1 << (SolidityParser.VirtualKeyword - 104)) | (1 << (SolidityParser.PureKeyword - 104)) | (1 << (SolidityParser.ViewKeyword - 104)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (SolidityParser.InlineKeyword - 136)) | (1 << (SolidityParser.ResponsibleKeyword - 136)) | (1 << (SolidityParser.ConstructorKeyword - 136)) | (1 << (SolidityParser.ReceiveKeyword - 136)) | (1 << (SolidityParser.Identifier - 136)))) !== 0)) {
				{
				this.state = 470;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 460;
					this.match(SolidityParser.ExternalKeyword);
					}
					break;

				case 2:
					{
					this.state = 461;
					this.match(SolidityParser.PublicKeyword);
					}
					break;

				case 3:
					{
					this.state = 462;
					this.match(SolidityParser.InternalKeyword);
					}
					break;

				case 4:
					{
					this.state = 463;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;

				case 5:
					{
					this.state = 464;
					this.match(SolidityParser.InlineKeyword);
					}
					break;

				case 6:
					{
					this.state = 465;
					this.match(SolidityParser.ResponsibleKeyword);
					}
					break;

				case 7:
					{
					this.state = 466;
					this.match(SolidityParser.VirtualKeyword);
					}
					break;

				case 8:
					{
					this.state = 467;
					this.stateMutability();
					}
					break;

				case 9:
					{
					this.state = 468;
					this.modifierInvocation();
					}
					break;

				case 10:
					{
					this.state = 469;
					this.overrideSpecifier();
					}
					break;
				}
				}
				this.state = 474;
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
		this.enterRule(_localctx, 50, SolidityParser.RULE_eventDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.match(SolidityParser.T__37);
			this.state = 476;
			this.identifier();
			this.state = 477;
			this.eventParameterList();
			this.state = 479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.AnonymousKeyword) {
				{
				this.state = 478;
				this.match(SolidityParser.AnonymousKeyword);
				}
			}

			this.state = 481;
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
		this.enterRule(_localctx, 52, SolidityParser.RULE_enumValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
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
		this.enterRule(_localctx, 54, SolidityParser.RULE_enumDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this.match(SolidityParser.T__38);
			this.state = 486;
			this.identifier();
			this.state = 487;
			this.match(SolidityParser.T__20);
			this.state = 489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
				{
				this.state = 488;
				this.enumValue();
				}
			}

			this.state = 495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__21) {
				{
				{
				this.state = 491;
				this.match(SolidityParser.T__21);
				this.state = 492;
				this.enumValue();
				}
				}
				this.state = 497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 498;
			this.match(SolidityParser.T__22);
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
		this.enterRule(_localctx, 56, SolidityParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this.match(SolidityParser.T__28);
			this.state = 509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
				{
				this.state = 501;
				this.parameter();
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__21) {
					{
					{
					this.state = 502;
					this.match(SolidityParser.T__21);
					this.state = 503;
					this.parameter();
					}
					}
					this.state = 508;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 511;
			this.match(SolidityParser.T__29);
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
		this.enterRule(_localctx, 58, SolidityParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.typeName(0);
			this.state = 515;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 514;
				this.storageLocation();
				}
				break;
			}
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
				{
				this.state = 517;
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
		this.enterRule(_localctx, 60, SolidityParser.RULE_eventParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			this.match(SolidityParser.T__28);
			this.state = 529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
				{
				this.state = 521;
				this.eventParameter();
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__21) {
					{
					{
					this.state = 522;
					this.match(SolidityParser.T__21);
					this.state = 523;
					this.eventParameter();
					}
					}
					this.state = 528;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 531;
			this.match(SolidityParser.T__29);
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
		this.enterRule(_localctx, 62, SolidityParser.RULE_eventParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this.typeName(0);
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.IndexedKeyword) {
				{
				this.state = 534;
				this.match(SolidityParser.IndexedKeyword);
				}
			}

			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
				{
				this.state = 537;
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
		this.enterRule(_localctx, 64, SolidityParser.RULE_functionTypeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(SolidityParser.T__28);
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
				{
				this.state = 541;
				this.functionTypeParameter();
				this.state = 546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__21) {
					{
					{
					this.state = 542;
					this.match(SolidityParser.T__21);
					this.state = 543;
					this.functionTypeParameter();
					}
					}
					this.state = 548;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 551;
			this.match(SolidityParser.T__29);
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
		this.enterRule(_localctx, 66, SolidityParser.RULE_functionTypeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			this.typeName(0);
			this.state = 555;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (SolidityParser.T__45 - 46)) | (1 << (SolidityParser.T__46 - 46)) | (1 << (SolidityParser.T__47 - 46)))) !== 0)) {
				{
				this.state = 554;
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
		this.enterRule(_localctx, 68, SolidityParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
			this.typeName(0);
			this.state = 559;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 558;
				this.storageLocation();
				}
				break;
			}
			this.state = 561;
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
		let _startState: number = 70;
		this.enterRecursionRule(_localctx, 70, SolidityParser.RULE_typeName, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 564;
				this.elementaryTypeName();
				}
				break;

			case 2:
				{
				this.state = 565;
				this.userDefinedTypeName();
				}
				break;

			case 3:
				{
				this.state = 566;
				this.mapping();
				}
				break;

			case 4:
				{
				this.state = 567;
				this.functionTypeName();
				}
				break;

			case 5:
				{
				this.state = 568;
				this.optionalTypeName();
				}
				break;

			case 6:
				{
				this.state = 569;
				this.match(SolidityParser.T__41);
				this.state = 570;
				this.match(SolidityParser.PayableKeyword);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 581;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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
					this.state = 573;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 574;
					this.match(SolidityParser.T__39);
					this.state = 576;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SolidityParser.T__67 - 68)) | (1 << (SolidityParser.T__68 - 68)) | (1 << (SolidityParser.T__69 - 68)) | (1 << (SolidityParser.T__70 - 68)) | (1 << (SolidityParser.T__71 - 68)) | (1 << (SolidityParser.T__72 - 68)) | (1 << (SolidityParser.T__73 - 68)) | (1 << (SolidityParser.T__74 - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
						{
						this.state = 575;
						this.expression(0);
						}
					}

					this.state = 578;
					this.match(SolidityParser.T__40);
					}
					}
				}
				this.state = 583;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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
		this.enterRule(_localctx, 72, SolidityParser.RULE_userDefinedTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.identifier();
			this.state = 589;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 585;
					this.match(SolidityParser.T__42);
					this.state = 586;
					this.identifier();
					}
					}
				}
				this.state = 591;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
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
		this.enterRule(_localctx, 74, SolidityParser.RULE_mappingKey);
		try {
			this.state = 594;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__41:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.T__64:
			case SolidityParser.T__65:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.TvmCell:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 592;
				this.elementaryTypeName();
				}
				break;
			case SolidityParser.T__5:
			case SolidityParser.T__19:
			case SolidityParser.T__30:
			case SolidityParser.T__47:
			case SolidityParser.T__61:
			case SolidityParser.T__103:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 593;
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
		this.enterRule(_localctx, 76, SolidityParser.RULE_mapping);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 596;
			this.match(SolidityParser.T__43);
			this.state = 597;
			this.match(SolidityParser.T__28);
			this.state = 598;
			this.mappingKey();
			this.state = 599;
			this.match(SolidityParser.T__44);
			this.state = 600;
			this.typeName(0);
			this.state = 601;
			this.match(SolidityParser.T__29);
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
		this.enterRule(_localctx, 78, SolidityParser.RULE_functionTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this.match(SolidityParser.T__35);
			this.state = 604;
			this.functionTypeParameterList();
			this.state = 610;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 608;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SolidityParser.InternalKeyword:
						{
						this.state = 605;
						this.match(SolidityParser.InternalKeyword);
						}
						break;
					case SolidityParser.ExternalKeyword:
						{
						this.state = 606;
						this.match(SolidityParser.ExternalKeyword);
						}
						break;
					case SolidityParser.ConstantKeyword:
					case SolidityParser.PayableKeyword:
					case SolidityParser.PureKeyword:
					case SolidityParser.ViewKeyword:
						{
						this.state = 607;
						this.stateMutability();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 612;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			}
			this.state = 615;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 613;
				this.match(SolidityParser.T__36);
				this.state = 614;
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
		this.enterRule(_localctx, 80, SolidityParser.RULE_storageLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			_la = this._input.LA(1);
			if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (SolidityParser.T__45 - 46)) | (1 << (SolidityParser.T__46 - 46)) | (1 << (SolidityParser.T__47 - 46)))) !== 0))) {
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
		this.enterRule(_localctx, 82, SolidityParser.RULE_stateMutability);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			_la = this._input.LA(1);
			if (!(((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (SolidityParser.ConstantKeyword - 121)) | (1 << (SolidityParser.PayableKeyword - 121)) | (1 << (SolidityParser.PureKeyword - 121)) | (1 << (SolidityParser.ViewKeyword - 121)))) !== 0))) {
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
		this.enterRule(_localctx, 84, SolidityParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.match(SolidityParser.T__20);
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__35 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__41 - 33)) | (1 << (SolidityParser.T__43 - 33)) | (1 << (SolidityParser.T__47 - 33)) | (1 << (SolidityParser.T__48 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__58 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SolidityParser.T__64 - 65)) | (1 << (SolidityParser.T__65 - 65)) | (1 << (SolidityParser.T__66 - 65)) | (1 << (SolidityParser.T__67 - 65)) | (1 << (SolidityParser.T__68 - 65)) | (1 << (SolidityParser.T__69 - 65)) | (1 << (SolidityParser.T__70 - 65)) | (1 << (SolidityParser.T__71 - 65)) | (1 << (SolidityParser.T__72 - 65)) | (1 << (SolidityParser.T__73 - 65)) | (1 << (SolidityParser.T__74 - 65)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.BreakKeyword - 104)) | (1 << (SolidityParser.ContinueKeyword - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
				{
				{
				this.state = 622;
				this.statement();
				}
				}
				this.state = 627;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 628;
			this.match(SolidityParser.T__22);
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
		this.enterRule(_localctx, 86, SolidityParser.RULE_statement);
		try {
			this.state = 647;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 630;
				this.ifStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 631;
				this.tryStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 632;
				this.whileStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 633;
				this.repeatStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 634;
				this.forStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 635;
				this.forRangeStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 636;
				this.block();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 637;
				this.inlineAssemblyStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 638;
				this.doWhileStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 639;
				this.continueStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 640;
				this.breakStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 641;
				this.returnStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 642;
				this.throwStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 643;
				this.emitStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 644;
				this.simpleStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 645;
				this.uncheckedStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 646;
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
		this.enterRule(_localctx, 88, SolidityParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			this.expression(0);
			this.state = 650;
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
		this.enterRule(_localctx, 90, SolidityParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this.match(SolidityParser.T__48);
			this.state = 653;
			this.match(SolidityParser.T__28);
			this.state = 654;
			this.expression(0);
			this.state = 655;
			this.match(SolidityParser.T__29);
			this.state = 656;
			this.statement();
			this.state = 659;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 657;
				this.match(SolidityParser.T__49);
				this.state = 658;
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
		this.enterRule(_localctx, 92, SolidityParser.RULE_tryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.match(SolidityParser.T__50);
			this.state = 662;
			this.expression(0);
			this.state = 664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__36) {
				{
				this.state = 663;
				this.returnParameters();
				}
			}

			this.state = 666;
			this.block();
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 667;
				this.catchClause();
				}
				}
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SolidityParser.T__51);
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
		this.enterRule(_localctx, 94, SolidityParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this.match(SolidityParser.T__51);
			this.state = 677;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
				{
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
					{
					this.state = 673;
					this.identifier();
					}
				}

				this.state = 676;
				this.parameterList();
				}
			}

			this.state = 679;
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
		this.enterRule(_localctx, 96, SolidityParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this.match(SolidityParser.T__52);
			this.state = 682;
			this.match(SolidityParser.T__28);
			this.state = 683;
			this.expression(0);
			this.state = 684;
			this.match(SolidityParser.T__29);
			this.state = 685;
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
		this.enterRule(_localctx, 98, SolidityParser.RULE_repeatStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 687;
			this.match(SolidityParser.T__53);
			this.state = 688;
			this.match(SolidityParser.T__28);
			this.state = 689;
			this.expression(0);
			this.state = 690;
			this.match(SolidityParser.T__29);
			this.state = 691;
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
		this.enterRule(_localctx, 100, SolidityParser.RULE_simpleStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 693;
				this.variableDeclarationStatement();
				}
				break;

			case 2:
				{
				this.state = 694;
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
		this.enterRule(_localctx, 102, SolidityParser.RULE_uncheckedStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 697;
			this.match(SolidityParser.T__54);
			this.state = 698;
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
		this.enterRule(_localctx, 104, SolidityParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			this.match(SolidityParser.T__32);
			this.state = 701;
			this.match(SolidityParser.T__28);
			this.state = 704;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__5:
			case SolidityParser.T__10:
			case SolidityParser.T__19:
			case SolidityParser.T__20:
			case SolidityParser.T__28:
			case SolidityParser.T__30:
			case SolidityParser.T__35:
			case SolidityParser.T__39:
			case SolidityParser.T__41:
			case SolidityParser.T__43:
			case SolidityParser.T__47:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.T__64:
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
			case SolidityParser.T__103:
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
				this.state = 702;
				this.simpleStatement();
				}
				break;
			case SolidityParser.T__1:
				{
				this.state = 703;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 708;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__5:
			case SolidityParser.T__10:
			case SolidityParser.T__19:
			case SolidityParser.T__20:
			case SolidityParser.T__28:
			case SolidityParser.T__30:
			case SolidityParser.T__35:
			case SolidityParser.T__39:
			case SolidityParser.T__41:
			case SolidityParser.T__43:
			case SolidityParser.T__47:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.T__64:
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
			case SolidityParser.T__103:
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
				this.state = 706;
				this.expressionStatement();
				}
				break;
			case SolidityParser.T__1:
				{
				this.state = 707;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 711;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SolidityParser.T__67 - 68)) | (1 << (SolidityParser.T__68 - 68)) | (1 << (SolidityParser.T__69 - 68)) | (1 << (SolidityParser.T__70 - 68)) | (1 << (SolidityParser.T__71 - 68)) | (1 << (SolidityParser.T__72 - 68)) | (1 << (SolidityParser.T__73 - 68)) | (1 << (SolidityParser.T__74 - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
				{
				this.state = 710;
				this.expression(0);
				}
			}

			this.state = 713;
			this.match(SolidityParser.T__29);
			this.state = 714;
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
		this.enterRule(_localctx, 106, SolidityParser.RULE_forRangeStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.match(SolidityParser.T__32);
			this.state = 717;
			this.match(SolidityParser.T__28);
			this.state = 723;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__5:
			case SolidityParser.T__19:
			case SolidityParser.T__30:
			case SolidityParser.T__35:
			case SolidityParser.T__41:
			case SolidityParser.T__43:
			case SolidityParser.T__47:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.T__64:
			case SolidityParser.T__65:
			case SolidityParser.T__66:
			case SolidityParser.T__103:
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
				this.state = 718;
				this.variableDeclaration();
				}
				break;
			case SolidityParser.T__28:
				{
				this.state = 719;
				this.match(SolidityParser.T__28);
				this.state = 720;
				this.variableDeclarationList();
				this.state = 721;
				this.match(SolidityParser.T__29);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 725;
			this.match(SolidityParser.T__55);
			this.state = 728;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 726;
				this.identifier();
				}
				break;

			case 2:
				{
				this.state = 727;
				this.expression(0);
				}
				break;
			}
			this.state = 730;
			this.match(SolidityParser.T__29);
			this.state = 731;
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
		this.enterRule(_localctx, 108, SolidityParser.RULE_inlineAssemblyStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			this.match(SolidityParser.T__56);
			this.state = 735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.StringLiteralFragment) {
				{
				this.state = 734;
				this.match(SolidityParser.StringLiteralFragment);
				}
			}

			this.state = 737;
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
	public doWhileStatement(): DoWhileStatementContext {
		let _localctx: DoWhileStatementContext = new DoWhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SolidityParser.RULE_doWhileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 739;
			this.match(SolidityParser.T__57);
			this.state = 740;
			this.statement();
			this.state = 741;
			this.match(SolidityParser.T__52);
			this.state = 742;
			this.match(SolidityParser.T__28);
			this.state = 743;
			this.expression(0);
			this.state = 744;
			this.match(SolidityParser.T__29);
			this.state = 745;
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
		this.enterRule(_localctx, 112, SolidityParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.match(SolidityParser.ContinueKeyword);
			this.state = 748;
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
		this.enterRule(_localctx, 114, SolidityParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this.match(SolidityParser.BreakKeyword);
			this.state = 751;
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
		this.enterRule(_localctx, 116, SolidityParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 753;
			this.match(SolidityParser.T__58);
			this.state = 755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SolidityParser.T__67 - 68)) | (1 << (SolidityParser.T__68 - 68)) | (1 << (SolidityParser.T__69 - 68)) | (1 << (SolidityParser.T__70 - 68)) | (1 << (SolidityParser.T__71 - 68)) | (1 << (SolidityParser.T__72 - 68)) | (1 << (SolidityParser.T__73 - 68)) | (1 << (SolidityParser.T__74 - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
				{
				this.state = 754;
				this.expression(0);
				}
			}

			this.state = 757;
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
		this.enterRule(_localctx, 118, SolidityParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this.match(SolidityParser.T__59);
			this.state = 760;
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
		this.enterRule(_localctx, 120, SolidityParser.RULE_emitStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 762;
			this.match(SolidityParser.T__60);
			this.state = 763;
			this.functionCall();
			this.state = 764;
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
		this.enterRule(_localctx, 122, SolidityParser.RULE_revertStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 766;
			this.match(SolidityParser.T__61);
			this.state = 767;
			this.functionCall();
			this.state = 768;
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
		this.enterRule(_localctx, 124, SolidityParser.RULE_variableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 770;
				this.match(SolidityParser.T__62);
				this.state = 771;
				this.identifierList();
				}
				break;

			case 2:
				{
				this.state = 772;
				this.variableDeclaration();
				}
				break;

			case 3:
				{
				this.state = 773;
				this.match(SolidityParser.T__28);
				this.state = 774;
				this.variableDeclarationList();
				this.state = 775;
				this.match(SolidityParser.T__29);
				}
				break;
			}
			this.state = 781;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__15) {
				{
				this.state = 779;
				this.match(SolidityParser.T__15);
				this.state = 780;
				this.expression(0);
				}
			}

			this.state = 783;
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
		this.enterRule(_localctx, 126, SolidityParser.RULE_variableDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 786;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
				{
				this.state = 785;
				this.variableDeclaration();
				}
			}

			this.state = 794;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__21) {
				{
				{
				this.state = 788;
				this.match(SolidityParser.T__21);
				this.state = 790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
					{
					this.state = 789;
					this.variableDeclaration();
					}
				}

				}
				}
				this.state = 796;
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
		this.enterRule(_localctx, 128, SolidityParser.RULE_identifierList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this.match(SolidityParser.T__28);
			this.state = 804;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 799;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
						{
						this.state = 798;
						this.identifier();
						}
					}

					this.state = 801;
					this.match(SolidityParser.T__21);
					}
					}
				}
				this.state = 806;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
			}
			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
				{
				this.state = 807;
				this.identifier();
				}
			}

			this.state = 810;
			this.match(SolidityParser.T__29);
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
		this.enterRule(_localctx, 130, SolidityParser.RULE_elementaryTypeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			_la = this._input.LA(1);
			if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (SolidityParser.T__41 - 42)) | (1 << (SolidityParser.T__62 - 42)) | (1 << (SolidityParser.T__63 - 42)) | (1 << (SolidityParser.T__64 - 42)) | (1 << (SolidityParser.T__65 - 42)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (SolidityParser.Int - 107)) | (1 << (SolidityParser.Uint - 107)) | (1 << (SolidityParser.Byte - 107)) | (1 << (SolidityParser.Fixed - 107)) | (1 << (SolidityParser.Ufixed - 107)) | (1 << (SolidityParser.TvmCell - 107)))) !== 0))) {
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
		this.enterRule(_localctx, 132, SolidityParser.RULE_optionalTypeName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 814;
			this.match(SolidityParser.T__66);
			this.state = 815;
			this.typeName(0);
			this.state = 820;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__21) {
				{
				{
				this.state = 816;
				this.match(SolidityParser.T__21);
				this.state = 817;
				this.typeName(0);
				}
				}
				this.state = 822;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 823;
			this.match(SolidityParser.T__29);
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
		let _startState: number = 134;
		this.enterRecursionRule(_localctx, 134, SolidityParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 826;
				this.match(SolidityParser.T__69);
				this.state = 827;
				this.typeName(0);
				}
				break;

			case 2:
				{
				this.state = 828;
				this.match(SolidityParser.T__20);
				this.state = 830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
					{
					this.state = 829;
					this.nameValueList();
					}
				}

				this.state = 832;
				this.match(SolidityParser.T__22);
				this.state = 833;
				this.expression(23);
				}
				break;

			case 3:
				{
				this.state = 834;
				this.nameValueBlockStatement();
				}
				break;

			case 4:
				{
				this.state = 835;
				this.match(SolidityParser.T__28);
				this.state = 836;
				this.expression(0);
				this.state = 837;
				this.match(SolidityParser.T__29);
				}
				break;

			case 5:
				{
				this.state = 839;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__67 || _la === SolidityParser.T__68)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 840;
				this.expression(19);
				}
				break;

			case 6:
				{
				this.state = 841;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__70 || _la === SolidityParser.T__71)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 842;
				this.expression(18);
				}
				break;

			case 7:
				{
				this.state = 843;
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
				this.state = 844;
				this.expression(17);
				}
				break;

			case 8:
				{
				this.state = 845;
				this.match(SolidityParser.T__74);
				this.state = 846;
				this.expression(16);
				}
				break;

			case 9:
				{
				this.state = 847;
				this.match(SolidityParser.T__10);
				this.state = 848;
				this.expression(15);
				}
				break;

			case 10:
				{
				this.state = 849;
				this.primaryExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 926;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 924;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 852;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 853;
						this.match(SolidityParser.T__75);
						this.state = 854;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 855;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 856;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__18 || _la === SolidityParser.T__76 || _la === SolidityParser.T__77)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 857;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 858;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 859;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__70 || _la === SolidityParser.T__71)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 860;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 861;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 862;
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
						this.state = 863;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 864;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 865;
						this.match(SolidityParser.T__80);
						this.state = 866;
						this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 867;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 868;
						this.match(SolidityParser.T__9);
						this.state = 869;
						this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 870;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 871;
						this.match(SolidityParser.T__81);
						this.state = 872;
						this.expression(9);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 873;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 874;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__11) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__14))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 875;
						this.expression(8);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 876;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 877;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__82 || _la === SolidityParser.T__83)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 878;
						this.expression(7);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 879;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 880;
						this.match(SolidityParser.T__84);
						this.state = 881;
						this.expression(6);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 882;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 883;
						this.match(SolidityParser.T__8);
						this.state = 884;
						this.expression(5);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 885;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 886;
						this.match(SolidityParser.T__85);
						this.state = 887;
						this.expression(0);
						this.state = 888;
						this.match(SolidityParser.T__55);
						this.state = 889;
						this.expression(4);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 891;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 892;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__15 || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (SolidityParser.T__86 - 87)) | (1 << (SolidityParser.T__87 - 87)) | (1 << (SolidityParser.T__88 - 87)) | (1 << (SolidityParser.T__89 - 87)) | (1 << (SolidityParser.T__90 - 87)) | (1 << (SolidityParser.T__91 - 87)) | (1 << (SolidityParser.T__92 - 87)) | (1 << (SolidityParser.T__93 - 87)) | (1 << (SolidityParser.T__94 - 87)) | (1 << (SolidityParser.T__95 - 87)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 893;
						this.expression(3);
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 894;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 895;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__67 || _la === SolidityParser.T__68)) {
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
						this.state = 896;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 897;
						this.match(SolidityParser.T__39);
						this.state = 898;
						this.expression(0);
						this.state = 899;
						this.match(SolidityParser.T__40);
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 901;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 902;
						this.match(SolidityParser.T__39);
						this.state = 904;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SolidityParser.T__67 - 68)) | (1 << (SolidityParser.T__68 - 68)) | (1 << (SolidityParser.T__69 - 68)) | (1 << (SolidityParser.T__70 - 68)) | (1 << (SolidityParser.T__71 - 68)) | (1 << (SolidityParser.T__72 - 68)) | (1 << (SolidityParser.T__73 - 68)) | (1 << (SolidityParser.T__74 - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
							{
							this.state = 903;
							this.expression(0);
							}
						}

						this.state = 906;
						this.match(SolidityParser.T__55);
						this.state = 908;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SolidityParser.T__67 - 68)) | (1 << (SolidityParser.T__68 - 68)) | (1 << (SolidityParser.T__69 - 68)) | (1 << (SolidityParser.T__70 - 68)) | (1 << (SolidityParser.T__71 - 68)) | (1 << (SolidityParser.T__72 - 68)) | (1 << (SolidityParser.T__73 - 68)) | (1 << (SolidityParser.T__74 - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
							{
							this.state = 907;
							this.expression(0);
							}
						}

						this.state = 910;
						this.match(SolidityParser.T__40);
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 911;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 912;
						this.match(SolidityParser.T__42);
						this.state = 913;
						this.identifier();
						}
						break;

					case 18:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 914;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 915;
						this.match(SolidityParser.T__20);
						this.state = 916;
						this.nameValueList();
						this.state = 917;
						this.match(SolidityParser.T__22);
						}
						break;

					case 19:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 919;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 920;
						this.match(SolidityParser.T__28);
						this.state = 921;
						this.functionCallArguments();
						this.state = 922;
						this.match(SolidityParser.T__29);
						}
						break;
					}
					}
				}
				this.state = 928;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
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
		this.enterRule(_localctx, 136, SolidityParser.RULE_primaryExpression);
		try {
			this.state = 947;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 929;
				this.match(SolidityParser.BooleanLiteral);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 930;
				this.numberLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 931;
				this.hexLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 932;
				this.stringLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 933;
				this.identifier();
				this.state = 936;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 934;
					this.match(SolidityParser.T__39);
					this.state = 935;
					this.match(SolidityParser.T__40);
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 938;
				this.match(SolidityParser.TypeKeyword);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 939;
				this.match(SolidityParser.PayableKeyword);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 940;
				this.tupleExpression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 941;
				this.typeNameExpression();
				this.state = 944;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
				case 1:
					{
					this.state = 942;
					this.match(SolidityParser.T__39);
					this.state = 943;
					this.match(SolidityParser.T__40);
					}
					break;
				}
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 946;
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
		this.enterRule(_localctx, 138, SolidityParser.RULE_nameValueBlockStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 949;
			this.match(SolidityParser.T__20);
			this.state = 956;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
					{
					this.state = 950;
					this.nameValueList();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SolidityParser.T__67 - 68)) | (1 << (SolidityParser.T__68 - 68)) | (1 << (SolidityParser.T__69 - 68)) | (1 << (SolidityParser.T__70 - 68)) | (1 << (SolidityParser.T__71 - 68)) | (1 << (SolidityParser.T__72 - 68)) | (1 << (SolidityParser.T__73 - 68)) | (1 << (SolidityParser.T__74 - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
					{
					this.state = 953;
					this.expressionList();
					}
				}

				}
				break;
			}
			this.state = 958;
			this.match(SolidityParser.T__22);
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
		this.enterRule(_localctx, 140, SolidityParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 960;
			this.expression(0);
			this.state = 965;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__21) {
				{
				{
				this.state = 961;
				this.match(SolidityParser.T__21);
				this.state = 962;
				this.expression(0);
				}
				}
				this.state = 967;
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
		this.enterRule(_localctx, 142, SolidityParser.RULE_nameValueList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 968;
			this.nameValue();
			this.state = 973;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 969;
					this.match(SolidityParser.T__21);
					this.state = 970;
					this.nameValue();
					}
					}
				}
				this.state = 975;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			}
			this.state = 977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__21) {
				{
				this.state = 976;
				this.match(SolidityParser.T__21);
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
		this.enterRule(_localctx, 144, SolidityParser.RULE_nameValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 979;
			this.identifier();
			this.state = 980;
			this.match(SolidityParser.T__55);
			this.state = 981;
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
		this.enterRule(_localctx, 146, SolidityParser.RULE_functionCallArguments);
		let _la: number;
		try {
			this.state = 991;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 983;
				this.match(SolidityParser.T__20);
				this.state = 985;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
					{
					this.state = 984;
					this.nameValueList();
					}
				}

				this.state = 987;
				this.match(SolidityParser.T__22);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 989;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SolidityParser.T__67 - 68)) | (1 << (SolidityParser.T__68 - 68)) | (1 << (SolidityParser.T__69 - 68)) | (1 << (SolidityParser.T__70 - 68)) | (1 << (SolidityParser.T__71 - 68)) | (1 << (SolidityParser.T__72 - 68)) | (1 << (SolidityParser.T__73 - 68)) | (1 << (SolidityParser.T__74 - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
					{
					this.state = 988;
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
		this.enterRule(_localctx, 148, SolidityParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 993;
			this.expression(0);
			this.state = 994;
			this.match(SolidityParser.T__28);
			this.state = 995;
			this.functionCallArguments();
			this.state = 996;
			this.match(SolidityParser.T__29);
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
		this.enterRule(_localctx, 150, SolidityParser.RULE_assemblyBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 998;
			this.match(SolidityParser.T__20);
			this.state = 1002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & ((1 << (SolidityParser.T__5 - 6)) | (1 << (SolidityParser.T__19 - 6)) | (1 << (SolidityParser.T__20 - 6)) | (1 << (SolidityParser.T__28 - 6)) | (1 << (SolidityParser.T__30 - 6)) | (1 << (SolidityParser.T__32 - 6)) | (1 << (SolidityParser.T__35 - 6)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (SolidityParser.T__41 - 42)) | (1 << (SolidityParser.T__47 - 42)) | (1 << (SolidityParser.T__48 - 42)) | (1 << (SolidityParser.T__56 - 42)) | (1 << (SolidityParser.T__58 - 42)) | (1 << (SolidityParser.T__61 - 42)) | (1 << (SolidityParser.T__65 - 42)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (SolidityParser.T__96 - 97)) | (1 << (SolidityParser.T__98 - 97)) | (1 << (SolidityParser.T__99 - 97)) | (1 << (SolidityParser.T__103 - 97)) | (1 << (SolidityParser.DecimalNumber - 97)) | (1 << (SolidityParser.HexNumber - 97)) | (1 << (SolidityParser.HexLiteralFragment - 97)) | (1 << (SolidityParser.BreakKeyword - 97)) | (1 << (SolidityParser.ContinueKeyword - 97)) | (1 << (SolidityParser.LeaveKeyword - 97)) | (1 << (SolidityParser.PayableKeyword - 97)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
				{
				{
				this.state = 999;
				this.assemblyItem();
				}
				}
				this.state = 1004;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1005;
			this.match(SolidityParser.T__22);
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
		this.enterRule(_localctx, 152, SolidityParser.RULE_assemblyItem);
		try {
			this.state = 1025;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1007;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1008;
				this.assemblyBlock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1009;
				this.assemblyExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1010;
				this.assemblyLocalDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1011;
				this.assemblyAssignment();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1012;
				this.assemblyStackAssignment();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1013;
				this.labelDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1014;
				this.assemblySwitch();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1015;
				this.assemblyFunctionDefinition();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1016;
				this.assemblyFor();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1017;
				this.assemblyIf();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1018;
				this.match(SolidityParser.BreakKeyword);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1019;
				this.match(SolidityParser.ContinueKeyword);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1020;
				this.match(SolidityParser.LeaveKeyword);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1021;
				this.subAssembly();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1022;
				this.numberLiteral();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1023;
				this.stringLiteral();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1024;
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
		this.enterRule(_localctx, 154, SolidityParser.RULE_assemblyExpression);
		try {
			this.state = 1030;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1027;
				this.assemblyCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1028;
				this.assemblyLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1029;
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
		this.enterRule(_localctx, 156, SolidityParser.RULE_assemblyMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1032;
			this.identifier();
			this.state = 1033;
			this.match(SolidityParser.T__42);
			this.state = 1034;
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
		this.enterRule(_localctx, 158, SolidityParser.RULE_assemblyCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1040;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__58:
				{
				this.state = 1036;
				this.match(SolidityParser.T__58);
				}
				break;
			case SolidityParser.T__41:
				{
				this.state = 1037;
				this.match(SolidityParser.T__41);
				}
				break;
			case SolidityParser.T__65:
				{
				this.state = 1038;
				this.match(SolidityParser.T__65);
				}
				break;
			case SolidityParser.T__5:
			case SolidityParser.T__19:
			case SolidityParser.T__30:
			case SolidityParser.T__47:
			case SolidityParser.T__61:
			case SolidityParser.T__103:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				{
				this.state = 1039;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1054;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1042;
				this.match(SolidityParser.T__28);
				this.state = 1044;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (SolidityParser.T__41 - 42)) | (1 << (SolidityParser.T__47 - 42)) | (1 << (SolidityParser.T__58 - 42)) | (1 << (SolidityParser.T__61 - 42)) | (1 << (SolidityParser.T__65 - 42)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
					{
					this.state = 1043;
					this.assemblyExpression();
					}
				}

				this.state = 1050;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__21) {
					{
					{
					this.state = 1046;
					this.match(SolidityParser.T__21);
					this.state = 1047;
					this.assemblyExpression();
					}
					}
					this.state = 1052;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1053;
				this.match(SolidityParser.T__29);
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
		this.enterRule(_localctx, 160, SolidityParser.RULE_assemblyLocalDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1056;
			this.match(SolidityParser.T__96);
			this.state = 1057;
			this.assemblyIdentifierOrList();
			this.state = 1060;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__97) {
				{
				this.state = 1058;
				this.match(SolidityParser.T__97);
				this.state = 1059;
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
		this.enterRule(_localctx, 162, SolidityParser.RULE_assemblyAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1062;
			this.assemblyIdentifierOrList();
			this.state = 1063;
			this.match(SolidityParser.T__97);
			this.state = 1064;
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
		this.enterRule(_localctx, 164, SolidityParser.RULE_assemblyIdentifierOrList);
		try {
			this.state = 1072;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1066;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1067;
				this.assemblyMember();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1068;
				this.match(SolidityParser.T__28);
				this.state = 1069;
				this.assemblyIdentifierList();
				this.state = 1070;
				this.match(SolidityParser.T__29);
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
		this.enterRule(_localctx, 166, SolidityParser.RULE_assemblyIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1074;
			this.identifier();
			this.state = 1079;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__21) {
				{
				{
				this.state = 1075;
				this.match(SolidityParser.T__21);
				this.state = 1076;
				this.identifier();
				}
				}
				this.state = 1081;
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
		this.enterRule(_localctx, 168, SolidityParser.RULE_assemblyStackAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1082;
			this.match(SolidityParser.T__98);
			this.state = 1083;
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
		this.enterRule(_localctx, 170, SolidityParser.RULE_labelDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1085;
			this.identifier();
			this.state = 1086;
			this.match(SolidityParser.T__55);
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
		this.enterRule(_localctx, 172, SolidityParser.RULE_assemblySwitch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1088;
			this.match(SolidityParser.T__99);
			this.state = 1089;
			this.assemblyExpression();
			this.state = 1093;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__100 || _la === SolidityParser.T__101) {
				{
				{
				this.state = 1090;
				this.assemblyCase();
				}
				}
				this.state = 1095;
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
		this.enterRule(_localctx, 174, SolidityParser.RULE_assemblyCase);
		try {
			this.state = 1102;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__100:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1096;
				this.match(SolidityParser.T__100);
				this.state = 1097;
				this.assemblyLiteral();
				this.state = 1098;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__101:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1100;
				this.match(SolidityParser.T__101);
				this.state = 1101;
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
		this.enterRule(_localctx, 176, SolidityParser.RULE_assemblyFunctionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1104;
			this.match(SolidityParser.T__35);
			this.state = 1105;
			this.identifier();
			this.state = 1106;
			this.match(SolidityParser.T__28);
			this.state = 1108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0)) {
				{
				this.state = 1107;
				this.assemblyIdentifierList();
				}
			}

			this.state = 1110;
			this.match(SolidityParser.T__29);
			this.state = 1112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__102) {
				{
				this.state = 1111;
				this.assemblyFunctionReturns();
				}
			}

			this.state = 1114;
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
		this.enterRule(_localctx, 178, SolidityParser.RULE_assemblyFunctionReturns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1116;
			this.match(SolidityParser.T__102);
			this.state = 1117;
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
		this.enterRule(_localctx, 180, SolidityParser.RULE_assemblyFor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1119;
			this.match(SolidityParser.T__32);
			this.state = 1122;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__20:
				{
				this.state = 1120;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__5:
			case SolidityParser.T__19:
			case SolidityParser.T__30:
			case SolidityParser.T__41:
			case SolidityParser.T__47:
			case SolidityParser.T__58:
			case SolidityParser.T__61:
			case SolidityParser.T__65:
			case SolidityParser.T__103:
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
				this.state = 1121;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1124;
			this.assemblyExpression();
			this.state = 1127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__20:
				{
				this.state = 1125;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__5:
			case SolidityParser.T__19:
			case SolidityParser.T__30:
			case SolidityParser.T__41:
			case SolidityParser.T__47:
			case SolidityParser.T__58:
			case SolidityParser.T__61:
			case SolidityParser.T__65:
			case SolidityParser.T__103:
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
				this.state = 1126;
				this.assemblyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1129;
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
		this.enterRule(_localctx, 182, SolidityParser.RULE_assemblyIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1131;
			this.match(SolidityParser.T__48);
			this.state = 1132;
			this.assemblyExpression();
			this.state = 1133;
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
		this.enterRule(_localctx, 184, SolidityParser.RULE_assemblyLiteral);
		try {
			this.state = 1139;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.StringLiteralFragment:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1135;
				this.stringLiteral();
				}
				break;
			case SolidityParser.DecimalNumber:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1136;
				this.match(SolidityParser.DecimalNumber);
				}
				break;
			case SolidityParser.HexNumber:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1137;
				this.match(SolidityParser.HexNumber);
				}
				break;
			case SolidityParser.HexLiteralFragment:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1138;
				this.hexLiteral();
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
	public subAssembly(): SubAssemblyContext {
		let _localctx: SubAssemblyContext = new SubAssemblyContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, SolidityParser.RULE_subAssembly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1141;
			this.match(SolidityParser.T__56);
			this.state = 1142;
			this.identifier();
			this.state = 1143;
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
	public tupleExpression(): TupleExpressionContext {
		let _localctx: TupleExpressionContext = new TupleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, SolidityParser.RULE_tupleExpression);
		let _la: number;
		try {
			this.state = 1171;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__28:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1145;
				this.match(SolidityParser.T__28);
				{
				this.state = 1147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SolidityParser.T__67 - 68)) | (1 << (SolidityParser.T__68 - 68)) | (1 << (SolidityParser.T__69 - 68)) | (1 << (SolidityParser.T__70 - 68)) | (1 << (SolidityParser.T__71 - 68)) | (1 << (SolidityParser.T__72 - 68)) | (1 << (SolidityParser.T__73 - 68)) | (1 << (SolidityParser.T__74 - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
					{
					this.state = 1146;
					this.expression(0);
					}
				}

				this.state = 1155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__21) {
					{
					{
					this.state = 1149;
					this.match(SolidityParser.T__21);
					this.state = 1151;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SolidityParser.T__67 - 68)) | (1 << (SolidityParser.T__68 - 68)) | (1 << (SolidityParser.T__69 - 68)) | (1 << (SolidityParser.T__70 - 68)) | (1 << (SolidityParser.T__71 - 68)) | (1 << (SolidityParser.T__72 - 68)) | (1 << (SolidityParser.T__73 - 68)) | (1 << (SolidityParser.T__74 - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
						{
						this.state = 1150;
						this.expression(0);
						}
					}

					}
					}
					this.state = 1157;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 1158;
				this.match(SolidityParser.T__29);
				}
				break;
			case SolidityParser.T__39:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1159;
				this.match(SolidityParser.T__39);
				this.state = 1168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__10) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__20) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__41 - 36)) | (1 << (SolidityParser.T__43 - 36)) | (1 << (SolidityParser.T__47 - 36)) | (1 << (SolidityParser.T__61 - 36)) | (1 << (SolidityParser.T__62 - 36)) | (1 << (SolidityParser.T__63 - 36)) | (1 << (SolidityParser.T__64 - 36)) | (1 << (SolidityParser.T__65 - 36)) | (1 << (SolidityParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (SolidityParser.T__67 - 68)) | (1 << (SolidityParser.T__68 - 68)) | (1 << (SolidityParser.T__69 - 68)) | (1 << (SolidityParser.T__70 - 68)) | (1 << (SolidityParser.T__71 - 68)) | (1 << (SolidityParser.T__72 - 68)) | (1 << (SolidityParser.T__73 - 68)) | (1 << (SolidityParser.T__74 - 68)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.Int - 104)) | (1 << (SolidityParser.Uint - 104)) | (1 << (SolidityParser.Byte - 104)) | (1 << (SolidityParser.Fixed - 104)) | (1 << (SolidityParser.Ufixed - 104)) | (1 << (SolidityParser.TvmCell - 104)) | (1 << (SolidityParser.BooleanLiteral - 104)) | (1 << (SolidityParser.DecimalNumber - 104)) | (1 << (SolidityParser.HexNumber - 104)) | (1 << (SolidityParser.HexLiteralFragment - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)) | (1 << (SolidityParser.TypeKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)) | (1 << (SolidityParser.StringLiteralFragment - 138)))) !== 0)) {
					{
					this.state = 1160;
					this.expression(0);
					this.state = 1165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SolidityParser.T__21) {
						{
						{
						this.state = 1161;
						this.match(SolidityParser.T__21);
						this.state = 1162;
						this.expression(0);
						}
						}
						this.state = 1167;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1170;
				this.match(SolidityParser.T__40);
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
		this.enterRule(_localctx, 190, SolidityParser.RULE_typeNameExpression);
		try {
			this.state = 1175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__41:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.T__64:
			case SolidityParser.T__65:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.TvmCell:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1173;
				this.elementaryTypeName();
				}
				break;
			case SolidityParser.T__5:
			case SolidityParser.T__19:
			case SolidityParser.T__30:
			case SolidityParser.T__47:
			case SolidityParser.T__61:
			case SolidityParser.T__103:
			case SolidityParser.LeaveKeyword:
			case SolidityParser.PayableKeyword:
			case SolidityParser.ConstructorKeyword:
			case SolidityParser.ReceiveKeyword:
			case SolidityParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1174;
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
		this.enterRule(_localctx, 192, SolidityParser.RULE_numberLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1177;
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
			this.state = 1179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				{
				this.state = 1178;
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
		this.enterRule(_localctx, 194, SolidityParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1181;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__5) | (1 << SolidityParser.T__19) | (1 << SolidityParser.T__30))) !== 0) || _la === SolidityParser.T__47 || _la === SolidityParser.T__61 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.T__103 - 104)) | (1 << (SolidityParser.LeaveKeyword - 104)) | (1 << (SolidityParser.PayableKeyword - 104)))) !== 0) || ((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SolidityParser.ConstructorKeyword - 138)) | (1 << (SolidityParser.ReceiveKeyword - 138)) | (1 << (SolidityParser.Identifier - 138)))) !== 0))) {
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
		this.enterRule(_localctx, 196, SolidityParser.RULE_hexLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1184;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1183;
					this.match(SolidityParser.HexLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1186;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
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
		this.enterRule(_localctx, 198, SolidityParser.RULE_onBounceKeyword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1188;
			this.match(SolidityParser.T__104);
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
		this.enterRule(_localctx, 200, SolidityParser.RULE_overrideSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1190;
			this.match(SolidityParser.T__105);
			this.state = 1202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__28) {
				{
				this.state = 1191;
				this.match(SolidityParser.T__28);
				this.state = 1192;
				this.userDefinedTypeName();
				this.state = 1197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__21) {
					{
					{
					this.state = 1193;
					this.match(SolidityParser.T__21);
					this.state = 1194;
					this.userDefinedTypeName();
					}
					}
					this.state = 1199;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1200;
				this.match(SolidityParser.T__29);
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
		this.enterRule(_localctx, 202, SolidityParser.RULE_stringLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1205;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1204;
					this.match(SolidityParser.StringLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
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
		case 35:
			return this.typeName_sempred(_localctx as TypeNameContext, predIndex);

		case 67:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private typeName_sempred(_localctx: TypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x94\u04BC\x04" +
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
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02\xD8" +
		"\n\x02\f\x02\x0E\x02\xDB\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x05\x03\xE2\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04\xEB\n\x04\x03\x05\x03\x05\x05\x05\xEF\n\x05\x03\x06\x03\x06" +
		"\x05\x06\xF3\n\x06\x03\x06\x07\x06\xF6\n\x06\f\x06\x0E\x06\xF9\v\x06\x03" +
		"\x07\x03\x07\x03\b\x05\b\xFE\n\b\x03\b\x03\b\x05\b\u0102\n\b\x03\b\x05" +
		"\b\u0105\n\b\x03\t\x03\t\x03\t\x05\t\u010A\n\t\x03\n\x03\n\x03\n\x03\n" +
		"\x05\n\u0110\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0117\n\n\x03\n\x03" +
		"\n\x05\n\u011B\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x07\n\u0126\n\n\f\n\x0E\n\u0129\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\u0130\n\n\x03\v\x03\v\x03\f\x05\f\u0135\n\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x07\f\u013D\n\f\f\f\x0E\f\u0140\v\f\x05\f\u0142\n\f\x03\f" +
		"\x03\f\x07\f\u0146\n\f\f\f\x0E\f\u0149\v\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x05\r\u0150\n\r\x03\r\x05\r\u0153\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u015E\n\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0168\n\x0F" +
		"\f\x0F\x0E\x0F\u016B\v\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0170\n\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u018B" +
		"\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x07\x14\u0197\n\x14\f\x14\x0E\x14\u019A\v\x14\x05\x14" +
		"\u019C\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x05\x15\u01A3\n\x15" +
		"\x03\x15\x03\x15\x07\x15\u01A7\n\x15\f\x15\x0E\x15\u01AA\v\x15\x03\x15" +
		"\x03\x15\x05\x15\u01AE\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u01B3\n\x16" +
		"\x03\x16\x05\x16\u01B6\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u01BC" +
		"\n\x17\x03\x17\x03\x17\x05\x17\u01C0\n\x17\x03\x18\x03\x18\x05\x18\u01C4" +
		"\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01CA\n\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x07\x1A\u01D9\n\x1A\f\x1A\x0E\x1A\u01DC\v\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01E2\n\x1B\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01EC\n\x1D\x03\x1D\x03" +
		"\x1D\x07\x1D\u01F0\n\x1D\f\x1D\x0E\x1D\u01F3\v\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01FB\n\x1E\f\x1E\x0E\x1E\u01FE\v" +
		"\x1E\x05\x1E\u0200\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F\u0206" +
		"\n\x1F\x03\x1F\x05\x1F\u0209\n\x1F\x03 \x03 \x03 \x03 \x07 \u020F\n \f" +
		" \x0E \u0212\v \x05 \u0214\n \x03 \x03 \x03!\x03!\x05!\u021A\n!\x03!\x05" +
		"!\u021D\n!\x03\"\x03\"\x03\"\x03\"\x07\"\u0223\n\"\f\"\x0E\"\u0226\v\"" +
		"\x05\"\u0228\n\"\x03\"\x03\"\x03#\x03#\x05#\u022E\n#\x03$\x03$\x05$\u0232" +
		"\n$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u023E\n%\x03" +
		"%\x03%\x03%\x05%\u0243\n%\x03%\x07%\u0246\n%\f%\x0E%\u0249\v%\x03&\x03" +
		"&\x03&\x07&\u024E\n&\f&\x0E&\u0251\v&\x03\'\x03\'\x05\'\u0255\n\'\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x07)\u0263\n" +
		")\f)\x0E)\u0266\v)\x03)\x03)\x05)\u026A\n)\x03*\x03*\x03+\x03+\x03,\x03" +
		",\x07,\u0272\n,\f,\x0E,\u0275\v,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u028A\n" +
		"-\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u0296\n/\x03" +
		"0\x030\x030\x050\u029B\n0\x030\x030\x060\u029F\n0\r0\x0E0\u02A0\x031\x03" +
		"1\x051\u02A5\n1\x031\x051\u02A8\n1\x031\x031\x032\x032\x032\x032\x032" +
		"\x032\x033\x033\x033\x033\x033\x033\x034\x034\x054\u02BA\n4\x035\x035" +
		"\x035\x036\x036\x036\x036\x056\u02C3\n6\x036\x036\x056\u02C7\n6\x036\x05" +
		"6\u02CA\n6\x036\x036\x036\x037\x037\x037\x037\x037\x037\x037\x057\u02D6" +
		"\n7\x037\x037\x037\x057\u02DB\n7\x037\x037\x037\x038\x038\x058\u02E2\n" +
		"8\x038\x038\x039\x039\x039\x039\x039\x039\x039\x039\x03:\x03:\x03:\x03" +
		";\x03;\x03;\x03<\x03<\x05<\u02F6\n<\x03<\x03<\x03=\x03=\x03=\x03>\x03" +
		">\x03>\x03>\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05" +
		"@\u030C\n@\x03@\x03@\x05@\u0310\n@\x03@\x03@\x03A\x05A\u0315\nA\x03A\x03" +
		"A\x05A\u0319\nA\x07A\u031B\nA\fA\x0EA\u031E\vA\x03B\x03B\x05B\u0322\n" +
		"B\x03B\x07B\u0325\nB\fB\x0EB\u0328\vB\x03B\x05B\u032B\nB\x03B\x03B\x03" +
		"C\x03C\x03D\x03D\x03D\x03D\x07D\u0335\nD\fD\x0ED\u0338\vD\x03D\x03D\x03" +
		"E\x03E\x03E\x03E\x03E\x05E\u0341\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u0355\n" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u038B\nE\x03" +
		"E\x03E\x05E\u038F\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x07E\u039F\nE\fE\x0EE\u03A2\vE\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x03F\x05F\u03AB\nF\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u03B3" +
		"\nF\x03F\x05F\u03B6\nF\x03G\x03G\x05G\u03BA\nG\x03G\x05G\u03BD\nG\x05" +
		"G\u03BF\nG\x03G\x03G\x03H\x03H\x03H\x07H\u03C6\nH\fH\x0EH\u03C9\vH\x03" +
		"I\x03I\x03I\x07I\u03CE\nI\fI\x0EI\u03D1\vI\x03I\x05I\u03D4\nI\x03J\x03" +
		"J\x03J\x03J\x03K\x03K\x05K\u03DC\nK\x03K\x03K\x05K\u03E0\nK\x05K\u03E2" +
		"\nK\x03L\x03L\x03L\x03L\x03L\x03M\x03M\x07M\u03EB\nM\fM\x0EM\u03EE\vM" +
		"\x03M\x03M\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03" +
		"N\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u0404\nN\x03O\x03O\x03O\x05O\u0409" +
		"\nO\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x05Q\u0413\nQ\x03Q\x03Q\x05" +
		"Q\u0417\nQ\x03Q\x03Q\x07Q\u041B\nQ\fQ\x0EQ\u041E\vQ\x03Q\x05Q\u0421\n" +
		"Q\x03R\x03R\x03R\x03R\x05R\u0427\nR\x03S\x03S\x03S\x03S\x03T\x03T\x03" +
		"T\x03T\x03T\x03T\x05T\u0433\nT\x03U\x03U\x03U\x07U\u0438\nU\fU\x0EU\u043B" +
		"\vU\x03V\x03V\x03V\x03W\x03W\x03W\x03X\x03X\x03X\x07X\u0446\nX\fX\x0E" +
		"X\u0449\vX\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u0451\nY\x03Z\x03Z\x03Z" +
		"\x03Z\x05Z\u0457\nZ\x03Z\x03Z\x05Z\u045B\nZ\x03Z\x03Z\x03[\x03[\x03[\x03" +
		"\\\x03\\\x03\\\x05\\\u0465\n\\\x03\\\x03\\\x03\\\x05\\\u046A\n\\\x03\\" +
		"\x03\\\x03]\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x05^\u0476\n^\x03_\x03" +
		"_\x03_\x03_\x03`\x03`\x05`\u047E\n`\x03`\x03`\x05`\u0482\n`\x07`\u0484" +
		"\n`\f`\x0E`\u0487\v`\x03`\x03`\x03`\x03`\x03`\x07`\u048E\n`\f`\x0E`\u0491" +
		"\v`\x05`\u0493\n`\x03`\x05`\u0496\n`\x03a\x03a\x05a\u049A\na\x03b\x03" +
		"b\x05b\u049E\nb\x03c\x03c\x03d\x06d\u04A3\nd\rd\x0Ed\u04A4\x03e\x03e\x03" +
		"f\x03f\x03f\x03f\x03f\x07f\u04AE\nf\ff\x0Ef\u04B1\vf\x03f\x03f\x05f\u04B5" +
		"\nf\x03g\x06g\u04B8\ng\rg\x0Eg\u04B9\x03g\x02\x02\x04H\x88h\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
		"\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8" +
		"\x02\xCA\x02\xCC\x02\x02\x12\x03\x02\x05\x06\x03\x02\f\x12\x03\x02\x1B" +
		"\x1D\x03\x0202\x06\x02{{\x82\x82\x87\x87\x89\x89\x05\x02,,ADmr\x03\x02" +
		"FG\x03\x02IJ\x03\x02KL\x04\x02\x15\x15OP\x03\x02QR\x03\x02\x0E\x11\x03" +
		"\x02UV\x04\x02\x12\x12Yb\x03\x02tu\f\x02\b\b\x16\x16!!22@@jj~~\x82\x82" +
		"\x8C\x8C\x8E\x8F\x02\u054A\x02\xD9\x03\x02\x02\x02\x04\xDE\x03\x02\x02" +
		"\x02\x06\xEA\x03\x02\x02\x02\b\xEE\x03\x02\x02\x02\n\xF0\x03\x02\x02\x02" +
		"\f\xFA\x03\x02\x02\x02\x0E\u0104\x03\x02\x02\x02\x10\u0106\x03\x02\x02" +
		"\x02\x12\u012F\x03\x02\x02\x02\x14\u0131\x03\x02\x02\x02\x16\u0134\x03" +
		"\x02\x02\x02\x18\u014C\x03\x02\x02\x02\x1A\u015D\x03\x02\x02\x02\x1C\u015F" +
		"\x03\x02\x02\x02\x1E\u0173\x03\x02\x02\x02 \u017A\x03\x02\x02\x02\"\u017F" +
		"\x03\x02\x02\x02$\u0185\x03\x02\x02\x02&\u018E\x03\x02\x02\x02(\u019F" +
		"\x03\x02\x02\x02*\u01AF\x03\x02\x02\x02,\u01B7\x03\x02\x02\x02.\u01C9" +
		"\x03\x02\x02\x020\u01CB\x03\x02\x02\x022\u01DA\x03\x02\x02\x024\u01DD" +
		"\x03\x02\x02\x026\u01E5\x03\x02\x02\x028\u01E7\x03\x02\x02\x02:\u01F6" +
		"\x03\x02\x02\x02<\u0203\x03\x02\x02\x02>\u020A\x03\x02\x02\x02@\u0217" +
		"\x03\x02\x02\x02B\u021E\x03\x02\x02\x02D\u022B\x03\x02\x02\x02F\u022F" +
		"\x03\x02\x02\x02H\u023D\x03\x02\x02\x02J\u024A\x03\x02\x02\x02L\u0254" +
		"\x03\x02\x02\x02N\u0256\x03\x02\x02\x02P\u025D\x03\x02\x02\x02R\u026B" +
		"\x03\x02\x02\x02T\u026D\x03\x02\x02\x02V\u026F\x03\x02\x02\x02X\u0289" +
		"\x03\x02\x02\x02Z\u028B\x03\x02\x02\x02\\\u028E\x03\x02\x02\x02^\u0297" +
		"\x03\x02\x02\x02`\u02A2\x03\x02\x02\x02b\u02AB\x03\x02\x02\x02d\u02B1" +
		"\x03\x02\x02\x02f\u02B9\x03\x02\x02\x02h\u02BB\x03\x02\x02\x02j\u02BE" +
		"\x03\x02\x02\x02l\u02CE\x03\x02\x02\x02n\u02DF\x03\x02\x02\x02p\u02E5" +
		"\x03\x02\x02\x02r\u02ED\x03\x02\x02\x02t\u02F0\x03\x02\x02\x02v\u02F3" +
		"\x03\x02\x02\x02x\u02F9\x03\x02\x02\x02z\u02FC\x03\x02\x02\x02|\u0300" +
		"\x03\x02\x02\x02~\u030B\x03\x02\x02\x02\x80\u0314\x03\x02\x02\x02\x82" +
		"\u031F\x03\x02\x02\x02\x84\u032E\x03\x02\x02\x02\x86\u0330\x03\x02\x02" +
		"\x02\x88\u0354\x03\x02\x02\x02\x8A\u03B5\x03\x02\x02\x02\x8C\u03B7\x03" +
		"\x02\x02\x02\x8E\u03C2\x03\x02\x02\x02\x90\u03CA\x03\x02\x02\x02\x92\u03D5" +
		"\x03\x02\x02\x02\x94\u03E1\x03\x02\x02\x02\x96\u03E3\x03\x02\x02\x02\x98" +
		"\u03E8\x03\x02\x02\x02\x9A\u0403\x03\x02\x02\x02\x9C\u0408\x03\x02\x02" +
		"\x02\x9E\u040A\x03\x02\x02\x02\xA0\u0412\x03\x02\x02\x02\xA2\u0422\x03" +
		"\x02\x02\x02\xA4\u0428\x03\x02\x02\x02\xA6\u0432\x03\x02\x02\x02\xA8\u0434" +
		"\x03\x02\x02\x02\xAA\u043C\x03\x02\x02\x02\xAC\u043F\x03\x02\x02\x02\xAE" +
		"\u0442\x03\x02\x02\x02\xB0\u0450\x03\x02\x02\x02\xB2\u0452\x03\x02\x02" +
		"\x02\xB4\u045E\x03\x02\x02\x02\xB6\u0461\x03\x02\x02\x02\xB8\u046D\x03" +
		"\x02\x02\x02\xBA\u0475\x03\x02\x02\x02\xBC\u0477\x03\x02\x02\x02\xBE\u0495" +
		"\x03\x02\x02\x02\xC0\u0499\x03\x02\x02\x02\xC2\u049B\x03\x02\x02\x02\xC4" +
		"\u049F\x03\x02\x02\x02\xC6\u04A2\x03\x02\x02\x02\xC8\u04A6\x03\x02\x02" +
		"\x02\xCA\u04A8\x03\x02\x02\x02\xCC\u04B7\x03\x02\x02\x02\xCE\xD8\x05\x04" +
		"\x03\x02\xCF\xD8\x05\x12\n\x02\xD0\xD8\x05\x16\f\x02\xD1\xD8\x058\x1D" +
		"\x02\xD2\xD8\x05&\x14\x02\xD3\xD8\x05,\x17\x02\xD4\xD8\x05\x1E\x10\x02" +
		"\xD5\xD8\x05 \x11\x02\xD6\xD8\x05\"\x12\x02\xD7\xCE\x03\x02\x02\x02\xD7" +
		"\xCF\x03\x02\x02\x02\xD7\xD0\x03\x02\x02\x02\xD7\xD1\x03\x02\x02\x02\xD7" +
		"\xD2\x03\x02\x02\x02\xD7\xD3\x03\x02\x02\x02\xD7\xD4\x03\x02\x02\x02\xD7" +
		"\xD5\x03\x02\x02\x02\xD7\xD6\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9" +
		"\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDC\x03\x02\x02\x02\xDB" +
		"\xD9\x03\x02\x02\x02\xDC\xDD\x07\x02\x02\x03\xDD\x03\x03\x02\x02\x02\xDE" +
		"\xDF\x07\x03\x02\x02\xDF\xE1\x05\x06\x04\x02\xE0\xE2\x05\b\x05\x02\xE1" +
		"\xE0\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3" +
		"\xE4\x07\x04\x02\x02\xE4\x05\x03\x02\x02\x02\xE5\xEB\t\x02\x02\x02\xE6" +
		"\xEB\x07\x07\x02\x02\xE7\xEB\x07\b\x02\x02\xE8\xEB\x07\t\x02\x02\xE9\xEB" +
		"\x07\n\x02\x02\xEA\xE5\x03\x02\x02\x02\xEA\xE6\x03\x02\x02\x02\xEA\xE7" +
		"\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB\x07" +
		"\x03\x02\x02\x02\xEC\xEF\x05\n\x06\x02\xED\xEF\x05\x88E\x02\xEE\xEC\x03" +
		"\x02\x02\x02\xEE\xED\x03\x02\x02\x02\xEF\t\x03\x02\x02\x02\xF0\xF7\x05" +
		"\x0E\b\x02\xF1\xF3\x07\v\x02\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02" +
		"\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6\x05\x0E\b\x02\xF5\xF2\x03\x02" +
		"\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02" +
		"\x02\x02\xF8\v\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFB\t\x03\x02" +
		"\x02\xFB\r\x03\x02\x02\x02\xFC\xFE\x05\f\x07\x02\xFD\xFC\x03\x02\x02\x02" +
		"\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0105\x07\x91\x02" +
		"\x02\u0100\u0102\x05\f\x07\x02\u0101\u0100\x03\x02\x02\x02\u0101\u0102" +
		"\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0105\x07t\x02\x02" +
		"\u0104\xFD\x03\x02\x02\x02\u0104\u0101\x03\x02\x02\x02\u0105\x0F\x03\x02" +
		"\x02\x02\u0106\u0109\x05\xC4c\x02\u0107\u0108\x07\x13\x02\x02\u0108\u010A" +
		"\x05\xC4c\x02\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02" +
		"\u010A\x11\x03\x02\x02\x02\u010B\u010C\x07\x14\x02\x02\u010C\u010F\x05" +
		"\x14\v\x02\u010D\u010E\x07\x13\x02\x02\u010E\u0110\x05\xC4c\x02\u010F" +
		"\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0111\x03\x02" +
		"\x02\x02\u0111\u0112\x07\x04\x02\x02\u0112\u0130\x03\x02\x02\x02\u0113" +
		"\u0116\x07\x14\x02\x02\u0114\u0117\x07\x15\x02\x02\u0115\u0117\x05\xC4" +
		"c\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0115\x03\x02\x02\x02\u0117\u011A" +
		"\x03\x02\x02\x02\u0118\u0119\x07\x13\x02\x02\u0119\u011B\x05\xC4c\x02" +
		"\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x03" +
		"\x02\x02\x02\u011C\u011D\x07\x16\x02\x02\u011D\u011E\x05\x14\v\x02\u011E" +
		"\u011F\x07\x04\x02\x02\u011F\u0130\x03\x02\x02\x02\u0120\u0121\x07\x14" +
		"\x02\x02\u0121\u0122\x07\x17\x02\x02\u0122\u0127\x05\x10\t\x02\u0123\u0124" +
		"\x07\x18\x02\x02\u0124\u0126\x05\x10\t\x02\u0125\u0123\x03\x02\x02\x02" +
		"\u0126\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03" +
		"\x02\x02\x02\u0128\u012A\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A" +
		"\u012B\x07\x19\x02\x02\u012B\u012C\x07\x16\x02\x02\u012C\u012D\x05\x14" +
		"\v\x02\u012D\u012E\x07\x04\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F\u010B" +
		"\x03\x02\x02\x02\u012F\u0113\x03\x02\x02\x02\u012F\u0120\x03\x02\x02\x02" +
		"\u0130\x13\x03\x02\x02\x02\u0131\u0132\x07\x90\x02\x02\u0132\x15\x03\x02" +
		"\x02\x02\u0133\u0135\x07\x1A\x02\x02\u0134\u0133\x03\x02\x02\x02\u0134" +
		"\u0135\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\t\x04\x02" +
		"\x02\u0137\u0141\x05\xC4c\x02\u0138\u0139\x07\x1E\x02\x02\u0139\u013E" +
		"\x05\x18\r\x02\u013A\u013B\x07\x18\x02\x02\u013B\u013D\x05\x18\r\x02\u013C" +
		"\u013A\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02" +
		"\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140" +
		"\u013E\x03\x02\x02\x02\u0141\u0138\x03\x02\x02\x02\u0141\u0142\x03\x02" +
		"\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0147\x07\x17\x02\x02\u0144" +
		"\u0146\x05\x1A\x0E\x02\u0145\u0144\x03\x02\x02\x02\u0146\u0149\x03\x02" +
		"\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148" +
		"\u014A\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A\u014B\x07\x19" +
		"\x02\x02\u014B\x17\x03\x02\x02\x02\u014C\u0152\x05J&\x02\u014D\u014F\x07" +
		"\x1F\x02\x02\u014E\u0150\x05\x8EH\x02\u014F\u014E\x03\x02\x02\x02\u014F" +
		"\u0150\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0153\x07 \x02" +
		"\x02\u0152\u014D\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\x19" +
		"\x03\x02\x02\x02\u0154\u015E\x05\x1C\x0F\x02\u0155\u015E\x05$\x13\x02" +
		"\u0156\u015E\x05&\x14\x02\u0157\u015E\x05(\x15\x02\u0158\u015E\x05,\x17" +
		"\x02\u0159\u015E\x054\x1B\x02\u015A\u015E\x058\x1D\x02\u015B\u015E\x05" +
		" \x11\x02\u015C\u015E\x05\"\x12\x02\u015D\u0154\x03\x02\x02\x02\u015D" +
		"\u0155\x03\x02\x02\x02\u015D\u0156\x03\x02\x02\x02\u015D\u0157\x03\x02" +
		"\x02\x02\u015D\u0158\x03\x02\x02\x02\u015D\u0159\x03\x02\x02\x02\u015D" +
		"\u015A\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015C\x03\x02" +
		"\x02\x02\u015E\x1B\x03\x02\x02\x02\u015F\u0169\x05H%\x02\u0160\u0168\x07" +
		"\x85\x02\x02\u0161\u0168\x07\x84\x02\x02\u0162\u0168\x07\x81\x02\x02\u0163" +
		"\u0168\x07\x83\x02\x02\u0164\u0168\x07{\x02\x02\u0165\u0168\x07|\x02\x02" +
		"\u0166\u0168\x05\xCAf\x02\u0167\u0160\x03\x02\x02\x02\u0167\u0161\x03" +
		"\x02\x02\x02\u0167\u0162\x03\x02\x02\x02\u0167\u0163\x03\x02\x02\x02\u0167" +
		"\u0164\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0166\x03\x02" +
		"\x02\x02\u0168\u016B\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169" +
		"\u016A\x03\x02\x02\x02\u016A\u016C\x03\x02\x02\x02\u016B\u0169\x03\x02" +
		"\x02\x02\u016C\u016F\x05\xC4c\x02\u016D\u016E\x07\x12\x02\x02\u016E\u0170" +
		"\x05\x88E\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02" +
		"\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x07\x04\x02\x02\u0172\x1D\x03" +
		"\x02\x02\x02\u0173\u0174\x05H%\x02\u0174\u0175\x07{\x02\x02\u0175\u0176" +
		"\x05\xC4c\x02\u0176\u0177\x07\x12\x02\x02\u0177\u0178\x05\x88E\x02\u0178" +
		"\u0179\x07\x04\x02\x02\u0179\x1F\x03\x02\x02\x02\u017A\u017B\x07!\x02" +
		"\x02\u017B\u017C\x05\xC4c\x02\u017C\u017D\x05:\x1E\x02\u017D\u017E\x07" +
		"\x04\x02\x02\u017E!\x03\x02\x02\x02\u017F\u0180\x07\x88\x02\x02\u0180" +
		"\u0181\x05\xC4c\x02\u0181\u0182\x07\x1E\x02\x02\u0182\u0183\x05\x84C\x02" +
		"\u0183\u0184\x07\x04\x02\x02\u0184#\x03\x02\x02\x02\u0185\u0186\x07\"" +
		"\x02\x02\u0186\u0187\x05J&\x02\u0187\u018A\x07#\x02\x02\u0188\u018B\x07" +
		"\x15\x02\x02\u0189\u018B\x05H%\x02\u018A\u0188\x03\x02\x02\x02\u018A\u0189" +
		"\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018D\x07\x04\x02\x02" +
		"\u018D%\x03\x02\x02\x02\u018E\u018F\x07$\x02\x02\u018F\u0190\x05\xC4c" +
		"\x02\u0190\u019B\x07\x17\x02\x02\u0191\u0192\x05F$\x02\u0192\u0198\x07" +
		"\x04\x02\x02\u0193\u0194";
	private static readonly _serializedATNSegment1: string =
		"\x05F$\x02\u0194\u0195\x07\x04\x02\x02\u0195\u0197\x03\x02\x02\x02\u0196" +
		"\u0193\x03\x02\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02" +
		"\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A" +
		"\u0198\x03\x02\x02\x02\u019B\u0191\x03\x02\x02\x02\u019B\u019C\x03\x02" +
		"\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019E\x07\x19\x02\x02\u019E" +
		"\'\x03\x02\x02\x02\u019F\u01A0\x07%\x02\x02\u01A0\u01A2\x05\xC4c\x02\u01A1" +
		"\u01A3\x05:\x1E\x02\u01A2\u01A1\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02" +
		"\x02\u01A3\u01A8\x03\x02\x02\x02\u01A4\u01A7\x07\x86\x02\x02\u01A5\u01A7" +
		"\x05\xCAf\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A5\x03\x02\x02\x02" +
		"\u01A7\u01AA\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03" +
		"\x02\x02\x02\u01A9\u01AD\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB" +
		"\u01AE\x07\x04\x02\x02\u01AC\u01AE\x05V,\x02\u01AD\u01AB\x03\x02\x02\x02" +
		"\u01AD\u01AC\x03\x02\x02\x02\u01AE)\x03\x02\x02\x02\u01AF\u01B5\x05\xC4" +
		"c\x02\u01B0\u01B2\x07\x1F\x02\x02\u01B1\u01B3\x05\x8EH\x02\u01B2\u01B1" +
		"\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02" +
		"\u01B4\u01B6\x07 \x02\x02\u01B5\u01B0\x03\x02\x02\x02\u01B5\u01B6\x03" +
		"\x02\x02\x02\u01B6+\x03\x02\x02\x02\u01B7\u01B8\x05.\x18\x02\u01B8\u01B9" +
		"\x05:\x1E\x02\u01B9\u01BB\x052\x1A\x02\u01BA\u01BC\x050\x19\x02\u01BB" +
		"\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BF\x03\x02" +
		"\x02\x02\u01BD\u01C0\x07\x04\x02\x02\u01BE\u01C0\x05V,\x02\u01BF\u01BD" +
		"\x03\x02\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0-\x03\x02\x02\x02\u01C1" +
		"\u01C3\x07&\x02\x02\u01C2\u01C4\x05\xC4c\x02\u01C3\u01C2\x03\x02\x02\x02" +
		"\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01CA\x03\x02\x02\x02\u01C5\u01CA\x07" +
		"\x8C\x02\x02\u01C6\u01CA\x07\x8D\x02\x02\u01C7\u01CA\x07\x8E\x02\x02\u01C8" +
		"\u01CA\x05\xC8e\x02\u01C9\u01C1\x03\x02\x02\x02\u01C9\u01C5\x03\x02\x02" +
		"\x02\u01C9\u01C6\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01C8" +
		"\x03\x02\x02\x02\u01CA/\x03\x02\x02\x02\u01CB\u01CC\x07\'\x02\x02\u01CC" +
		"\u01CD\x05:\x1E\x02\u01CD1\x03\x02\x02\x02\u01CE\u01D9\x07\x7F\x02\x02" +
		"\u01CF\u01D9\x07\x84\x02\x02\u01D0\u01D9\x07\x81\x02\x02\u01D1\u01D9\x07" +
		"\x83\x02\x02\u01D2\u01D9\x07\x8A\x02\x02\u01D3\u01D9\x07\x8B\x02\x02\u01D4" +
		"\u01D9\x07\x86\x02\x02\u01D5\u01D9\x05T+\x02\u01D6\u01D9\x05*\x16\x02" +
		"\u01D7\u01D9\x05\xCAf\x02\u01D8\u01CE\x03\x02\x02\x02\u01D8\u01CF\x03" +
		"\x02\x02\x02\u01D8\u01D0\x03\x02\x02\x02\u01D8\u01D1\x03\x02\x02\x02\u01D8" +
		"\u01D2\x03\x02\x02\x02\u01D8\u01D3\x03\x02\x02\x02\u01D8\u01D4\x03\x02" +
		"\x02\x02\u01D8\u01D5\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8" +
		"\u01D7\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02" +
		"\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB3\x03\x02\x02\x02\u01DC\u01DA" +
		"\x03\x02\x02\x02\u01DD\u01DE\x07(\x02\x02\u01DE\u01DF\x05\xC4c\x02\u01DF" +
		"\u01E1\x05> \x02\u01E0\u01E2\x07y\x02\x02\u01E1\u01E0\x03\x02\x02\x02" +
		"\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\x07" +
		"\x04\x02\x02\u01E45\x03\x02\x02\x02\u01E5\u01E6\x05\xC4c\x02\u01E67\x03" +
		"\x02\x02\x02\u01E7\u01E8\x07)\x02\x02\u01E8\u01E9\x05\xC4c\x02\u01E9\u01EB" +
		"\x07\x17\x02\x02\u01EA\u01EC\x056\x1C\x02\u01EB\u01EA\x03\x02\x02\x02" +
		"\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01F1\x03\x02\x02\x02\u01ED\u01EE\x07" +
		"\x18\x02\x02\u01EE\u01F0\x056\x1C\x02\u01EF\u01ED\x03\x02\x02\x02\u01F0" +
		"\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03\x02" +
		"\x02\x02\u01F2\u01F4\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F4" +
		"\u01F5\x07\x19\x02\x02\u01F59\x03\x02\x02\x02\u01F6\u01FF\x07\x1F\x02" +
		"\x02\u01F7\u01FC\x05<\x1F\x02\u01F8\u01F9\x07\x18\x02\x02\u01F9\u01FB" +
		"\x05<\x1F\x02\u01FA\u01F8\x03\x02\x02\x02\u01FB\u01FE\x03\x02\x02\x02" +
		"\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u0200\x03" +
		"\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FF\u01F7\x03\x02\x02\x02\u01FF" +
		"\u0200\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0202\x07 \x02" +
		"\x02\u0202;\x03\x02\x02\x02\u0203\u0205\x05H%\x02\u0204\u0206\x05R*\x02" +
		"\u0205\u0204\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0208\x03" +
		"\x02\x02\x02\u0207\u0209\x05\xC4c\x02\u0208\u0207\x03\x02\x02\x02\u0208" +
		"\u0209\x03\x02\x02\x02\u0209=\x03\x02\x02\x02\u020A\u0213\x07\x1F\x02" +
		"\x02\u020B\u0210\x05@!\x02\u020C\u020D\x07\x18\x02\x02\u020D\u020F\x05" +
		"@!\x02\u020E\u020C\x03\x02\x02\x02\u020F\u0212\x03\x02\x02\x02\u0210\u020E" +
		"\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02" +
		"\u0212\u0210\x03\x02\x02\x02\u0213\u020B\x03\x02\x02\x02\u0213\u0214\x03" +
		"\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0216\x07 \x02\x02\u0216" +
		"?\x03\x02\x02\x02\u0217\u0219\x05H%\x02\u0218\u021A\x07\x80\x02\x02\u0219" +
		"\u0218\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021C\x03\x02" +
		"\x02\x02\u021B\u021D\x05\xC4c\x02\u021C\u021B\x03\x02\x02\x02\u021C\u021D" +
		"\x03\x02\x02\x02\u021DA\x03\x02\x02\x02\u021E\u0227\x07\x1F\x02\x02\u021F" +
		"\u0224\x05D#\x02\u0220\u0221\x07\x18\x02\x02\u0221\u0223\x05D#\x02\u0222" +
		"\u0220\x03\x02\x02\x02\u0223\u0226\x03\x02\x02\x02\u0224\u0222\x03\x02" +
		"\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0228\x03\x02\x02\x02\u0226" +
		"\u0224\x03\x02\x02\x02\u0227\u021F\x03\x02\x02\x02\u0227\u0228\x03\x02" +
		"\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022A\x07 \x02\x02\u022AC\x03" +
		"\x02\x02\x02\u022B\u022D\x05H%\x02\u022C\u022E\x05R*\x02\u022D\u022C\x03" +
		"\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022EE\x03\x02\x02\x02\u022F" +
		"\u0231\x05H%\x02\u0230\u0232\x05R*\x02\u0231\u0230\x03\x02\x02\x02\u0231" +
		"\u0232\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0234\x05\xC4" +
		"c\x02\u0234G\x03\x02\x02\x02\u0235\u0236\b%\x01\x02\u0236\u023E\x05\x84" +
		"C\x02\u0237\u023E\x05J&\x02\u0238\u023E\x05N(\x02\u0239\u023E\x05P)\x02" +
		"\u023A\u023E\x05\x86D\x02\u023B\u023C\x07,\x02\x02\u023C\u023E\x07\x82" +
		"\x02\x02\u023D\u0235\x03\x02\x02\x02\u023D\u0237\x03\x02\x02\x02\u023D" +
		"\u0238\x03\x02\x02\x02\u023D\u0239\x03\x02\x02\x02\u023D\u023A\x03\x02" +
		"\x02\x02\u023D\u023B\x03\x02\x02\x02\u023E\u0247\x03\x02\x02\x02\u023F" +
		"\u0240\f\x06\x02\x02\u0240\u0242\x07*\x02\x02\u0241\u0243\x05\x88E\x02" +
		"\u0242\u0241\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0244\x03" +
		"\x02\x02\x02\u0244\u0246\x07+\x02\x02\u0245\u023F\x03\x02\x02\x02\u0246" +
		"\u0249\x03\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0247\u0248\x03\x02" +
		"\x02\x02\u0248I\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u024A\u024F" +
		"\x05\xC4c\x02\u024B\u024C\x07-\x02\x02\u024C\u024E\x05\xC4c\x02\u024D" +
		"\u024B\x03\x02\x02\x02\u024E\u0251\x03\x02\x02\x02\u024F\u024D\x03\x02" +
		"\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250K\x03\x02\x02\x02\u0251\u024F" +
		"\x03\x02\x02\x02\u0252\u0255\x05\x84C\x02\u0253\u0255\x05J&\x02\u0254" +
		"\u0252\x03\x02\x02\x02\u0254\u0253\x03\x02\x02\x02\u0255M\x03\x02\x02" +
		"\x02\u0256\u0257\x07.\x02\x02\u0257\u0258\x07\x1F\x02\x02\u0258\u0259" +
		"\x05L\'\x02\u0259\u025A\x07/\x02\x02\u025A\u025B\x05H%\x02\u025B\u025C" +
		"\x07 \x02\x02\u025CO\x03\x02\x02\x02\u025D\u025E\x07&\x02\x02\u025E\u0264" +
		"\x05B\"\x02\u025F\u0263\x07\x81\x02\x02\u0260\u0263\x07\x7F\x02\x02\u0261" +
		"\u0263\x05T+\x02\u0262\u025F\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02" +
		"\u0262\u0261\x03\x02\x02\x02\u0263\u0266\x03\x02\x02\x02\u0264\u0262\x03" +
		"\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0269\x03\x02\x02\x02\u0266" +
		"\u0264\x03\x02\x02\x02\u0267\u0268\x07\'\x02\x02\u0268\u026A\x05B\"\x02" +
		"\u0269\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026AQ\x03\x02" +
		"\x02\x02\u026B\u026C\t\x05\x02\x02\u026CS\x03\x02\x02\x02\u026D\u026E" +
		"\t\x06\x02\x02\u026EU\x03\x02\x02\x02\u026F\u0273\x07\x17\x02\x02\u0270" +
		"\u0272\x05X-\x02\u0271\u0270\x03\x02\x02\x02\u0272\u0275\x03\x02\x02\x02" +
		"\u0273\u0271\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0276\x03" +
		"\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0276\u0277\x07\x19\x02\x02\u0277" +
		"W\x03\x02\x02\x02\u0278\u028A\x05\\/\x02\u0279\u028A\x05^0\x02\u027A\u028A" +
		"\x05b2\x02\u027B\u028A\x05d3\x02\u027C\u028A\x05j6\x02\u027D\u028A\x05" +
		"l7\x02\u027E\u028A\x05V,\x02\u027F\u028A\x05n8\x02\u0280\u028A\x05p9\x02" +
		"\u0281\u028A\x05r:\x02\u0282\u028A\x05t;\x02\u0283\u028A\x05v<\x02\u0284" +
		"\u028A\x05x=\x02\u0285\u028A\x05z>\x02\u0286\u028A\x05f4\x02\u0287\u028A" +
		"\x05h5\x02\u0288\u028A\x05|?\x02\u0289\u0278\x03\x02\x02\x02\u0289\u0279" +
		"\x03\x02\x02\x02\u0289\u027A\x03\x02\x02\x02\u0289\u027B\x03\x02\x02\x02" +
		"\u0289\u027C\x03\x02\x02\x02\u0289\u027D\x03\x02\x02\x02\u0289\u027E\x03" +
		"\x02\x02\x02\u0289\u027F\x03\x02\x02\x02\u0289\u0280\x03\x02\x02\x02\u0289" +
		"\u0281\x03\x02\x02\x02\u0289\u0282\x03\x02\x02\x02\u0289\u0283\x03\x02" +
		"\x02\x02\u0289\u0284\x03\x02\x02\x02\u0289\u0285\x03\x02\x02\x02\u0289" +
		"\u0286\x03\x02\x02\x02\u0289\u0287\x03\x02\x02\x02\u0289\u0288\x03\x02" +
		"\x02\x02\u028AY\x03\x02\x02\x02\u028B\u028C\x05\x88E\x02\u028C\u028D\x07" +
		"\x04\x02\x02\u028D[\x03\x02\x02\x02\u028E\u028F\x073\x02\x02\u028F\u0290" +
		"\x07\x1F\x02\x02\u0290\u0291\x05\x88E\x02\u0291\u0292\x07 \x02\x02\u0292" +
		"\u0295\x05X-\x02\u0293\u0294\x074\x02\x02\u0294\u0296\x05X-\x02\u0295" +
		"\u0293\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296]\x03\x02\x02" +
		"\x02\u0297\u0298\x075\x02\x02\u0298\u029A\x05\x88E\x02\u0299\u029B\x05" +
		"0\x19\x02\u029A\u0299\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B" +
		"\u029C\x03\x02\x02\x02\u029C\u029E\x05V,\x02\u029D\u029F\x05`1\x02\u029E" +
		"\u029D\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u029E\x03\x02" +
		"\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1_\x03\x02\x02\x02\u02A2\u02A7" +
		"\x076\x02\x02\u02A3\u02A5\x05\xC4c\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4" +
		"\u02A5\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A8\x05:\x1E" +
		"\x02\u02A7\u02A4\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02A9" +
		"\x03\x02\x02\x02\u02A9\u02AA\x05V,\x02\u02AAa\x03\x02\x02\x02\u02AB\u02AC" +
		"\x077\x02\x02\u02AC\u02AD\x07\x1F\x02\x02\u02AD\u02AE\x05\x88E\x02\u02AE" +
		"\u02AF\x07 \x02\x02\u02AF\u02B0\x05X-\x02\u02B0c\x03\x02\x02\x02\u02B1" +
		"\u02B2\x078\x02\x02\u02B2\u02B3\x07\x1F\x02\x02\u02B3\u02B4\x05\x88E\x02" +
		"\u02B4\u02B5\x07 \x02\x02\u02B5\u02B6\x05X-\x02\u02B6e\x03\x02\x02\x02" +
		"\u02B7\u02BA\x05~@\x02\u02B8\u02BA\x05Z.\x02\u02B9\u02B7\x03\x02\x02\x02" +
		"\u02B9\u02B8\x03\x02\x02\x02\u02BAg\x03\x02\x02\x02\u02BB\u02BC\x079\x02" +
		"\x02\u02BC\u02BD\x05V,\x02\u02BDi\x03\x02\x02\x02\u02BE\u02BF\x07#\x02" +
		"\x02\u02BF\u02C2\x07\x1F\x02\x02\u02C0\u02C3\x05f4\x02\u02C1\u02C3\x07" +
		"\x04\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C2\u02C1\x03\x02\x02\x02\u02C3" +
		"\u02C6\x03\x02\x02\x02\u02C4\u02C7\x05Z.\x02\u02C5\u02C7\x07\x04\x02\x02" +
		"\u02C6\u02C4\x03\x02\x02\x02\u02C6\u02C5\x03\x02\x02\x02\u02C7\u02C9\x03" +
		"\x02\x02\x02\u02C8\u02CA\x05\x88E\x02\u02C9\u02C8\x03\x02\x02\x02\u02C9" +
		"\u02CA\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CC\x07 \x02" +
		"\x02\u02CC\u02CD\x05X-\x02\u02CDk\x03\x02\x02\x02\u02CE\u02CF\x07#\x02" +
		"\x02\u02CF\u02D5\x07\x1F\x02\x02\u02D0\u02D6\x05F$\x02\u02D1\u02D2\x07" +
		"\x1F\x02\x02\u02D2\u02D3\x05\x80A\x02\u02D3\u02D4\x07 \x02\x02\u02D4\u02D6" +
		"\x03\x02\x02\x02\u02D5\u02D0\x03\x02\x02\x02\u02D5\u02D1\x03\x02\x02\x02" +
		"\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02DA\x07:\x02\x02\u02D8\u02DB\x05" +
		"\xC4c\x02\u02D9\u02DB\x05\x88E\x02\u02DA\u02D8\x03\x02\x02\x02\u02DA\u02D9" +
		"\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DD\x07 \x02\x02" +
		"\u02DD\u02DE\x05X-\x02\u02DEm\x03\x02\x02\x02\u02DF\u02E1\x07;\x02\x02" +
		"\u02E0\u02E2\x07\x90\x02\x02\u02E1\u02E0\x03\x02\x02\x02\u02E1\u02E2\x03" +
		"\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\u02E4\x05\x98M\x02\u02E4" +
		"o\x03\x02\x02\x02\u02E5\u02E6\x07<\x02\x02\u02E6\u02E7\x05X-\x02\u02E7" +
		"\u02E8\x077\x02\x02\u02E8\u02E9\x07\x1F\x02\x02\u02E9\u02EA\x05\x88E\x02" +
		"\u02EA\u02EB\x07 \x02\x02\u02EB\u02EC\x07\x04\x02\x02\u02ECq\x03\x02\x02" +
		"\x02\u02ED\u02EE\x07}\x02\x02\u02EE\u02EF\x07\x04\x02\x02\u02EFs\x03\x02" +
		"\x02\x02\u02F0\u02F1\x07z\x02\x02\u02F1\u02F2\x07\x04\x02\x02\u02F2u\x03" +
		"\x02\x02\x02\u02F3\u02F5\x07=\x02\x02\u02F4\u02F6\x05\x88E\x02\u02F5\u02F4" +
		"\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02" +
		"\u02F7\u02F8\x07\x04\x02\x02\u02F8w\x03\x02\x02\x02\u02F9\u02FA\x07>\x02" +
		"\x02\u02FA\u02FB\x07\x04\x02\x02\u02FBy\x03\x02\x02\x02\u02FC\u02FD\x07" +
		"?\x02\x02\u02FD\u02FE\x05\x96L\x02\u02FE\u02FF\x07\x04\x02\x02\u02FF{" +
		"\x03\x02\x02\x02\u0300\u0301\x07@\x02\x02\u0301\u0302\x05\x96L\x02\u0302" +
		"\u0303\x07\x04\x02\x02\u0303}\x03\x02\x02\x02\u0304\u0305\x07A\x02\x02" +
		"\u0305\u030C\x05\x82B\x02\u0306\u030C\x05F$\x02\u0307\u0308\x07\x1F\x02" +
		"\x02\u0308\u0309\x05\x80A\x02\u0309\u030A\x07 \x02\x02\u030A\u030C\x03" +
		"\x02\x02\x02\u030B\u0304\x03\x02\x02\x02\u030B\u0306\x03\x02\x02\x02\u030B" +
		"\u0307\x03\x02\x02\x02\u030C\u030F\x03\x02\x02\x02\u030D\u030E\x07\x12" +
		"\x02\x02\u030E\u0310\x05\x88E\x02\u030F\u030D\x03\x02\x02\x02\u030F\u0310" +
		"\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0312\x07\x04\x02\x02" +
		"\u0312\x7F\x03\x02\x02\x02\u0313\u0315\x05F$\x02\u0314\u0313\x03\x02\x02" +
		"\x02\u0314\u0315\x03\x02\x02\x02\u0315\u031C\x03\x02\x02\x02\u0316\u0318" +
		"\x07\x18\x02\x02\u0317\u0319\x05F$\x02\u0318\u0317\x03\x02\x02\x02\u0318" +
		"\u0319\x03\x02\x02\x02\u0319\u031B\x03\x02\x02\x02\u031A\u0316\x03\x02" +
		"\x02\x02\u031B\u031E\x03\x02\x02\x02\u031C\u031A\x03\x02\x02\x02\u031C" +
		"\u031D\x03\x02\x02\x02\u031D\x81\x03\x02\x02\x02\u031E\u031C\x03\x02\x02" +
		"\x02\u031F\u0326\x07\x1F\x02\x02\u0320\u0322\x05\xC4c\x02\u0321\u0320" +
		"\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02" +
		"\u0323\u0325\x07\x18\x02\x02\u0324\u0321\x03\x02\x02\x02\u0325\u0328\x03" +
		"\x02\x02\x02\u0326\u0324\x03\x02\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327" +
		"\u032A\x03\x02\x02\x02\u0328\u0326\x03\x02\x02\x02\u0329\u032B\x05\xC4" +
		"c\x02\u032A\u0329\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032C" +
		"\x03\x02\x02\x02\u032C\u032D\x07 \x02\x02\u032D\x83\x03\x02\x02\x02\u032E" +
		"\u032F\t\x07\x02\x02\u032F\x85\x03\x02\x02\x02\u0330\u0331\x07E\x02\x02" +
		"\u0331\u0336\x05H%\x02\u0332\u0333\x07\x18\x02\x02\u0333\u0335\x05H%\x02" +
		"\u0334\u0332\x03\x02\x02\x02\u0335\u0338\x03\x02\x02\x02\u0336\u0334\x03" +
		"\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u0339\x03\x02\x02\x02\u0338" +
		"\u0336\x03\x02\x02\x02\u0339\u033A\x07 \x02\x02\u033A\x87\x03\x02\x02" +
		"\x02\u033B\u033C\bE\x01\x02\u033C\u033D\x07H\x02\x02\u033D\u0355\x05H" +
		"%\x02\u033E\u0340\x07\x17\x02\x02\u033F\u0341\x05\x90I\x02\u0340\u033F" +
		"\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02" +
		"\u0342\u0343\x07\x19\x02\x02\u0343\u0355\x05\x88E\x19\u0344\u0355\x05" +
		"\x8CG\x02\u0345\u0346\x07\x1F\x02\x02\u0346\u0347\x05\x88E\x02\u0347\u0348" +
		"\x07 \x02\x02\u0348\u0355\x03\x02\x02\x02\u0349\u034A\t\b\x02\x02\u034A" +
		"\u0355\x05\x88E\x15\u034B\u034C\t\t\x02\x02\u034C\u0355\x05\x88E\x14\u034D" +
		"\u034E\t\n\x02\x02\u034E\u0355\x05\x88E\x13\u034F\u0350\x07M\x02\x02\u0350" +
		"\u0355\x05\x88E\x12\u0351\u0352\x07\r\x02\x02\u0352\u0355\x05\x88E\x11" +
		"\u0353\u0355\x05\x8AF\x02\u0354\u033B\x03\x02\x02\x02\u0354\u033E\x03" +
		"\x02\x02\x02\u0354\u0344\x03\x02\x02\x02\u0354\u0345\x03\x02\x02\x02\u0354" +
		"\u0349\x03\x02\x02\x02\u0354\u034B\x03\x02\x02\x02\u0354\u034D\x03\x02" +
		"\x02\x02\u0354\u034F\x03\x02\x02\x02\u0354\u0351\x03\x02\x02\x02\u0354" +
		"\u0353\x03\x02\x02\x02\u0355\u03A0\x03\x02\x02\x02\u0356\u0357\f\x10\x02" +
		"\x02\u0357\u0358\x07N\x02\x02\u0358\u039F\x05\x88E\x11\u0359\u035A\f\x0F" +
		"\x02\x02\u035A\u035B\t\v\x02\x02\u035B\u039F\x05\x88E\x10\u035C\u035D" +
		"\f\x0E\x02\x02\u035D\u035E\t\t\x02\x02\u035E\u039F\x05\x88E\x0F\u035F" +
		"\u0360\f\r\x02\x02\u0360\u0361\t\f\x02\x02\u0361\u039F\x05\x88E\x0E\u0362" +
		"\u0363\f\f\x02\x02\u0363\u0364\x07S\x02\x02\u0364\u039F\x05\x88E\r\u0365" +
		"\u0366\f\v\x02\x02\u0366\u0367\x07\f\x02\x02\u0367\u039F\x05\x88E\f\u0368" +
		"\u0369\f\n\x02\x02\u0369\u036A\x07T\x02\x02\u036A\u039F\x05\x88E\v\u036B" +
		"\u036C\f\t\x02\x02\u036C\u036D\t\r\x02\x02\u036D\u039F\x05\x88E\n\u036E" +
		"\u036F\f\b\x02\x02\u036F\u0370\t\x0E\x02\x02\u0370\u039F\x05\x88E\t\u0371" +
		"\u0372\f\x07\x02\x02\u0372\u0373\x07W\x02\x02\u0373\u039F\x05\x88E\b\u0374" +
		"\u0375\f\x06\x02\x02\u0375\u0376\x07\v\x02\x02\u0376\u039F\x05\x88E\x07" +
		"\u0377\u0378\f\x05\x02\x02\u0378\u0379\x07X\x02\x02\u0379\u037A\x05\x88" +
		"E\x02\u037A\u037B\x07:\x02\x02\u037B\u037C\x05\x88E\x06\u037C\u039F\x03" +
		"\x02\x02\x02\u037D\u037E\f\x04\x02\x02\u037E\u037F\t\x0F\x02\x02\u037F" +
		"\u039F\x05\x88E\x05\u0380\u0381\f\x1F\x02\x02\u0381\u039F\t\b\x02\x02" +
		"\u0382\u0383\f\x1D\x02\x02\u0383\u0384\x07*\x02\x02\u0384\u0385\x05\x88" +
		"E\x02\u0385\u0386\x07+\x02\x02\u0386\u039F\x03\x02\x02\x02\u0387\u0388" +
		"\f\x1C\x02\x02\u0388\u038A\x07*\x02\x02\u0389\u038B\x05\x88E\x02\u038A" +
		"\u0389\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038C\x03\x02" +
		"\x02\x02\u038C\u038E\x07:\x02\x02\u038D\u038F\x05\x88E\x02\u038E\u038D" +
		"\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02" +
		"\u0390\u039F\x07+\x02\x02\u0391\u0392\f\x1B\x02\x02\u0392\u0393\x07-\x02" +
		"\x02\u0393\u039F\x05\xC4c\x02\u0394\u0395\f\x1A\x02\x02\u0395\u0396\x07" +
		"\x17\x02\x02\u0396\u0397\x05\x90I\x02\u0397\u0398\x07\x19\x02\x02\u0398" +
		"\u039F\x03\x02\x02\x02\u0399\u039A\f\x17\x02\x02\u039A\u039B\x07\x1F\x02" +
		"\x02\u039B\u039C\x05\x94K\x02\u039C\u039D\x07 \x02\x02\u039D\u039F\x03" +
		"\x02\x02\x02\u039E\u0356\x03\x02\x02\x02\u039E\u0359\x03\x02\x02\x02\u039E" +
		"\u035C\x03\x02\x02\x02\u039E\u035F\x03\x02\x02\x02\u039E\u0362\x03\x02" +
		"\x02\x02\u039E\u0365\x03\x02\x02\x02\u039E\u0368\x03\x02\x02\x02\u039E" +
		"\u036B\x03\x02\x02\x02\u039E\u036E\x03\x02\x02\x02\u039E\u0371\x03\x02" +
		"\x02\x02\u039E\u0374\x03\x02\x02\x02\u039E\u0377\x03\x02\x02\x02\u039E" +
		"\u037D\x03\x02\x02\x02\u039E\u0380\x03\x02\x02\x02\u039E\u0382\x03\x02" +
		"\x02\x02\u039E\u0387\x03\x02\x02\x02\u039E\u0391\x03\x02\x02\x02\u039E" +
		"\u0394\x03\x02\x02\x02\u039E\u0399\x03\x02\x02\x02\u039F\u03A2\x03\x02" +
		"\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1" +
		"\x89\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A3\u03B6\x07s\x02" +
		"\x02\u03A4\u03B6\x05\xC2b\x02\u03A5\u03B6\x05\xC6d\x02\u03A6\u03B6\x05" +
		"\xCCg\x02\u03A7\u03AA\x05\xC4c\x02\u03A8\u03A9\x07*\x02\x02\u03A9\u03AB" +
		"\x07+\x02\x02\u03AA\u03A8\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02" +
		"\u03AB\u03B6\x03\x02\x02\x02\u03AC\u03B6\x07\x88\x02\x02\u03AD\u03B6\x07" +
		"\x82\x02\x02\u03AE\u03B6\x05\xBE`\x02\u03AF\u03B2\x05\xC0a\x02\u03B0\u03B1" +
		"\x07*\x02\x02\u03B1\u03B3\x07+\x02\x02\u03B2\u03B0\x03\x02\x02\x02\u03B2" +
		"\u03B3\x03\x02\x02\x02\u03B3\u03B6\x03\x02\x02\x02\u03B4\u03B6\x05H%\x02" +
		"\u03B5\u03A3\x03\x02\x02\x02\u03B5\u03A4\x03\x02\x02\x02\u03B5\u03A5\x03" +
		"\x02\x02\x02\u03B5\u03A6\x03\x02\x02\x02\u03B5\u03A7\x03\x02\x02\x02\u03B5" +
		"\u03AC\x03\x02\x02\x02\u03B5\u03AD\x03\x02\x02\x02\u03B5\u03AE\x03\x02" +
		"\x02\x02\u03B5\u03AF\x03\x02\x02\x02\u03B5\u03B4\x03\x02\x02\x02\u03B6" +
		"\x8B\x03\x02\x02\x02\u03B7\u03BE\x07\x17\x02\x02\u03B8\u03BA\x05\x90I" +
		"\x02\u03B9\u03B8\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03BF" +
		"\x03\x02\x02\x02\u03BB\u03BD\x05\x8EH\x02\u03BC\u03BB\x03\x02\x02\x02" +
		"\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BF\x03\x02\x02\x02\u03BE\u03B9\x03" +
		"\x02\x02\x02\u03BE\u03BC\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0" +
		"\u03C1\x07\x19\x02\x02\u03C1\x8D\x03\x02\x02\x02\u03C2\u03C7\x05\x88E" +
		"\x02\u03C3\u03C4\x07\x18\x02\x02\u03C4\u03C6\x05\x88E\x02\u03C5\u03C3" +
		"\x03\x02\x02\x02\u03C6\u03C9\x03\x02\x02\x02\u03C7\u03C5\x03\x02\x02\x02" +
		"\u03C7\u03C8\x03\x02\x02\x02\u03C8\x8F\x03\x02\x02\x02\u03C9\u03C7\x03" +
		"\x02\x02\x02\u03CA\u03CF\x05\x92J\x02\u03CB\u03CC\x07\x18\x02\x02\u03CC" +
		"\u03CE\x05\x92J\x02\u03CD\u03CB\x03\x02\x02\x02\u03CE\u03D1\x03\x02\x02" +
		"\x02\u03CF\u03CD\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03D3" +
		"\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D2\u03D4\x07\x18\x02\x02" +
		"\u03D3\u03D2\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4\x91\x03" +
		"\x02\x02\x02\u03D5\u03D6\x05\xC4c\x02\u03D6\u03D7\x07:\x02\x02\u03D7\u03D8" +
		"\x05\x88E\x02\u03D8\x93\x03\x02\x02\x02\u03D9\u03DB\x07\x17\x02\x02\u03DA" +
		"\u03DC\x05\x90I\x02\u03DB\u03DA\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02" +
		"\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03E2\x07\x19\x02\x02\u03DE\u03E0" +
		"\x05\x8EH\x02\u03DF\u03DE\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02" +
		"\u03E0\u03E2\x03\x02\x02\x02\u03E1\u03D9\x03\x02\x02\x02\u03E1\u03DF\x03" +
		"\x02\x02\x02\u03E2\x95\x03\x02\x02\x02\u03E3\u03E4\x05\x88E\x02\u03E4" +
		"\u03E5\x07\x1F\x02\x02\u03E5\u03E6\x05\x94K\x02\u03E6\u03E7\x07 \x02\x02" +
		"\u03E7\x97\x03\x02\x02\x02\u03E8\u03EC\x07\x17\x02\x02\u03E9\u03EB\x05" +
		"\x9AN\x02\u03EA\u03E9\x03\x02\x02\x02\u03EB\u03EE\x03\x02\x02\x02\u03EC" +
		"\u03EA\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED\u03EF\x03\x02" +
		"\x02\x02\u03EE\u03EC\x03\x02\x02\x02\u03EF\u03F0\x07\x19\x02\x02\u03F0" +
		"\x99\x03\x02\x02\x02\u03F1\u0404\x05\xC4c\x02\u03F2\u0404\x05\x98M\x02" +
		"\u03F3\u0404\x05\x9CO\x02\u03F4\u0404\x05\xA2R\x02\u03F5\u0404\x05\xA4" +
		"S\x02\u03F6\u0404\x05\xAAV\x02\u03F7\u0404\x05\xACW\x02\u03F8\u0404\x05" +
		"\xAEX\x02\u03F9\u0404\x05\xB2Z\x02\u03FA\u0404\x05\xB6\\\x02\u03FB\u0404" +
		"\x05\xB8]\x02\u03FC\u0404\x07z\x02\x02\u03FD\u0404\x07}\x02\x02\u03FE" +
		"\u0404\x07~\x02\x02\u03FF\u0404\x05\xBC_\x02\u0400\u0404\x05\xC2b\x02" +
		"\u0401\u0404\x05\xCCg\x02\u0402\u0404\x05\xC6d\x02\u0403\u03F1\x03\x02" +
		"\x02\x02\u0403\u03F2\x03\x02\x02\x02\u0403\u03F3\x03\x02\x02\x02\u0403" +
		"\u03F4\x03\x02\x02\x02\u0403\u03F5\x03\x02\x02\x02\u0403\u03F6\x03\x02" +
		"\x02\x02\u0403\u03F7\x03\x02\x02\x02\u0403\u03F8\x03\x02\x02\x02\u0403" +
		"\u03F9\x03\x02\x02\x02\u0403\u03FA\x03\x02\x02\x02\u0403\u03FB\x03\x02" +
		"\x02\x02\u0403\u03FC\x03\x02\x02\x02\u0403\u03FD\x03\x02\x02\x02\u0403" +
		"\u03FE\x03\x02\x02\x02\u0403\u03FF\x03\x02\x02\x02\u0403\u0400\x03\x02" +
		"\x02\x02\u0403\u0401\x03\x02\x02\x02\u0403\u0402\x03\x02\x02\x02\u0404" +
		"\x9B\x03\x02\x02\x02\u0405\u0409\x05\xA0Q\x02\u0406\u0409\x05\xBA^\x02" +
		"\u0407\u0409\x05\x9EP\x02\u0408\u0405\x03\x02\x02\x02\u0408\u0406\x03" +
		"\x02\x02\x02\u0408\u0407\x03\x02\x02\x02\u0409\x9D\x03\x02\x02\x02\u040A" +
		"\u040B\x05\xC4c\x02\u040B\u040C\x07-\x02\x02\u040C\u040D\x05\xC4c\x02" +
		"\u040D\x9F\x03\x02\x02\x02\u040E\u0413\x07=\x02\x02\u040F\u0413\x07,\x02" +
		"\x02\u0410\u0413\x07D\x02\x02\u0411\u0413\x05\xC4c\x02\u0412\u040E\x03" +
		"\x02\x02\x02\u0412\u040F\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02\u0412" +
		"\u0411\x03\x02\x02\x02\u0413\u0420\x03\x02\x02\x02\u0414\u0416\x07\x1F" +
		"\x02\x02\u0415\u0417\x05\x9CO\x02\u0416\u0415\x03\x02\x02\x02\u0416\u0417" +
		"\x03\x02\x02\x02\u0417\u041C\x03\x02\x02\x02\u0418\u0419\x07\x18\x02\x02" +
		"\u0419\u041B\x05\x9CO\x02\u041A\u0418\x03\x02\x02\x02\u041B\u041E\x03" +
		"\x02\x02\x02\u041C\u041A\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D" +
		"\u041F\x03\x02\x02\x02\u041E\u041C\x03\x02\x02\x02\u041F\u0421\x07 \x02" +
		"\x02\u0420\u0414\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\xA1" +
		"\x03\x02\x02\x02\u0422\u0423\x07c\x02\x02\u0423\u0426\x05\xA6T\x02\u0424" +
		"\u0425\x07d\x02\x02\u0425\u0427\x05\x9CO\x02\u0426\u0424\x03\x02\x02\x02" +
		"\u0426\u0427\x03\x02\x02\x02\u0427\xA3\x03\x02\x02\x02\u0428\u0429\x05" +
		"\xA6T\x02\u0429\u042A\x07d";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u042A\u042B\x05\x9CO\x02\u042B\xA5\x03\x02\x02\x02\u042C\u0433" +
		"\x05\xC4c\x02\u042D\u0433\x05\x9EP\x02\u042E\u042F\x07\x1F\x02\x02\u042F" +
		"\u0430\x05\xA8U\x02\u0430\u0431\x07 \x02\x02\u0431\u0433\x03\x02\x02\x02" +
		"\u0432\u042C\x03\x02\x02\x02\u0432\u042D\x03\x02\x02\x02\u0432\u042E\x03" +
		"\x02\x02\x02\u0433\xA7\x03\x02\x02\x02\u0434\u0439\x05\xC4c\x02\u0435" +
		"\u0436\x07\x18\x02\x02\u0436\u0438\x05\xC4c\x02\u0437\u0435\x03\x02\x02" +
		"\x02\u0438\u043B\x03\x02\x02\x02\u0439\u0437\x03\x02\x02\x02\u0439\u043A" +
		"\x03\x02\x02\x02\u043A\xA9\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02" +
		"\u043C\u043D\x07e\x02\x02\u043D\u043E\x05\xC4c\x02\u043E\xAB\x03\x02\x02" +
		"\x02\u043F\u0440\x05\xC4c\x02\u0440\u0441\x07:\x02\x02\u0441\xAD\x03\x02" +
		"\x02\x02\u0442\u0443\x07f\x02\x02\u0443\u0447\x05\x9CO\x02\u0444\u0446" +
		"\x05\xB0Y\x02\u0445\u0444\x03\x02\x02\x02\u0446\u0449\x03\x02\x02\x02" +
		"\u0447\u0445\x03\x02\x02\x02\u0447\u0448\x03\x02\x02\x02\u0448\xAF\x03" +
		"\x02\x02\x02\u0449\u0447\x03\x02\x02\x02\u044A\u044B\x07g\x02\x02\u044B" +
		"\u044C\x05\xBA^\x02\u044C\u044D\x05\x98M\x02\u044D\u0451\x03\x02\x02\x02" +
		"\u044E\u044F\x07h\x02\x02\u044F\u0451\x05\x98M\x02\u0450\u044A\x03\x02" +
		"\x02\x02\u0450\u044E\x03\x02\x02\x02\u0451\xB1\x03\x02\x02\x02\u0452\u0453" +
		"\x07&\x02\x02\u0453\u0454\x05\xC4c\x02\u0454\u0456\x07\x1F\x02\x02\u0455" +
		"\u0457\x05\xA8U\x02\u0456\u0455\x03\x02\x02\x02\u0456\u0457\x03\x02\x02" +
		"\x02\u0457\u0458\x03\x02\x02\x02\u0458\u045A\x07 \x02\x02\u0459\u045B" +
		"\x05\xB4[\x02\u045A\u0459\x03\x02\x02\x02\u045A\u045B\x03\x02\x02\x02" +
		"\u045B\u045C\x03\x02\x02\x02\u045C\u045D\x05\x98M\x02\u045D\xB3\x03\x02" +
		"\x02\x02\u045E\u045F\x07i\x02\x02\u045F\u0460\x05\xA8U\x02\u0460\xB5\x03" +
		"\x02\x02\x02\u0461\u0464\x07#\x02\x02\u0462\u0465\x05\x98M\x02\u0463\u0465" +
		"\x05\x9CO\x02\u0464\u0462\x03\x02\x02\x02\u0464\u0463\x03\x02\x02\x02" +
		"\u0465\u0466\x03\x02\x02\x02\u0466\u0469\x05\x9CO\x02\u0467\u046A\x05" +
		"\x98M\x02\u0468\u046A\x05\x9CO\x02\u0469\u0467\x03\x02\x02\x02\u0469\u0468" +
		"\x03\x02\x02\x02\u046A\u046B\x03\x02\x02\x02\u046B\u046C\x05\x98M\x02" +
		"\u046C\xB7\x03\x02\x02\x02\u046D\u046E\x073\x02\x02\u046E\u046F\x05\x9C" +
		"O\x02\u046F\u0470\x05\x98M\x02\u0470\xB9\x03\x02\x02\x02\u0471\u0476\x05" +
		"\xCCg\x02\u0472\u0476\x07t\x02\x02\u0473\u0476\x07u\x02\x02\u0474\u0476" +
		"\x05\xC6d\x02\u0475\u0471\x03\x02\x02\x02\u0475\u0472\x03\x02\x02\x02" +
		"\u0475\u0473\x03\x02\x02\x02\u0475\u0474\x03\x02\x02\x02\u0476\xBB\x03" +
		"\x02\x02\x02\u0477\u0478\x07;\x02\x02\u0478\u0479\x05\xC4c\x02\u0479\u047A" +
		"\x05\x98M\x02\u047A\xBD\x03\x02\x02\x02\u047B\u047D\x07\x1F\x02\x02\u047C" +
		"\u047E\x05\x88E\x02\u047D\u047C\x03\x02\x02\x02\u047D\u047E\x03\x02\x02" +
		"\x02\u047E\u0485\x03\x02\x02\x02\u047F\u0481\x07\x18\x02\x02\u0480\u0482" +
		"\x05\x88E\x02\u0481\u0480\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02" +
		"\u0482\u0484\x03\x02\x02\x02\u0483\u047F\x03\x02\x02\x02\u0484\u0487\x03" +
		"\x02\x02\x02\u0485\u0483\x03\x02\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486" +
		"\u0488\x03\x02\x02\x02\u0487\u0485\x03\x02\x02\x02\u0488\u0496\x07 \x02" +
		"\x02\u0489\u0492\x07*\x02\x02\u048A\u048F\x05\x88E\x02\u048B\u048C\x07" +
		"\x18\x02\x02\u048C\u048E\x05\x88E\x02\u048D\u048B\x03\x02\x02\x02\u048E" +
		"\u0491\x03\x02\x02\x02\u048F\u048D\x03\x02\x02\x02\u048F\u0490\x03\x02" +
		"\x02\x02\u0490\u0493\x03\x02\x02\x02\u0491\u048F\x03\x02\x02\x02\u0492" +
		"\u048A\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0494\x03\x02" +
		"\x02\x02\u0494\u0496\x07+\x02\x02\u0495\u047B\x03\x02\x02\x02\u0495\u0489" +
		"\x03\x02\x02\x02\u0496\xBF\x03\x02\x02\x02\u0497\u049A\x05\x84C\x02\u0498" +
		"\u049A\x05J&\x02\u0499\u0497\x03\x02\x02\x02\u0499\u0498\x03\x02\x02\x02" +
		"\u049A\xC1\x03\x02\x02\x02\u049B\u049D\t\x10\x02\x02\u049C\u049E\x07v" +
		"\x02\x02\u049D\u049C\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E" +
		"\xC3\x03\x02\x02\x02\u049F\u04A0\t\x11\x02\x02\u04A0\xC5\x03\x02\x02\x02" +
		"\u04A1\u04A3\x07w\x02\x02\u04A2\u04A1\x03\x02\x02\x02\u04A3\u04A4\x03" +
		"\x02\x02\x02\u04A4\u04A2\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5" +
		"\xC7\x03\x02\x02\x02\u04A6\u04A7\x07k\x02\x02\u04A7\xC9\x03\x02\x02\x02" +
		"\u04A8\u04B4\x07l\x02\x02\u04A9\u04AA\x07\x1F\x02\x02\u04AA\u04AF\x05" +
		"J&\x02\u04AB\u04AC\x07\x18\x02\x02\u04AC\u04AE\x05J&\x02\u04AD\u04AB\x03" +
		"\x02\x02\x02\u04AE\u04B1\x03\x02\x02\x02\u04AF\u04AD\x03\x02\x02\x02\u04AF" +
		"\u04B0\x03\x02\x02\x02\u04B0\u04B2\x03\x02\x02\x02\u04B1\u04AF\x03\x02" +
		"\x02\x02\u04B2\u04B3\x07 \x02\x02\u04B3\u04B5\x03\x02\x02\x02\u04B4\u04A9" +
		"\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5\xCB\x03\x02\x02\x02" +
		"\u04B6\u04B8\x07\x90\x02\x02\u04B7\u04B6\x03\x02\x02\x02\u04B8\u04B9\x03" +
		"\x02\x02\x02\u04B9\u04B7\x03\x02\x02\x02\u04B9\u04BA\x03\x02\x02\x02\u04BA" +
		"\xCD\x03\x02\x02\x02\x89\xD7\xD9\xE1\xEA\xEE\xF2\xF7\xFD\u0101\u0104\u0109" +
		"\u010F\u0116\u011A\u0127\u012F\u0134\u013E\u0141\u0147\u014F\u0152\u015D" +
		"\u0167\u0169\u016F\u018A\u0198\u019B\u01A2\u01A6\u01A8\u01AD\u01B2\u01B5" +
		"\u01BB\u01BF\u01C3\u01C9\u01D8\u01DA\u01E1\u01EB\u01F1\u01FC\u01FF\u0205" +
		"\u0208\u0210\u0213\u0219\u021C\u0224\u0227\u022D\u0231\u023D\u0242\u0247" +
		"\u024F\u0254\u0262\u0264\u0269\u0273\u0289\u0295\u029A\u02A0\u02A4\u02A7" +
		"\u02B9\u02C2\u02C6\u02C9\u02D5\u02DA\u02E1\u02F5\u030B\u030F\u0314\u0318" +
		"\u031C\u0321\u0326\u032A\u0336\u0340\u0354\u038A\u038E\u039E\u03A0\u03AA" +
		"\u03B2\u03B5\u03B9\u03BC\u03BE\u03C7\u03CF\u03D3\u03DB\u03DF\u03E1\u03EC" +
		"\u0403\u0408\u0412\u0416\u041C\u0420\u0426\u0432\u0439\u0447\u0450\u0456" +
		"\u045A\u0464\u0469\u0475\u047D\u0481\u0485\u048F\u0492\u0495\u0499\u049D" +
		"\u04A4\u04AF\u04B4\u04B9";
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
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getRuleContext(0, UserDefinedTypeNameContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public returnParameters(): ReturnParametersContext | undefined {
		return this.tryGetRuleContext(0, ReturnParametersContext);
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
	public subAssembly(): SubAssemblyContext | undefined {
		return this.tryGetRuleContext(0, SubAssemblyContext);
	}
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


export class SubAssemblyContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_subAssembly; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSubAssembly) {
			listener.enterSubAssembly(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSubAssembly) {
			listener.exitSubAssembly(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSubAssembly) {
			return visitor.visitSubAssembly(this);
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


