

"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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
        var _mustContain;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustContain = mustContain).call.apply(_mustContain, [mustContain, this.value].concat(args));
      }
    },
    have: {

      /**
       * Checks a wrapped value has a property set.
       */

      value: function have() {
        var _mustHave;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustHave = mustHave).call.apply(_mustHave, [mustHave, this.value].concat(args));
      }
    },
    haveAny: {

      /**
       * Checks whether the wrapped value has any specified property.
       */

      value: function haveAny() {
        var _mustHaveAny;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustHaveAny = mustHaveAny).call.apply(_mustHaveAny, [mustHave, this.value].concat(args));
      }
    },
    raise: {

      /**
       * Checks whether a function raises an error.
       */

      value: function raise() {
        var _mustRaise;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustRaise = mustRaise).call.apply(_mustRaise, [mustRaise, this.value].concat(args));
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
        var _mustNotContain;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustNotContain = mustNotContain).call.apply(_mustNotContain, [mustNotContain, this.value].concat(args));
      }
    },
    have: {

      /**
       * Checks whether the wrapped value hasn't a property set.
       */

      value: function have() {
        var _mustNotHave;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustNotHave = mustNotHave).call.apply(_mustNotHave, [mustNotHave, this.value].concat(args));
      }
    },
    raise: {

      /**
       * Checks whether the wrapped function doesn't raise an error.
       */

      value: function raise() {
        var _mustNotRaise;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustNotRaise = mustNotRaise).call.apply(_mustNotRaise, [mustNotRaise, this.value].concat(args));
      }
    }
  });

  return MustNot;
})(Wrapper);

/**
 * A must.be wrapper.
 */

var MustBe = (function (_Wrapper3) {
  function MustBe() {
    _classCallCheck(this, MustBe);

    if (_Wrapper3 != null) {
      _Wrapper3.apply(this, arguments);
    }
  }

  _inherits(MustBe, _Wrapper3);

  _createClass(MustBe, {
    equal: {
      /**
       * Checks whether the wrapped value is equal to another.
       */

      value: function equal() {
        var _mustBeEqual;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustBeEqual = mustBeEqual).call.apply(_mustBeEqual, [mustBeEqual, this.value].concat(args));
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
        var _mustBeSame;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustBeSame = mustBeSame).call.apply(_mustBeSame, [mustBeSame, this.value].concat(args));
      }
    },
    between: {

      /**
       * Checks whether the wrapped value is between within a range.
       */

      value: function between() {
        var _mustBeBetween;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustBeBetween = mustBeBetween).call.apply(_mustBeBetween, [mustBeBetween, this.value].concat(args));
      }
    },
    lessThan: {

      /**
       * Checks whether the wrapped value is less than another.
       */

      value: function lessThan() {
        var _mustBeLessThan;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustBeLessThan = mustBeLessThan).call.apply(_mustBeLessThan, [mustBeLessThan, this.value].concat(args));
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
        var _mustBeGreaterThan;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustBeGreaterThan = mustBeGreaterThan).call.apply(_mustBeGreaterThan, [mustBeGreaterThan, this.value].concat(args));
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
        var _mustBeInstanceOf;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustBeInstanceOf = mustBeInstanceOf).call.apply(_mustBeInstanceOf, [mustBeInstanceOf, this.value].concat(args));
      }
    }
  });

  return MustBe;
})(Wrapper);

/**
 * A must.not.be wrapper.
 */

var MustNotBe = (function (_Wrapper4) {
  function MustNotBe() {
    _classCallCheck(this, MustNotBe);

    if (_Wrapper4 != null) {
      _Wrapper4.apply(this, arguments);
    }
  }

  _inherits(MustNotBe, _Wrapper4);

  _createClass(MustNotBe, {
    equal: {
      /**
       * Checks whether the wrapped value isn't equal to another.
       */

      value: function equal() {
        var _mustNotBeEqual;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustNotBeEqual = mustNotBeEqual).call.apply(_mustNotBeEqual, [mustNotBeEqual, this.value].concat(args));
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
        var _mustNotBeSame;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustNotBeSame = mustNotBeSame).call.apply(_mustNotBeSame, [mustNotBeSame, this.value].concat(args));
      }
    },
    between: {

      /**
       * Checks whether the wrapped value isn't within a range.
       */

      value: function between() {
        var _mustNotBeBetween;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustNotBeBetween = mustNotBeBetween).call.apply(_mustNotBeBetween, [mustNotBeBetween, this.value].concat(args));
      }
    },
    lessThan: {

      /**
       * Checks whether the wrapped value isn't less than another.
       */

      value: function lessThan() {
        var _mustNotBeLessThan;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustNotBeLessThan = mustNotBeLessThan).call.apply(_mustNotBeLessThan, [mustNotBeLessThan, this.value].concat(args));
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
        var _mustNotBeGreaterThan;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustNotBeGreaterThan = mustNotBeGreaterThan).call.apply(_mustNotBeGreaterThan, [mustNotBeGreaterThan, this.value].concat(args));
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
        var _mustNotBeInstanceOf;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        (_mustNotBeInstanceOf = mustNotBeInstanceOf).call.apply(_mustNotBeInstanceOf, [mustNotBeInstanceOf, this.value].concat(args));
      }
    }
  });

  return MustNotBe;
})(Wrapper);

