"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * Checks whether two values are equal.
 *
 * @param actual:any    The first value.
 * @param expected:any  The second value.
 * @param [msg]:string  The message if error.
 */
exports.mustBeEqual = mustBeEqual;

/**
 * Checks whether two values aren't equal.
 *
 * @param actual:any    The first value.
 * @param expected:any  The second value.
 * @param [msg]:string  The message if error.
 */
exports.mustNotBeEqual = mustNotBeEqual;

/**
 * Checks whether a value matches a regular expression.
 *
 * @param value:any     The value to check.
 * @param re:RegExp     The regular expression to match.
 * @param [msg]:string  The assertion message.
 */
exports.mustMatch = mustMatch;

/**
 * Checks whether a value doesn't match a regular expression.
 *
 * @param value:any     The value to check.
 * @param re:RegExp     The regular expression to match.
 * @param [msg]:string  The assertion message.
 */
exports.mustNotMatch = mustNotMatch;

/**
 * Checks whether two values are the same.
 *
 * @param actual:any    The first value.
 * @param expected:any  The second value.
 * @param [msg]:string  The message if error.
 */
exports.mustBeSame = mustBeSame;

/**
 * Checks whether two values aren't the same.
 *
 * @param actual:any    The first value.
 * @param expected:any  The second value.
 * @param [msg]:string  The message if error.
 */
exports.mustNotBeSame = mustNotBeSame;

/**
 * Checks whether a value is within a range.
 *
 * @param value:any     The value.
 * @param left:number   The lowerbound inclusive.
 * @param right:number  The upperbound inclusive.
 * @param [msg]:string  The message if error.
 */
exports.mustBeBetween = mustBeBetween;

/**
 * Checks whether a value is not within a range.
 *
 * @param value:any     The value.
 * @param left:any      The lowerbound inclusive.
 * @param right:any     The upperbound inclusive.
 * @param [msg]:string  The message if error.
 */
exports.mustNotBeBetween = mustNotBeBetween;

/**
 * Checks whether a value is greater than another.
 *
 * @param actual:any    The value.
 * @param expected:any  The lowerbound exclusive.
 * @param [msg]:string  The message if error.
 */
exports.mustBeGreaterThan = mustBeGreaterThan;

/**
 * Checks whether a value is not greater than another.
 *
 * @param actual:any    The value.
 * @param expected:any  The lowerbound exclusive.
 * @param [msg]:string  The message if error.
 */
exports.mustNotBeGreaterThan = mustNotBeGreaterThan;

/**
 * Checks whether a value is less than another.
 *
 * @param actual:any    The value.
 * @param expected:any  The upperbound exclusive.
 * @param [msg]:string  The message if error.
 */
exports.mustBeLessThan = mustBeLessThan;

/**
 * Checks whether a value is not less than another.
 *
 * @param actual:any    The value.
 * @param expected:any  The upperbound exclusive.
 * @param [msg]:string  The message if error.
 */
exports.mustNotBeLessThan = mustNotBeLessThan;

/**
 * Checks whether a collection contains an item.
 *
 * @param col:any        The collection.
 * @param item:any      The item.
 * @param [msg]:string  The message if error.
 */
exports.mustContain = mustContain;

/**
 * Checks whether a collection doesn't contain an item.
 *
 * @param col:any        The collection.
 * @param item:any      The item.
 * @param [msg]:string  The message if error.
 */
exports.mustNotContain = mustNotContain;

/**
 * Checks whether a value is in a collection.
 *
 * @param item:any      The item.
 * @param col:any       The collection.
 * @param [msg]:string  The assertion message.
 */
exports.mustBeIn = mustBeIn;

/**
 * Checks whether a value is not in a collection.
 *
 * @param item:any      The item.
 * @param col:any       The collection.
 * @param [msg]:string  The assertion message.
 */
exports.mustNotBeIn = mustNotBeIn;

/**
 * Checks whether an object has specified properties.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param prop:string   The property name.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param obj:any         The object to check.
 * @param props:string[]  The property name.
 * @param [msg]:string    The message if error.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param props:object  The properties: name: value.
 * @param [msg]:string  The message if error.
 */
exports.mustHave = mustHave;

