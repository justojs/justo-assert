describe("must<Function>", function() {
  function fn() {};
  function raise(msg) { throw new Error(msg); };
  function nonraise() { }
  
  describe("#must", function() {
    it("must", function() {
      fn.should.have.property("must");
    });
    
    it("must.be", function() {
    	fn.must.should.have.property("be");
    });
    
    it("must.have", function() {
    	fn.must.should.have.property("have");
    });
    
    it("must.haveAny", function() {
    	fn.must.should.have.property("haveAny");
    });
    
    it("must.not", function() {
    	fn.must.should.have.property("not");
    });
    
    it("must.not.have", function() {
    	fn.must.not.should.have.property("have");
    });
    
    it("must.not.be", function() {
    	fn.must.not.should.have.property("be");
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
    describe("Error handling", function() {
      it("raise(fn : !Function)", function() {
	      (function() {
	        fn.must.raise();
	      }).should.throwError(/expected to throw/);
      });
    });
	
    describe("#must.raise()", function() {
      it("raise() - must", function() {
        raise.must.raise();
      });
      
      it("raise() - must not", function() {
      	(function() {
      		nonraise.must.raise()
      	}).should.throwError(Error, {name: "AssertionError"});
      });
    });

    describe("raise(arguments [, msg])", function() {
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
      		nonraise.must.raise(["Arg1", "Arg2"], "Custom message")
      	}).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
      });
    });

    describe("raise(error [, msg])", function() {
      it("raise(error : Error) -must", function() {
      	raise.must.raise(Error);
      });
      
      it("raise(error : Error) - must not", function() {
      	(function() {
      		nonraise.must.raise(Error)
      	}).should.throwError(Error, {name: "AssertionError"});
      });

      it("raise(error : string) - must", function() {
      	raise.must.raise("");
      });
      
      it("raise(error : string) - must not", function() {
      	(function() {
      		nonraise.must.raise("")
      	}).should.throwError(Error, {name: "AssertionError"});
      });

      it("raise(error : Error, msg) - must", function() {
        raise.must.raise(Error, "Custom message");
      });
      
      it("raise(error : Error, msg) - must not", function() {
      	(function() {
      		nonraise.must.raise(Error, "Custom message")
      	}).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
      });

      it("raise(error : string, msg) - must", function() {
        raise.must.raise("", "Custom message");
      });
      
      it("raise(error : string, msg) - must not", function() {
      	(function() {
      		nonraise.must.raise("", "Custom message");
      	}).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
      });
    });
     
    describe("raise(error, args [, msg]", function() {
    	it("raise(error : Error, args) - must", function() {
    		raise.must.raise(Error, ["Arg1"]);
    	});
    	
    	it("raise(error : Error, args) - must not", function() {
    		(function() {
    			nonraise.must.raise(Error, ["Arg1"]);
    		}).should.throwError(Error, {name: "AssertionError"});
    	});
    	
    	it("raise(error : Error, args, msg) - must", function() {
    		raise.must.raise(Error, ["Arg1"], "Custom message");
    	});
    	
    	it("raise(error : Error, args, msg) - must not", function() {
    		(function() {
    			nonraise.must.raise(Error, ["Arg1"], "Custom message");
    		}).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
    	});
    	
    	it("raise(error : string, args) - must", function() {
    		raise.must.raise("Error", ["Error", "Arg2"]);
    	});
    	
    	it("raise(error : string, args) - must not", function() {
    		(function() {
    			nonraise.must.raise("Error", ["Arg1"]);
    		}).should.throwError(Error, {name: "AssertionError"});
    	});
    	
    	it("raise(error : string, args, msg) - must", function() {
    		raise.must.raise("Error", ["Error", "Arg2"], "Custom message");
    	});
    	
    	it("raise(error : Error, args, msg) - must not", function() {
    		(function() {
    			nonraise.must.raise("Error", ["Arg1"], "Custom message");
    		}).should.throwError(Error, {name: "AssertionError", message: "Custom message"});
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
  			fn.must.haveAny(["user", "usr"])
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