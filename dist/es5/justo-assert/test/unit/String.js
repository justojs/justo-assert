describe("must<string>", function() {
	var txt;
	
	before(function() {
		txt = "str";
	});
	
  describe("#must", function() {
    it("must", function() {
      txt.should.have.property("must");
    });
    
    it("must.be", function() {
    	txt.must.should.have.property("be");
    });
    
    it("must.have", function() {
    	txt.must.should.have.property("have");
    });
    
    it("must.haveAny", function() {
    	txt.must.should.have.property("haveAny");
    });
    
    it("must.not", function() {
    	txt.must.should.have.property("not");
    });
    
    it("must.not.have", function() {
    	txt.must.not.should.have.property("have");
    });
    
    it("must.not.be", function() {
    	txt.must.not.should.have.property("be");
    });
  });
	
  describe("#must.raise()", function() {
    it("raise() - error", function() {
      (function() {
        "str".must.raise();
      }).should.throwError(/is not a callable object/);
    });
  });

  describe("#must.be.equal()", function() {
    it("be.equal(string) - must be", function() {
      "one".must.be.equal("one");
    });
    
    it("be.equal(string) - must not be", function() {
      (function() {
        "one".must.be.equal("two");
      }).should.throwError(Error, {name: "AssertionError", message: "'one' must be equal to 'two'."});
    });

    it("be.equal(number) - must be", function() {
      "1".must.be.equal(1);
    });

    it("be.equal(number) - must not be", function() {
      (function() {
        "1".must.be.equal(2);
      }).should.throwError(Error, {name: "AssertionError", message: "'1' must be equal to '2'."});
    });
    
    it("be.equal(boolean) - must not be", function() {
    	(function() {
    		"true".must.be.equal(true);
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.equal(function) - must not be", function() {
    	(function() {
    		"one".must.be.equal(function() {});
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.equal(any, msg) - must be", function() {
    	"one".must.be.equal("one", "Custom error message");
    });

    it("be.equal(any, msg) - must not be", function() {
      (function() {
        "one".must.be.equal("two", "Custom error message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
    });
  });
  
  describe("#must.not.be.equal()", function() {
  	it("not.be.equal(string) - must be", function() {
  		(function() {
  			"one".must.not.be.equal("one");
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("not.be.equal(string) - must not be", function() {
  		"one".must.not.be.equal("two");
  	});
  	
  	it("not.be.equal(number) - must be", function() {
  		(function() {
  			"1".must.not.be.equal(1);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("not.be.equal(number) - must not be", function() {
  		"one".must.not.be.equal(1);
  	});
  	
  	it("not.be.equal(boolean) - must not be", function() {
  		"one".must.not.be.equal(true);
  	});
  	
  	it("not.be.equal(function) - must not be", function() {
  		"one".must.not.be.equal(function() {});
  	});
  	
  	it("not.be.equal(any, msg) - must be", function() {
  		"one".must.not.be.equal("two", "Custom error message");
  	});
  	
  	it("not.be.equal(any, msg) - must not be", function() {
  		(function() {
  			"one".must.not.be.equal("one", "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  });

  describe("#must.be.same()", function() {
  	it("be.same(string) - must be", function() {
  		"one".must.be.same("one");
  	});
  	
  	it("be.same(number) - must not be", function() {
  		(function() {
  			"1".must.be.same(1);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.same(boolean) - must not be", function() {
  		(function() {
  			"true".must.be.same(true);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.same(function) - must not be", function() {
  		(function() {
  			"".must.be.same(function() {});
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.same(object) - must not be", function() {
  		(function() {
  			"".must.be.same({});
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  });
  
  describe("#must.not.be.same()", function() {
  	it("not.be.same(string) - must", function() {
  		"one".must.not.be.same("two");
  	});
  	
  	it("not.be.same(string) - must not", function() {
  		(function() {
  			"one".must.not.be.same("one");
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("not.be.same(number) - must", function() {
  		"1".must.not.be.same(1);
  	});
  	
  	it("not.be.same(boolean) - must", function() {
  		"true".must.not.be.same(true);
  	});
  	
  	it("not.be.same(function) - must", function() {
  		"".must.not.be.same(function() {});
  	});
  	
  	it("not.be.same(object) - must", function() {
  		"".must.not.be.same({});
  	});
  });

  describe("#must.be.between()", function() {
    it("be.between(left, right) - must", function() {
      "b".must.be.between("a", "c");
    });

    it("between(left, right) - must not", function() {
      (function() {
        "d".must.be.between("a", "c");
      }).should.throwError(Error, {name: "AssertionError", message: "'d' must be between 'a' and 'c'."});
    });

    it("between(left, right, msg) - error", function() {
      (function() {
        "d".must.be.between("a", "c", "Custom error message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom error message."});
    });
  });
  
  describe("#must.not.be.between()", function() {
    it("not.be.between.(a, b) - must", function() {
      "a".must.not.be.between("b", "c");
    });

    it("not.be.between(a, b) - must not", function() {
      (function() {
        "b".must.not.be.between("a", "c");
      }).should.throwError("'b' must not be between 'a' and 'c'.");
    });

    it("not.be.between(a, b, msg) - must not", function() {
      (function() {
        "b".must.not.be.between("a", "c", "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.be.instanceOf()", function() {
    it("be.instanceOf(string) - must", function() {
      "".must.be.instanceOf(String);
    });
    
    it("be.instanceOf(number) - must not", function() {
    	(function() {
    		"".must.be.instanceOf(Number);
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.instanceOf(boolean) - must not", function() {
    	(function() {
    		"".must.be.instanceOf(Boolean);
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.instanceOf(function) - must not", function() {
    	(function() {
    		"".must.be.instanceOf(Function);
    	}).should.throwError(Error, {name: "AssertionError"})
    });

    it("instanceOf(object) - must not", function() {
      (function() {
        "str".must.be.instanceOf(Object);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("instanceOf(any, msg) - must not", function() {
      (function() {
        "str".must.be.instanceOf(Number, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.not.be.instanceOf()", function() {
  	it("not.be.instanceOf(String) - must not", function() {
      (function() {
        "a".must.not.be.instanceOf(String);
      }).should.throwError(Error, {name:"AssertionError"});
    });
  	
    it("not.be.instanceOf(Number) - must", function() {
      "a".must.not.be.instanceOf(Number);
    });
    
    it("not.be.instanceOf(Boolean) - must", function() {
    	"".must.not.be.instanceOf(Boolean);
    });
    
    it("not.be.instanceOf(Function) - must", function() {
    	"".must.not.be.instanceOf(Function);
    });
    
    it("not.be.instanceOf(Object) - must", function() {
    	"".must.not.be.instanceOf(Object);
    });

    it("not.be.instanceOf(String, msg) - error", function() {
      (function() {
        "a".must.not.be.instanceOf(String, "Custom message.");
      }).should.throwError(Error, {name:"AssertionError", message: "Custom message."});
    });
  });
  
  describe("#must.have()", function() {
  	describe("have(prop [, msg])", function() {
  		it("have(prop : String) - must not", function() {
  			(function() {
  				"".must.have("username");
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("have(prop : String, msg) - must not", function() {
  			(function() {
  				"".must.have("username", "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  	});
  	
  	describe("have(props [, msg])", function() {
  		it("have([]) - must", function() {
  			"".must.have([]);
  		});
  		
  		it("have(props : String[]) - must not", function() {
  			(function() {
  				"".must.have(["username", "password"]);
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("have(props : String[], msg) - must not", function() {
  			(function() {
  				"".must.have(["username", "pwd"], "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  		
  		it("have({}) - must", function() {
  			"".must.have({});
  		});
  		
  		it("have(props : Object) - must not", function() {
  			(function() {
  				"".must.have({username: "user", password: "pwd"});
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("have(props : Object, msg) - must not", function() {
  			(function() {
  				"".must.have({username: "user", password: "PWD"}, "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  	});
  });
  
  describe("#must.not.have()", function() {
  	describe("not.have(prop [, msg])", function() {
  		it("not.have(prop : String) - must", function() {
  			"".must.not.have("user");
  		});
  		
  		it("not.have(prop : String) - must", function() {
  			"".must.not.have("username");
  		});
  		
  		it("not.have(prop : String, msg) - must not", function() {
  			"".must.not.have("user", "Custom error message");
  		});
  	});
  	
  	describe("not.have(props [, msg])", function() {
  		it("not.have([]) - must", function() {
  			"".must.not.have([]);
  		});
  		
  		it("not.have(props : String[]) - must not", function() {
				"".must.not.have(["usr", "pwd"]);
  		});
  		
  		it("not.have(props : String[], msg) - must not", function() {
  			"".must.not.have(["usr", "pwd"], "Custom error message");
  		});
  		
  		it("not.have({}) - must", function() {
  			"".must.not.have({});
  		});
  		
  		it("not.have(props : Object) - must", function() {
  			"".must.not.have({username: "user", password: "pwd"});
  		});
  		
  		it("not.have(props : Object, msg) - must", function() {
				"".must.not.have({username: "user", password: "pwd"}, "Custom error message");
  		});
  	});
  });
  
  describe("#must.haveAny()", function() {
  	it("haveAny([]) - must not", function() {
  		(function() {
  			"".must.haveAny([]);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("haveAny([], msg) - must not", function() {
  		(function() {
  			"".must.haveAny([], "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  	
  	it("haveAny(props : string[]) - must not", function() {
  		(function() {
  			"".must.haveAny(["user", "username", "usr"]);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("haveAny(props : string[], msg) - must not", function() {
  		(function() {
  			"".must.haveAny(["user", "usr"], "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  	
  	it("haveAny(props : object) - must not", function() {
  		(function() {
  			"".must.haveAny({name: "user", username: "user", user: "user"});
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("haveAny(props : object, msg) - must not", function() {
  		(function() {
  			"".must.haveAny({name: "user", user: "user"}, "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  });
});