/**
 * Checks whether an object hasn't specified properties.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param prop: string  The property name.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param obj:any         The object to check.
 * @param props:string[]  The property names.
 * @param [msg]:string    The message if error.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param props:object  The property name.
 * @param [msg]:string  The message if error.
 */
exports.mustNotHave = mustNotHave;

/**
 * Checks whether an object has any specified properties.
 *
 * @overload
 * @param obj:any         The object to check.
 * @param props:string[]  The property names.
 * @param [msg]:string    The message if error.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param props:Object  The properties.
 * @param [msg]:string  The message if error.
 */
exports.mustHaveAny = mustHaveAny;

/**
 * Checks whether all items of a list have the specified properties.
 *
 * @param list:object[]         The list to check.
 * @param props:string[]|object The properties to check.
 * @param [msg]:string          The assertion message.
 */
exports.mustAllHave = mustAllHave;

/**
 * Checks whether all items of a list don't have the specified properties.
 *
 * @param list:object[]         The list to check.
 * @param props:string[]|object The properties to check.
 * @param msg:string            The assertion message.
 */
exports.mustNotAllHave = mustNotAllHave;

/**
 * Checks whether a function throws an error.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 * @param args:any[]    The arguments to call with.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 * @param error:any     The error expected.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param fn:function   The function object to call and to check.
 * @param error:any     The error expected.
 * @param args:any[]    The arguments to call with.
 * @param [msg]:string  The message if error.
 */
exports.mustRaise = mustRaise;

/**
 * Checks whether a function doesn't throw an error.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 * @param args:any[]    The arguments to call with.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 * @param error:any     The error expected.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param fn:function   The function object to call and to check.
 * @param error:any     The error expected.
 * @param args:any[]    The arguments to call with.
 * @param [msg]:string  The message if error.
 */
exports.mustNotRaise = mustNotRaise;

/**
 * Checks whether a value is instance of a given class.
 *
 * @overload
 * @param obj:any       The value to check.
 * @param clss:class    The class object.
 * @param [msg]:string  The assertion message.
 *
 * @overload
 * @param obj:any        The value to check.
 * @param clss:string    The class name.
 * @param [msg]:string  The assertion message.
 */
exports.mustBeInstanceOf = mustBeInstanceOf;

/**
 * Checks whether a value is not an instance of a given class.
 *
 * @overload
 * @param obj:any       The value to check.
 * @param clss:class    The class object.
 * @param [msg]:string  The assertion message.
 *
 * @overload
 * @param obj:any        The value to check.
 * @param clss:string    The class name.
 * @param [msg]:string  The assertion message.
 */
exports.mustNotBeInstanceOf = mustNotBeInstanceOf;
Object.defineProperty(exports, "__esModule", {
  value: true
});
//imports
var _AssertionError = require("assert").AssertionError;

/**
 * An assertion error.
 */

var AssertionError = exports.AssertionError = (function (_AssertionError2) {
  /**
   * Initializes the error.
   *
   * @param msg1:string   The default message.
   * @param [msg2]:string The custom message.
   */

  function AssertionError(msg1, msg2) {
    _classCallCheck(this, AssertionError);

    //(1) arguments
    if (!msg1 && !msg2) throw new Error("Error message expected.");

    //(2) superconstructor
    _get(Object.getPrototypeOf(AssertionError.prototype), "constructor", this).call(this, { message: msg2 || msg1 });
  }

  _inherits(AssertionError, _AssertionError2);

  return AssertionError;
})(_AssertionError);

//imports
var assert = require("assert");
var util = require("util");
var deepEqual = require("deep-equal");

var uf = util.format;

function f(obj) {
  var res;

  //(1) format
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
      res = util.inspect(obj);break;
  }

  //(2) return
  return res;
}
function mustBeEqual(actual, expected, msg) {
  if (!deepEqual(actual, expected)) {
    throw new AssertionError(uf("'%s' must be equal to '%s'.", f(actual), f(expected)), msg);
  }
}

function mustNotBeEqual(actual, expected, msg) {
  if (deepEqual(actual, expected)) {
    throw new AssertionError(uf("'%s' must not be equal to '%s'.", f(actual), f(expected)), msg);
  }
}

function mustMatch(value, re, msg) {
  if (!re.test(value)) {
    throw new AssertionError(uf("'%s' must match '%s'.", f(value), f(re)), msg);
  }
}

