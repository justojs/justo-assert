describe("must<Object>", function() {
	var user;
	
	before(function() {
		user = {
		  username: "user",
		  password: "pwd"
		};
	});
	
  describe("#must", function() {
    it("must", function() {
      user.should.have.property("must");
    });
    
    it("must.be", function() {
    	user.must.should.have.property("be");
    });
    
    it("must.have", function() {
    	user.must.should.have.property("have");
    });
    
    it("must.haveAny", function() {
    	user.must.should.have.property("haveAny");
    });
    
    it("must.not", function() {
    	user.must.should.have.property("not");
    });
    
    it("must.not.have", function() {
    	user.must.not.should.have.property("have");
    });
    
    it("must.not.be", function() {
    	user.must.not.should.have.property("be");
    });
  });
  
  describe("#must.raise()", function() {
    it("raise() - error", function() {
      (function() {
        user.must.raise();
      }).should.throwError(/is not a callable object/);
    });
  });
  
  describe("#must.contain()", function() {
  	it("contain(item) - must not", function() {
  		(function() {
  			user.must.contain("username");
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("contain(item, msg) - must not", function() {
  		(function() {
  			user.must.contain("username", "Custom message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
  	});
  });
  
  describe("#must.not.contain()", function() {
  	it("not.contain(item) - must", function() {
  		user.must.not.contain("username");
  	});
  });
  
  describe("#must.be.equal()", function() {
  	it("be.equal(string) - must not", function() {
  		(function() {
  			user.must.be.equal("user");
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.equal(number) - must no", function() {
  		(function() {
  			user.must.be.equal(1);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.equal(boolean) - must not", function() {
  		(function() {
  			user.must.be.equal(true);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.equal(function) - must not", function() {
  		(function() {
  			user.must.be.equal(function() {});
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.equal(object) - must", function() {
  		user.must.be.equal({username: "user", password: "pwd"});
  	});
  	
  	it("be.equal(object) - must not", function() {
  		(function() {
  			user.must.be.equal({uername: "USER", password: "pwd"})
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.equal(any, msg) - must not", function() {
  		(function() {
  			user.must.be.equal(1, "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  });
  
  describe("#must.not.be.equal()", function() {
  	it("not.be.equal(string) - must be", function() {
  		user.must.not.be.equal("");
  	});
  	
  	it("not.be.equal(number) - must be", function() {
  		user.must.not.be.equal(1);
  	});
  	
  	it("not.be.equal(boolean) - must be", function() {
  		user.must.not.be.equal(true);
  	});
  	
  	it("not.be.equal(function) - must be", function() {
  		user.must.not.be.equal(function() {});
  	});
  	
  	it("not.be.equal(object) - must be", function() {
  		user.must.not.be.equal({user: "user"});
  	});
  	
  	it("not.be.equal(object) - must not be", function() {
  		(function() {
  			user.must.not.be.equal({username: "user", password: "pwd"});
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  });
  
  describe("#must.be.same()", function() {
  	it("be.same(string) - must not be", function() {
  		(function() {
  			user.must.be.same("");
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.same(number) - must not be", function() {
  		(function() {
  			user.must.be.same(1);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.same(boolean) - must not be", function() {
  		(function() {
  			user.must.be.same(true);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.same(function) - must not be", function() {
  		(function() {
  			user.must.be.same(function() {});
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.same(object) - must be", function() {
  		user.must.be.same(user);
  	});
  	
  	it("be.same(object) - must not be", function() {
  		(function() {
  			user.must.be.same({username: "user", password: "pwd"});
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  });
  
  describe("#must.not.be.same()", function() {
  	it("not.be.same(string) - must be", function() {
  		user.must.not.be.same("");
  	});
  	
  	it("not.be.same(number) - must be", function() {
  		user.must.not.be.same(1);
  	});
  	
  	it("not.be.same(boolean) - must be", function() {
  		user.must.not.be.same(true);
  	});
  	
  	it("not.be.same(function) - must be", function() {
  		user.must.not.be.same(function() {});
  	});
  	
  	it("not.be.same(object) - must be", function() {
  		user.must.not.be.same({username: "user", password: "pwd"});
  	});
  	
  	it("not.be.same(object) - must not be", function() {
  		(function() {
  			user.must.not.be.same(user);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  });
  
  describe("#must.be.between()", function() {
  	it("be.between() - must not be", function() {
  		(function() {
  			user.must.be.between(1, 2);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  });
  
  describe("#must.not.be.between()", function() {
  	it("not.be.between() - must be", function() {
  		user.must.not.be.between(1, 2);
  	});
  });
  
  describe("#must.be.lessThan()", function() {
  	it("be.lessThan(bound) - must not", function() {
  		(function() {
  			user.must.be.lessThan(1);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.lessThan(bound, msg) - must not", function() {
  		(function() {
  			user.must.be.lessThan(1, "Custom message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
  	});
  });
  
  describe("#must.not.be.lessThan()", function() {
  	it("not.be.lessThan(bound) - must", function() {
  		user.must.not.be.lessThan(1);
  	});
  });
  
  describe("#must.be.greaterThan()", function() {
  	it("be.greaterThan(bound) - must not", function() {
  		(function() {
  			user.must.be.greaterThan(1);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.greaterThan(bound, msg) - must not", function() {
  		(function() {
  			user.must.be.greaterThan(1, "Custom message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
  	});
  });
  
  describe("#must.not.be.greaterThan()", function() {
  	it("not.be.greaterThan(bound) - must", function() {
  		user.must.not.be.greaterThan(1);
  	});
  });
  
  describe("#must.be.instanceOf()", function() {
  	it("be.instanceOf(string) - must not be", function() {
  		(function() {
  			user.must.be.instanceOf(String);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.instanceOf(number) - must not be", function() {
  		(function() {
  			user.must.be.instanceOf(Number);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.instanceOf(boolean) - must not be", function() {
  		(function() {
  			user.must.be.instanceOf(Boolean);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.instanceOf(function) - must not be", function() {
  		(function() {
  			user.must.be.instanceOf(Function);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("be.instanceof(object) - must be", function() {
  		user.must.be.instanceOf(Object);
  	});
  });
  
  describe("#must.not.be.instanceOf()", function() {
  	it("not.be.instanceOf(string) - must be", function() {
  		user.must.not.be.instanceOf(String);
  	});
  	
  	it("not.be.instanceOf(number) - must be", function() {
  		user.must.not.be.instanceOf(Number);
  	});
  	
  	it("not.be.instanceOf(boolean) - must be", function() {
  		user.must.not.be.instanceOf(Boolean);
  	});
  	
  	it("not.be.instanceOf(function) - must be", function() {
  		user.must.not.be.instanceOf(Function);
  	});
  	
  	it("not.be.instanceOf(object) - must not be", function() {
  		(function() {
  			user.must.not.be.instanceOf(Object);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  });
  
  describe("#must.have()", function() {
  	describe("have(prop [, msg])", function() {
  		it("have(prop : String) - must have it", function() {
  			user.must.have("username");
  		});
  		
  		it("have(prop : String) - must not have it", function() {
  			(function() {
  				user.must.have("name");
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("have(prop : String, msg) - must have it", function() {
  			user.must.have("username", "Custom error message");
  		});
  		
  		it("have(prop : String, msg) - must not have it", function() {
  			(function() {
  				user.must.have("user", "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  	});
  	
  	describe("have(props [, msg])", function() {
  		it("have([])", function() {
  			user.must.have([]);
  		});
  		
  		it("have(props : String[]) - must have", function() {
  			user.must.have(["username", "password"]);
  		});
  		
  		it("have(props : String[]) - must not have", function() {
  			(function() {
  				user.must.have(["username", "pwd"]);
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("have(props : String[], msg) - must have", function() {
  			user.must.have(["username", "password"], "Custom error message");
  		});
  		
  		it("have(props : String[], msg) - must not have", function() {
  			(function() {
  				user.must.have(["username", "pwd"], "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  		
  		it("have({})", function() {
  			user.must.have({});
  		});
  		
  		it("have(props : Object) - must have", function() {
  			user.must.have({username: "user", password: "pwd"});
  		});
  		
  		it("have(props : Object) - must not have", function() {
  			(function() {
  				user.must.have({username: "user", password: "PWD"});
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("have(props : Object, msg) - must have", function() {
  			user.must.have({username: "user", password: "pwd"}, "Custom error message");
  		});
  		
  		it("have(props : Object, msg) - must not have", function() {
  			(function() {
  				user.must.have({username: "user", password: "PWD"}, "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  	});
  });
  
  describe("#must.not.have()", function() {
  	describe("not.have(prop [, msg])", function() {
  		it("not.have(prop : String) - must not have", function() {
  			user.must.not.have("user");
  		});
  		
  		it("not.have(prop : String) - must have", function() {
  			(function() {
  				user.must.not.have("username");
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("not.have(prop : String, msg) - must not have", function() {
  			user.must.not.have("user", "Custom error message");
  		});
  		
  		it("not.have(prop : String, msg) - must have", function() {
  			(function() {
  				user.must.not.have("username", "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  	});
  	
  	describe("not.have(props [, msg])", function() {
  		it("not.have([])", function() {
  			user.must.not.have([]);
  		});
  		
  		it("not.have(props : String[]) - must not have", function() {
				user.must.not.have(["usr", "pwd"]);
  		});
  		
  		it("not.have(props : String[]) - must have", function() {
  			(function() {
  				user.must.not.have(["username", "password"]);
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("not.have(props : String[], msg) - must not have", function() {
  			user.must.not.have(["usr", "pwd"], "Custom error message");
  		});
  		
  		it("not.have(props : String[], msg) - must have", function() {
  			(function() {
  				user.must.not.have(["username", "password"], "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  		
  		it("not.have({})", function() {
  			user.must.not.have({});
  		});
  		
  		it("not.have(props : Object) - must have", function() {
  			(function() {
  				user.must.not.have({username: "user", password: "pwd"});
  			}).should.throwError(Error, {name: "AssertionError"});
  		});
  		
  		it("not.have(props : Object) - must not have", function() {
  			user.must.not.have({username: "USER", password: "PWD"});
  		});
  		
  		it("not.have(props : Object, msg) - must have", function() {
  			(function() {
  				user.must.not.have({username: "user", password: "pwd"}, "Custom error message");
  			}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  		});
  		
  		it("not.have(props : Object, msg) - must not have", function() {
				user.must.not.have({username: "USER", password: "PWD"}, "Custom error message");
  		});
  	});
  });
  
  describe("#must.haveAny()", function() {
  	it("haveAny([])", function() {
  		(function() {
  			user.must.haveAny([]);
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("haveAny([], msg)", function() {
  		(function() {
  			user.must.haveAny([], "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  	
  	it("haveAny(props : string[]) - must have", function() {
  		user.must.haveAny(["user", "username", "usr"]);
  	});
  	
  	it("haveAny(props : string[]) - must not have", function() {
  		(function() {
  			user.must.haveAny(["user", "usr"])
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("haveAny(props : string[], msg) - must have", function() {
  		user.must.haveAny(["user", "username", "usr"], "Custom error message");
  	});
  	
  	it("haveAny(props : string[], msg - must not have", function() {
  		(function() {
  			user.must.haveAny(["user", "usr"], "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  	
  	it("haveAny(props : object) - must have", function() {
  		user.must.haveAny({name: "user", username: "user", user: "user"});
  	});
  	
  	it("haveAny(props : object) - must have but with different value", function() {
  		(function() {
  			user.must.haveAny({name: "user", username: "USER", user: "user"});
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("haveAny(props : object) - must not have", function() {
  		(function() {
  			user.must.haveAny({name: "user", user: "user"});
  		}).should.throwError(Error, {name: "AssertionError"});
  	});
  	
  	it("haveAny(props : object, msg) - must have", function() {
  		user.must.haveAny({name: "user", username: "user", user: "user"}, "Custom error message");
  	});
  	
  	it("haveAny(props : object, msg) - mut have but with different value", function() {
  		(function() {
  			user.must.haveAny({name: "user", username: "USER", user: "user"}, "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  	
  	it("haveAny(props : object, msg) - must not have", function() {
  		(function() {
  			user.must.haveAny({name: "user", user: "user"}, "Custom error message");
  		}).should.throwError(Error, {name: "AssertionError", message: "Custom error message"});
  	});
  });
});