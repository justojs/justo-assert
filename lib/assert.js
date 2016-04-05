//imports
import {inspect} from "util";
import * as assert from "justo-inline-assert";
import AssertionError from "./AssertionError";

/**
 * Checks whether two values are equal.
 *
 * @param one:any       The first value.
 * @param two:any       The second value.
 * @param [msg]:string  The message if error.
 */
export function mustBeEqual(one, two, msg) {
  if (!assert.equal(one, two)) {
    throw new AssertionError(`'${inspect(one)}' must be equal to '${inspect(two)}'.`, msg);
  }
}

/**
 * Checks whether two values aren't equal.
 *
 * @param one:any       The first value.
 * @param two:any       The second value.
 * @param [msg]:string  The message if error.
 */
export function mustNotBeEqual(one, two, msg) {
  if (!assert.notEqual(one, two)) {
    throw new AssertionError(`'${inspect(one)}' must not be equal to '${inspect(two)}'.`, msg);
  }
}

/**
 * Checks whether a value matches a regular expression.
 *
 * @param value:any     The value to check.
 * @param re:RegExp     The regular expression to match.
 * @param [msg]:string  The assertion message.
 */
export function mustMatch(value, re, msg) {
  if (!assert.like(value, re)) {
    throw new AssertionError(`'${inspect(value)}' must match '${inspect(re)}'.`, msg);
  }
}

/**
 * Checks whether a value doesn't match a regular expression.
 *
 * @param value:any     The value to check.
 * @param re:RegExp     The regular expression to match.
 * @param [msg]:string  The assertion message.
 */
export function mustNotMatch(value, re, msg) {
  if (!assert.notLike(value, re)) {
    throw new AssertionError(`'${inspect(value)}' must not match '${inspect(re)}'.`, msg);
  }
}

/**
 * Checks whether two values are the same.
 *
 * @param one:any       The first value.
 * @param two:any       The second value.
 * @param [msg]:string  The message if error.
 */
export function mustBeSame(one, two, msg) {
  if (!assert.same(one, two)) {
    throw new AssertionError(`'${inspect(one)}' must be the same as '${inspect(two)}'.`, msg);
  }
}

/**
 * Checks whether two values aren't the same.
 *
 * @param one:any       The first value.
 * @param two:any       The second value.
 * @param [msg]:string  The message if error.
 */
export function mustNotBeSame(one, two, msg) {
  if (!assert.notSame(one, two)) {
    throw new AssertionError(`'${inspect(one)}' must not be the same as '${inspect(two)}'.`, msg);
  }
}

/**
 * Checks whether a value is within a range.
 *
 * @param value:any     The value.
 * @param left:number   The lowerbound inclusive.
 * @param right:number  The upperbound inclusive.
 * @param [msg]:string  The message if error.
 */
export function mustBeBetween(value, left, right, msg) {
  if (!assert.between(value, left, right)) {
    throw new AssertionError(`'${inspect(value)}' must be between '${inspect(left)}' and '${inspect(right)}'.`, msg);
  }
}

/**
 * Checks whether a value is not within a range.
 *
 * @param value:any     The value.
 * @param left:any      The lowerbound inclusive.
 * @param right:any     The upperbound inclusive.
 * @param [msg]:string  The message if error.
 */
export function mustNotBeBetween(value, left, right, msg) {
  if (!assert.notBetween(value, left, right)) {
    throw new AssertionError(`'${inspect(value)}' must not be between '${inspect(left)}' and '${inspect(right)}'.`, msg);
  }
}

/**
 * Checks whether a value is greater than another.
 *
 * @param one:any       The value.
 * @param two:any       The lowerbound exclusive.
 * @param [msg]:string  The message if error.
 */
export function mustBeGreaterThan(one, two, msg) {
  if (!assert.gt(one, two)) {
    throw new AssertionError(`'${inspect(one)}' must be greater than '${inspect(two)}'.`, msg);
  }
}

/**
 * Checks whether a value is not greater than another.
 *
 * @param one:any       The value.
 * @param two:any       The lowerbound exclusive.
 * @param [msg]:string  The message if error.
 */
export function mustNotBeGreaterThan(one, two, msg) {
  if (!assert.ngt(one, two)) {
    throw new AssertionError(`'${inspect(one)}' must not be greater than '${inspect(two)}'.`, msg);
  }
}

/**
 * Checks whether a value is less than another.
 *
 * @param one:any       The value.
 * @param two:any       The upperbound exclusive.
 * @param [msg]:string  The message if error.
 */
export function mustBeLessThan(one, two, msg) {
  if (!assert.lt(one, two)) {
    throw new AssertionError(`'${inspect(one)}' must be less than '${inspect(two)}'.`, msg);
  }
}

