describe("must<Array>", function() {
  const arr = ["one", "two", "three"];

  describe("#must.contain()", function() {
    it("contain(item) - must (1st item)", function() {
      arr.must.contain("one");
    });

    it("contain(item) - must (another item)", function() {
      arr.must.contain("two");
    });

    it("contain(item) - must not", function() {
      (function() {
        arr.must.contain(1);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("contain(item, msg) - must not", function() {
      (function() {
        arr.must.contain(1, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.contain()", function() {
    it("not.contain(item) - must", function() {
      arr.must.not.contain(1);
    });

    it("not.contain(item) - must not (1st)", function() {
      (function() {
        arr.must.not.contain("one");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.contain(item) - must not (another item)", function() {
      (function() {
        arr.must.not.contain("two");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.contain(item, msg) - must not", function() {
      (function() {
        arr.must.not.contain("one", "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.be.in()", function() {
    var item = [0, 1, 2];

    it("be.in(array) - pass", function() {
      item.must.be.in([{x: 1, y: 2}, [0, 1, 2]]);
    });

    it("be.in(array) - fail", function() {
      (function() {
        item.must.be.in([]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.in(array, msg) - pass", function() {
      item.must.be.in([{x: 1, y: 2}, [0, 1, 2]], "Custom message");
    });

    it("be.in(array, msg) - fail", function() {
      (function() {
        item.must.be.in([], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.in()", function() {
    var item = [0, 1, 2];

    it("not.be.in(array) - pass", function() {
      item.must.not.be.in([]);
    });

    it("not.be.in(array) - fail", function() {
      (function() {
        item.must.not.be.in([{x: 1, y: 2}, [0, 1, 2]]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.in(array, msg) - pass", function() {
      item.must.not.be.in([], "Custom message");
    });

    it("not.be.in(array, msg) - fail", function() {
      (function() {
        item.must.not.be.in([{x: 1, y: 2}, [0, 1, 2]], "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.have.all()", function() {
    describe("all.have(props : string[], msg : string)", function() {
      var list = [{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}];

      it("all.have(props : string[]) - pass", function() {
        list.must.all.have(["x", "y"]);
      });

      it("all.have(props : string[] - fail)", function() {
        (function() {
          list.must.all.have(["x", "y", "z"]);
        }).should.throwError(Error, {name: "AssertionError"});
      });

      it("all.have(props : string[], msg : string) - pass", function() {
        list.must.all.have(["x", "y"], "Custom message.");
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

      it("all.have(props : object, msg : string) - pass", function() {
        list.must.all.have({x: 1, y: 2}, "Custom message.");
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

      it("not.all.have(props : string[], msg : string) - pass", function() {
        list.must.not.all.have(["z"], "Custom message.");
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

      it("not.all.have(props : object, msg : string) - pass", function() {
        list.must.not.all.have({x: -1, y: -1}, "Custom message.");
      });

      it("not.all.have(props : object, msg : string) - fail", function() {
        (function() {
          list.must.not.all.have({x: 1, y: 2}, "Custom message.");
        }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
      });
    });
  });
});
