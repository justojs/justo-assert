"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports.mustBeEqual = mustBeEqual;
exports.mustNotBeEqual = mustNotBeEqual;
exports.mustMatch = mustMatch;
exports.mustNotMatch = mustNotMatch;
exports.mustBeSame = mustBeSame;
exports.mustNotBeSame = mustNotBeSame;
exports.mustBeBetween = mustBeBetween;
exports.mustNotBeBetween = mustNotBeBetween;
exports.mustBeGreaterThan = mustBeGreaterThan;
exports.mustNotBeGreaterThan = mustNotBeGreaterThan;
exports.mustBeLessThan = mustBeLessThan;
exports.mustNotBeLessThan = mustNotBeLessThan;
exports.mustContain = mustContain;
exports.mustNotContain = mustNotContain;
exports.mustBeInsideOf = mustBeInsideOf;
exports.mustNotBeInsideOf = mustNotBeInsideOf;
exports.mustHave = mustHave;
exports.mustNotHave = mustNotHave;
exports.mustHaveAny = mustHaveAny;
exports.mustAllHave = mustAllHave;
exports.mustNotAllHave = mustNotAllHave;
exports.mustRaise = mustRaise;
exports.mustNotRaise = mustNotRaise;
exports.mustBeInstanceOf = mustBeInstanceOf;
exports.mustNotBeInstanceOf = mustNotBeInstanceOf;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _AssertionError;

try {
  Mongo = Mongo;
  _AssertionError = Error;
} catch (e) {
  var assert = require("justo-inline-assert");
  _AssertionError = require("assert").AssertionError;
}

var AssertionError = (function (_AssertionError2) {
  _inherits(AssertionError, _AssertionError2);

  function AssertionError(msg1, msg2) {
    _classCallCheck(this, AssertionError);

    if (!msg1 && !msg2) throw new Error("Error message expected.");

    if (_AssertionError === Error) {
      _get(Object.getPrototypeOf(AssertionError.prototype), "constructor", this).call(this);
      this.name = "AssertionError";
      this.message = msg2 || msg1;
    } else {
      _get(Object.getPrototypeOf(AssertionError.prototype), "constructor", this).call(this, { message: msg2 || msg1 });
    }
  }

  return AssertionError;
})(_AssertionError);

exports.AssertionError = AssertionError;

function f(obj) {
  var res;

  switch (typeof obj) {
    case "undefined":
      res = "undefined";break;
    case "boolean":
      res = obj.toString();break;
    case "string":
      res = obj;break;
    case "number":
      res = obj.toString();break;
    case "function":
      res = "function" + (obj.name ? " " + obj.name : "");break;
    default:
      res = inspect(obj);break;
  }

  return res;

  function inspect(obj) {
    return JSON.stringify(obj);
  }
}

function mustBeEqual(one, two, msg) {
  if (!assert.equal(one, two)) {
    throw new AssertionError("'" + f(one) + "' must be equal to '" + f(two) + "'.", msg);
  }
}

function mustNotBeEqual(one, two, msg) {
  if (!assert.notEqual(one, two)) {
    throw new AssertionError("'" + f(one) + "' must not be equal to '" + f(two) + "'.", msg);
  }
}

function mustMatch(value, re, msg) {
  if (!assert.like(value, re)) {
    throw new AssertionError("'" + f(value) + "' must match '" + f(re) + "'.", msg);
  }
}

function mustNotMatch(value, re, msg) {
  if (!assert.notLike(value, re)) {
    throw new AssertionError("'" + f(value) + "' must not match '" + f(re) + "'.", msg);
  }
}

function mustBeSame(one, two, msg) {
  if (!assert.same(one, two)) {
    throw new AssertionError("'" + f(one) + "' must be the same as '" + f(two) + "'.", msg);
  }
}

function mustNotBeSame(one, two, msg) {
  if (!assert.notSame(one, two)) {
    throw new AssertionError("'" + f(one) + "' must not be the same as '" + f(two) + "'.", msg);
  }
}