function mustNotMatch(value, re, msg) {
  if (re.test(value)) {
    throw new AssertionError(uf("'%s' must not match '%s'.", f(value), f(re)), msg);
  }
}

function mustBeSame(actual, expected, msg) {
  if (actual !== expected) {
    throw new AssertionError(uf("'%s' must be the same as '%s'.", f(actual), f(expected)), msg);
  }
}

function mustNotBeSame(actual, expected, msg) {
  if (actual === expected) {
    throw new AssertionError(uf("'%s' must not be the same as '%s'.", f(actual), f(expected)), msg);
  }
}

function mustBeBetween(value, left, right, msg) {
  if (!(value >= left && value <= right)) {
    throw new AssertionError(uf("'%s' must be between '%s' and '%s'.", f(value), f(left), f(right)), msg);
  }
}

function mustNotBeBetween(value, left, right, msg) {
  if (value >= left && value <= right) {
    throw new AssertionError(uf("'%s' must not be between '%s' and '%s'.", f(value), f(left), f(right)), msg);
  }
}

function mustBeGreaterThan(actual, expected, msg) {
  /* jshint ignore:start */
  if (!(actual > expected)) {
    throw new AssertionError(uf("'%s' must be greater than '%s'.", f(actual), f(expected)), msg);
  }
  /* jshint ignore:end */
}

function mustNotBeGreaterThan(actual, expected, msg) {
  if (actual > expected) {
    throw new AssertionError(uf("'%s' must not be greater than '%s'.", f(actual), f(expected)), msg);
  }
}

function mustBeLessThan(actual, expected, msg) {
  /* jshint ignore:start */
  if (!(actual < expected)) {
    throw new AssertionError(uf("'%s' must be less than '%s'.", f(actual), f(expected)), msg);
  }
  /* jshint ignore:end */
}

function mustNotBeLessThan(actual, expected, msg) {
  if (actual < expected) {
    throw new AssertionError(uf("'%s' must not be less than '%s'.", f(actual), f(expected)), msg);
  }
}

function mustContain(col, item, msg) {
  if (!((typeof col == "string" || col instanceof Array) && col.indexOf(item) >= 0)) {
    throw new AssertionError(uf("'%s' must contain '%s'.", f(col), f(item)), msg);
  }
}

function mustNotContain(col, item, msg) {
  if ((typeof col == "string" || col instanceof Array) && col.indexOf(item) >= 0) {
    throw new AssertionError(uf("'%s' must not contain '%s'.", f(col), f(item)), msg);
  }
}

function mustBeIn(item, col, msg) {
  if (typeof item != "object") {
    mustContain(col, item, msg);
  } else {
    if (col instanceof Array) {
      for (var i = 0; i < col.length; ++i) {
        if (deepEqual(item, col[i])) {
          return;
        }
      }
    }

    throw new AssertionError(uf("'%s' must contain '%s'.", f(col), f(item)), msg);
  }
}

function mustNotBeIn(item, col, msg) {
  if (typeof item != "object") {
    return mustNotContain(col, item, msg);
  } else {
    if (col instanceof Array) {
      for (var i = 0; i < col.length; ++i) {
        if (deepEqual(item, col[i])) {
          throw new AssertionError(uf("'%s' must not contain '%s'.", f(col), f(item)), msg);
        }
      }
    }
  }
}

function mustHave(obj, props, msg) {
  if (typeof props == "string") {
    if (!obj.hasOwnProperty(props)) {
      throw new AssertionError(uf("'%s' must have property '%s'.", f(obj), f(props)), msg);
    }
  } else if (props instanceof Array) {
    for (var i = 0; i < props.length; ++i) {
      var _name = props[i];

      if (!obj.hasOwnProperty(_name)) {
        throw new AssertionError(uf("'%s' must have property '%s'.", f(obj), f(_name)), msg);
      }
    }
  } else {
    for (var i = 0, keys = Object.keys(props); i < keys.length; ++i) {
      var _name2 = keys[i];
      var value = props[_name2];

      if (!obj.hasOwnProperty(_name2) || !deepEqual(obj[_name2], value)) {
        throw new AssertionError(uf("'%s' must have property '%s' = '%s'.", f(obj), f(_name2), f(value)), msg);
      }
    }
  }
}

