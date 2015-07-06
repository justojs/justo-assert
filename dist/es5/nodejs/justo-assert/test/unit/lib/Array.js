describe("must<Array>", function() {
  const arr = ["one", "two", "three"];

  describe("#must.contain()", function() {
    it("contain(item) - pass", function() {
      arr.must.contain("one");
    });

    it("contain(item) - fail", function() {
      (function() {
        arr.must.contain("four");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("contain(item, msg) - fail", function() {
      (function() {
        arr.must.contain("four", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.contain()", function() {
    it("not.contain(item) - pass", function() {
      arr.must.not.contain(1);
    });

    it("not.contain(item) - fail", function() {
      (function() {
        arr.must.not.contain("one");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.contain(item, msg) - fail", function() {
      (function() {
        arr.must.not.contain("two", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.insideOf()", function() {
    it("be.insideOf(array) - pass", function() {
      arr.must.be.insideOf([{x: 1, y: 2}, arr]);
    });

    it("be.insideOf(array) - fail", function() {
      (function() {
        arr.must.be.insideOf([]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.insideOf(array, msg) - fail", function() {
      (function() {
        arr.must.be.insideOf([], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.insideOf()", function() {
    it("not.be.insideOf(array) - pass", function() {
      arr.must.not.be.insideOf([]);
    });

    it("not.be.insideOf(array) - fail", function() {
      (function() {
        arr.must.not.be.insideOf([{x: 1, y: 2}, arr]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.insideOf(array, msg) - fail", function() {
      (function() {
        arr.must.not.be.insideOf([arr], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.all.have()", function() {
    describe("all.have(props : string[], msg : string)", function() {
      const list = [{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}];

      it("all.have(props : string[]) - pass", function() {
        list.must.all.have(["x", "y"]);
      });

      it("all.have(props : string[] - fail)", function() {
        (function() {
          list.must.all.have(["x", "y", "z"]);
        }).should.throwError(Error, {name: "AssertionError"});
      });

      it("all.have(props : string[], msg : string) - fail", function() {
        (function() {
          list.must.all.have(["x", "y", "z"], "Custom message.");
        }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
      });
    });

    describe("all.have(props : object, msg : string)", function() {
      var list = [{x: 1, y: 2, z: 1}, {x: 1, y: 2, z: 2}, {x: 1, y: 2, z: 3}];

      it("all.have(props : object) - pass", function() {
        list.must.all.have({x: 1, y: 2});
      });

      it("all.have(props : object) - fail", function() {
        (function() {
          list.must.all.have({x: 1, y: 2, z: 1});
        }).should.throwError(Error, {name: "AssertionError"});
      });

      it("all.have(props : object, msg : string) - fail", function() {
        (function() {
          list.must.all.have({x: 1, y: 2, z: 1}, "Custom message.");
        }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
      });
    });
  });

  describe("#must.not.all.have()", function() {
    describe("not.all.have(props : string[], msg : string)", function() {
      var list = [{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}];

      it("not.all.have(props : string[]) - pass", function() {
        list.must.not.all.have(["z"]);
      });

      it("not.all.have(props : string[]) - fail", function() {
        (function() {
          list.must.not.all.have(["x"]);
        }).should.throwError(Error, {name: "AssertionError"});
      });

      it("not.all.have(props : string[], msg : string) - fail", function() {
        (function() {
          list.must.not.all.have(["x"], "Custom message.");
        }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
      });
    });

    describe("not.all.have(props : object, msg : string)", function() {
      var list = [{x: 1, y: 2, z: 1}, {x: 1, y: 2, z: 2}, {x: 1, y: 2, z: 3}];

      it("not.all.have(props : object) - pass", function() {
        list.must.not.all.have({x: -1, y: -1});
      });

      it("not.all.have(props : object) - fail", function() {
        (function() {
          list.must.not.all.have({x: 1, y: 2});
        }).should.throwError(Error, {name: "AssertionError"});
      });

      it("not.all.have(props : object, msg : string) - fail", function() {
        (function() {
          list.must.not.all.have({x: 1, y: 2}, "Custom message.");
        }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
      });
    });
  });
});
