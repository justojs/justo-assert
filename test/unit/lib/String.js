describe("must<string>", function() {
  var txt = "str";

  describe("#must.raise()", function() {
    it("raise() - pass", function() {
      "str".must.raise();
    });
  });

  describe("#must.match()", function() {
    it("match(re) - pass", function() {
      "The National".must.match(/ati/);
    });

    it("match(re) - fail", function() {
      (function() {
        "The National".must.match(/nada/);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("match(re, msg) - fail", function() {
      (function() {
        "The National".must.match(/nada/, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.match()", function() {
    it("not.match(re) - pass", function() {
      "The National".must.not.match(/nada/);
    });

    it("not.match(re) - fail", function() {
      (function() {
        "The National".must.not.match(/ion/);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.match(re, msg) - fail", function() {
      (function() {
        "The National".must.not.match(/ion/, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.contain()", function() {
    it("contain(item) - pass", function() {
      "abc".must.contain("a");
    });

    it("contain(item) - fail", function() {
      (function() {
        "abc".must.contain("d");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("contain(item, msg) - fail", function() {
      (function() {
        "abc".must.contain("d", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.contain()", function() {
    it("not.contain(item) - pass", function() {
      "abc".must.not.contain("d");
    });

    it("not.contain(item) - fail", function() {
      (function() {
        "abc".must.not.contain("b");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.contain(item, msg) - fail", function() {
      (function() {
        "abc".must.not.contain("a", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.like()", function() {
    it("like(re) - pass", function() {
      "The National".must.be.like(/ati/);
    });

    it("like(re) - fail", function() {
      (function() {
        "The National".must.be.like(/nada/);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("like(re, msg) - fail", function() {
      (function() {
        "The National".must.be.like(/nada/, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.like()", function() {
    it("not.be.like(re) - pass", function() {
      "The National".must.not.be.like(/nada/);
    });

    it("not.be.like(re) - fail", function() {
      (function() {
        "The National".must.not.be.like(/ion/);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.match(re, msg) - fail", function() {
      (function() {
        "The National".must.not.be.like(/ion/, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.insideOf()", function() {
    it("be.insideOf(string) - pass", function() {
      "sub".must.be.insideOf("asubstr");
    });

    it("be.insideOf(string) - fail", function() {
      (function() {
        "sub".must.be.insideOf("");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.insideOf(string, msg) - fail", function() {
      (function() {
        "item".must.be.insideOf("", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.insideOf()", function() {
    it("not.be.insideOf(string) - pass", function() {
      "str".must.not.be.insideOf("");
    });

    it("not.be.insideOf(string) - fail", function() {
      (function() {
        "sub".must.not.be.insideOf("subway");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.insideOf(string, msg) - fail", function() {
      (function() {
        "sub".must.not.be.insideOf("substr", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.equal()", function() {
    it("be.equal(string) - pass", function() {
      "one".must.be.equal("one");
    });

    it("be.equal(string) - fail", function() {
      (function() {
        "one".must.be.equal("two");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.equal(any, msg) - fail", function() {
      (function() {
        "one".must.be.equal("two", "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });
  });

  describe("#must.not.be.equal()", function() {
    it("not.be.equal(string) - fail", function() {
      (function() {
        "one".must.not.be.equal("one");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.equal(any, msg) - fail", function() {
      (function() {
        "one".must.not.be.equal("one", "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });

    it("not.be.equal(string) - pass", function() {
      "one".must.not.be.equal("two");
    });
  });

  describe("#must.be.same()", function() {
    it("be.same(string) - pass", function() {
      "one".must.be.same("one");
    });

    it("be.same(string) - fail", function() {
      (function() {
        "one".must.be.same("two");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.same(string, msg) - fail", function() {
      (function() {
        "one".must.be.same("two", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.same()", function() {
    it("not.be.same(string) - pass", function() {
      "one".must.not.be.same("two");
    });

    it("not.be.same(string) - fail", function() {
      (function() {
        "one".must.not.be.same("one");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.same(string, msg) - fail", function() {
      (function() {
        "one".must.not.be.same("one", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.between()", function() {
    it("be.between(left, right) - must", function() {
      "b".must.be.between("a", "c");
    });

    it("between(left, right) - fail", function() {
      (function() {
        "d".must.be.between("a", "c");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("between(left, right, msg) - fail", function() {
      (function() {
        "d".must.be.between("a", "c", "Custom error message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message."});
    });
  });

  describe("#must.not.be.between()", function() {
    it("not.be.between.(a, b) - pass", function() {
      "a".must.not.be.between("b", "c");
    });

    it("not.be.between(a, b) - fail", function() {
      (function() {
        "b".must.not.be.between("a", "c");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.between(a, b, msg) - fail", function() {
      (function() {
        "b".must.not.be.between("a", "c", "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.be.lessThan()", function() {
    it("be.lessThan(bound) - pass", function() {
      "a".must.be.lessThan("b");
    });

    it("be.lessThan(bound) - fail", function() {
      (function() {
        "b".must.be.lessThan("a");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.lessThan(bound, msg) - fail", function() {
      (function() {
        "b".must.be.lessThan("a", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.lessThan()", function() {
    it("not.be.lessThan(bound) - pass", function() {
      "a".must.not.be.lessThan("a");
    });

    it("not.be.lessThan(bound) - fail", function() {
      (function() {
        "a".must.not.be.lessThan("b");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.lessThan(bound, msg) - fail", function() {
      (function() {
        "a".must.not.be.lessThan("b", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.greaterThan()", function() {
    it("be.greaterThan(bound) - pass", function() {
      "b".must.be.greaterThan("a");
    });

    it("be.greaterThan(bound) - fail", function() {
      (function() {
        "a".must.be.greaterThan("a");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.greaterThan(bound, msg) - fail", function() {
      (function() {
        "a".must.be.greaterThan("a", "Custom message");
      }).should.throwError(Error, {name: "AssertionError"});
    });
  });

  describe("#must.not.be.greaterThan()", function() {
    it("not.be.greaterThan(bound) - pass", function() {
      "a".must.not.be.greaterThan("b");
    });

    it("not.be.greaterThan(bound) - fail", function() {
      (function() {
        "b".must.not.be.greaterThan("a");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.greaterThan(bound, msg) - fail", function() {
      (function() {
        "b".must.not.be.greaterThan("a", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.instanceOf()", function() {
    it("be.instanceOf(class) - pass", function() {
      "".must.be.instanceOf("String");
    });

    it("be.instanceOf(class) - fail", function() {
      (function() {
        "".must.be.instanceOf("Number");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("instanceOf(class, msg) - fail", function() {
      (function() {
        "str".must.be.instanceOf("Number", "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.not.be.instanceOf()", function() {
    it("not.be.instanceOf(class) - fail", function() {
      (function() {
        "".must.not.be.instanceOf("String");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.instanceOf(String, msg) - fail", function() {
      (function() {
        "a".must.not.be.instanceOf("String", "Custom message.");
      }).should.throwError(Error, {name:"AssertionError", message: "Custom message."});
    });

    it("not.be.instanceOf(class) - pass", function() {
      "".must.not.be.instanceOf("Number");
    });
  });

  describe("#must.have()", function() {
    it("have(prop) - pass", function() {
      "txt".must.have("length");
    });

    it("have(prop) - fail", function() {
      (function() {
        "".must.have("username");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("have(prop, msg) - fail", function() {
      (function() {
        "".must.have("username", "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });
  });

  describe("#must.not.have()", function() {
    it("have(prop) - pass", function() {
      "txt".must.not.have("count");
    });

    it("have(prop) - fail", function() {
      (function() {
        "".must.not.have("length");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("have(prop, msg) - fail", function() {
      (function() {
        "".must.not.have("length", "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });
  });

  describe("#must.haveAny()", function() {
    it("haveAny(props) - pass", function() {
      "".must.haveAny(["length"]);
    });

    it("haveAny(props) - fail", function() {
      (function() {
        "".must.haveAny(["user", "username", "usr"]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("haveAny(props, msg) - must not", function() {
      (function() {
        "".must.haveAny(["user", "usr"], "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });
  });

  describe("#must.all.have()", function() {
    it("all.have(item) - fail", function() {
      (function() {
        "true".must.all.have(["x", "y"]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("all.have(item, msg) - fail", function() {
      (function() {
        "true".must.all.have(["x", "y"], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.all.have()", function() {
    it("not.all.have() - always pass", function() {
      "true".must.not.all.have(["x", "y"]);
    });
  });
});