function mustNotHave(obj, props, msg) {
  if (typeof props == "string") {
    if (obj.hasOwnProperty(props)) {
      throw new AssertionError(uf("'%s' must not have property '%s'.", f(obj), f(props)), msg);
    }
  } else if (props instanceof Array) {
    for (var i = 0; i < props.length; ++i) {
      var _name = props[i];

      if (obj.hasOwnProperty(_name)) {
        throw new AssertionError(uf("'%s' must not have property '%s'.", f(obj), f(props)), msg);
      }
    }
  } else {
    for (var i = 0, keys = Object.keys(props); i < keys.length; ++i) {
      var _name2 = keys[i];
      var value = props[_name2];

      if (obj.hasOwnProperty(_name2) && deepEqual(obj[_name2], value)) {
        throw new AssertionError(uf("'%s' must not have property '%s' = '%s'.", f(obj), f(_name2), f(value)), msg);
      }
    }
  }
}

function mustHaveAny(obj, props, msg) {
  var res;

  //(1) check
  res = false;

  if (props instanceof Array) {
    if (props.length > 0) {
      for (var i = 0; i < props.length; ++i) {
        if (obj.hasOwnProperty(props[i])) {
          res = true;
          break;
        }
      }
    }
  } else {
    for (var _name in props) {
      if (obj.hasOwnProperty(_name) && deepEqual(obj[_name], props[_name])) {
        res = true;
        break;
      }
    }
  }

  //(2) return
  if (!res) {
    throw new AssertionError(uf("'%s' must have any property of '%s'.", f(obj), f(props)), msg);
  }
}

function mustAllHave(list, props, msg) {
  //(1) arguments
  if (!(list instanceof Array)) {
    throw new AssertionError(uf("'%s' must be a list/array.", f(list)), msg);
  }

  //(2) check
  for (var i = 0; i < list.length; ++i) {
    mustHave(list[i], props, msg);
  }
}

function mustNotAllHave(list, props, msg) {
  //(1) arguments
  if (!(list instanceof Array)) {
    throw new AssertionError(uf("'%s' must be a list/array.", f(list)), msg);
  }

  //(2) check
  for (var i = 0; i < list.length; ++i) {
    mustNotHave(list[i], props, msg);
  }
}

function mustRaise(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var thrown, error, params, msg;

  //(1) pre: arguments
  if (!(fn instanceof Function)) {
    throw new Error(uf("'%s' is not a callable object.", f(fn)));
  }

  if (args.length == 1) {
    if (args[0] instanceof Array) params = args[0];else error = args[0];
  } else if (args.length == 2) {
    if (args[0] instanceof Array) {
      var _ref = args;

      var _ref2 = _slicedToArray(_ref, 2);

      params = _ref2[0];
      msg = _ref2[1];
    } else {
      error = args[0];

      if (args[1] instanceof Array) params = args[1];else msg = args[1];
    }
  } else {
    var _ref3 = args;

    var _ref32 = _slicedToArray(_ref3, 3);

    error = _ref32[0];
    params = _ref32[1];
    msg = _ref32[2];
  }

  if (!params) params = [];

  //(2) check
  try {
    fn.apply(fn, params);
  } catch (e) {
    thrown = e;
  }

  if (!thrown) {
    throw new AssertionError(uf("'%s' expected to throw an error.", f(fn)), msg);
  } else {
    if (error) {
      if (typeof error == "string") {
        if (thrown.message != error) {
          throw new AssertionError(uf("'%s' expected to throw error with message '%s'.", f(fn), error), msg);
        }
      } else if (error instanceof Function) {
        if (!(thrown instanceof error)) {
          throw new AssertionError(uf("'%s' expected to throw error instance of '%s'.", f(fn), error.name), msg);
        }
      } else {
        if (!deepEqual(thrown, error)) {
          throw new AssertionError(uf("'%s' expected to throw error object '%s'.", f(fn), f(error)), msg);
        }
      }
    }
  }
}

