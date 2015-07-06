//imports
var _AssertionError;

try {
  Mongo = Mongo;
  _AssertionError = Error;
} catch (e) {
  var assert = require("justo-inline-assert");
  _AssertionError = require("assert").AssertionError;
}
