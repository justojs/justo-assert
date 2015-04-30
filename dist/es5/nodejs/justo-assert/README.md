[![Build Status](https://travis-ci.org/JustoJS/justo-assert.svg)](https://travis-ci.org/JustoJS/justo-assert)

An assertion framework.

*Proudly made in Valencia, Spain, EU.*

## Install

`npm install justo-assert`

## Assertions

The assertion is similar to `Should.js` , but with `must`.

### must.be.equal() and must.be.eq()

Checks whether a value is equal to another:

```
x.must.be.equal(123);
x.must.be.eq(123);
```

### must.not.be.equal() and must.not.be.eq()

Checks whether a value is not equal to another:

```
x.must.not.be.equal(123);
x.must.not.be.eq(123);
```

### must.be.same()

Checks whether if a value is strictly another:

```
user1.must.be.same(user2);
```

### must.not.be.same()

Checks whether if a value is not strictly another:

```
user1.must.not.be.same(user2);
```

### must.be.between()

Checks whether a value is whitin a range:

```
x.must.be.between(1, 10);
```

### must.not.be.between()

Checks whether a value is not within a range:

```
x.must.not.be.between(1, 10);
```

### must.be.lessThan() and must.be.lt()

Checks whether a value is less than another:

```
x.must.be.lessThan(y);
x.must.be.lt(y);
```

### must.not.be.lessThan() and must.not.be.lt()

Checks whether a value is not less than another:

```
x.must.not.be.lessThan(y);
x.must.not.be.lt(y);
```

### must.be.greaterThan() and must.be.gt()

Checks whether a value is greater than another:

```
x.must.be.greaterThan(y);
x.must.be.gt(y);
```

### must.not.be.greaterThan() and must.not.be.gt()

Checks whether a value is not greater than another:

```
x.must.not.be.greaterThan(y);
x.must.not.be.gt(y);
```

### must.contain()

Checks whether a value contains another:

```
str.must.contain("a");
arr.must.contain("a");
```

### must.not.contain()

Checks whether a value doesn't contain another:

```
str.must.not.contain("a");
arr.must.not.contain("a");
```

### must.have()

Checks whether a value has a property set:

```
user.must.have("username")
user.must.have(["username", "password"]);
user.must.have({username: "usr", password: "pwd"});
```

### must.not.have()

Checks whether a value doesn't have a property set:

```
user.must.not.have("username");
user.must.not.have(["username", "password"]);
user.must.not.have({username: "usr", password: "pwd"});
```

### must.haveAny()

Checks whether a value have, at least, a specified property:

```
user.must.haveAny(["username", "password"]);
user.must.haveAny({username: "usr", password: "pwd"});
```

### must.be.instanceOf()

Checks whether the type of a value is the specified one:

```
x.must.be.instanceOf("Address");
x.must.be.instanceOf(Address);
```

### must.not.be.instanceOf()

Checks whether the type of a value is not the specified one:

```
x.must.not.be.instanceOf("Address");
x.must.not.be.instanceOf(Address);
```

### must.raise()

Checks whether a function call throws an error:

```
fn.must.raise();
fn.must.raise(Error);
fn.must.raise(Error, ["arg1"]);
fn.must.raise(Error, ["arg1", "arg2"]);
```

### must.not.raise()

Checks whether a function call doesn't throw an error:

```
fn.must.not.raise();
fn.must.not.raise(error);
fn.must.not.raise(error, ["arg1"]);
fn.must.not.raise(error, ["arg1", "arg2"]);
```
