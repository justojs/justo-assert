describe("must<Object>", function() {
  var user = {
      username: "user",
      password: "pwd"
  };

  describe("#must.raise()", function() {
    it("raise() - always pass", function() {
      user.must.raise();
    });
  });

  describe("#must.contain()", function() {
    it("contain(item) - always fail", function() {
      (function() {
        user.must.contain("username");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("contain(item, msg) - always fail", function() {
      (function() {
        user.must.contain("username", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.contain()", function() {
    it("not.contain(item) - always pass", function() {
      user.must.not.contain("user");
    });
  });

  describe("#must.be.insideOf()", function() {
    var obj = {x: 1, y: 2};

    it("be.insideOf(array) - pass", function() {
      obj.must.be.insideOf([{x: 1, y: 2}]);
    });

    it("be.insideOf(array) - fail", function() {
      (function() {
        obj.must.be.insideOf([]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.insideOf(array, msg) - pass", function() {
      obj.must.be.insideOf([{x: 1, y: 2}], "Custom message");
    });
  });

  describe("#must.not.be.insideOf()", function() {
    var obj = {x: 1, y: 2};

    it("not.be.insideOf(array) - pass", function() {
      obj.must.not.be.insideOf([]);
    });

    it("not.be.insideOf(array) - fail", function() {
      (function() {
        obj.must.not.be.insideOf([{x: 1, y: 2}]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.insideOf(array, msg) - fail", function() {
      (function() {
        obj.must.not.be.insideOf([{x: 1, y: 2}], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.equal()", function() {
    it("be.equal(object) - pass", function() {
      user.must.be.equal({username: "user", password: "pwd"});
    });

    it("be.equal(object) - fail", function() {
      (function() {
        user.must.be.equal({uername: "USER", password: "pwd"});
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.equal(any, msg) - fail", function() {
      (function() {
        user.must.be.equal(1, "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });
  });

  describe("#must.not.be.equal()", function() {
    it("not.be.equal(object) - pass", function() {
      user.must.not.be.equal({user: "user"});
    });

    it("not.be.equal(object) - fail", function() {
      (function() {
        user.must.not.be.equal({username: "user", password: "pwd"});
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.equal(object, msg) - fail", function() {
      (function() {
        user.must.not.be.equal({username: "user", password: "pwd"}, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.same()", function() {
    it("be.same(object) - pass", function() {
      user.must.be.same(user);
    });

    it("be.same(object) - fail", function() {
      (function() {
        user.must.be.same({username: "user", password: "pwd"});
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.same(object, msg) - fail", function() {
      (function() {
        user.must.be.same({username: "user", password: "pwd"}, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.same()", function() {
    it("not.be.same(object) - pass", function() {
      user.must.not.be.same({username: "user", password: "pwd"});
    });

    it("not.be.same(object) - fail", function() {
      (function() {
        user.must.not.be.same(user);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.same(object, msg) - fail", function() {
      (function() {
        user.must.not.be.same(user, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.between()", function() {
    it("be.between(left, right) - always fail", function() {
      (function() {
        user.must.be.between(1, 2);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.between(left, right, msg) - always fail", function() {
      (function() {
        user.must.be.between(1, 2, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.between()", function() {
    it("not.be.between(left, right) - always pass", function() {
      user.must.not.be.between(1, 2);
    });
  });

  describe("#must.be.lessThan()", function() {
    it("be.lessThan(bound) - always fail", function() {
      (function() {
        user.must.be.lessThan(1);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.lessThan(bound, msg) - always fail", function() {
      (function() {
        user.must.be.lessThan(1, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.lessThan()", function() {
    it("not.be.lessThan(bound) - always pass", function() {
      user.must.not.be.lessThan(1);
    });
  });

  describe("#must.be.greaterThan()", function() {
    it("be.greaterThan(bound) - always fail", function() {
      (function() {
        user.must.be.greaterThan(1);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.greaterThan(bound, msg) - always fail", function() {
      (function() {
        user.must.be.greaterThan(1, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.greaterThan()", function() {
    it("not.be.greaterThan(bound) - always pass", function() {
      user.must.not.be.greaterThan(1);
    });
  });

  describe("#must.be.instanceOf()", function() {
    it("be.instanceOf(class) - pass", function() {
      user.must.be.instanceOf("Object");
    });

    it("be.instanceOf(class) - fail", function() {
      (function() {
        user.must.be.instanceOf("String");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.instanceOf(string, msg) - must not be", function() {
      (function() {
        user.must.be.instanceOf("String", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.instanceOf()", function() {
    it("not.be.instanceOf(class) - fail", function() {
      (function() {
        user.must.not.be.instanceOf("Object");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.instanceOf(class, msg) - fail", function() {
      (function() {
        user.must.not.be.instanceOf("Object", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });

    it("not.be.instanceOf(class) - pass", function() {
      user.must.not.be.instanceOf("String");
    });
  });

  describe("#must.have()", function() {
    it("have(prop) - pass", function() {
      user.must.have("username");
    });

    it("have(prop) - fail", function() {
      (function() {
        user.must.have("name");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("have(prop, msg) - fail", function() {
      (function() {
        user.must.have("user", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.have()", function() {
    it("not.have(prop) - pass", function() {
      user.must.not.have("user");
    });

    it("not.have(prop) - fail", function() {
      (function() {
        user.must.not.have("username");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.have(prop, msg) - must have", function() {
      (function() {
        user.must.not.have("username", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.haveAny()", function() {
    it("haveAny(props) - pass", function() {
      user.must.haveAny(["user", "username", "usr"]);
    });

    it("haveAny(props) - fail", function() {
      (function() {
        user.must.haveAny(["user", "usr"]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("haveAny(props, msg) - fail", function() {
      (function() {
        user.must.haveAny(["user", "usr"], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });
});
