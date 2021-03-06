"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.











mustBeEqual = mustBeEqual;exports.












mustNotBeEqual = mustNotBeEqual;exports.












mustMatch = mustMatch;exports.












mustNotMatch = mustNotMatch;exports.












mustBeSame = mustBeSame;exports.












mustNotBeSame = mustNotBeSame;exports.








mustBeSimilarTo = mustBeSimilarTo;exports.








mustNotBeSimilarTo = mustNotBeSimilarTo;exports.













mustBeBetween = mustBeBetween;exports.













mustNotBeBetween = mustNotBeBetween;exports.












mustBeGreaterThan = mustBeGreaterThan;exports.












mustNotBeGreaterThan = mustNotBeGreaterThan;exports.












mustBeLessThan = mustBeLessThan;exports.












mustNotBeLessThan = mustNotBeLessThan;exports.












mustContain = mustContain;exports.












mustNotContain = mustNotContain;exports.












mustBeInsideOf = mustBeInsideOf;exports.












mustNotBeInsideOf = mustNotBeInsideOf;exports.























mustHave = mustHave;exports.



























mustNotHave = mustNotHave;exports.






















mustHaveAny = mustHaveAny;exports.












mustAllHave = mustAllHave;exports.
















mustNotAllHave = mustNotAllHave;exports.































mustRaise = mustRaise;exports.


























































mustNotRaise = mustNotRaise;exports.

















































mustBeInstanceOf = mustBeInstanceOf;exports.


