function mustBeBetween(value, left, right, msg) {
  if (!assert.between(value, left, right)) {
    throw new AssertionError("'" + f(value) + "' must be between '" + f(left) + "' and '" + f(right) + "'.", msg);
  }
}

function mustNotBeBetween(value, left, right, msg) {
  if (!assert.notBetween(value, left, right)) {
    throw new AssertionError("'" + f(value) + "' must not be between '" + f(left) + "' and '" + f(right) + "'.", msg);
  }
}

function mustBeGreaterThan(one, two, msg) {
  if (!assert.gt(one, two)) {
    throw new AssertionError("'" + f(one) + "' must be greater than '" + f(two) + "'.", msg);
  }
}

function mustNotBeGreaterThan(one, two, msg) {
  if (!assert.ngt(one, two)) {
    throw new AssertionError("'" + f(one) + "' must not be greater than '" + f(two) + "'.", msg);
  }
}

function mustBeLessThan(one, two, msg) {
  if (!assert.lt(one, two)) {
    throw new AssertionError("'" + f(one) + "' must be less than '" + f(two) + "'.", msg);
  }
}

function mustNotBeLessThan(one, two, msg) {
  if (!assert.nlt(one, two)) {
    throw new AssertionError("'" + f(one) + "' must not be less than '" + f(two) + "'.", msg);
  }
}

function mustContain(col, item, msg) {
  if (!assert.contain(col, item)) {
    throw new AssertionError("'" + f(col) + "' must contain '" + f(item) + "'.", msg);
  }
}

function mustNotContain(col, item, msg) {
  if (!assert.notContain(col, item)) {
    throw new AssertionError("'" + f(col) + "' must not contain '" + f(item) + "'.", msg);
  }
}

function mustBeInsideOf(item, col, msg) {
  if (!assert.insideOf(item, col)) {
    throw new AssertionError("'" + f(col) + "' must contain '" + f(item) + "'.", msg);
  }
}

function mustNotBeInsideOf(item, col, msg) {
  if (!assert.notInsideOf(item, col)) {
    throw new AssertionError("'" + f(col) + "' must not contain '" + f(item) + "'.", msg);
  }
}

function mustHave(obj, props, msg) {
  if (!assert.have(obj, props)) {
    if (typeof props == "string") {
      throw new AssertionError("'" + f(obj) + "' must have the '" + props + "' property.", msg);
    } else {
      throw new AssertionError("'" + f(obj) + "' must have the properties: '" + f(props) + "'.", msg);
    }
  }
}

function mustNotHave(obj, props, msg) {
  if (!assert.notHave(obj, props)) {
    if (typeof props == "string") {
      throw new AssertionError("'" + f(obj) + "' must not have the '" + props + "' property.", msg);
    } else {
      throw new AssertionError("'" + f(obj) + "' must not have the properties: '" + f(props) + "'.", msg);
    }
  }
}

function mustHaveAny(obj, props, msg) {
  if (!assert.haveAny(obj, props)) {
    throw new AssertionError("'" + f(obj) + "' must have at least property of '" + f(props) + "'.", msg);
  }
}

function mustAllHave(list, props, msg) {
  if (!assert.allHave(list, props)) {
    if (typeof props == "string") {
      throw new AssertionError("All items of '" + f(list) + "' must have the '" + props + "' property.", msg);
    } else {
      throw new AssertionError("All items of '" + f(list) + "' must have the properties: '" + f(props) + "'.", msg);
    }
  }
}

function mustNotAllHave(list, props, msg) {
  if (!assert.notAllHave(list, props)) {
    if (typeof props == "string") {
      throw new AssertionError("All items of '" + f(list) + "' must not have the '" + props + "' property.", msg);
    } else {
      throw new AssertionError("All items of '" + f(list) + "' must not have the properties: '" + f(props) + "'.", msg);
    }
  }
}

