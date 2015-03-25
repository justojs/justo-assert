describe("must<boolean>", function() {
	describe("#must", function() {
    it("must", function() {
      true.should.have.property("must");
    });
    
    it("must.be", function() {
    	true.must.should.have.property("be");
    });
    
    it("must.have", function() {
    	true.must.should.have.property("have");
    });
    
    it("must.haveAny", function() {
    	true.must.should.have.property("haveAny");
    });
    
    it("must.not", function() {
    	true.must.should.have.property("not");
    });
    
    it("must.not.have", function() {
    	true.must.not.should.have.property("have");
    });
    
    it("must.not.be", function() {
    	true.must.not.should.have.property("be");
    });
  });
	
  describe("#must.raise()", function() {
    it("raise() - error", function() {
      (function() {
        true.must.raise();
      }).should.throwError(/is not a callable object/);
    });
  });

  describe("#must.be.equal()", function() {
    it("be.equal(boolean) - must", function() {
      true.must.be.equal(true);
    });
    
    it("be.equal(boolean) - must not", function() {
    	(function() {
    		true.must.be.equal(false);
    	}).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.equal(string) - must not", function() {
      (function() {
        true.must.be.equal("true");
      }).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.equal(number) - must", function() {
    	true.must.be.equal(1);
    });

    it("be.equal(number) - must not", function() {
      (function() {
        true.must.be.equal(2);
      }).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.equal(function) - must not", function() {
    	(function() {
    		true.must.be.equal(function() {});
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.equal(object) - must not", function() {
    	(function() {
    		true.must.be.equal({});
    	}.should.throwError(Error, {name: "AssertionError"}));
    });

    it("be.equal(any, msg) - must not", function() {
      (function() {
        true.must.be.equal(false, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });
  
  describe("#must.not.be.equal()", function() {
    it("not.be.equal(boolean) - must", function() {
      true.must.not.be.equal(false);
    });
    
    it("not.be.equal(boolean) - must not", function() {
    	(function() {
    		true.must.not.be.equal(true);
    	}).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.equal(string) - must", function() {
      true.must.not.be.equal("true");
    });
    
    it("not.be.equal(number) - must", function() {
    	true.must.not.be.equal(2);
    });

    it("not.be.equal(number) - must not", function() {
      (function() {
        true.must.not.be.equal(1);
      }).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("not.be.equal(function) - must", function() {
  		true.must.not.be.equal(function() {});
    });
    
    it("not.be.equal(object) - must", function() {
  		true.must.not.be.equal({});
    });

    it("not.be.equal(any, msg) - must not", function() {
      (function() {
        true.must.not.be.equal(true, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });
  
  describe("#must.be.same()", function() {
    it("be.same(boolean) - must", function() {
      true.must.be.same(true);
    });
    
    it("be.same(boolean) - must not", function() {
    	(function() {
    		true.must.be.same(false);
    	}).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.same(number) - must not", function() {
      (function() {
        true.must.be.same(1);
      }).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.same(string) - must not", function() {
    	(function() {
    		true.must.be.same("true");
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.same(function) - must not", function() {
    	(function() {
    		true.must.be.same(function() {});
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.same(object) - must not", function() {
    	(function() {
    		true.must.be.same({});
    	}).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.same(value, msg) - error", function() {
      (function() {
        true.must.be.same(false, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });
  
  describe("#must.not.be.same()", function() {
    it("not.be.same(boolean) - must", function() {
      true.must.not.be.same(false);
    });
    
    it("not.be.same(boolean) - must not", function() {
    	(function() {
    		true.must.not.be.same(true);
    	}).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.same(number) - must", function() {
      true.must.not.be.same(1);
    });
    
    it("not.be.same(string) - must", function() {
  		true.must.not.be.same("true");
    });
    
    it("not.be.same(function) - must", function() {
  		true.must.not.be.same(function() {});
    });
    
    it("not.be.same(object) - must", function() {
  		true.must.not.be.same({});
    });

    it("not.be.same(value, msg) - error", function() {
      (function() {
        true.must.not.be.same(true, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });
  
  describe("#must.be.between()", function() {
    it("be.between(left, right) - must", function() {
      true.must.be.between(-1, 1);
    });

    it("be.between(left, right) - must not", function() {
      (function() {
        true.must.be.between(2, 3);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.between(left, right, msg) - must not", function() {
      (function() {
        true.must.be.between("a", "c", "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });
  
  describe("#must.not.be.between()", function() {
    it("not.be.between(left, right) - must", function() {
      true.must.not.be.between(100, 200);
    });

    it("not.be.between(left, right) - must not", function() {
      (function() {
        true.must.not.be.between(-1, 1);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.between(left, right, msg) - must not", function() {
      (function() {
        true.must.not.be.between(-1, 1, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });
  
  describe("#must.be.instanceOf()", function() {
    it("be.instanceOf(boolean) - must", function() {
      true.must.be.instanceOf(Boolean);
    });
    
    it("be.instanceOf(string) - must not", function() {
    	(function() {
    		true.must.be.instanceOf(String);
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.instanceOf(number) - must not", function() {
    	(function() {
    		true.must.be.instanceOf(Number);
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.instanceOf(function) - must not", function() {
    	(function() {
    		true.must.be.instanceOf(Function);
    	}).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.instanceOf(Object) - must not", function() {
      (function() {
        true.must.be.instanceOf(Object);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.instanceOf(any, msg) - must not", function() {
      (function() {
        true.must.be.instanceOf(Object, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });
  
  describe("#must.not.be.instanceOf()", function() {
    it("not.be.instanceOf(boolean) - must not", function() {
    	(function() {
    		true.must.not.be.instanceOf(Boolean);
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("not.be.instanceOf(string) - must", function() {
  		true.must.not.be.instanceOf(String);
    });
    
    it("not.be.instanceOf(number) - must", function() {
  		true.must.not.be.instanceOf(Number);
    });
    
    it("not.be.instanceOf(function) - must", function() {
  		true.must.not.be.instanceOf(Function);
    });

    it("not.be.instanceOf(Object) - must", function() {
      true.must.not.be.instanceOf(Object);
    });

    it("not.be.instanceOf(any, msg) - must not", function() {
      (function() {
        true.must.not.be.instanceOf(Boolean, "Custom message");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    });
  });

  describe("#must.have()", function() {
  	describe("have(prop [, msg])", function() {
  		it("have(prop : String) - must not", function() {
  			(function() {
  				true.must.have("username");
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("have(prop : String, msg) - must not", function() {
  			(function() {
  				true.must.have("username", "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  	});
  	
  	describe("have(props [, msg])", function() {
  		it("have([]) - must", function() {
  			true.must.have([]);
  		});
  		
  		it("have(props : String[]) - must not", function() {
  			(function() {
  				true.must.have(["username", "password"]);
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("have(props : String[], msg) - must not", function() {
  			(function() {
  				true.must.have(["username", "pwd"], "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  		
  		it("have({}) - must", function() {
  			true.must.have({});
  		});
  		
  		it("have(props : Object) - must not", function() {
  			(function() {
  				true.must.have({username: "user", password: "pwd"});
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("have(props : Object, msg) - must not", function() {
  			(function() {
  				true.must.have({username: "user", password: "PWD"}, "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  	});
  });
  
  describe("#must.not.have()", function() {
  	describe("not.have(prop [, msg])", function() {
  		it("not.have(prop : String) - must", function() {
  			true.must.not.have("user");
  		});
  		
  		it("not.have(prop : String) - must", function() {
  			true.must.not.have("username");
  		});
  		
  		it("not.have(prop : String, msg) - must not", function() {
  			true.must.not.have("user", "Custom error message");
  		});
  	});
  	
  	describe("not.have(props [, msg])", function() {
  		it("not.have([]) - must", function() {
  			true.must.not.have([]);
  		});
  		
  		it("not.have(props : String[]) - must not", function() {
				true.must.not.have(["usr", "pwd"]);
  		});
  		
  		it("not.have(props : String[], msg) - must not", function() {
  			true.must.not.have(["usr", "pwd"], "Custom error message");
  		});
  		
  		it("not.have({}) - must", function() {
  			true.must.not.have({});
  		});
  		
  		it("not.have(props : Object) - must", function() {
  			true.must.not.have({username: "user", password: "pwd"});
  		});
  		
  		it("not.have(props : Object, msg) - must", function() {
				true.must.not.have({username: "user", password: "pwd"}, "Custom error message");
  		});
  	});
  });
  
  describe("#must.haveAny()", function() {
  	it("haveAny([]) - must not", function() {
  		(function() {
  			true.must.haveAny([]);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("haveAny([], msg) - must not", function() {
  		(function() {
  			true.must.haveAny([], "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  	
  	it("haveAny(props : string[]) - must not", function() {
  		(function() {
  			true.must.haveAny(["user", "username", "usr"]);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("haveAny(props : string[], msg) - must not", function() {
  		(function() {
  			true.must.haveAny(["user", "usr"], "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  	
  	it("haveAny(props : object) - must not", function() {
  		(function() {
  			true.must.haveAny({name: "user", username: "user", user: "user"});
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("haveAny(props : object, msg) - must not", function() {
  		(function() {
  			true.must.haveAny({name: "user", user: "user"}, "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  });
});