[![NPM version](http://img.shields.io/npm/v/justo-assert.svg)](https://www.npmjs.org/package/justo-assert)
[![Build Status](https://travis-ci.org/justojs/justo-assert.svg?branch=master)](https://travis-ci.org/justojs/justo-assert)
[![Dependency Status](https://david-dm.org/justojs/justo-assert.svg)](https://david-dm.org/justojs/justo-assert)
[![devDependency Status](https://david-dm.org/justojs/justo-assert/dev-status.svg)](https://david-dm.org/justojs/justo-assert#info=devDependencies)

An assertion framework.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Install

```
npm install justo-assert
```

## Use

```
require("justo-assert");

var x = 1;
x.must.be.equal(1); //ok
x.must.be.equal(2); //AssertionError
```

## Assertions

### must.be.equal(), must.be.eq(), must.not.be.equal() and must.not.be.eq()

Check whether a value is equal to another:

```
x.must.be.equal(123);
x.must.be.eq(123);

x.must.not.be.equal(123);
x.must.not.be.eq(123);
```

### must.match(), must.not.match(), must.be.like() and must.not.be.like()

Check whether a value matches a regular expression:

```
name.must.match(/^Anna/);
name.must.not.match(/^Anna/);

name.must.be.like(/^Anna/);
name.must.not.be.like(/^Anna/);
```

### must.be.same() and must.not.be.same()

Check whether if a value is strictly another:

```
user1.must.be.same(user2);
user1.must.not.be.same(user2);
```

### must.be.similarTo() and must.not.be.similarTo()

Check whether an array is similar to another:

```
[1, 2, 3].must.be.similarTo([2, 1, 3]); //true
[1, 2, 3].must.be.similarTo([1, 2, 4]); //false
```

### must.be.between() and must.not.be.between()

Check whether a value is whitin a range:

```
x.must.be.between(1, 10);
x.must.not.be.between(1, 10);
```

### must.be.lessThan(), must.be.lt(), must.not.be.lessThan(), must.not.be.lt()

Check whether a value is less than another:

```
x.must.be.lessThan(y);
x.must.be.lt(y);

x.must.not.be.lessThan(y);
x.must.not.be.lt(y);
```

### must.be.greaterThan(), must.be.gt(), must.not.be.greaterThan() and must.not.be.gt()

Check whether a value is not less than another:

```
x.must.be.greaterThan(y);
x.must.be.gt(y);

x.must.not.be.greaterThan(y);
x.must.not.be.gt(y);
```

### must.contain() and must.not.contain()

Check whether a value contains another:

```
str.must.contain("a");
arr.must.contain("a");

str.must.not.contain("a");
arr.must.not.contain("a");
```

### must.be.in(), must.not.be.in(), must.be.insideOf() and must.not.be.insideOf()

Check whether a value is in a string or array:

```
substr.must.be.in(str);
item.must.be.in(arr);

substr.must.be.insideOf(str);
item.must.be.insideOf(arr);

substr.must.not.be.insideOf(str);
item.must.not.be.insideOf(arr);

substr.must.not.be.in(str);
item.must.not.be.in(arr);
```

**Note.** The `in` word is a reserved word in ES2015.

### must.have() and must.not.have()

Check whether a value has a property set:

```
user.must.have("username")
user.must.have(["username", "password"]);
user.must.have({username: "usr", password: "pwd"});

user.must.not.have("username");
user.must.not.have(["username", "password"]);
user.must.not.have({username: "usr", password: "pwd"});
```

### must.haveAny()

Check whether a value have, at least, a specified property:

```
user.must.haveAny(["username", "password"]);
user.must.haveAny({username: "usr", password: "pwd"});
```

### must.all.have() and must.not.all.have()

Check whether all items of a list have a property or set of properties:

```
array.must.all.have(["username", "password"]);
array.must.all.have({state: "LOCKED"});

array.must.not.all.have(["posts"]);
array.must.not.all.have({posts: []});
```

### must.be.instanceOf() and must.not.be.instanceOf()

Check whether the type of a value is the specified one:

```
x.must.be.instanceOf("Address");
x.must.be.instanceOf(Address);

x.must.not.be.instanceOf("Address");
x.must.not.be.instanceOf(Address);
```

### must.raise() must.not.raise()

Check whether a function call throws an error:

```
fn.must.raise();

fn.must.raise(Error);
fn.must.raise(Error, ["arg1"]);
fn.must.raise(Error, ["arg1", "arg2"]);

fn.must.raise("Error message");
fn.must.raise("Error message", ["arg1"]);
fn.must.raise("Error message", ["arg1", "arg2"]);

fn.must.raise(/error message pattern/);
fn.must.raise(/error message pattern/, ["arg1"]);
fn.must.raise(/error message pattern/, ["arg1", "arg2"]);

fn.must.not.raise();

fn.must.not.raise(Error);
fn.must.not.raise(Error, ["arg1"]);
fn.must.not.raise(Error, ["arg1", "arg2"]);

fn.must.not.raise("Error message");
fn.must.not.raise("Error message", ["arg1"]);
fn.must.not.raise("Error message", ["arg1", "arg2"]);

fn.must.not.raise(/error message pattern/);
fn.must.not.raise(/error message pattern/, ["arg1"]);
fn.must.not.raise(/error message pattern/, ["arg1", "arg2"]);
```