function mustRaise(fn) {
  var params = undefined,
      error = undefined,
      msg = undefined;

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (args.length == 1) {
    if (args[0] instanceof Array) params = args[0];else error = args[0];
  } else if (args.length == 2) {
    if (args[0] instanceof Array) {
      ;
      params = args[0];
      msg = args[1];
    } else if (args[1] instanceof Array) {
      ;
      error = args[0];
      params = args[1];
    } else {
      ;
      error = args[0];
      msg = args[1];
    }
  } else if (args.length > 2) {
    error = args[0];
    params = args[1];
    msg = args[2];
  }

  if (!params) params = [];

  if (!assert.raise(fn, params, error)) {
    if (error) {
      if (typeof error == "string") {
        error = "'" + f(fn) + "' must raise exception with message: '" + error + "'.";
      } else if (error instanceof RegExp) {
        error = "'" + f(fn) + "' must raise exception with message like '" + error + "'.";
      } else if (error instanceof Function) {
        error = "'" + f(fn) + "' must raise exception of type: '" + error.name + "'.";
      } else {
        error = "'" + f(fn) + "' must raise exception with properties: '" + f(error) + "'.";
      }
    } else {
      error = "'" + f(fn) + "' must raise an error.";
    }

    throw new AssertionError(error, msg);
  }
}

function mustNotRaise(fn) {
  var params = undefined,
      error = undefined,
      msg = undefined;

  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  if (args.length == 1) {
    if (args[0] instanceof Array) params = args[0];else error = args[0];
  } else if (args.length == 2) {
    if (args[0] instanceof Array) {
      ;
      params = args[0];
      msg = args[1];
    } else if (args[1] instanceof Array) {
      ;
      error = args[0];
      params = args[1];
    } else {
      ;
      error = args[0];
      msg = args[1];
    }
  } else if (args.length > 2) {
    error = args[0];
    params = args[1];
    msg = args[2];
  }

  if (!params) params = [];

  if (!assert.notRaise(fn, params, error)) {
    if (error) {
      if (typeof error == "string") {
        error = "'" + f(fn) + "' must not raise exception with message: '" + error + "'.";
      } else if (error instanceof RegExp) {
        error = "'" + f(fn) + "' must not raise exception with message like '" + error + "'.";
      } else if (error instanceof Function) {
        error = "'" + f(fn) + "' must not raise exception of type: '" + error.name + "'.";
      } else {
        error = "'" + f(fn) + "' must not raise exception with properties: '" + f(error) + "'.";
      }
    } else {
      error = "'" + f(fn) + "' must not raise an error.";
    }

    throw new AssertionError(error, msg);
  }
}

function mustBeInstanceOf(obj, clss, msg) {
  if (!assert.instanceOf(obj, clss)) {
    if (typeof clss != "string") {
      if (clss === String) clss = "String";else if (clss === Number) clss = "Number";else if (clss === Boolean) clss = "Boolean";else if (clss instanceof Function) clss = clss.name;else clss = "unknown";
    }

    throw new AssertionError("'" + f(obj) + "' must be instance of '" + clss + "'.", msg);
  }
}

function mustNotBeInstanceOf(obj, clss, msg) {
  if (!assert.notInstanceOf(obj, clss)) {
    if (typeof clss != "string") {
      if (clss === String) clss = "String";else if (clss === Number) clss = "Number";else if (clss === Boolean) clss = "Boolean";else if (clss instanceof Function) clss = clss.name;else clss = "unknown";
    }

    throw new AssertionError("'" + f(obj) + "' must not be instance of '" + clss + "'.", msg);
  }
}

var Wrapper = function Wrapper(value) {
  _classCallCheck(this, Wrapper);

  Object.defineProperty(this, "value", { value: value });
};