"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

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
 * @param actual:any		The value.
 * @param expected:any	The lowerbound exclusive.
 * @param [msg]:string	The message if error.
 */
exports.mustBeGreaterThan = mustBeGreaterThan;

/**
 * Checks whether a value is not greater than another.
 * 
 * @param actual:any		The value.
 * @param expected:any	The lowerbound exclusive.
 * @param [msg]:string	The message if error.
 */
exports.mustNotBeGreaterThan = mustNotBeGreaterThan;

/**
 * Checks whether a value is less than another.
 * 
 * @param actual:any		The value.
 * @param expected:any	The upperbound exclusive.
 * @param [msg]:string	The message if error.
 */
exports.mustBeLessThan = mustBeLessThan;

/**
 * Checks whether a value is not less than another.
 * 
 * @param actual:any		The value.
 * @param expected:any	The upperbound exclusive.
 * @param [msg]:string	The message if error.
 */
exports.mustNotBeLessThan = mustNotBeLessThan;

/**
 * Checks whether a collection contains an item.
 * 
 * @param col:any				The collection.
 * @param item:any			The item.
 * @param [msg]:string	The message if error.
 */
exports.mustContain = mustContain;

/**
 * Checks whether a collection doesn't contain an item.
 * 
 * @param col:any				The collection.
 * @param item:any			The item.
 * @param [msg]:string	The message if error.
 */
exports.mustNotContain = mustNotContain;

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
 * Checks whether a value is instance of a given class.
 *
 * @param obj:any       The value to check.
 * @param clss:class    The class object.
 * @param [msg]:string  The message if error.
 */
exports.mustBeInstanceOf = mustBeInstanceOf;

/**
 * Checks whether a value is not an instance of a given class.
 *
 * @param obj:any       The value to check.
 * @param clss:class    The class object.
 * @param [msg]:string  The message if error.
 */
exports.mustNotBeInstanceOf = mustNotBeInstanceOf;
Object.defineProperty(exports, "__esModule", {
  value: true
});
//imports
var assert = require("assert");
function mustBeEqual(actual, expected, msg) {
  try {
    assert.deepEqual(actual, expected);
  } catch (e) {
    throw new AssertionError("'" + actual + "' must be equal to '" + expected + "'.", msg);
  }
}

function mustNotBeEqual(actual, expected, msg) {
  try {
    assert.notDeepEqual(actual, expected);
  } catch (e) {
    throw new AssertionError("'" + actual + "' must not be equal to '" + expected + "'.", msg);
  }
}

function mustBeSame(actual, expected, msg) {
  try {
    assert.strictEqual(actual, expected);
  } catch (e) {
    throw new AssertionError("'" + actual + "' must be the same as '" + expected + "'.", msg);
  }
}

function mustNotBeSame(actual, expected, msg) {
  try {
    assert.notStrictEqual(actual, expected);
  } catch (e) {
    throw new AssertionError("'" + actual + "' must not be the same as '" + expected + "'.", msg);
  }
}

function mustBeBetween(value, left, right, msg) {
  if (!(value >= left && value <= right)) {
    throw new AssertionError("'" + value + "' must be between '" + left + "' and '" + right + "'.", msg);
  }
}

function mustNotBeBetween(value, left, right, msg) {
  if (value >= left && value <= right) {
    throw new AssertionError("'" + value + "' must not be between '" + left + "' and '" + right + "'.", msg);
  }
}

function mustBeGreaterThan(actual, expected, msg) {
  if (!(actual > expected)) {
    throw new AssertionError("'" + actual + "' must be greater than '" + expected + "'.", msg);
  }
}

function mustNotBeGreaterThan(actual, expected, msg) {
  if (actual > expected) {
    throw new AssertionError("'" + actual + "' must not be greater than '" + expected + "'.", msg);
  }
}

function mustBeLessThan(actual, expected, msg) {
  if (!(actual < expected)) {
    throw new AssertionError("'" + actual + "' must be less than '" + expected + "'.", msg);
  }
}

