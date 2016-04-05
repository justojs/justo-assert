"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.AssertionError = undefined;var _AssertionError = require("./lib/AssertionError");Object.defineProperty(exports, "AssertionError", { enumerable: true, get: function get() {return _interopRequireDefault(_AssertionError).



    default;} });var _Must = require("./lib/Must");var _Must2 = _interopRequireDefault(_Must);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


Object.defineProperty(Number.prototype, "must", { get: function get() {return new _Must2.default(this);} });
Object.defineProperty(Object.prototype, "must", { get: function get() {return new _Must2.default(this);} });
Object.defineProperty(String.prototype, "must", { get: function get() {return new _Must2.default(this);} });