mustNotBeInstanceOf = mustNotBeInstanceOf;var _util = require("util");var _justoInlineAssert = require("justo-inline-assert");var assert = _interopRequireWildcard(_justoInlineAssert);var _AssertionError = require("./AssertionError");var _AssertionError2 = _interopRequireDefault(_AssertionError);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function mustBeEqual(one, two, msg) {if (!assert.equal(one, two)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(one) + "' must be equal to '" + (0, _util.inspect)(two) + "'.", msg);}}function mustNotBeEqual(one, two, msg) {if (!assert.notEqual(one, two)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(one) + "' must not be equal to '" + (0, _util.inspect)(two) + "'.", msg);}}function mustMatch(value, re, msg) {if (!assert.like(value, re)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(value) + "' must match '" + (0, _util.inspect)(re) + "'.", msg);}}function mustNotMatch(value, re, msg) {if (!assert.notLike(value, re)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(value) + "' must not match '" + (0, _util.inspect)(re) + "'.", msg);}}function mustBeSame(one, two, msg) {if (!assert.same(one, two)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(one) + "' must be the same as '" + (0, _util.inspect)(two) + "'.", msg);}}function mustNotBeSame(one, two, msg) {if (!assert.notSame(one, two)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(one) + "' must not be the same as '" + (0, _util.inspect)(two) + "'.", msg);}}function mustBeSimilarTo(one, two, msg) {if (!assert.similar(one, two)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(one) + "' must be similar to '" + (0, _util.inspect)(two) + "'.", msg);}}function mustNotBeSimilarTo(one, two, msg) {if (!assert.notSimilar(one, two)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(one) + "' must not be similar to '" + (0, _util.inspect)(two) + "'.", msg);}}function mustBeBetween(value, left, right, msg) {if (!assert.between(value, left, right)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(value) + "' must be between '" + (0, _util.inspect)(left) + "' and '" + (0, _util.inspect)(right) + "'.", msg);}}function mustNotBeBetween(value, left, right, msg) {if (!assert.notBetween(value, left, right)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(value) + "' must not be between '" + (0, _util.inspect)(left) + "' and '" + (0, _util.inspect)(right) + "'.", msg);}}function mustBeGreaterThan(one, two, msg) {if (!assert.gt(one, two)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(one) + "' must be greater than '" + (0, _util.inspect)(two) + "'.", msg);}}function mustNotBeGreaterThan(one, two, msg) {if (!assert.ngt(one, two)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(one) + "' must not be greater than '" + (0, _util.inspect)(two) + "'.", msg);}}function mustBeLessThan(one, two, msg) {if (!assert.lt(one, two)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(one) + "' must be less than '" + (0, _util.inspect)(two) + "'.", msg);}}function mustNotBeLessThan(one, two, msg) {if (!assert.nlt(one, two)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(one) + "' must not be less than '" + (0, _util.inspect)(two) + "'.", msg);}}function mustContain(col, item, msg) {if (!assert.contain(col, item)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(col) + "' must contain '" + (0, _util.inspect)(item) + "'.", msg);}}function mustNotContain(col, item, msg) {if (!assert.notContain(col, item)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(col) + "' must not contain '" + (0, _util.inspect)(item) + "'.", msg);}}function mustBeInsideOf(item, col, msg) {if (!assert.insideOf(item, col)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(col) + "' must contain '" + (0, _util.inspect)(item) + "'.", msg);}}function mustNotBeInsideOf(item, col, msg) {if (!assert.notInsideOf(item, col)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(col) + "' must not contain '" + (0, _util.inspect)(item) + "'.", msg);}}function mustHave(obj, props, msg) {if (!assert.have(obj, props)) {if (typeof props == "string") {throw new _AssertionError2.default("'" + (0, _util.inspect)(obj) + "' must have the '" + props + "' property.", msg);} else {throw new _AssertionError2.default("'" + (0, _util.inspect)(obj) + "' must have the properties: '" + (0, _util.inspect)(props) + "'.", msg);}}}function mustNotHave(obj, props, msg) {if (!assert.notHave(obj, props)) {if (typeof props == "string") {throw new _AssertionError2.default("'" + (0, _util.inspect)(obj) + "' must not have the '" + props + "' property.", msg);} else {throw new _AssertionError2.default("'" + (0, _util.inspect)(obj) + "' must not have the properties: '" + (0, _util.inspect)(props) + "'.", msg);}}}function mustHaveAny(obj, props, msg) {if (!assert.haveAny(obj, props)) {throw new _AssertionError2.default("'" + (0, _util.inspect)(obj) + "' must have at least property of '" + (0, _util.inspect)(props) + "'.", msg);}}function mustAllHave(list, props, msg) {if (!assert.allHave(list, props)) {if (typeof props == "string") {throw new _AssertionError2.default("All items of '" + (0, _util.inspect)(list) + "' must have the '" + props + "' property.", msg);} else {throw new _AssertionError2.default("All items of '" + (0, _util.inspect)(list) + "' must have the properties: '" + (0, _util.inspect)(props) + "'.", msg);}}}function mustNotAllHave(list, props, msg) {if (!assert.notAllHave(list, props)) {if (typeof props == "string") {throw new _AssertionError2.default("All items of '" + (0, _util.inspect)(list) + "' must not have the '" + props + "' property.", msg);} else {throw new _AssertionError2.default("All items of '" + (0, _util.inspect)(list) + "' must not have the properties: '" + (0, _util.inspect)(props) + "'.", msg);}}}function mustRaise(fn) {var params = void 0, error = void 0, msg = void 0;for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {args[_key - 1] = arguments[_key];}if (args.length == 1) {if (args[0] instanceof Array) params = args[0];else error = args[0];} else if (args.length == 2) {if (args[0] instanceof Array) {;params = args[0];msg = args[1];} else if (args[1] instanceof Array) {;error = args[0];params = args[1];} else {;error = args[0];msg = args[1];}} else if (args.length > 2) {error = args[0];params = args[1];msg = args[2];}if (!params) params = [];if (!assert.raise(fn, params, error)) {if (error) {if (typeof error == "string") {error = "'" + (0, _util.inspect)(fn) + "' must raise exception with message: '" + error + "'.";} else if (error instanceof RegExp) {error = "'" + (0, _util.inspect)(fn) + "' must raise exception with message like '" + error + "'.";} else if (error instanceof Function) {error = "'" + (0, _util.inspect)(fn) + "' must raise exception of type: '" + error.name + "'.";} else {error = "'" + (0, _util.inspect)(fn) + "' must raise exception with properties: '" + (0, _util.inspect)(error) + "'.";}} else {error = "'" + (0, _util.inspect)(fn) + "' must raise an error.";}throw new _AssertionError2.default(error, msg);}}function mustNotRaise(fn) {var params = void 0, error = void 0, msg = void 0;for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {args[_key2 - 1] = arguments[_key2];}if (args.length == 1) {if (args[0] instanceof Array) params = args[0];else error = args[0];} else if (args.length == 2) {if (args[0] instanceof Array) {;params = args[0];msg = args[1];} else if (args[1] instanceof Array) {;error = args[0];params = args[1];} else {;error = args[0];msg = args[1];}} else if (args.length > 2) {error = args[0];params = args[1];msg = args[2];}if (!params) params = [];if (!assert.notRaise(fn, params, error)) {if (error) {if (typeof error == "string") {error = "'" + (0, _util.inspect)(fn) + "' must not raise exception with message: '" + error + "'.";} else if (error instanceof RegExp) {error = "'" + (0, _util.inspect)(fn) + "' must not raise exception with message like '" + error + "'.";} else if (error instanceof Function) {error = "'" + (0, _util.inspect)(fn) + "' must not raise exception of type: '" + error.name + "'.";} else {error = "'" + (0, _util.inspect)(fn) + "' must not raise exception with properties: '" + (0, _util.inspect)(error) + "'.";}} else {error = "'" + (0, _util.inspect)(fn) + "' must not raise an error.";}throw new _AssertionError2.default(error, msg);}}function mustBeInstanceOf(obj, clss, msg) {if (!assert.instanceOf(obj, clss)) {if (typeof clss != "string") {if (clss === String) clss = "String";else if (clss === Number) clss = "Number";else if (clss === Boolean) clss = "Boolean";else if (clss instanceof Function) clss = clss.name;else clss = "unknown";}throw new _AssertionError2.default("'" + (0, _util.inspect)(obj) + "' must be instance of '" + clss + "'.", msg);}}function mustNotBeInstanceOf(obj, clss, msg) {
  if (!assert.notInstanceOf(obj, clss)) {
    if (typeof clss != "string") {
      if (clss === String) clss = "String";else 
      if (clss === Number) clss = "Number";else 
      if (clss === Boolean) clss = "Boolean";else 
      if (clss instanceof Function) clss = clss.name;else 
      clss = "unknown";}


    throw new _AssertionError2.default("'" + (0, _util.inspect)(obj) + "' must not be instance of '" + clss + "'.", msg);}}