var Must = (function (_Wrapper) {
  _inherits(Must, _Wrapper);

  function Must() {
    _classCallCheck(this, Must);

    _get(Object.getPrototypeOf(Must.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Must, [{
    key: "contain",
    value: function contain() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      mustContain.call.apply(mustContain, [mustContain, this.value].concat(args));
    }
  }, {
    key: "have",
    value: function have() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      mustHave.call.apply(mustHave, [mustHave, this.value].concat(args));
    }
  }, {
    key: "haveAny",
    value: function haveAny() {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      mustHaveAny.call.apply(mustHaveAny, [mustHave, this.value].concat(args));
    }
  }, {
    key: "raise",
    value: function raise() {
      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      mustRaise.call.apply(mustRaise, [mustRaise, this.value].concat(args));
    }
  }, {
    key: "match",
    value: function match() {
      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      mustMatch.call.apply(mustMatch, [mustMatch, this.value].concat(args));
    }
  }, {
    key: "all",
    get: function get() {
      return new MustAll(this.value);
    }
  }, {
    key: "be",
    get: function get() {
      return new MustBe(this.value);
    }
  }, {
    key: "not",
    get: function get() {
      return new MustNot(this.value);
    }
  }]);

  return Must;
})(Wrapper);

var MustNot = (function (_Wrapper2) {
  _inherits(MustNot, _Wrapper2);

  function MustNot() {
    _classCallCheck(this, MustNot);

    _get(Object.getPrototypeOf(MustNot.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(MustNot, [{
    key: "contain",
    value: function contain() {
      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      mustNotContain.call.apply(mustNotContain, [mustNotContain, this.value].concat(args));
    }
  }, {
    key: "have",
    value: function have() {
      for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      mustNotHave.call.apply(mustNotHave, [mustNotHave, this.value].concat(args));
    }
  }, {
    key: "raise",
    value: function raise() {
      for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }

      mustNotRaise.call.apply(mustNotRaise, [mustNotRaise, this.value].concat(args));
    }
  }, {
    key: "match",
    value: function match() {
      for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }

      mustNotMatch.call.apply(mustNotMatch, [mustNotMatch, this.value].concat(args));
    }
  }, {
    key: "all",
    get: function get() {
      return new MustNotAll(this.value);
    }
  }, {
    key: "be",
    get: function get() {
      return new MustNotBe(this.value);
    }
  }]);

  return MustNot;
})(Wrapper);

var MustAll = (function (_Wrapper3) {
  _inherits(MustAll, _Wrapper3);

  function MustAll() {
    _classCallCheck(this, MustAll);

    _get(Object.getPrototypeOf(MustAll.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(MustAll, [{
    key: "have",
    value: function have() {
      for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }

      mustAllHave.call.apply(mustAllHave, [mustAllHave, this.value].concat(args));
    }
  }]);

  return MustAll;
})(Wrapper);

var MustNotAll = (function (_Wrapper4) {
  _inherits(MustNotAll, _Wrapper4);

  function MustNotAll() {
    _classCallCheck(this, MustNotAll);

    _get(Object.getPrototypeOf(MustNotAll.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(MustNotAll, [{
    key: "have",
    value: function have() {
      for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        args[_key13] = arguments[_key13];
      }

      mustNotAllHave.call.apply(mustNotAllHave, [mustNotAllHave, this.value].concat(args));
    }
  }]);

  return MustNotAll;
})(Wrapper);

var MustBe = (function (_Wrapper5) {
  _inherits(MustBe, _Wrapper5);

  function MustBe() {
    _classCallCheck(this, MustBe);

    _get(Object.getPrototypeOf(MustBe.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(MustBe, [{
    key: "equal",
    value: function equal() {
      for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        args[_key14] = arguments[_key14];
      }

      mustBeEqual.call.apply(mustBeEqual, [mustBeEqual, this.value].concat(args));
    }
  }, {
    key: "eq",
    value: function eq() {
      this.equal.apply(this, arguments);
    }
  }, {
    key: "same",
    value: function same() {
      for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        args[_key15] = arguments[_key15];
      }

      mustBeSame.call.apply(mustBeSame, [mustBeSame, this.value].concat(args));
    }
  }, {
    key: "between",
    value: function between() {
      for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        args[_key16] = arguments[_key16];
      }

      mustBeBetween.call.apply(mustBeBetween, [mustBeBetween, this.value].concat(args));
    }
  }, {
    key: "insideOf",
    value: function insideOf() {
      for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
        args[_key17] = arguments[_key17];
      }

      mustBeInsideOf.call.apply(mustBeInsideOf, [mustBeInsideOf, this.value].concat(args));
    }
  }, {
    key: "in",
    value: function _in() {
      this.insideOf.apply(this, arguments);
    }
  }, {
    key: "lessThan",
    value: function lessThan() {
      for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
        args[_key18] = arguments[_key18];
      }

      mustBeLessThan.call.apply(mustBeLessThan, [mustBeLessThan, this.value].concat(args));
    }
  }, {
    key: "lt",
    value: function lt() {
      this.lessThan.apply(this, arguments);
    }
  }, {
    key: "greaterThan",
    value: function greaterThan() {
      for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
        args[_key19] = arguments[_key19];
      }

      mustBeGreaterThan.call.apply(mustBeGreaterThan, [mustBeGreaterThan, this.value].concat(args));
    }
  }, {
    key: "gt",
    value: function gt() {
      this.greaterThan.apply(this, arguments);
    }
  }, {
    key: "instanceOf",
    value: function instanceOf() {
      for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
        args[_key20] = arguments[_key20];
      }

      mustBeInstanceOf.call.apply(mustBeInstanceOf, [mustBeInstanceOf, this.value].concat(args));
    }
  }]);

  return MustBe;
})(Wrapper);

var MustNotBe = (function (_Wrapper6) {
  _inherits(MustNotBe, _Wrapper6);

  function MustNotBe() {
    _classCallCheck(this, MustNotBe);

    _get(Object.getPrototypeOf(MustNotBe.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(MustNotBe, [{
    key: "equal",
    value: function equal() {
      for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
        args[_key21] = arguments[_key21];
      }

      mustNotBeEqual.call.apply(mustNotBeEqual, [mustNotBeEqual, this.value].concat(args));
    }
  }, {
    key: "eq",
    value: function eq() {
      this.equal.apply(this, arguments);
    }
  }, {
    key: "same",
    value: function same() {
      for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
        args[_key22] = arguments[_key22];
      }

      mustNotBeSame.call.apply(mustNotBeSame, [mustNotBeSame, this.value].concat(args));
    }
  }, {
    key: "between",
    value: function between() {
      for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
        args[_key23] = arguments[_key23];
      }

      mustNotBeBetween.call.apply(mustNotBeBetween, [mustNotBeBetween, this.value].concat(args));
    }
  }, {
    key: "insideOf",
    value: function insideOf() {
      for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
        args[_key24] = arguments[_key24];
      }

      mustNotBeInsideOf.call.apply(mustNotBeInsideOf, [mustNotBeInsideOf, this.value].concat(args));
    }
  }, {
    key: "in",
    value: function _in() {
      this.insideOf.apply(this, arguments);
    }
  }, {
    key: "lessThan",
    value: function lessThan() {
      for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
        args[_key25] = arguments[_key25];
      }

      mustNotBeLessThan.call.apply(mustNotBeLessThan, [mustNotBeLessThan, this.value].concat(args));
    }
  }, {
    key: "lt",
    value: function lt() {
      this.lessThan.apply(this, arguments);
    }
  }, {
    key: "greaterThan",
    value: function greaterThan() {
      for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
        args[_key26] = arguments[_key26];
      }

      mustNotBeGreaterThan.call.apply(mustNotBeGreaterThan, [mustNotBeGreaterThan, this.value].concat(args));
    }
  }, {
    key: "gt",
    value: function gt() {
      this.greaterThan.apply(this, arguments);
    }
  }, {
    key: "instanceOf",
    value: function instanceOf() {
      for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
        args[_key27] = arguments[_key27];
      }

      mustNotBeInstanceOf.call.apply(mustNotBeInstanceOf, [mustNotBeInstanceOf, this.value].concat(args));
    }
  }]);

  return MustNotBe;
})(Wrapper);

Object.defineProperty(Number.prototype, "must", { get: function get() {
    return new Must(this);
  } });
Object.defineProperty(Object.prototype, "must", { get: function get() {
    return new Must(this);
  } });
Object.defineProperty(String.prototype, "must", { get: function get() {
    return new Must(this);
  } });
