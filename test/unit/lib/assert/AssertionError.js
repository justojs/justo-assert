//imports
const assert = require("assert");
const AssertionError = require("../../../../dist/es5/nodejs/justo-assert").AssertionError;

//suite
describe("AssertionError", function() {
  describe("#constructor()", function() {
    describe("Error handling", function() {
      it("constuctor()", function() {
        (function() {
          var error = new AssertionError();
        }).should.throwError(Error, {name: "Error", message: "Error message expected."});
      });
    });

    it("constructor(msg)", function() {
      var err = new AssertionError("Error message");

      err.should.be.instanceOf(assert.AssertionError);
      err.name.should.be.eql("AssertionError");
      err.message.should.be.eql("Error message");
    });

    it("constructor(msg1, msg2)", function() {
      var err = new AssertionError("Message #1", "Message #2");

      err.should.be.instanceOf(assert.AssertionError);
      err.name.should.be.eql("AssertionError");
      err.message.should.be.eql("Message #2");
    });
  });

  describe("#toString()", function() {
    it("toString() : string", function() {
      var err = new AssertionError("Error message");

      err.toString().should.be.eql("AssertionError: Error message");
    });
  });
});
