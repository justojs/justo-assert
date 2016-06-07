"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _assert = require("./assert");var assert = _interopRequireWildcard(_assert);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var 







Wrapper = 





function Wrapper(value) {_classCallCheck(this, Wrapper);
  Object.defineProperty(this, "value", { value: value });};var 






Must = function (_Wrapper) {_inherits(Must, _Wrapper);function Must() {_classCallCheck(this, Must);return _possibleConstructorReturn(this, Object.getPrototypeOf(Must).apply(this, arguments));}_createClass(Must, [{ key: "contain", value: function contain() 
























    {var _assert$mustContain;for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
      (_assert$mustContain = assert.mustContain).call.apply(_assert$mustContain, [assert.mustContain, this.value].concat(args));} }, { key: "have", value: function have() 





    {var _assert$mustHave;for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
      (_assert$mustHave = assert.mustHave).call.apply(_assert$mustHave, [assert.mustHave, this.value].concat(args));} }, { key: "haveAny", value: function haveAny() 





    {var _assert$mustHaveAny;for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
      (_assert$mustHaveAny = assert.mustHaveAny).call.apply(_assert$mustHaveAny, [assert.mustHave, this.value].concat(args));} }, { key: "raise", value: function raise() 





    {var _assert$mustRaise;for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      (_assert$mustRaise = assert.mustRaise).call.apply(_assert$mustRaise, [assert.mustRaise, this.value].concat(args));} }, { key: "match", value: function match() 





    {var _assert$mustMatch;for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      (_assert$mustMatch = assert.mustMatch).call.apply(_assert$mustMatch, [assert.mustMatch, this.value].concat(args));} }, { key: "all", get: function get() {return new MustAll(this.value);} }, { key: "be", get: function get() {return new MustBe(this.value);} }, { key: "not", get: function get() {return new MustNot(this.value);} }]);return Must;}(Wrapper);exports.default = Must;var 






MustNot = function (_Wrapper2) {_inherits(MustNot, _Wrapper2);function MustNot() {_classCallCheck(this, MustNot);return _possibleConstructorReturn(this, Object.getPrototypeOf(MustNot).apply(this, arguments));}_createClass(MustNot, [{ key: "contain", value: function contain() 

















    {var _assert$mustNotContai;for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      (_assert$mustNotContai = assert.mustNotContain).call.apply(_assert$mustNotContai, [assert.mustNotContain, this.value].concat(args));} }, { key: "have", value: function have() 





    {var _assert$mustNotHave;for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      (_assert$mustNotHave = assert.mustNotHave).call.apply(_assert$mustNotHave, [assert.mustNotHave, this.value].concat(args));} }, { key: "raise", value: function raise() 





    {var _assert$mustNotRaise;for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      (_assert$mustNotRaise = assert.mustNotRaise).call.apply(_assert$mustNotRaise, [assert.mustNotRaise, this.value].concat(args));} }, { key: "match", value: function match() 





    {var _assert$mustNotMatch;for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {args[_key9] = arguments[_key9];}
      (_assert$mustNotMatch = assert.mustNotMatch).call.apply(_assert$mustNotMatch, [assert.mustNotMatch, this.value].concat(args));} }, { key: "all", get: function get() {return new MustNotAll(this.value);} }, { key: "be", get: function get() {return new MustNotBe(this.value);} }]);return MustNot;}(Wrapper);var 






MustAll = function (_Wrapper3) {_inherits(MustAll, _Wrapper3);function MustAll() {_classCallCheck(this, MustAll);return _possibleConstructorReturn(this, Object.getPrototypeOf(MustAll).apply(this, arguments));}_createClass(MustAll, [{ key: "have", value: function have() 
    {var _assert$mustAllHave;for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {args[_key10] = arguments[_key10];}
      (_assert$mustAllHave = assert.mustAllHave).call.apply(_assert$mustAllHave, [assert.mustAllHave, this.value].concat(args));} }]);return MustAll;}(Wrapper);var 






