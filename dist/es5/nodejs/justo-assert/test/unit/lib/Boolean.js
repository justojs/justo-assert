describe("must<boolean>", function() {
  describe("#must.raise()", function() {
    it("raise() - always pass", function() {
      true.must.raise();
    });
  });

  describe("#must.contain()", function() {
    it("contain(item) - always fail", function() {
      (function() {
        true.must.contain("t");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("contain(item, msg) - always fail", function() {
      (function() {
        true.must.contain("t", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.contain()", function() {
    it("not.contain(item) - always pass", function() {
      true.must.not.contain("t");
    });
  });

  describe("#must.be.insideOf()", function() {
    it("be.insideOf(array) - pass", function() {
      true.must.be.insideOf([0, 1, true, 3, 4]);
    });

    it("be.insideOf(array) - fail", function() {
      (function() {
        true.must.be.insideOf([0, "true"]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.insideOf(array, msg) - fail", function() {
      (function() {
        true.must.be.insideOf([0, "true"], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.insideOf()", function() {
    it("not.be.insideOf(array) - pass", function() {
      true.must.not.be.insideOf([]);
    });

    it("not.be.insideOf(array) - fail", function() {
      (function() {
        true.must.not.be.insideOf([true, false]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.insideOf(array, msg) - fail", function() {
      (function() {
        true.must.not.be.insideOf([true, false], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.equal()", function() {
    it("be.equal(boolean) - pass", function() {
      true.must.be.equal(true);
    });

    it("be.equal(boolean) - fail", function() {
      (function() {
        true.must.be.equal(false);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.equal(any, msg) - fail", function() {
      (function() {
        true.must.be.equal(false, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.not.be.equal()", function() {
    it("not.be.equal(boolean) - pass", function() {
      true.must.not.be.equal(false);
    });

    it("not.be.equal(boolean) - fail", function() {
      (function() {
        true.must.not.be.equal(true);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.equal(any, msg) - fail", function() {
      (function() {
        true.must.not.be.equal(true, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.be.same()", function() {
    it("be.same(boolean) - pass", function() {
      true.must.be.same(true);
    });

    it("be.same(boolean) - fail", function() {
      (function() {
        true.must.be.same(false);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.same(value, msg) - fail", function() {
      (function() {
        true.must.be.same(false, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.not.be.same()", function() {
    it("not.be.same(boolean) - pass", function() {
      true.must.not.be.same(false);
    });

    it("not.be.same(boolean) - fail", function() {
      (function() {
        true.must.not.be.same(true);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.same(value, msg) - fail", function() {
      (function() {
        true.must.not.be.same(true, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.be.between()", function() {
    it("be.between(left, right) - pass", function() {
      true.must.be.between(-1, 1);
    });

    it("be.between(left, right) - fail", function() {
      (function() {
        true.must.be.between(2, 3);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.between(left, right, msg) - fail", function() {
      (function() {
        true.must.be.between("a", "c", "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.not.be.between()", function() {
    it("not.be.between(left, right) - pass", function() {
      true.must.not.be.between(100, 200);
    });

    it("not.be.between(left, right) - fail", function() {
      (function() {
        true.must.not.be.between(-1, 1);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.between(left, right, msg) - fail", function() {
      (function() {
        true.must.not.be.between(-1, 1, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.be.lessThan()", function() {
    it("be.lessThan(bound) - pass", function() {
      true.must.be.lessThan(2);
    });

    it("be.lessThan(bound) - fail", function() {
      (function() {
        true.must.be.lessThan(1);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.lessThan(bound, msg) - fail", function() {
      (function() {
        true.must.be.lessThan(1, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.lessThan()", function() {
    it("not.be.lessThan(bound) - pass", function() {
      true.must.not.be.lessThan(0);
    });

    it("not.be.lessThan(bound) - fail", function() {
      (function() {
        true.must.not.be.lessThan(2);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.lessThan(bound, msg) - fail", function() {
      (function() {
        true.must.not.be.lessThan(2, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.greaterThan()", function() {
    it("be.greaterThan(bound) - pass", function() {
      true.must.be.greaterThan(0);
    });

    it("be.greaterThan(bound) - fail", function() {
      (function() {
        true.must.be.greaterThan(1);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.greaterThan(bound, msg) - fail", function() {
      (function() {
        true.must.be.greaterThan(1, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.greaterThan()", function() {
    it("not.be.greaterThan(bound) - pass", function() {
      true.must.not.be.greaterThan(1);
    });

    it("not.be.greaterThan(bound) - fail", function() {
      (function() {
        true.must.not.be.greaterThan(0);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.greaterThan(bound, msg) - fail", function() {
      (function() {
        true.must.not.be.greaterThan(0, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.instanceOf()", function() {
    it("be.instanceOf(clss) - pass", function() {
      true.must.be.instanceOf("Boolean");
    });

    it("be.instanceOf(clss) - fail", function() {
      (function() {
        true.must.be.instanceOf("String");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.instanceOf(clss, msg) - fail", function() {
      (function() {
        true.must.be.instanceOf(Object, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.instanceOf()", function() {
    it("not.be.instanceOf(clss) - pass", function() {
      true.must.not.be.instanceOf(String);
    });

    it("not.be.instanceOf(clss) - fail", function() {
      (function() {
        true.must.not.be.instanceOf("Boolean");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.instanceOf(any, msg) - fail", function() {
      (function() {
        true.must.not.be.instanceOf(Boolean, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.have()", function() {
    it("have(props) - always fail", function() {
      (function() {
        true.must.have("username");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("have(props, msg) - always fail", function() {
      (function() {
        true.must.have("username", "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });
  });

  describe("#must.not.have()", function() {
    it("not.have(prop) - always pass", function() {
      true.must.not.have("user");
    });
  });

  describe("#must.haveAny()", function() {
    it("haveAny([]) - always fail", function() {
      (function() {
        true.must.haveAny([]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("haveAny([], msg) - always fail", function() {
      (function() {
        true.must.haveAny([], "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });
  });

  describe("#must.all.have()", function() {
    it("all.have() - always fail", function() {
      (function() {
        true.must.all.have(["x", "y"]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("all.have() - always fail", function() {
      (function() {
        true.must.all.have(["x", "y"], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.all.have()", function() {
    it("not.all.have() - always pass", function() {
      true.must.not.all.have(["x", "y"]);
    });
  });
});
