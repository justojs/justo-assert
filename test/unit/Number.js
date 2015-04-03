describe("must<number>", function() {
  const x = 1;
  const y = 2;
  const z = 3;

  describe("#must", function() {
    it("must", function() {
      x.should.have.property("must");
    });
    
    it("must.be", function() {
    	x.must.should.have.property("be");
    });
    
    it("must.have", function() {
    	x.must.should.have.property("have");
    });
    
    it("must.haveAny", function() {
    	x.must.should.have.property("haveAny");
    });
    
    it("must.not", function() {
    	x.must.should.have.property("not");
    });
    
    it("must.not.have", function() {
    	x.must.not.should.have.property("have");
    });
    
    it("must.not.be", function() {
    	x.must.not.should.have.property("be");
    });
  });
  
  describe("#must.raise()", function() {
    it("raise() - error", function() {
      (function() {
        x.must.raise();
      }).should.throwError(/is not a callable object/);
    });
  });

  describe("#must.be.equal()", function() {
    it("be.equal(number) - must", function() {
      x.must.be.equal(1);
    });
    
    it("be.equal(number) - must not", function() {
    	(function() {
    		x.must.be.equal(2);
    	}).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.equal(string) - must", function() {
      x.must.be.equal("1");
    });
    
    it("be.equal(string) - must not", function() {
    	(function() {
    		x.must.be.equal("2");
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.equal(boolean) - must", function() {
    	x.must.be.equal(true);
    });
    
    it("be.equal(boolean) - must not", function() {
    	(function() {
    		x.must.be.equal(false);
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.equal(function) - must not", function() {
    	(function() {
    		x.must.be.equal(function() {});
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.equal(object) - must not", function() {
    	(function() {
    		x.must.be.equal({});
    	}).should.throwError(Error, {name: "AssertionError"});
    });
  });
  
  describe("#must.not.be.equal()", function() {
    it("not.be.equal(number) - must", function() {
      x.must.not.be.equal(y);
    });
    
    it("not.be.equal(number) - must not", function() {
    	(function() {
    		x.must.not.be.equal(x);
    	}).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.equal(string) - must", function() {
      x.must.not.be.equal("123");
    });
    
    it("not.be.equal(string) - must not", function() {
    	(function() {
    		x.must.not.be.equal("1");
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("not.be.equal(boolean) - must", function() {
    	x.must.not.be.equal(false);
    });
    
    it("be.equal(boolean) - must not", function() {
    	(function() {
    		x.must.not.be.equal(true);
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("not.be.equal(function) - must", function() {
  		x.must.not.be.equal(function() {});
    });
    
    it("not.be.equal(object) - must", function() {
  		x.must.not.be.equal({});
    });
  });

  describe("#must.be.same()", function() {
    it("be.same(number) - must", function() {
      x.must.be.same(x);
    });
    
    it("be.same(number) - must not", function() {
    	(function() {
    		x.must.be.same(y);
    	}).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.same(string) - must not", function() {
      (function() {
        x.must.be.same("1");
      }).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.same(boolean) - must not", function() {
    	(function() {
    		x.must.be.same(true);
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.same(function) - must not", function() {
    	(function() {
    		x.must.be.same(function() {});
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.same(object) - must not", function() {
    	(function() {
    		x.must.be.same({});
    	}).should.throwError(Error, {name: "AssertionError"});
    });

    it("be.same(value, msg) - must not", function() {
      (function() {
        x.must.be.same("1", "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });
  
  describe("#must.not.be.same()", function() {
    it("not.be.same(number) - must", function() {
      x.must.not.be.same(y);
    });
    
    it("not.be.same(number) - must not", function() {
    	(function() {
    		x.must.not.be.same(x);
    	}).should.throwError(Error, {name: "AssertionError"});
    });

    it("not.be.same(string) - must", function() {
      x.must.not.be.same("1");
    });
    
    it("not.be.same(boolean) - must", function() {
  		x.must.not.be.same(true);
    });
    
    it("not.be.same(function) - must", function() {
  		x.must.not.be.same(function() {});
    });
    
    it("not.be.same(object) - must", function() {
  		x.must.not.be.same({});
    });

    it("not.be.same(value, msg) - must not", function() {
      (function() {
        x.must.not.be.same(x, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.be.between()", function() {
    it("be.between(left, right) - must", function() {
      y.must.be.between(x, z);
    });

    it("between(left, right) - must not", function() {
      (function() {
        x.must.be.between(y, z);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("between(left, right, msg) - must not", function() {
      (function() {
        x.must.be.between(y, z, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });
  
  describe("#must.not.be.between()", function() {
    it("between(a, b) - must", function() {
      x.must.not.be.between(y, z);
    });

    it("between(a, b) - must not", function() {
      (function() {
        y.must.not.be.between(x, z);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("between(a, b, msg) - must not", function() {
      (function() {
        y.must.not.be.between(x, z, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });
  
  describe("#must.be.lessThan()", function() {
  	it("be.lessThan(bound) - must", function() {
  		x.must.be.lessThan(y);
  	});
  	
  	it("be.lessThan(bound) - must not", function() {
  		(function() {
  			x.must.be.lessThan(x);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.lessThan(bound, msg) - must not", function() {
  		(function() {
  			x.must.be.lessThan(x, "Custom message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
  	});
  });
  
  describe("#must.not.be.lessThan()", function() {
  	it("not.be.lessThan(bound) - must", function() {
  		x.must.not.be.lessThan(x);
  	});
  	
  	it("not.be.lessThan(bound) - must not", function() {
  		(function() {
  			x.must.not.be.lessThan(y);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("not.be.lessThan(bound, msg) - must not", function() {
  		(function() {
  			x.must.not.be.lessThan(y, "Custom message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
  	});
  });
  
  describe("#must.be.greaterThan()", function() {
  	it("be.greaterThan(bound) - must", function() {
  		y.must.be.greaterThan(x);
  	});
  	
  	it("be.greaterThan(bound) - must not", function() {
  		(function() {
  			x.must.be.greaterThan(y);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.greaterThan(bound, msg) - must not", function() {
  		(function() {
  			x.must.be.greaterThan(y, "Custom message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
  	});
  });
  
  describe("#must.be.instanceOf()", function() {
    it("be.instanceOf(string) - must not", function() {
    	(function() {
    		x.must.be.instanceOf(String);
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.instanceOf(number) - must", function() {
  		x.must.be.instanceOf(Number);
    });
    
    it("be.instanceOf(boolean) - must not", function() {
    	(function() {
    		x.must.be.instanceOf(Boolean);
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("be.instanceOf(function) - must not", function() {
    	(function() {
    		x.must.be.instanceOf(Function);
    	}).should.throwError(Error, {name: "AssertionError"})
    });

    it("instanceOf(object) - must not", function() {
      (function() {
        x.must.be.instanceOf(Object);
      }).should.throwError(Error, {name: "AssertionError"});
    });

    it("instanceOf(any, msg) - must not", function() {
      (function() {
        x.must.be.instanceOf(String, "Custom message.");
      }).should.throwError(Error, {name: "AssertionError", message: "Custom message."});
    });
  });

  describe("#must.not.be.instanceOf()", function() {
  	it("not.be.instanceOf(String) - must", function() {
      x.must.not.be.instanceOf(String);
    });
  	
    it("not.be.instanceOf(Number) - must not", function() {
    	(function() {
    		x.must.not.be.instanceOf(Number);
    	}).should.throwError(Error, {name: "AssertionError"});
    });
    
    it("not.be.instanceOf(Boolean) - must", function() {
    	x.must.not.be.instanceOf(Boolean);
    });
    
    it("not.be.instanceOf(Function) - must", function() {
    	x.must.not.be.instanceOf(Function);
    });
    
    it("not.be.instanceOf(Object) - must", function() {
    	x.must.not.be.instanceOf(Object);
    });

    it("not.be.instanceOf(any, msg) - error", function() {
      (function() {
        x.must.not.be.instanceOf(Number, "Custom message.");
      }).should.throwError(Error, {name:"AssertionError", message: "Custom message."});
    });
  });
  
  describe("#must.have()", function() {
  	describe("have(prop [, msg])", function() {
  		it("have(prop : String) - must not", function() {
  			(function() {
  				x.must.have("username");
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("have(prop : String, msg) - must not", function() {
  			(function() {
  				x.must.have("username", "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  	});
  	
  	describe("have(props [, msg])", function() {
  		it("have([]) - must", function() {
  			x.must.have([]);
  		});
  		
  		it("have(props : String[]) - must not", function() {
  			(function() {
  				x.must.have(["username", "password"]);
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("have(props : String[], msg) - must not", function() {
  			(function() {
  				x.must.have(["username", "pwd"], "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  		
  		it("have({}) - must", function() {
  			x.must.have({});
  		});
  		
  		it("have(props : Object) - must not", function() {
  			(function() {
  				x.must.have({username: "user", password: "pwd"});
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("have(props : Object, msg) - must not", function() {
  			(function() {
  				x.must.have({username: "user", password: "PWD"}, "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  	});
  });
  
  describe("#must.not.have()", function() {
  	describe("not.have(prop [, msg])", function() {
  		it("not.have(prop : String) - must", function() {
  			x.must.not.have("user");
  		});
  		
  		it("not.have(prop : String) - must", function() {
  			x.must.not.have("username");
  		});
  		
  		it("not.have(prop : String, msg) - must not", function() {
  			x.must.not.have("user", "Custom error message");
  		});
  	});
  	
  	describe("not.have(props [, msg])", function() {
  		it("not.have([]) - must", function() {
  			x.must.not.have([]);
  		});
  		
  		it("not.have(props : String[]) - must not", function() {
				x.must.not.have(["usr", "pwd"]);
  		});
  		
  		it("not.have(props : String[], msg) - must not", function() {
  			x.must.not.have(["usr", "pwd"], "Custom error message");
  		});
  		
  		it("not.have({}) - must", function() {
  			x.must.not.have({});
  		});
  		
  		it("not.have(props : Object) - must", function() {
  			x.must.not.have({username: "user", password: "pwd"});
  		});
  		
  		it("not.have(props : Object, msg) - must", function() {
				x.must.not.have({username: "user", password: "pwd"}, "Custom error message");
  		});
  	});
  });
  
  describe("#must.haveAny()", function() {
  	it("haveAny([]) - must not", function() {
  		(function() {
  			x.must.haveAny([]);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("haveAny([], msg) - must not", function() {
  		(function() {
  			x.must.haveAny([], "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  	
  	it("haveAny(props : string[]) - must not", function() {
  		(function() {
  			x.must.haveAny(["user", "username", "usr"]);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("haveAny(props : string[], msg) - must not", function() {
  		(function() {
  			x.must.haveAny(["user", "usr"], "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  	
  	it("haveAny(props : object) - must not", function() {
  		(function() {
  			x.must.haveAny({name: "user", username: "user", user: "user"});
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("haveAny(props : object, msg) - must not", function() {
  		(function() {
  			x.must.haveAny({name: "user", user: "user"}, "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  });
});