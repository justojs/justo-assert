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
});