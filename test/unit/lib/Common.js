describe("Common", function() {
  describe("aliases", function() {
    var x = 1;

    describe("#must.be.eq()", function() {
      it("be.eq() - pass", function() {
        x.must.be.eq(x);
      });

      it("be.eq() - fail", function() {
        (function() {
          x.must.be.eq(123);
        }).should.throwError(Error, {name: "AssertionError"});
      });
    });

    describe("#must.not.be.eq()", function() {
      it("not.be.eq() - pass", function() {
        x.must.not.be.eq(123);
      });

      it("not.be.eq() - fail", function() {
        (function() {
          x.must.not.be.eq(x);
        }).should.throwError(Error, {name: "AssertionError"});
      });
    });

    describe("#must.be.lt()", function() {
      it("be.lt() - pass", function() {
        x.must.be.lt(2);
      });

      it("be.lt() - fail", function() {
        (function() {
          x.must.be.lt(x);
        }).should.throwError(Error, {name: "AssertionError"});
      });
    });

    describe("#must.not.be.lt()", function() {
      it("not.be.lt() - pass", function() {
        x.must.not.be.lt(x);
      });

      it("not.be.lt() - fail", function() {
        (function() {
          x.must.not.be.lt(10);
        }).should.throwError(Error, {name: "AssertionError"});
      });
    });

    describe("#must.be.gt()", function() {
      it("be.gt() - pass", function() {
        x.must.be.gt(0);
      });

      it("be.gt() - fail", function() {
        (function() {
          x.must.be.gt(x);
        }).should.throwError(Error, {name: "AssertionError"});
      });
    });

    describe("#must.not.be.gt()", function() {
      it("not.be.gt() - pass", function() {
        x.must.not.be.gt(x);
      });

      it("not.be.gt() - fail", function() {
        (function() {
          x.must.not.be.gt(0);
        }).should.throwError(Error, {name: "AssertionError"});
      });
    });

    describe("#must.be.in()", function() {
      it("be.gt() - pass", function() {
        x.must.be.in([0, x, 2]);
      });

      it("be.in() - fail", function() {
        (function() {
          x.must.be.in([0, 2, 3]);
        }).should.throwError(Error, {name: "AssertionError"});
      });
    });

    describe("#must.not.be.in()", function() {
      it("not.be.in() - pass", function() {
        x.must.not.be.in([0, 2, 3]);
      });

      it("not.be.in() - fail", function() {
        (function() {
          x.must.not.be.in([0, x, 2]);
        }).should.throwError(Error, {name: "AssertionError"});
      });
    });
  });
});