function mustNotRaise(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var thrown, error, params, msg;

  //(1) pre: arguments
  if (!(fn instanceof Function)) {
    throw new Error(uf("'%s' is not a callable object.", f(fn)));
  }

  if (args.length == 1) {
    if (args[0] instanceof Array) params = args[0];else error = args[0];
  } else if (args.length == 2) {
    if (args[0] instanceof Array) {
      var _ref = args;

      var _ref2 = _slicedToArray(_ref, 2);

      params = _ref2[0];
      msg = _ref2[1];
    } else {
      error = args[0];

      if (args[1] instanceof Array) params = args[1];else msg = args[1];
    }
  } else {
    var _ref3 = args;

    var _ref32 = _slicedToArray(_ref3, 3);

    error = _ref32[0];
    params = _ref32[1];
    msg = _ref32[2];
  }

  if (!params) params = [];

  //(2) check
  try {
    fn.apply(fn, params);
  } catch (e) {
    thrown = e;
  }

  if (thrown) {
    if (!error) {
      throw new AssertionError(uf("'%s' must not throw error.", f(fn)), msg);
    } else {
      if (typeof error == "string") {
        if (thrown.message == error) {
          throw new AssertionError(uf("'%s' must not throw error with message '%s'.", f(fn), thrown.message), msg);
        }
      } else if (error instanceof Function) {
        if (thrown instanceof error) {
          throw new AssertionError(uf("'%s' must not throw error instance of '%s'.", f(fn), error.name), msg);
        }
      } else {
        try {
          assert.notDeepEqual(thrown, error);
        } catch (e) {
          throw new AssertionError(uf("'%s' must not throw error equal to '%s'.", f(fn), f(error)), msg);
        }
      }
    }
  }
}

function mustBeInstanceOf(obj, clss, msg) {
  var err;

  //(1) check
  if (typeof clss == "string") {
    err = obj.constructor.name != clss;
    clss = { name: clss };
  } else {
    if (clss === String) err = typeof obj != "string";else if (clss === Number) err = typeof obj != "number";else if (clss === Boolean) err = typeof obj != "boolean";else err = !(obj instanceof clss);
  }

  //(2) throw error if needed
  if (err) {
    throw new AssertionError(uf("'%s' must be instance of '%s'.", f(obj), clss.name), msg);
  }
}

function mustNotBeInstanceOf(obj, clss, msg) {
  var err;

  //(1) check
  if (typeof clss == "string") {
    err = obj.constructor.name == clss;
    clss = { name: clss };
  } else {
    if (clss === String) err = typeof obj == "string";else if (clss === Number) err = typeof obj == "number";else if (clss === Boolean) err = typeof obj == "boolean";else err = obj instanceof clss;
  }

  //(2) throw error if needed
  if (err) {
    throw new AssertionError(uf("'%s' must not be instance of '%s'.", f(obj), clss.name), msg);
  }
}

/**
 * A wrapper of a value.
 *
 * @abstract
 * @readonly value:any  The wrapped value.
 */

var Wrapper =
/**
 * Constructor.
 *
 * @param(attr) value
 */
function Wrapper(value) {
  _classCallCheck(this, Wrapper);

  Object.defineProperty(this, "value", { value: value });
};

/**
 * A must wrapper.
 */

var Must = (function (_Wrapper) {
  function Must() {
    _classCallCheck(this, Must);

    if (_Wrapper != null) {
      _Wrapper.apply(this, arguments);
    }
  }

  _inherits(Must, _Wrapper);

  _createClass(Must, {
    all: {
      /**
       * Returns a must.all wrapper.
       */

      get: function () {
        return new MustAll(this.value);
      }
    },
    be: {

      /**
       * Returns a must.be wrapper.
       */

      get: function () {
        return new MustBe(this.value);
      }
    },
    not: {

      /**
       * Returns a must.not wrapper.
       */

      get: function () {
        return new MustNot(this.value);
      }
    },
    contain: {

      /**
       * Checks whether the wrapped collection contains an item.
       */

      value: function contain() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustContain.call.apply(mustContain, [mustContain, this.value].concat(args));
      }
    },
    have: {

      /**
       * Checks a wrapped value has a property set.
       */

      value: function have() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustHave.call.apply(mustHave, [mustHave, this.value].concat(args));
      }
    },
    haveAny: {

      /**
       * Checks whether the wrapped value has any specified property.
       */

      value: function haveAny() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustHaveAny.call.apply(mustHaveAny, [mustHave, this.value].concat(args));
      }
    },
    raise: {

      /**
       * Checks whether a function raises an error.
       */

      value: function raise() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustRaise.call.apply(mustRaise, [mustRaise, this.value].concat(args));
      }
    },
    match: {

      /**
       * Checks whether the wrapped value matches a regular expression.
       */

      value: function match() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustMatch.call.apply(mustMatch, [mustMatch, this.value].concat(args));
      }
    }
  });

  return Must;
})(Wrapper);

