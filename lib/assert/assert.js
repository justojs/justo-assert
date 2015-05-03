//imports
const assert = require("assert");
const util = require("util");
const deepEqual = require("deep-equal");

const uf = util.format;

function f(obj) {
  var res;

  //(1) format
  switch (typeof(obj)) {
    case "undefined": res = "undefined"; break;
    case "boolean": res = obj.toString(); break;
    case "string": res = obj; break;
    case "number": res = obj.toString(); break;
    case "function": res = "function" + (obj.name ? " " + obj.name : ""); break;
    default: res = JSON.stringify(obj); break;
  }

  //(2) return
  return res;
}

/**
 * Checks whether two values are equal.
 *
 * @param actual:any    The first value.
 * @param expected:any  The second value.
 * @param [msg]:string  The message if error.
 */
export function mustBeEqual(actual, expected, msg) {
  if (!deepEqual(actual, expected)) {
    throw new AssertionError(uf("'%s' must be equal to '%s'.", f(actual), f(expected)), msg);
  }
}

/**
 * Checks whether two values aren't equal.
 *
 * @param actual:any    The first value.
 * @param expected:any  The second value.
 * @param [msg]:string  The message if error.
 */
export function mustNotBeEqual(actual, expected, msg) {
  if (deepEqual(actual, expected)) {
    throw new AssertionError(uf("'%s' must not be equal to '%s'.", f(actual), f(expected)), msg);
  }
}

/**
 * Checks whether two values are the same.
 *
 * @param actual:any    The first value.
 * @param expected:any  The second value.
 * @param [msg]:string  The message if error.
 */
export function mustBeSame(actual, expected, msg) {
  if (actual !== expected) {
    throw new AssertionError(uf("'%s' must be the same as '%s'.", f(actual), f(expected)), msg);
  }
}

/**
 * Checks whether two values aren't the same.
 *
 * @param actual:any    The first value.
 * @param expected:any  The second value.
 * @param [msg]:string  The message if error.
 */