MustNotAll = function (_Wrapper4) {_inherits(MustNotAll, _Wrapper4);function MustNotAll() {_classCallCheck(this, MustNotAll);return _possibleConstructorReturn(this, Object.getPrototypeOf(MustNotAll).apply(this, arguments));}_createClass(MustNotAll, [{ key: "have", value: function have() 
    {var _assert$mustNotAllHav;for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {args[_key11] = arguments[_key11];}
      (_assert$mustNotAllHav = assert.mustNotAllHave).call.apply(_assert$mustNotAllHav, [assert.mustNotAllHave, this.value].concat(args));} }]);return MustNotAll;}(Wrapper);var 






MustBe = function (_Wrapper5) {_inherits(MustBe, _Wrapper5);function MustBe() {_classCallCheck(this, MustBe);return _possibleConstructorReturn(this, Object.getPrototypeOf(MustBe).apply(this, arguments));}_createClass(MustBe, [{ key: "equal", value: function equal() 



    {var _assert$mustBeEqual;for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {args[_key12] = arguments[_key12];}
      (_assert$mustBeEqual = assert.mustBeEqual).call.apply(_assert$mustBeEqual, [assert.mustBeEqual, this.value].concat(args));} }, { key: "eq", value: function eq() 





    {
      this.equal.apply(this, arguments);} }, { key: "same", value: function same() 





    {var _assert$mustBeSame;for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {args[_key13] = arguments[_key13];}
      (_assert$mustBeSame = assert.mustBeSame).call.apply(_assert$mustBeSame, [assert.mustBeSame, this.value].concat(args));} }, { key: "similarTo", value: function similarTo() 





    {var _assert$mustBeSimilar;for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {args[_key14] = arguments[_key14];}
      (_assert$mustBeSimilar = assert.mustBeSimilarTo).call.apply(_assert$mustBeSimilar, [assert.mustBeSimilarTo, this.value].concat(args));} }, { key: "between", value: function between() 





    {var _assert$mustBeBetween;for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {args[_key15] = arguments[_key15];}
      (_assert$mustBeBetween = assert.mustBeBetween).call.apply(_assert$mustBeBetween, [assert.mustBeBetween, this.value].concat(args));} }, { key: "insideOf", value: function insideOf() 





    {var _assert$mustBeInsideO;for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {args[_key16] = arguments[_key16];}
      (_assert$mustBeInsideO = assert.mustBeInsideOf).call.apply(_assert$mustBeInsideO, [assert.mustBeInsideOf, this.value].concat(args));} }, { key: "in", value: function _in() 


    {
      this.insideOf.apply(this, arguments);} }, { key: "lessThan", value: function lessThan() 





    {var _assert$mustBeLessTha;for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {args[_key17] = arguments[_key17];}
      (_assert$mustBeLessTha = assert.mustBeLessThan).call.apply(_assert$mustBeLessTha, [assert.mustBeLessThan, this.value].concat(args));} }, { key: "lt", value: function lt() 





    {
      this.lessThan.apply(this, arguments);} }, { key: "greaterThan", value: function greaterThan() 





    {var _assert$mustBeGreater;for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {args[_key18] = arguments[_key18];}
      (_assert$mustBeGreater = assert.mustBeGreaterThan).call.apply(_assert$mustBeGreater, [assert.mustBeGreaterThan, this.value].concat(args));} }, { key: "gt", value: function gt() 





    {
      this.greaterThan.apply(this, arguments);} }, { key: "instanceOf", value: function instanceOf() 





    {var _assert$mustBeInstanc;for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {args[_key19] = arguments[_key19];}
      (_assert$mustBeInstanc = assert.mustBeInstanceOf).call.apply(_assert$mustBeInstanc, [assert.mustBeInstanceOf, this.value].concat(args));} }, { key: "like", value: function like() 





    {var _assert$mustMatch2;for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {args[_key20] = arguments[_key20];}
      (_assert$mustMatch2 = assert.mustMatch).call.apply(_assert$mustMatch2, [assert.mustMatch, this.value].concat(args));} }]);return MustBe;}(Wrapper);var 






