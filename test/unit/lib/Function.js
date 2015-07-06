describe("must<Function>", function() {
  function fn() {}
  function rs(msg) { throw new Error(msg); }

  describe("#must.raise()", function() {
    it("raise() - pass", function() {
      rs.must.raise();
    });

    it("raise() - fail", function() {
      (function() {
        fn.must.raise();
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("raise(msg) - fail", function() {
      (function() {
        fn.must.raise([], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.raise()", function() {
    it("not.raise() - pass", function() {
      fn.must.not.raise();
    });

    it("not.raise() - fail", function() {
      (function() {
        rs.must.not.raise();
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.raise(msg) - fail", function() {
      (function() {
        rs.must.not.raise([], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });
});