/**
 * Checks whether a value is not less than another.
 *
 * @param one:any       The value.
 * @param two:any       The upperbound exclusive.
 * @param [msg]:string  The message if error.
 */
export function mustNotBeLessThan(one, two, msg) {
  if (!assert.nlt(one, two)) {
    throw new AssertionError(`'${inspect(one)}' must not be less than '${inspect(two)}'.`, msg);
  }
}

/**
 * Checks whether a collection contains an item.
 *
 * @param col:any       The collection.
 * @param item:any      The item.
 * @param [msg]:string  The message if error.
 */
export function mustContain(col, item, msg) {
  if (!assert.contain(col, item)) {
    throw new AssertionError(`'${inspect(col)}' must contain '${inspect(item)}'.`, msg);
  }
}

/**
 * Checks whether a collection doesn't contain an item.
 *
 * @param col:any        The collection.
 * @param item:any      The item.
 * @param [msg]:string  The message if error.
 */
export function mustNotContain(col, item, msg) {
  if (!assert.notContain(col, item)) {
    throw new AssertionError(`'${inspect(col)}' must not contain '${inspect(item)}'.`, msg);
  }
}

/**
 * Checks whether a value is in a collection.
 *
 * @param item:any      The item.
 * @param col:any       The collection.
 * @param [msg]:string  The assertion message.
 */
export function mustBeInsideOf(item, col, msg) {
  if (!assert.insideOf(item, col)) {
    throw new AssertionError(`'${inspect(col)}' must contain '${inspect(item)}'.`, msg);
  }
}

/**
 * Checks whether a value is not in a collection.
 *
 * @param item:any      The item.
 * @param col:any       The collection.
 * @param [msg]:string  The assertion message.
 */
export function mustNotBeInsideOf(item, col, msg) {
  if (!assert.notInsideOf(item, col)) {
    throw new AssertionError(`'${inspect(col)}' must not contain '${inspect(item)}'.`, msg);
  }
}

/**
 * Checks whether an object has specified properties.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param prop:string   The property name.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param obj:any         The object to check.
 * @param props:string[]  The property name.
 * @param [msg]:string    The message if error.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param props:object  The properties: name: value.
 * @param [msg]:string  The message if error.
 */
export function mustHave(obj, props, msg) {
  if (!assert.have(obj, props)) {
    if (typeof(props) == "string") {
      throw new AssertionError(`'${inspect(obj)}' must have the '${props}' property.`, msg);
    } else {
      throw new AssertionError(`'${inspect(obj)}' must have the properties: '${inspect(props)}'.`, msg);
    }
  }
}

/**
 * Checks whether an object hasn't specified properties.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param prop: string  The property name.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param obj:any         The object to check.
 * @param props:string[]  The property names.
 * @param [msg]:string    The message if error.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param props:object  The property name.
 * @param [msg]:string  The message if error.
 */
export function mustNotHave(obj, props, msg) {
  if (!assert.notHave(obj, props)) {
    if (typeof(props) == "string") {
      throw new AssertionError(`'${inspect(obj)}' must not have the '${props}' property.`, msg);
    } else {
      throw new AssertionError(`'${inspect(obj)}' must not have the properties: '${inspect(props)}'.`, msg);
    }
  }
}

/**
 * Checks whether an object has any specified properties.
 *
 * @overload
 * @param obj:any         The object to check.
 * @param props:string[]  The property names.
 * @param [msg]:string    The message if error.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param props:Object  The properties.
 * @param [msg]:string  The message if error.
 */
export function mustHaveAny(obj, props, msg) {
  if (!assert.haveAny(obj, props)) {
    throw new AssertionError(`'${inspect(obj)}' must have at least property of '${inspect(props)}'.`, msg);
  }
}

/**
 * Checks whether all items of a list have the specified properties.
 *
 * @param list:object[]         The list to check.
 * @param props:string[]|object The properties to check.
 * @param [msg]:string          The assertion message.
 */
export function mustAllHave(list, props, msg) {
  if (!assert.allHave(list, props)) {
    if (typeof(props) == "string") {
      throw new AssertionError(`All items of '${inspect(list)}' must have the '${props}' property.`, msg);
    } else {
      throw new AssertionError(`All items of '${inspect(list)}' must have the properties: '${inspect(props)}'.`, msg);
    }
  }
}

/**
 * Checks whether all items of a list don't have the specified properties.
 *
 * @param list:object[]         The list to check.
 * @param props:string[]|object The properties to check.
 * @param msg:string            The assertion message.
 */
export function mustNotAllHave(list, props, msg) {
  if (!assert.notAllHave(list, props)) {
    if (typeof(props) == "string") {
      throw new AssertionError(`All items of '${inspect(list)}' must not have the '${props}' property.`, msg);
    } else {
      throw new AssertionError(`All items of '${inspect(list)}' must not have the properties: '${inspect(props)}'.`, msg);
    }
  }
}

