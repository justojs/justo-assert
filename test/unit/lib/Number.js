describe("must<number>", function() {
  const x = 1;
  const y = 2;
  const z = 3;

  describe("#must.raise()", function() {
    it("raise() - always pass", function() {
      x.must.raise();
    });
  });

  describe("#must.contain()", function() {
    it("contain(item) - fail", function() {
      (function() {
        x.must.contain(x);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("contain(item, msg) - fail", function() {
      (function() {
        x.must.contain(x, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.contain()", function() {
    it("not.contain() - always pass", function() {
      x.must.not.contain(x);
    });
  });

  describe("#must.be.insideOf()", function() {
    it("be.insideOf(array) - pass", function() {
      x.must.be.insideOf([x]);
    });

    it("be.insideOf(array) - fail", function() {
      (function() {
        x.must.be.insideOf([]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.insideOf(array, msg) - fail", function() {
      (function() {
        x.must.be.insideOf([], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.insideOf()", function() {
    it("not.be.insideOf(array) - pass", function() {
      x.must.not.be.insideOf([]);
    });

    it("not.be.insideOf(array) - fail", function() {
      (function() {
        x.must.not.be.insideOf([x]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.insideOf(array, msg) - fail", function() {
      (function() {
        x.must.not.be.insideOf([x], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.equal()", function() {
    it("be.equal(number) - pass", function() {
      x.must.be.equal(1);
    });

    it("be.equal(number) - fail", function() {
      (function() {
        x.must.be.equal(2);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.equal(number, msg) - fail", function() {
      (function() {
        x.must.be.equal(2, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.equal()", function() {
    it("not.be.equal(number) - pass", function() {
      x.must.not.be.equal(y);
    });

    it("not.be.equal(number) - fail", function() {
      (function() {
        x.must.not.be.equal(x);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.equal(number, msg) - fail", function() {
      (function() {
        x.must.not.be.equal(x, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.same()", function() {
    it("be.same(number) - pass", function() {
      x.must.be.same(x);
    });

    it("be.same(number) - fail", function() {
      (function() {
        x.must.be.same(y);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.same(value, msg) - fail", function() {
      (function() {
        x.must.be.same(y, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.not.be.same()", function() {
    it("not.be.same(number) - pass", function() {
      x.must.not.be.same(y);
    });

    it("not.be.same(number) - fail", function() {
      (function() {
        x.must.not.be.same(x);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.same(value, msg) - fail", function() {
      (function() {
        x.must.not.be.same(x, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.be.between()", function() {
    it("be.between(left, right) - pass", function() {
      y.must.be.between(x, z);
    });

    it("between(left, right) - fail", function() {
      (function() {
        x.must.be.between(y, z);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("between(left, right, msg) - fail", function() {
      (function() {
        x.must.be.between(y, z, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.not.be.between()", function() {
    it("between(a, b) - pass", function() {
      x.must.not.be.between(y, z);
    });

    it("between(a, b) - fail", function() {
      (function() {
        y.must.not.be.between(x, z);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("between(a, b, msg) - fail", function() {
      (function() {
        y.must.not.be.between(x, z, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.be.lessThan()", function() {
    it("be.lessThan(bound) - pass", function() {
      x.must.be.lessThan(y);
    });

    it("be.lessThan(bound) - fail", function() {
      (function() {
        x.must.be.lessThan(x);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.lessThan(bound, msg) - fail", function() {
      (function() {
        x.must.be.lessThan(x, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.lessThan()", function() {
    it("not.be.lessThan(bound) - pass", function() {
      x.must.not.be.lessThan(x);
    });

    it("not.be.lessThan(bound) - fail", function() {
      (function() {
        x.must.not.be.lessThan(y);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.lessThan(bound, msg) - fail", function() {
      (function() {
        x.must.not.be.lessThan(y, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.greaterThan()", function() {
    it("be.greaterThan(bound) - pass", function() {
      y.must.be.greaterThan(x);
    });

    it("be.greaterThan(bound) - fail", function() {
      (function() {
        x.must.be.greaterThan(y);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.greaterThan(bound, msg) - fail", function() {
      (function() {
        x.must.be.greaterThan(y, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.instanceOf()", function() {
    it("be.instanceOf(class) - pass", function() {
      x.must.be.instanceOf("Number");
    });

    it("be.instanceOf(class) - fail", function() {
      (function() {
        x.must.be.instanceOf("String");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("instanceOf(class, msg) - fail", function() {
      (function() {
        x.must.be.instanceOf("String", "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.not.be.instanceOf()", function() {
    it("not.be.instanceOf(class) - fail", function() {
      (function() {
        x.must.not.be.instanceOf("Number");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.instanceOf(any, msg) - fail", function() {
      (function() {
        x.must.not.be.instanceOf("Number", "Custom message.");
      }).should.throwError(Error, {name:"AssertionError", message: "Custom message."});
    });

    it("not.be.instanceOf(class) - pass", function() {
      x.must.not.be.instanceOf("String");
    });
  });

  describe("#must.have()", function() {
    it("have(props) - always fail", function() {
      (function() {
        x.must.have("username");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("have(props, msg) - always fail", function() {
      (function() {
        x.must.have("username", "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });
  });

  describe("#must.not.have()", function() {
    it("not.have(prop) - always pass", function() {
      x.must.not.have("user");
    });
  });

  describe("#must.haveAny()", function() {
    it("haveAny([]) - always fail", function() {
      (function() {
        x.must.haveAny([]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("haveAny([], msg) - always fail", function() {
      (function() {
        x.must.haveAny([], "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });
  });

  describe("#must.all.have()", function() {
    it("all.have() - always fail", function() {
      (function() {
        x.must.all.have(["x", "y"]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("all.have() - always fail", function() {
      (function() {
        x.must.all.have(["x", "y"], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.all.have()", function() {
    it("not.all.have() - always pass", function() {
      x.must.not.all.have(["x", "y"]);
    });
  });
});