export function mustNotBeSame(actual, expected, msg) {
  if (actual === expected) {
    throw new AssertionError(uf("'%s' must not be the same as '%s'.", f(actual), f(expected)), msg);
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
  if (!(value >= left && value <= right)) {
    throw new AssertionError(uf("'%s' must be between '%s' and '%s'.", f(value), f(left), f(right)), msg);
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
  if (value >= left && value <= right) {
    throw new AssertionError(uf("'%s' must not be between '%s' and '%s'.", f(value), f(left), f(right)), msg);
  }
}

/**
 * Checks whether a value is greater than another.
 *
 * @param actual:any    The value.
 * @param expected:any  The lowerbound exclusive.
 * @param [msg]:string  The message if error.
 */
export function mustBeGreaterThan(actual, expected, msg) {
  /* jshint ignore:start */
  if (!(actual > expected)) {
    throw new AssertionError(uf("'%s' must be greater than '%s'.", f(actual), f(expected)), msg);
  }
  /* jshint ignore:end */
}

/**
 * Checks whether a value is not greater than another.
 *
 * @param actual:any    The value.
 * @param expected:any  The lowerbound exclusive.
 * @param [msg]:string  The message if error.
 */
export function mustNotBeGreaterThan(actual, expected, msg) {
  if (actual > expected) {
    throw new AssertionError(uf("'%s' must not be greater than '%s'.", f(actual), f(expected)), msg);
  }
}

/**
 * Checks whether a value is less than another.
 *
 * @param actual:any    The value.
 * @param expected:any  The upperbound exclusive.
 * @param [msg]:string  The message if error.
 */
export function mustBeLessThan(actual, expected, msg) {
  /* jshint ignore:start */
  if (!(actual < expected)) {
    throw new AssertionError(uf("'%s' must be less than '%s'.", f(actual), f(expected)), msg);
  }
  /* jshint ignore:end */
}

/**
 * Checks whether a value is not less than another.
 *
 * @param actual:any    The value.
 * @param expected:any  The upperbound exclusive.
 * @param [msg]:string  The message if error.
 */
export function mustNotBeLessThan(actual, expected, msg) {
  if (actual < expected) {
    throw new AssertionError(uf("'%s' must not be less than '%s'.", f(actual), f(expected)), msg);
  }
}

/**
 * Checks whether a collection contains an item.
 *
 * @param col:any        The collection.
 * @param item:any      The item.
 * @param [msg]:string  The message if error.
 */
export function mustContain(col, item, msg) {
  if (!((typeof(col) == "string" || col instanceof Array) && col.indexOf(item) >= 0)) {
    throw new AssertionError(uf("'%s' must contain '%s'.", f(col), f(item)), msg);
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
  if ((typeof(col) == "string" || col instanceof Array) && col.indexOf(item) >= 0) {
    throw new AssertionError(uf("'%s' must not contain '%s'.", f(col), f(item)), msg);
  }
}

/**
 * Checks whether a value is in a collection.
 *
 * @param item:any      The item.
 * @param col:any       The collection.
 * @param [msg]:string  The assertion message.
 */
export function mustBeIn(item, col, msg) {
  if (typeof(item) != "object") {
    mustContain(col, item, msg);
  } else {
    if (col instanceof Array) {
      for (let i = 0; i < col.length; ++i) {
        if (deepEqual(item, col[i])) {
          return;
        }
      }
    }

    throw new AssertionError(uf("'%s' must contain '%s'.", f(col), f(item)), msg);
  }
}

/**
 * Checks whether a value is not in a collection.
 *
 * @param item:any      The item.
 * @param col:any       The collection.
 * @param [msg]:string  The assertion message.
 */
export function mustNotBeIn(item, col, msg) {
  if (typeof(item) != "object") {
    return mustNotContain(col, item, msg);
  } else {
    if (col instanceof Array) {
      for (let i = 0; i < col.length; ++i) {
        if (deepEqual(item, col[i])) {
          throw new AssertionError(uf("'%s' must not contain '%s'.", f(col), f(item)), msg);
        }
      }
    }
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
  if (typeof(props) == "string") {
    if (!obj.hasOwnProperty(props)) {
      throw new AssertionError(uf("'%s' must have property '%s'.", f(obj), f(props)), msg);
    }
  } else if (props instanceof Array) {
    for (let i = 0; i < props.length; ++i) {
      let name = props[i];

      if (!obj.hasOwnProperty(name)) {
        throw new AssertionError(uf("'%s' must have property '%s'.", f(obj), f(name)), msg);
      }
    }
  } else {
    for (let i = 0, keys = Object.keys(props); i < keys.length; ++i) {
      let name = keys[i];
      let value = props[name];

      if (!obj.hasOwnProperty(name) || !deepEqual(obj[name], value)) {
        throw new AssertionError(uf("'%s' must have property '%s' = '%s'.", f(obj), f(name), f(value)), msg);
      }
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
  if (typeof(props) == "string") {
    if (obj.hasOwnProperty(props)) {
      throw new AssertionError(uf("'%s' must not have property '%s'.", f(obj), f(props)), msg);
    }
  } else if (props instanceof Array) {
    for (let i = 0; i < props.length; ++i) {
      let name = props[i];

      if (obj.hasOwnProperty(name)) {
        throw new AssertionError(uf("'%s' must not have property '%s'.", f(obj), f(props)), msg);
      }
    }
  } else {
    for (let i = 0, keys = Object.keys(props); i < keys.length; ++i) {
      let name = keys[i];
      let value = props[name];

      if (obj.hasOwnProperty(name) && deepEqual(obj[name], value)) {
        throw new AssertionError(uf("'%s' must not have property '%s' = '%s'.", f(obj), f(name), f(value)), msg);
      }
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
  var res;

  //(1) check
  res = false;

  if (props instanceof Array) {
    if (props.length > 0) {
      for (let i = 0; i < props.length; ++i) {
        if (obj.hasOwnProperty(props[i])) {
          res = true;
          break;
        }
      }
    }
  } else {
    for (let name in props) {
      if (obj.hasOwnProperty(name) && deepEqual(obj[name], props[name])) {
        res = true;
        break;
      }
    }
  }

  //(2) return
  if (!res) {
    throw new AssertionError(uf("'%s' must have any property of '%s'.", f(obj), f(props)), msg);
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
  var thrown, error, params, msg;

  //(1) pre: arguments
  if (!(fn instanceof Function)) {
    throw new Error(uf("'%s' is not a callable object.", f(fn)));
  }

  if (args.length == 1) {
    if (args[0] instanceof Array) params = args[0];
    else error = args[0];
  } else if (args.length == 2) {
    if (args[0] instanceof Array) {
      [params, msg] = args;
    } else {
      error = args[0];

      if (args[1] instanceof Array) params = args[1];
      else msg = args[1];
    }
  } else {
    [error, params, msg] = args;
  }

  if (!params) params = [];

  //(2) check
  try {
    fn.apply(fn, params);
  } catch(e) {
    thrown = e;
  }

  if (!thrown) {
    throw new AssertionError(uf("'%s' expected to throw an error.", f(fn)), msg);
  } else {
    if (error) {
      if (typeof(error) == "string") {
        if (thrown.message != error) {
          throw new AssertionError(uf("'%s' expected to throw error with message '%s'.", f(fn), error), msg);
        }
      } else if (error instanceof Function) {
        if (!(thrown instanceof error)) {
          throw new AssertionError(uf("'%s' expected to throw error instance of '%s'.", f(fn), error.name), msg);
        }
      } else {
        if (!deepEqual(thrown, error)) {
          throw new AssertionError(uf("'%s' expected to throw error object '%s'.", f(fn), f(error)), msg);
        }
      }
    }
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
  var thrown, error, params, msg;

  //(1) pre: arguments
  if (!(fn instanceof Function)) {
    throw new Error(uf("'%s' is not a callable object.", f(fn)));
  }

  if (args.length == 1) {
    if (args[0] instanceof Array) params = args[0];
    else error = args[0];
  } else if (args.length == 2) {
    if (args[0] instanceof Array) {
      [params, msg] = args;
    } else {
      error = args[0];

      if (args[1] instanceof Array) params = args[1];
      else msg = args[1];
    }
  } else {
    [error, params, msg] = args;
  }

  if (!params) params = [];

  //(2) check
  try {
    fn.apply(fn, params);
  } catch(e) {
    thrown = e;
  }

  if (thrown) {
    if (!error) {
      throw new AssertionError(uf("'%s' must not throw error.", f(fn)), msg);
    } else {
      if (typeof(error) == "string") {
        if (thrown.message == error) {
          throw new AssertionError(uf("'%s' must not throw error with message '%s'.", f(fn), thrown.message), msg);
        }
      } else if (error instanceof Function) {
        if (thrown instanceof error) {
          throw new AssertionError(uf("'%s' must not throw error instance of '%s'.", f(fn), error.name), msg);
        }
      } else {
        try {
          assert.notDeepEqual(thrown, error);
        } catch (e) {
          throw new AssertionError(uf("'%s' must not throw error equal to '%s'.", f(fn), f(error)), msg);
        }
      }
    }
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
  var err;

  //(1) check
  if (typeof(clss) == "string") {
    err = (obj.constructor.name != clss);
    clss = {name: clss};
  } else {
    if (clss === String) err = (typeof(obj) != "string");
    else if (clss === Number) err = (typeof(obj) != "number");
    else if (clss === Boolean) err = (typeof(obj) != "boolean");
    else  err = !(obj instanceof clss);
  }

  //(2) throw error if needed
  if (err) {
    throw new AssertionError(uf("'%s' must be instance of '%s'.", f(obj), clss.name), msg);
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
  var err;

  //(1) check
  if (typeof(clss) == "string") {
    err = (obj.constructor.name == clss);
    clss = {name: clss};
  } else {
    if (clss === String) err = (typeof(obj) == "string");
    else if (clss === Number) err = (typeof(obj) == "number");
    else if (clss === Boolean) err = (typeof(obj) == "boolean");
    else err = (obj instanceof clss);
  }

  //(2) throw error if needed
  if (err) {
    throw new AssertionError(uf("'%s' must not be instance of '%s'.", f(obj), clss.name), msg);
  }
}
