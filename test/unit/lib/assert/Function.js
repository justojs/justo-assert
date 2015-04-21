describe("must<Function>", function() {
  function fn() {}
  function raise(msg) { throw new Error(msg); }
  function nonraise() { }

  describe("#must", function() {
    it("must", function() {
      fn.should.have.property("must");
    });

    it("must.not", function() {
      fn.must.should.have.property("not");
    });

    it("must.be", function() {
      fn.must.should.have.property("be");
    });

    it("must.not.be", function() {
      fn.must.not.should.have.property("be");
    });

    it("must.contain", function() {
      fn.must.should.have.property("contain");
    });

    it("must.not.contain", function() {
      fn.must.not.should.have.property("contain");
    });

    it("must.have", function() {
      fn.must.should.have.property("have");
    });

    it("must.not.have", function() {
      fn.must.not.should.have.property("have");
    });

    it("must.haveAny", function() {
      fn.must.should.have.property("haveAny");
    });

    it("must.raise", function() {
      fn.must.should.have.property("raise");
    });

    it("must.not.raise", function() {
      fn.must.not.should.have.property("raise");
    });
  });

  describe("#must.contain()", function() {
    it("contain(item) - must not", function() {
      (function() {
        fn.must.contain(1);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("contain(item, msg) - must not", function() {
      (function() {
        fn.must.contain(1, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.contain()", function() {
    it("not.contain(item) - must", function() {
      fn.must.not.contain(1);
    });
  });

  describe("#must.raise()", function() {
    describe("must.raise()", function() {
      it("raise() - must", function() {
        raise.must.raise();
      });

      it("raise() - must not", function() {
        (function() {
          nonraise.must.raise();
        }).should.throwError(Error, {name: "AssertionError"});
      });
    });

    describe("raise(args [, msg])", function() {
      it("raise(args) - must", function() {
        raise.must.raise(["Arg1", "Arg2"]);
      });

      it("raise(args) - must not", function() {
        (function() {
          nonraise.must.raise(["Arg1", "Arg2"]);
        }).should.throwError(Error, {name: "AssertionError"});
      });

      it("raise(args, msg) - must", function() {
        raise.must.raise(["Arg1", "Arg2"], "Custom message");
      });

      it("raise(args, msg) - must not", function() {
        (function() {
          nonraise.must.raise(["Arg1", "Arg2"], "Custom message");
        }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
      });
    });

    describe("raise(error : string, ...args)", function() {
      describe("raise(error : string [, msg])", function() {
        it("raise(error : string) - must", function() {
          raise.must.raise("");
        });

        it("raise(error : string) - must not", function() {
          (function() {
            nonraise.must.raise("Error message");
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("raise(error : string) with different message - must not", function() {
          (function() {
            raise.must.raise("x");
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("raise(error : string, msg) - must", function() {
          raise.must.raise("", "Custom message");
        });

        it("raise(error : string, msg) - must not", function() {
          (function() {
            nonraise.must.raise("", "Custom message");
          }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
        });

        it("raise(error : string, msg) with different message - must not", function() {
          (function() {
            nonraise.must.raise("x", "Custom message");
          }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
        });
      });

      describe("raise(error : string, args [, msg]", function() {
        it("raise(error : string, args) - must", function() {
          raise.must.raise("Error message", ["Error message", "Arg2"]);
        });

        it("raise(error : string, args) - must not", function() {
          (function() {
            nonraise.must.raise("Error message", ["Other errror message"]);
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("raise(error : string, args, msg) - must", function() {
          raise.must.raise("Error message", ["Error message", "Arg2"], "Custom message");
        });

        it("raise(error : Error, args, msg) - must not", function() {
          (function() {
            nonraise.must.raise("Error message", ["Other error message"], "Custom message");
          }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
        });
      });
    });

    describe("raise(error : class, ...args)", function() {
      function MyError() {}

      describe("raise(error : class [, msg])", function() {
        it("raise(error : class) - must", function() {
          raise.must.raise(Error);
        });

        it("raise(error : class) - must not", function() {
          (function() {
            nonraise.must.raise(Error);
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("raise(error : class) with different class - must not", function() {
          (function() {
            raise.must.raise(function MyError() {});
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("raise(error : class, msg) - must", function() {
          raise.must.raise(Error, "Custom message");
        });

        it("raise(error : class, msg) - must not", function() {
          (function() {
            nonraise.must.raise(Error, "Custom message");
          }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
        });

        it("raise(error : class, msg) with different class - must not", function() {
          (function() {
            nonraise.must.raise(function MyError() {}, "Custom message");
          }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
        });
      });

      describe("raise(error : class, args [, msg])", function() {
        it("raise(error : Error, args) - must", function() {
          raise.must.raise(Error, ["Arg1"]);
        });

        it("raise(error : Error, args) - must not", function() {
          (function() {
            nonraise.must.raise(MyError, ["Arg1"]);
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("raise(error : Error, args, msg) - must", function() {
          raise.must.raise(Error, ["Arg1"], "Custom message");
        });

        it("raise(error : Error, args, msg) - must not", function() {
          (function() {
            nonraise.must.raise(MyError, ["Arg1"], "Custom message");
          }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
        });
      });
    });

    describe("raise(error : object, ...args)", function() {
      function raise() {
        throw {msg: "My message"};
      }

      describe("raise(error : object [, msg])", function() {
        it("raise(error : object) - must", function() {
          raise.must.raise({msg: "My message"});
        });

        it("rtaise(error : object) - must not", function() {
          (function() {
            nonraise.must.raise({msg: "My message"});
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("raise(error : object) with different content - must not", function() {
          (function() {
            raise.must.raise({msg: "x"});
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("raise(error : object, msg) - must not", function() {
          (function() {
            raise.must.raise({msg: "x"}, "Custom message");
          }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
        });
      });

      describe("raise(error : object, args [, msg])", function() {
        it("raise(error : object, args) - must", function() {
          raise.must.raise({msg: "My message"}, [1, 2, 3]);
        });

        it("raise(error : object, args) - must not", function() {
          (function() {
            nonraise.must.raise({msg: "My message"}, [1, 2, 3]);
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("raise(error : object, args) with different message - must not", function() {
          (function() {
            raise.must.raise({msg: "x"}, [1, 2, 3]);
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("raise(error : object, args, msg) - must", function() {
          raise.must.raise({msg: "My message"}, [1, 2, 3], "Custom message");
        });

        it("raise(error : object, args, msg) - must not", function() {
          (function() {
            raise.must.raise({msg: "x"}, [1, 2, 3], "Custom message");
          }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
        });
      });
    });
  });

  describe("#must.not.raise()", function() {
    describe("not.raise()", function() {
      it("not.raise() - must", function() {
        nonraise.must.not.raise();
      });

      it("not.raise() - must not", function() {
        (function() {
          raise.must.not.raise();
        }).should.throwError(Error, {name: "AssertionError"});
      });
    });

    describe("not.raise(args [, msg])", function() {
      it("not.raise(args) - must", function() {
        nonraise.must.not.raise(["Arg1", "Arg2"]);
      });

      it("not.raise(args) - must not", function() {
        (function() {
          raise.must.not.raise(["Arg1", "Arg2"]);
        }).should.throwError(Error, {name: "AssertionError"});
      });

      it("not.raise(args, msg) - must", function() {
        nonraise.must.not.raise(["Arg1", "Arg2"], "Custom message");
      });

      it("not.raise(args, msg) - must not", function() {
        (function() {
          raise.must.not.raise(["Arg1", "Arg2"], "Custom message");
        }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
      });
    });

    describe("not.raise(error : string, ...args)", function() {
      describe("not.raise(error : string [, msg])", function() {
        it("not.raise(error : string) - must", function() {
          nonraise.must.not.raise("");
        });

        it("not.raise(error : string) - must not", function() {
          (function() {
            raise.must.not.raise("");
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("not.raise(error : string) with different message - must", function() {
          raise.must.not.raise("x");
        });

        it("not.raise(error : string, msg) - must", function() {
          nonraise.must.not.raise("", "Custom message");
        });

        it("not.raise(error : string, msg) - must not", function() {
          (function() {
            raise.must.not.raise("", "Custom message");
          }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
        });

        it("not.raise(error : string, msg) with different message - must not", function() {
          raise.must.not.raise("x", "Custom message");
        });
      });

      describe("not.raise(error : string, args [, msg]", function() {
        it("not.raise(error : string, args) - must", function() {
          nonraise.must.not.raise("Error message", ["Arg1", "Arg2"]);
        });

        it("not.raise(error : string, args) - must not", function() {
          (function() {
            raise.must.not.raise("Error message", ["Error message", "Arg2"]);
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("not.raise(error : string, args, msg) - must", function() {
          nonraise.must.not.raise("Error message", ["Error message", "Arg2"], "Custom message");
        });

        it("not.raise(error : string, args, msg) with different message - must", function() {
          raise.must.not.raise("My error message", ["Error message", "Arg2"], "Custom message");
        });

        it("not.raise(error : string, args, msg) - must not", function() {
          (function() {
            raise.must.not.raise("Error message", ["Error message"], "Custom message");
          }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
        });
      });
    });

    describe("not.raise(error : class, ...args)", function() {
      function MyError() {}

      describe("not.raise(error : class [, msg])", function() {
        it("not.raise(error : class) - must", function() {
          nonraise.must.not.raise(Error);
        });

        it("not.raise(error : class) - must not", function() {
          (function() {
            raise.must.not.raise(Error);
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("not.raise(error : class) with different class - must", function() {
          raise.must.not.raise(MyError);
        });

        it("not.raise(error : class, msg) - must", function() {
          nonraise.must.not.raise(Error, "Custom message");
        });

        it("not.raise(error : class, msg) - must not", function() {
          (function() {
            raise.must.not.raise(Error, "Custom message");
          }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
        });

        it("not.raise(error : class, msg) with different class - must", function() {
          nonraise.must.not.raise(MyError, "Custom message");
        });
      });

      describe("not.raise(error : class, args [, msg])", function() {
        it("not.raise(error : class, args) - must", function() {
          nonraise.must.not.raise(Error, ["Arg1"]);
        });

        it("not.raise(error : class, args) - must not", function() {
          (function() {
            raise.must.not.raise(Error, ["Arg1"]);
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("not.raise(error : class, args) with different class - must", function() {
          raise.must.not.raise(MyError, ["Arg1"]);
        });

        it("not.raise(error : class, args, msg) - must not", function() {
          (function() {
            raise.must.not.raise(Error, ["Arg1"], "Custom message");
          }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
        });

        it("not.raise(error : class, args, msg) - must", function() {
          nonraise.must.not.raise(Error, ["Arg1"], "Custom message");
        });
      });
    });

    describe("not.raise(error : object, ...args)", function() {
      function raise() {
        throw {msg: "My message"};
      }

      describe("not.raise(error : object [, msg])", function() {
        it("not.raise(error : object) - must", function() {
          nonraise.must.not.raise({msg: "My message"});
        });

        it("not.raise(error : object) - must not", function() {
          (function() {
            raise.must.not.raise({msg: "My message"});
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("not.raise(error : object) with different content - must", function() {
          raise.must.not.raise({msg: "x"});
        });
      });

      describe("not.raise(error : object, args [, msg])", function() {
        it("not.raise(error : object, args) - must", function() {
          nonraise.must.not.raise({msg: "My message"}, [1, 2, 3]);
        });

        it("not.raise(error : object, args) - must not", function() {
          (function() {
            raise.must.not.raise({msg: "My message"}, [1, 2, 3]);
          }).should.throwError(Error, {name: "AssertionError"});
        });

        it("not.raise(error : object, args) with different message - must", function() {
          raise.must.not.raise({msg: "x"}, [1, 2, 3]);
        });

        it("not.raise(error : object, args, msg) - must", function() {
          nonraise.must.not.raise({msg: "My message"}, [1, 2, 3], "Custom message");
        });

        it("not.raise(error : object, args, msg) with different object - must", function() {
          raise.must.not.raise({msg: "x"}, [1, 2, 3], "Custom message");
        });

        it("not.raise(error : object, args, msg) - must not", function() {
          (function() {
            raise.must.not.raise({msg: "My message"}, [1, 2, 3], "Custom message");
          }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
        });
      });
    });
  });

  describe("#must.be.equal()", function() {
    it("be.equal(string) - must not", function() {
      (function() {
        fn.must.be.equal("function() {}");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.equal(number) - must not", function() {
      (function() {
        fn.must.be.equal(1);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.equal(boolean) - must not", function() {
      (function() {
        fn.must.be.equal(true);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.equal(function) - must", function() {
      fn.must.be.equal(fn);
    });

    it("be.equal(function) - must not", function() {
      (function() {
        fn.must.be.equal(function() {});
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.equal(object) - must not", function() {
      (function() {
        fn.must.be.equal({username: ""});
      }).should.throwError(Error, {name: "AssertionError"});
    });
  });

  describe("#must.not.be.equal()", function() {
    it("not.be.equal(string) - must", function() {
      fn.must.not.be.equal("function() {}");
    });

    it("not.be.equal(number) - must", function() {
      fn.must.not.be.equal(1);
    });

    it("not.be.equal(boolean) - must", function() {
      fn.must.not.be.equal(true);
    });

    it("not.be.equal(function) - must", function() {
      fn.must.not.be.equal(function() {});
    });

    it("be.equal(function) - must not", function() {
      (function() {
        fn.must.not.be.equal(fn);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.equal(object) - must", function() {
       fn.must.not.be.equal({username: ""});
    });
  });

  describe("#must.be.same()", function() {
    it("be.same(string) - must not", function() {
      (function() {
        fn.must.be.same("");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.same(number) - must not", function() {
      (function() {
        fn.must.be.same(1);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.same(boolean) - must not", function() {
      (function() {
        fn.must.be.same(true);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.same(function) - must", function() {
      fn.must.be.same(fn);
    });

    it("be.same(function) - must not", function() {
      (function() {
        fn.must.be.same(function() {});
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.same(object) - must not", function() {
      (function() {
        fn.must.be.same({});
      }).should.throwError(Error, {name: "AssertionError"});
    });
  });

  describe("#must.not.be.same()", function() {
    it("not.be.same(string) - must", function() {
       fn.must.not.be.same("");
    });

    it("not.be.same(number) - must", function() {
       fn.must.not.be.same(1);
    });

    it("not.be.same(boolean) - must", function() {
       fn.must.not.be.same(true);
    });

    it("not.be.same(function) - must", function() {
      fn.must.not.be.same(function() {});
    });

    it("not.be.same(function) - must not", function() {
      (function() {
        fn.must.not.be.same(fn);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.same(object) - must", function() {
       fn.must.not.be.same({});
    });
  });

  describe("#must.be.between()", function() {
    it("be.between() - must not", function() {
      (function() {
        fn.must.be.between(1, 2);
      }).should.throwError(Error, {name: "AssertionError"});
    });
  });

  describe("#must.not.be.between()", function() {
    it("not.be.between() - must", function() {
      fn.must.not.be.between(1, 2);
    });
  });

  describe("#must.be.lessThan()", function() {
    it("be.lessThan(bound) - must not", function() {
      (function() {
        fn.must.be.lessThan(1);
      }).should.throwError(Error, {name: "AssertionError"});
    });
  });

  describe("#must.not.be.lessThan()", function() {
    it("not.be.lessThan(bound) - must", function() {
      fn.must.not.be.lessThan(1);
    });
  });

  describe("#must.be.greaterThan()", function() {
    it("be.greaterThan(bound) - must not", function() {
      (function() {
        fn.must.be.greaterThan(1);
      }).should.throwError(Error, {name: "AssertionError"});
    });
  });

  describe("#must.not.be.greaterThan()", function() {
    it("not.be.greaterThan(bound) - must", function() {
      fn.must.not.be.greaterThan(1);
    });
  });

  describe("#must.be.instanceOf()", function() {
    it("be.instanceOf('Function') - pass", function() {
      fn.must.be.instanceOf("Function");
    });

    it("be.instanceOf('String') - fail", function() {
      (function() {
        fn.must.be.instanceOf("String");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.instanceOf(string) - must not", function() {
      (function() {
        fn.must.be.instanceOf(String);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.instanceOf(number) - must not", function() {
      (function() {
        fn.must.be.instanceOf(Number);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.instanceOf(boolean) - must not", function() {
      (function() {
        fn.must.be.instanceOf(Boolean);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.instanceOf(Function) - must", function() {
      fn.must.be.instanceOf(Function);
    });

    it("be.instanceOf(Object) - must", function() {
      fn.must.be.instanceOf(Object);
    });

    it("be.instanceOf(any, msg) - must not", function() {
      (function() {
        fn.must.be.instanceOf(String, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.not.be.instanceOf()", function() {
    it("not.be.instanceOf('Function') - fail", function() {
      (function() {
        fn.must.not.be.instanceOf("Function");
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.instanceOf('String') - pass", function() {
      fn.must.not.be.instanceOf("String");
    });

    it("not.be.instanceOf(string) - must", function() {
       fn.must.not.be.instanceOf(String);
    });

    it("not.be.instanceOf(number) - must", function() {
       fn.must.not.be.instanceOf(Number);
    });

    it("not.be.instanceOf(boolean) - must", function() {
       fn.must.not.be.instanceOf(Boolean);
    });

    it("not.be.instanceOf(Function) - must not", function() {
      (function() {
        fn.must.not.be.instanceOf(Function);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.instanceOf(Object) - must not", function() {
      (function() {
        fn.must.not.be.instanceOf(Object);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.instanceOf(any, msg) - must not", function() {
      (function() {
        fn.must.be.instanceOf(String, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.have()", function() {
    describe("have(prop [, msg])", function() {
      it("have(prop : String) - must", function() {
        fn.must.have("name");
      });

      it("have(prop : String) - must not", function() {
        (function() {
          fn.must.have("unknown");
        }).should.throwError(Error, {name: "AssertionError"});
      });

      it("have(prop : String, msg) - must", function() {
        fn.must.have("name", "Custom error message");
      });

      it("have(prop : String, msg) - must not", function() {
        (function() {
          fn.must.have("unknown", "Custom error message");
        }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
      });
    });

    describe("have(props [, msg])", function() {
      it("have([]) - must", function() {
        fn.must.have([]);
      });

      it("have(props : String[]) - must", function() {
        fn.must.have(["name"]);
      });

      it("have(props : String[]) - must not", function() {
        (function() {
          fn.must.have(["username", "pwd"]);
        }).should.throwError(Error, {name: "AssertionError"});
      });

      it("have(props : String[], msg) - must", function() {
        fn.must.have(["name"], "Custom error message");
      });

      it("have(props : String[], msg) - must not", function() {
        (function() {
          fn.must.have(["username", "pwd"], "Custom error message");
        }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
      });

      it("have({}) - must", function() {
        fn.must.have({});
      });

      it("have(props : Object) - must", function() {
        fn.must.have({name: "fn"});
      });

      it("have(props : Object) - must not", function() {
        (function() {
          fn.must.have({username: "user", password: "PWD"});
        }).should.throwError(Error, {name: "AssertionError"});
      });

      it("have(props : Object, msg) - must", function() {
        fn.must.have({name: "fn"}, "Custom error message");
      });

      it("have(props : Object, msg) - must not", function() {
        (function() {
          fn.must.have({username: "user", password: "PWD"}, "Custom error message");
        }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
      });
    });
  });

  describe("#must.not.have()", function() {
    describe("not.have(prop [, msg])", function() {
      it("not.have(prop : String) - must", function() {
        fn.must.not.have("user");
      });

      it("not.have(prop : String) - must not", function() {
        (function() {
          fn.must.not.have("name");
        }).should.throwError(Error, {name: "AssertionError"});
      });

      it("not.have(prop : String, msg) - must", function() {
        fn.must.not.have("user", "Custom error message");
      });

      it("not.have(prop : String, msg) - must not", function() {
        (function() {
          fn.must.not.have("name", "Custom error message");
        }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
      });
    });

    describe("not.have(props [, msg])", function() {
      it("not.have([]) - must", function() {
        fn.must.not.have([]);
      });

      it("not.have(props : String[]) - must", function() {
        fn.must.not.have(["usr", "pwd"]);
      });

      it("not.have(props : String[]) - must not", function() {
        (function() {
          fn.must.not.have(["name"]);
        }).should.throwError(Error, {name: "AssertionError"});
      });

      it("not.have(props : String[], msg) - must", function() {
        fn.must.not.have(["usr", "pwd"], "Custom error message");
      });

      it("not.have(props : String[], msg) - must not", function() {
        (function() {
          fn.must.not.have(["name"], "Custom error message");
        }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
      });

      it("not.have({}) - must", function() {
        fn.must.not.have({});
      });

      it("not.have(props : Object) - must not", function() {
        (function() {
          fn.must.not.have({name: "fn"});
        }).should.throwError(Error, {name: "AssertionError"});
      });

      it("not.have(props : Object) - must", function() {
        fn.must.not.have({username: "USER", password: "PWD"});
      });

      it("not.have(props : Object, msg) - must not", function() {
        (function() {
          fn.must.not.have({name: "fn"}, "Custom error message");
        }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
      });

      it("not.have(props : Object, msg) - must", function() {
        fn.must.not.have({username: "USER", password: "PWD"}, "Custom error message");
      });
    });
  });

  describe("#must.haveAny()", function() {
    it("haveAny([]) - must not", function() {
      (function() {
        fn.must.haveAny([]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("haveAny([], msg) - must not", function() {
      (function() {
        fn.must.haveAny([], "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });

    it("haveAny(props : string[]) - must", function() {
      fn.must.haveAny(["function", "name"]);
    });

    it("haveAny(props : string[]) - must not", function() {
      (function() {
        fn.must.haveAny(["user", "usr"]);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("haveAny(props : string[], msg) - must", function() {
      fn.must.haveAny(["function", "name"], "Custom error message");
    });

    it("haveAny(props : string[], msg - must not", function() {
      (function() {
        fn.must.haveAny(["user", "usr"], "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });

    it("haveAny(props : object) - must", function() {
      fn.must.haveAny({name: "fn", fnname: "fn"});
    });

    it("haveAny(props : object) - must not due to different value", function() {
      (function() {
        fn.must.haveAny({name: "fnx", username: "USER", user: "user"});
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("haveAny(props : object) - must not", function() {
      (function() {
        fn.must.haveAny({fnname: "fn", fn: "fn"});
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("haveAny(props : object, msg) - must", function() {
      fn.must.haveAny({name: "fn", username: "user", user: "user"}, "Custom error message");
    });

    it("haveAny(props : object, msg) - must not due to different value", function() {
      (function() {
        fn.must.haveAny({name: "user", username: "USER", user: "user"}, "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });

    it("haveAny(props : object, msg) - must not", function() {
      (function() {
        fn.must.haveAny({fnname: "user", user: "user"}, "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });
  });
});