/**
 * A must.not wrapper.
 */

var MustNot = (function (_Wrapper2) {
  function MustNot() {
    _classCallCheck(this, MustNot);

    if (_Wrapper2 != null) {
      _Wrapper2.apply(this, arguments);
    }
  }

  _inherits(MustNot, _Wrapper2);

  _createClass(MustNot, {
    all: {
      /**
       * A must.not.all wrapper.
       */

      get: function () {
        return new MustNotAll(this.value);
      }
    },
    be: {

      /**
       * A must.not.be wrapper.
       */

      get: function () {
        return new MustNotBe(this.value);
      }
    },
    contain: {

      /**
       * Checks whether the wrapped collection doesn't contain an item.
       */

      value: function contain() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustNotContain.call.apply(mustNotContain, [mustNotContain, this.value].concat(args));
      }
    },
    have: {

      /**
       * Checks whether the wrapped value hasn't a property set.
       */

      value: function have() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustNotHave.call.apply(mustNotHave, [mustNotHave, this.value].concat(args));
      }
    },
    raise: {

      /**
       * Checks whether the wrapped function doesn't raise an error.
       */

      value: function raise() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustNotRaise.call.apply(mustNotRaise, [mustNotRaise, this.value].concat(args));
      }
    },
    match: {

      /**
       * Checks whether the wrapped valie doesn't match a regular expression.
       */

      value: function match() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustNotMatch.call.apply(mustNotMatch, [mustNotMatch, this.value].concat(args));
      }
    }
  });

  return MustNot;
})(Wrapper);

/**
 * A must.all wrapper.
 */

var MustAll = (function (_Wrapper3) {
  function MustAll() {
    _classCallCheck(this, MustAll);

    if (_Wrapper3 != null) {
      _Wrapper3.apply(this, arguments);
    }
  }

  _inherits(MustAll, _Wrapper3);

  _createClass(MustAll, {
    have: {
      value: function have() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustAllHave.call.apply(mustAllHave, [mustAllHave, this.value].concat(args));
      }
    }
  });

  return MustAll;
})(Wrapper);

/**
 * A must.not.all wrapper.
 */

var MustNotAll = (function (_Wrapper4) {
  function MustNotAll() {
    _classCallCheck(this, MustNotAll);

    if (_Wrapper4 != null) {
      _Wrapper4.apply(this, arguments);
    }
  }

  _inherits(MustNotAll, _Wrapper4);

  _createClass(MustNotAll, {
    have: {
      value: function have() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustNotAllHave.call.apply(mustNotAllHave, [mustNotAllHave, this.value].concat(args));
      }
    }
  });

  return MustNotAll;
})(Wrapper);

/**
 * A must.be wrapper.
 */