function mustNotBeLessThan(actual, expected, msg) {
  if (actual < expected) {
    throw new AssertionError("'" + actual + "' must not be less than '" + expected + "'.", msg);
  }
}

function mustContain(col, item, msg) {
  if (!((typeof col == "string" || col instanceof Array) && col.indexOf(item) >= 0)) {
    throw new AssertionError("'" + col + "' must contain '" + item + "'.", msg);
  }
}

function mustNotContain(col, item, msg) {
  if ((typeof col == "string" || col instanceof Array) && col.indexOf(item) >= 0) {
    throw new AssertionError("'" + col + "' must not contain '" + item + "'.", msg);
  }
}

function mustHave(obj, props, msg) {
  if (typeof props == "string") {
    if (!obj.hasOwnProperty(props)) {
      throw new AssertionError("" + obj + " must have property " + props + ".", msg);
    }
  } else if (props instanceof Array) {
    for (var i = 0; i < props.length; ++i) {
      var _name = props[i];

      if (!obj.hasOwnProperty(_name)) {
        throw new AssertionError("" + obj + " must have property " + _name + ".", msg);
      }
    }
  } else {
    for (var i = 0, keys = Object.keys(props); i < keys.length; ++i) {
      var _name2 = keys[i];
      var value = props[_name2];

      if (!obj.hasOwnProperty(_name2) || obj[_name2] != value) {
        throw new AssertionError("" + obj + " must have property " + _name2 + "=" + value + ".", msg);
      }
    }
  }
}

function mustNotHave(obj, props, msg) {
  if (typeof props == "string") {
    if (obj.hasOwnProperty(props)) {
      throw new AssertionError("" + obj + " must not have property " + props + ".", msg);
    }
  } else if (props instanceof Array) {
    for (var i = 0; i < props.length; ++i) {
      var _name = props[i];

      if (obj.hasOwnProperty(_name)) {
        throw new AssertionError("" + obj + " must not have property " + _name + ".", msg);
      }
    }
  } else {
    for (var i = 0, keys = Object.keys(props); i < keys.length; ++i) {
      var _name2 = keys[i];
      var value = props[_name2];

      if (obj.hasOwnProperty(_name2) && obj[_name2] == value) {
        throw new AssertionError("" + obj + " must have property " + _name2 + "=" + value + ".", msg);
      }
    }
  }
}

function mustHaveAny(obj, props, msg) {
  if (props instanceof Array) {
    if (props.length > 0) {
      for (var i = 0; i < props.length; ++i) {
        if (obj.hasOwnProperty(props[i])) {
          return;
        }
      }
    }
  } else {
    for (var _name in props) {
      if (obj[_name] == props[_name]) {
        return;
      }
    }
  }

  throw new AssertionError("" + obj + " must have any property of " + props + ".", msg);
}

function mustRaise(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var thrown, error, params, msg;

  //(1) pre: arguments
  if (!(fn instanceof Function)) {
    throw new Error("'" + fn + "' is not a callable object.");
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
    throw new AssertionError("'" + fn.name + "' expected to throw error.", msg);
  } else {
    if (error) {
      if (typeof error == "string") {
        if (thrown.message != error) {
          throw new AssertionError("'" + fn.name + "' expected to throw error.", msg);
        }
      } else {
        if (!(thrown instanceof error)) {
          throw new AssertionError("'" + fn.name + "' expected to throw error.", msg);
        }
      }
    }
  }
}

function mustBeInstanceOf(obj, clss, msg) {
  var err;

  //(1) check
  if (clss === String) err = typeof obj != "string";else if (clss === Number) err = typeof obj != "number";else if (clss === Boolean) err = typeof obj != "boolean";else err = !(obj instanceof clss);

  //(2) throw error if needed
  if (err) {
    if (obj instanceof Function) err = "'" + obj.name + "' must be instance of '" + clss.name + "'.";else err = "'" + obj + "' must be instance of '" + clss.name + "'.";

    throw new AssertionError(err, msg);
  }
}

function mustNotBeInstanceOf(obj, clss, msg) {
  var err;

  //(1) check
  if (clss === String) err = typeof obj == "string";else if (clss === Number) err = typeof obj == "number";else if (clss === Boolean) err = typeof obj == "boolean";else err = obj instanceof clss;

  //(2) throw error if needed
  if (err) {
    if (obj instanceof Function) err = "'" + obj.name + "' must not be instance of '" + clss.name + "'.";else err = "'" + obj + "' must not be instance of '" + clss.name + "'.";

    throw new AssertionError(err, msg);
  }
}

"use strict";

Number.prototype.__defineGetter__("must", function () {
  return new Must(this);
});

Object.prototype.__defineGetter__("must", function () {
  return new Must(this);
});

String.prototype.__defineGetter__("must", function () {
  return new Must(this);
});