describe("Common", function() {
	describe("aliases", function() {
		var x = 1;
		
		describe("#must.be.eq()", function() {
			it("be.eq() - must", function() {
				x.must.be.eq(x);
			});
			
			it("be.eq() - must not", function() {
				(function() {
					x.must.be.eq(123);
				}).should.throwError(Error, {name: "AssertionError"});
			});
		});
		
		describe("#must.not.be.eq()", function() {
			it("not.be.eq() - must", function() {
				x.must.not.be.eq(123);
			});
			
			it("not.be.eq() - must not", function() {
				(function() {
					x.must.not.be.eq(x);
				}).should.throwError(Error, {name: "AssertionError"});
			});
		});
		
		describe("#must.be.lt()", function() {
			it("be.lt() - must", function() {
				x.must.be.lt(2);
			});
			
			it("be.lt() - must not", function() {
				(function() {
					x.must.be.lt(x);
				}).should.throwError(Error, {name: "AssertionError"});
			});
		});
		
		describe("#must.not.be.lt()", function() {
			it("not.be.lt() - must", function() {
				x.must.not.be.lt(x);
			});
			
			it("not.be.lt() - must not", function() {
				(function() {
					x.must.not.be.lt(10);
				}).should.throwError(Error, {name: "AssertionError"});
			});
		});
		
		describe("#must.be.gt()", function() {
			it("be.gt() - must", function() {
				x.must.be.gt(0);
			});
			
			it("be.gt() - must not", function() {
				(function() {
					x.must.be.gt(x);
				}).should.throwError(Error, {name: "AssertionError"});
			});
		});
		
		describe("#must.not.be.gt()", function() {
			it("not.be.gt() - must", function() {
				x.must.not.be.gt(x);
			});
			
			it("not.be.gt() - must not", function() {
				(function() {
					x.must.not.be.gt(0);
				}).should.throwError(Error, {name: "AssertionError"});
			});
		});
	});
});