var MustBe = (function (_Wrapper5) {
  function MustBe() {
    _classCallCheck(this, MustBe);

    if (_Wrapper5 != null) {
      _Wrapper5.apply(this, arguments);
    }
  }

  _inherits(MustBe, _Wrapper5);

  _createClass(MustBe, {
    equal: {
      /**
       * Checks whether the wrapped value is equal to another.
       */

      value: function equal() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustBeEqual.call.apply(mustBeEqual, [mustBeEqual, this.value].concat(args));
      }
    },
    eq: {

      /**
       * @alias equal
       */

      value: function eq() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        this.equal.apply(this, args);
      }
    },
    same: {

      /**
       * Checks whether the wrapped value is strictly equal to another.
       */

      value: function same() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustBeSame.call.apply(mustBeSame, [mustBeSame, this.value].concat(args));
      }
    },
    between: {

      /**
       * Checks whether the wrapped value is between within a range.
       */

      value: function between() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustBeBetween.call.apply(mustBeBetween, [mustBeBetween, this.value].concat(args));
      }
    },
    "in": {

      /**
       * Checks whether the wrapped value is in a collection.
       */

      value: function _in() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustBeIn.call.apply(mustBeIn, [mustBeIn, this.value].concat(args));
      }
    },
    lessThan: {

      /**
       * Checks whether the wrapped value is less than another.
       */

      value: function lessThan() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustBeLessThan.call.apply(mustBeLessThan, [mustBeLessThan, this.value].concat(args));
      }
    },
    lt: {

      /**
       * @alias lessThan
       */

      value: function lt() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        this.lessThan.apply(this, args);
      }
    },
    greaterThan: {

      /**
       * Checks whether the wrapped value is greater than another.
       */

      value: function greaterThan() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustBeGreaterThan.call.apply(mustBeGreaterThan, [mustBeGreaterThan, this.value].concat(args));
      }
    },
    gt: {

      /**
       * @alias greaterThan
       */

      value: function gt() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        this.greaterThan.apply(this, args);
      }
    },
    instanceOf: {

      /**
       * Checks whether the wrapped value is an instance of a specified class.
       */

      value: function instanceOf() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustBeInstanceOf.call.apply(mustBeInstanceOf, [mustBeInstanceOf, this.value].concat(args));
      }
    }
  });

  return MustBe;
})(Wrapper);

/**
 * A must.not.be wrapper.
 */

var MustNotBe = (function (_Wrapper6) {
  function MustNotBe() {
    _classCallCheck(this, MustNotBe);

    if (_Wrapper6 != null) {
      _Wrapper6.apply(this, arguments);
    }
  }

  _inherits(MustNotBe, _Wrapper6);

  _createClass(MustNotBe, {
    equal: {
      /**
       * Checks whether the wrapped value isn't equal to another.
       */

      value: function equal() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustNotBeEqual.call.apply(mustNotBeEqual, [mustNotBeEqual, this.value].concat(args));
      }
    },
    eq: {

      /**
       * @alias equal
       */

      value: function eq() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        this.equal.apply(this, args);
      }
    },
    same: {

      /**
       * Checks whether the wrapped value isn't strictly equal to another.
       */

      value: function same() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustNotBeSame.call.apply(mustNotBeSame, [mustNotBeSame, this.value].concat(args));
      }
    },
    between: {

      /**
       * Checks whether the wrapped value isn't within a range.
       */

      value: function between() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustNotBeBetween.call.apply(mustNotBeBetween, [mustNotBeBetween, this.value].concat(args));
      }
    },
    "in": {

      /**
       * Checks whether the wrapped value isn't in a collection.
       */

      value: function _in() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustNotBeIn.call.apply(mustNotBeIn, [mustNotBeIn, this.value].concat(args));
      }
    },
    lessThan: {

      /**
       * Checks whether the wrapped value isn't less than another.
       */

      value: function lessThan() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustNotBeLessThan.call.apply(mustNotBeLessThan, [mustNotBeLessThan, this.value].concat(args));
      }
    },
    lt: {

      /**
       * @alias lessThan
       */

      value: function lt() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        this.lessThan.apply(this, args);
      }
    },
    greaterThan: {

      /**
       * Checks whether the wrapped value isn't greater than another.
       */

      value: function greaterThan() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustNotBeGreaterThan.call.apply(mustNotBeGreaterThan, [mustNotBeGreaterThan, this.value].concat(args));
      }
    },
    gt: {

      /**
       * @alias greaterThan
       */

      value: function gt() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        this.greaterThan.apply(this, args);
      }
    },
    instanceOf: {

      /**
       * Checks whether the wrapped value isn't an instance of a given class.
       */

      value: function instanceOf() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        mustNotBeInstanceOf.call.apply(mustNotBeInstanceOf, [mustNotBeInstanceOf, this.value].concat(args));
      }
    }
  });

  return MustNotBe;
})(Wrapper);

Number.prototype.__defineGetter__("must", function () {
  return new Must(this);
});

Object.prototype.__defineGetter__("must", function () {
  return new Must(this);
});

String.prototype.__defineGetter__("must", function () {
  return new Must(this);
});