/**
 * Checks whether a function throws an error.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 * @param args:any[]    The arguments to call with.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 * @param error:any     The error expected.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param fn:function   The function object to call and to check.
 * @param error:any     The error expected.
 * @param args:any[]    The arguments to call with.
 * @param [msg]:string  The message if error.
 */
export function mustRaise(fn, ...args) {
  let params, error, msg;

  //(1) arguments
  if (args.length == 1) {
    if (args[0] instanceof Array) params = args[0];
    else error = args[0];
  } else if (args.length == 2) {
    if (args[0] instanceof Array) [params, msg] = args;
    else if (args[1] instanceof Array) [error, params] = args;
    else [error, msg] = args;
  } else if (args.length > 2) {
    [error, params, msg] = args;
  }

  if (!params) params = [];

  //(2) check
  if (!assert.raise(fn, params, error)) {
    if (error) {
      if (typeof(error) == "string") {
        error = `'${inspect(fn)}' must raise exception with message: '${error}'.`;
      } else if (error instanceof RegExp) {
        error = `'${inspect(fn)}' must raise exception with message like '${error}'.`;
      } else if (error instanceof Function) {
        error = `'${inspect(fn)}' must raise exception of type: '${error.name}'.`;
      } else {
        error = `'${inspect(fn)}' must raise exception with properties: '${inspect(error)}'.`;
      }
    } else {
      error = `'${inspect(fn)}' must raise an error.`;
    }

    throw new AssertionError(error, msg);
  }
}

/**
 * Checks whether a function doesn't throw an error.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 * @param args:any[]    The arguments to call with.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 * @param error:any     The error expected.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param fn:function   The function object to call and to check.
 * @param error:any     The error expected.
 * @param args:any[]    The arguments to call with.
 * @param [msg]:string  The message if error.
 */
export function mustNotRaise(fn, ...args) {
  let params, error, msg;

  //(1) arguments
  if (args.length == 1) {
    if (args[0] instanceof Array) params = args[0];
    else error = args[0];
  } else if (args.length == 2) {
    if (args[0] instanceof Array) [params, msg] = args;
    else if (args[1] instanceof Array) [error, params] = args;
    else [error, msg] = args;
  } else if (args.length > 2) {
    [error, params, msg] = args;
  }

  if (!params) params = [];

  //(2) check
  if (!assert.notRaise(fn, params, error)) {
    if (error) {
      if (typeof(error) == "string") {
        error = `'${inspect(fn)}' must not raise exception with message: '${error}'.`;
      } else if (error instanceof RegExp) {
        error = `'${inspect(fn)}' must not raise exception with message like '${error}'.`;
      } else if (error instanceof Function) {
        error = `'${inspect(fn)}' must not raise exception of type: '${error.name}'.`;
      } else {
        error = `'${inspect(fn)}' must not raise exception with properties: '${inspect(error)}'.`;
      }
    } else {
      error = `'${inspect(fn)}' must not raise an error.`;
    }

    throw new AssertionError(error, msg);
  }
}

/**
 * Checks whether a value is instance of a given class.
 *
 * @overload
 * @param obj:any       The value to check.
 * @param clss:class    The class object.
 * @param [msg]:string  The assertion message.
 *
 * @overload
 * @param obj:any        The value to check.
 * @param clss:string    The class name.
 * @param [msg]:string  The assertion message.
 */
export function mustBeInstanceOf(obj, clss, msg) {
  if (!assert.instanceOf(obj, clss)) {
    if (typeof(clss) != "string") {
      if (clss === String) clss = "String";
      else if (clss === Number) clss = "Number";
      else if (clss === Boolean) clss = "Boolean";
      else if (clss instanceof Function) clss = clss.name;
      else clss = "unknown";
    }

    throw new AssertionError(`'${inspect(obj)}' must be instance of '${clss}'.`, msg);
  }
}

/**
 * Checks whether a value is not an instance of a given class.
 *
 * @overload
 * @param obj:any       The value to check.
 * @param clss:class    The class object.
 * @param [msg]:string  The assertion message.
 *
 * @overload
 * @param obj:any        The value to check.
 * @param clss:string    The class name.
 * @param [msg]:string  The assertion message.
 */
export function mustNotBeInstanceOf(obj, clss, msg) {
  if (!assert.notInstanceOf(obj, clss)) {
    if (typeof(clss) != "string") {
      if (clss === String) clss = "String";
      else if (clss === Number) clss = "Number";
      else if (clss === Boolean) clss = "Boolean";
      else if (clss instanceof Function) clss = clss.name;
      else clss = "unknown";
    }

    throw new AssertionError(`'${inspect(obj)}' must not be instance of '${clss}'.`, msg);
  }
}