MustNotBe = function (_Wrapper6) {_inherits(MustNotBe, _Wrapper6);function MustNotBe() {_classCallCheck(this, MustNotBe);return _possibleConstructorReturn(this, Object.getPrototypeOf(MustNotBe).apply(this, arguments));}_createClass(MustNotBe, [{ key: "equal", value: function equal() 



    {var _assert$mustNotBeEqua;for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {args[_key21] = arguments[_key21];}
      (_assert$mustNotBeEqua = assert.mustNotBeEqual).call.apply(_assert$mustNotBeEqua, [assert.mustNotBeEqual, this.value].concat(args));} }, { key: "eq", value: function eq() 





    {
      this.equal.apply(this, arguments);} }, { key: "same", value: function same() 





    {var _assert$mustNotBeSame;for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {args[_key22] = arguments[_key22];}
      (_assert$mustNotBeSame = assert.mustNotBeSame).call.apply(_assert$mustNotBeSame, [assert.mustNotBeSame, this.value].concat(args));} }, { key: "similarTo", value: function similarTo() 





    {var _assert$mustNotBeSimi;for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {args[_key23] = arguments[_key23];}
      (_assert$mustNotBeSimi = assert.mustNotBeSimilarTo).call.apply(_assert$mustNotBeSimi, [assert.mustNotBeSimilarTo, this.value].concat(args));} }, { key: "between", value: function between() 





    {var _assert$mustNotBeBetw;for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {args[_key24] = arguments[_key24];}
      (_assert$mustNotBeBetw = assert.mustNotBeBetween).call.apply(_assert$mustNotBeBetw, [assert.mustNotBeBetween, this.value].concat(args));} }, { key: "insideOf", value: function insideOf() 





    {var _assert$mustNotBeInsi;for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {args[_key25] = arguments[_key25];}
      (_assert$mustNotBeInsi = assert.mustNotBeInsideOf).call.apply(_assert$mustNotBeInsi, [assert.mustNotBeInsideOf, this.value].concat(args));} }, { key: "in", value: function _in() 


    {
      this.insideOf.apply(this, arguments);} }, { key: "lessThan", value: function lessThan() 





    {var _assert$mustNotBeLess;for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {args[_key26] = arguments[_key26];}
      (_assert$mustNotBeLess = assert.mustNotBeLessThan).call.apply(_assert$mustNotBeLess, [assert.mustNotBeLessThan, this.value].concat(args));} }, { key: "lt", value: function lt() 





    {
      this.lessThan.apply(this, arguments);} }, { key: "greaterThan", value: function greaterThan() 





    {var _assert$mustNotBeGrea;for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {args[_key27] = arguments[_key27];}
      (_assert$mustNotBeGrea = assert.mustNotBeGreaterThan).call.apply(_assert$mustNotBeGrea, [assert.mustNotBeGreaterThan, this.value].concat(args));} }, { key: "gt", value: function gt() 





    {
      this.greaterThan.apply(this, arguments);} }, { key: "instanceOf", value: function instanceOf() 





    {var _assert$mustNotBeInst;for (var _len28 = arguments.length, args = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {args[_key28] = arguments[_key28];}
      (_assert$mustNotBeInst = assert.mustNotBeInstanceOf).call.apply(_assert$mustNotBeInst, [assert.mustNotBeInstanceOf, this.value].concat(args));} }, { key: "like", value: function like() 





    {var _assert$mustNotMatch2;for (var _len29 = arguments.length, args = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {args[_key29] = arguments[_key29];}
      (_assert$mustNotMatch2 = assert.mustNotMatch).call.apply(_assert$mustNotMatch2, [assert.mustNotMatch, this.value].concat(args));} }]);return MustNotBe;}(Wrapper);
